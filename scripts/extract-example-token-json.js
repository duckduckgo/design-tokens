#!/usr/bin/env node

import { mkdir, readFile, readdir, writeFile } from 'fs/promises';
import { basename, join, resolve } from 'path';
import { Command } from 'commander';

/**
 * @typedef {null | boolean | number | string | JsonValue[] | JsonObject} JsonValue
 * @typedef {{ [key: string]: JsonValue }} JsonObject
 * @typedef {{ value: JsonValue, codeSyntax?: JsonValue }} OutputToken
 */

/**
 * @param {JsonValue} value
 * @returns {value is JsonObject}
 */
function isObject(value) {
    return typeof value === 'object' && value !== null && !Array.isArray(value);
}

/**
 * @param {JsonObject} value
 * @returns {boolean}
 */
function hasTokenValue(value) {
    return Object.prototype.hasOwnProperty.call(value, '$value');
}

/**
 * @param {JsonObject} value
 * @returns {JsonValue | undefined}
 */
function getWebCodeSyntax(value) {
    const extensions = value.$extensions;

    if (!isObject(extensions)) {
        return undefined;
    }

    const codeSyntax = extensions['com.figma.codeSyntax'];

    if (!isObject(codeSyntax)) {
        return undefined;
    }

    return codeSyntax.WEB;
}

/**
 * @param {JsonValue} value
 * @returns {JsonValue}
 */
function roundAlpha(value) {
    if (typeof value !== 'number') {
        return value;
    }

    return Math.round(value * 100) / 100;
}

/**
 * @param {JsonValue} value
 * @returns {JsonValue | undefined}
 */
function getOutputValue(value) {
    if (!isObject(value)) {
        return value;
    }

    if (Object.prototype.hasOwnProperty.call(value, 'alpha') && Object.prototype.hasOwnProperty.call(value, 'hex')) {
        return {
            alpha: roundAlpha(value.alpha),
            hex: value.hex,
        };
    }

    return value;
}

/**
 * @param {JsonObject} token
 * @returns {OutputToken}
 */
function buildOutputToken(token) {
    /** @type {OutputToken} */
    const output = {
        value: getOutputValue(token.$value),
    };
    const webCodeSyntax = getWebCodeSyntax(token);

    if (webCodeSyntax !== undefined) {
        output.codeSyntax = webCodeSyntax;
    }

    return output;
}

/**
 * @param {JsonValue} value
 * @param {string[]} path
 * @param {JsonObject} output
 */
function flattenTokenGroup(value, path, output) {
    if (!isObject(value)) {
        return;
    }

    if (hasTokenValue(value)) {
        if (path.length > 0) {
            output[path.join('.')] = buildOutputToken(value);
        }

        return;
    }

    for (const [key, childValue] of Object.entries(value)) {
        flattenTokenGroup(childValue, [...path, key], output);
    }
}

/**
 * @param {JsonValue} value
 * @returns {JsonValue | undefined}
 */
function extractTokenData(value) {
    if (!isObject(value)) {
        return undefined;
    }

    /** @type {JsonObject} */
    const output = {};

    for (const mode of ['Light', 'Dark']) {
        const modeValue = value[mode];

        if (!isObject(modeValue)) {
            continue;
        }

        /** @type {JsonObject} */
        const flattenedMode = {};
        flattenTokenGroup(modeValue, [], flattenedMode);

        if (Object.keys(flattenedMode).length > 0) {
            output[mode] = flattenedMode;
        }
    }

    return Object.keys(output).length > 0 ? output : undefined;
}

/**
 * @param {string} path
 * @returns {Promise<JsonValue>}
 */
async function readJsonFile(path) {
    const fileContent = await readFile(path, 'utf-8');

    try {
        return JSON.parse(fileContent);
    } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        throw new Error(`Failed to parse JSON from "${path}": ${message}`);
    }
}

/**
 * @param {string} inputPath
 * @param {string} outputPath
 */
async function processTokenFile(inputPath, outputPath) {
    const inputJson = await readJsonFile(inputPath);
    const outputJson = extractTokenData(inputJson);

    if (outputJson === undefined) {
        throw new Error(`No token values found in "${inputPath}"`);
    }

    await writeFile(outputPath, `${JSON.stringify(outputJson, null, 2)}\n`, 'utf-8');
}

async function main() {
    const program = new Command();

    program
        .name('extract-example-token-json')
        .description('Extract flattened Light/Dark token JSON with value and codeSyntax from example Figma token JSON files')
        .option('-i, --input-dir <path>', 'Directory containing *.tokens.json files', 'examples')
        .option('-o, --output-dir <path>', 'Directory for extracted JSON output', 'examples/extracted')
        .parse();

    const { inputDir, outputDir } = program.opts();
    const inputDirectory = resolve(process.cwd(), inputDir);
    const outputDirectory = resolve(process.cwd(), outputDir);
    const directoryEntries = await readdir(inputDirectory, { withFileTypes: true });
    const tokenFiles = directoryEntries
        .filter((entry) => entry.isFile() && entry.name.endsWith('.tokens.json'))
        .map((entry) => entry.name)
        .sort();

    if (tokenFiles.length === 0) {
        throw new Error(`No *.tokens.json files found in "${inputDirectory}"`);
    }

    await mkdir(outputDirectory, { recursive: true });

    for (const fileName of tokenFiles) {
        const inputPath = join(inputDirectory, fileName);
        const outputPath = join(outputDirectory, basename(fileName));

        await processTokenFile(inputPath, outputPath);
        console.log(`Wrote ${outputPath}`);
    }
}

main().catch((error) => {
    const message = error instanceof Error ? error.message : String(error);
    console.error(`Error: ${message}`);
    process.exit(1);
});
