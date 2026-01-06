#!/usr/bin/env node

import { readFile, writeFile, mkdir } from 'fs/promises';
import { resolve, dirname } from 'path';
import * as prettier from 'prettier';
import { Command } from 'commander';
import { camelCase, words } from 'es-toolkit';
import { set } from 'es-toolkit/compat';

interface FigmaTheme {
    [variableName: string]: string; // e.g., "DarkAccentAltContentPrimary": "#ccdaff"
}

interface FigmaExport {
    [themeName: string]: FigmaTheme; // e.g., "Default", "CoolGray"
}

interface TokenValue {
    $value: string;
}

interface NestedTokens {
    [key: string]: TokenValue | NestedTokens;
}

interface CLIOptions {
    input: string;
    output: string;
}

/**
 * Process all themes and modes to build complete token structure
 */
function processFigmaExport(figmaExport: FigmaExport): NestedTokens {
    const result: NestedTokens = {};

    // Process each theme (Default, CoolGray, etc.)
    for (const themeName of Object.keys(figmaExport)) {
        const theme = figmaExport[themeName];

        // Process each variable in the theme
        for (const variableName of Object.keys(theme)) {
            // Variable names are prefixed with mode (e.g., "DarkAccentPrimary", "LightAccentPrimary")
            let mode: 'light' | 'dark';
            let nameWithoutMode: string;

            if (variableName.startsWith('Dark')) {
                mode = 'dark';
                nameWithoutMode = variableName.substring('Dark'.length);
            } else if (variableName.startsWith('Light')) {
                mode = 'light';
                nameWithoutMode = variableName.substring('Light'.length);
            } else {
                console.warn(`Warning: Variable "${variableName}" doesn't start with "Dark" or "Light"`);
                continue;
            }

            // Split the remaining name into parts (e.g., "AccentPrimary" -> ["accent", "primary"])
            const parts = words(nameWithoutMode).map((word) => word.toLowerCase());

            // Set the value
            const value = theme[variableName];
            const path = [camelCase(themeName), mode, ...parts];
            set(result, path, { $value: value });
        }
    }

    return result;
}

/**
 * Convert tokens object to formatted TypeScript string
 */
async function formatOutput(tokens: NestedTokens): Promise<string> {
    // Add prefix and $type
    const nestedTokens = {
        $type: 'color',
        'color-theme': {
            ...tokens,
        },
    };

    // Convert object to JSON
    const json = JSON.stringify(nestedTokens, null, 4);

    // Build the TypeScript file
    let output = `
/**
 * This file was automatically generated from a Figma theme export using scripts/convert-figma-theme-export-to-tokens.ts.
 */

import { DesignToken } from 'style-dictionary/types';

const theme: DesignToken = ${json};

export default theme;
`.trim();

    // Format with Prettier using project's config
    output = await prettier.format(output, {
        parser: 'typescript',
        singleQuote: true,
        printWidth: 140,
        tabWidth: 4,
    });

    return output;
}

async function main() {
    const program = new Command();

    program
        .name('convert-figma-theme-export-to-tokens')
        .description('Convert Figma theme variable exports to Style Dictionary token files')
        .requiredOption('-i, --input <path>', 'Path to Figma theme export JSON file')
        .requiredOption('-o, --output <path>', 'Path to output TypeScript file')
        .parse();

    const { input, output } = program.opts<CLIOptions>();

    try {
        // Read and parse input JSON
        const inputPath = resolve(process.cwd(), input);
        const outputPath = resolve(process.cwd(), output);

        let inputContent: string;
        try {
            inputContent = await readFile(inputPath, 'utf-8');
        } catch (error: any) {
            throw new Error(`Failed to read input file "${inputPath}": ${error.message}`);
        }

        let figmaExport: FigmaExport;
        try {
            figmaExport = JSON.parse(inputContent);
        } catch (error: any) {
            throw new Error(`Failed to parse JSON from "${inputPath}": ${error.message}`);
        }

        // Validate structure
        if (typeof figmaExport !== 'object' || figmaExport === null) {
            throw new Error('Input JSON must be an object with theme names as keys');
        }

        const themeNames = Object.keys(figmaExport);
        if (themeNames.length === 0) {
            throw new Error('Input JSON contains no themes');
        }

        // Process and transform tokens
        const tokens = processFigmaExport(figmaExport);

        // Format output as TypeScript
        const outputContent = await formatOutput(tokens);

        // Ensure output directory exists
        const outputDir = dirname(outputPath);
        try {
            await mkdir(outputDir, { recursive: true });
        } catch (error: any) {
            throw new Error(`Failed to create output directory "${outputDir}": ${error.message}`);
        }

        // Write to output file
        try {
            await writeFile(outputPath, outputContent, 'utf-8');
        } catch (error: any) {
            throw new Error(`Failed to write output file "${outputPath}": ${error.message}`);
        }

        console.log(`✓ Converted ${input} → ${output}`);
    } catch (error: any) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
}

main();
