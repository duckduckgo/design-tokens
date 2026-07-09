#!/usr/bin/env node

import { mkdir, readFile, writeFile } from 'fs/promises';
import { dirname, resolve } from 'path';
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
function extractColorTokens(value, path, output) {
    if (!isObject(value)) {
        return;
    }

    if (hasTokenValue(value)) {
        if (path.length < 2) {
            return;
        }

        const [firstKey, secondKey, ...remainingPath] = path;

        if (!isObject(output[firstKey])) {
            output[firstKey] = {};
        }

        const firstLevelOutput = output[firstKey];

        if (!isObject(firstLevelOutput)) {
            return;
        }

        if (remainingPath.length === 0) {
            firstLevelOutput[secondKey] = buildOutputToken(value);
            return;
        }

        if (!isObject(firstLevelOutput[secondKey])) {
            firstLevelOutput[secondKey] = {};
        }

        const secondLevelOutput = firstLevelOutput[secondKey];

        if (isObject(secondLevelOutput)) {
            secondLevelOutput[remainingPath.join('.')] = buildOutputToken(value);
        }

        return;
    }

    for (const [key, childValue] of Object.entries(value)) {
        extractColorTokens(childValue, [...path, key], output);
    }
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
async function processColorFile(inputPath, outputPath) {
    const inputJson = await readJsonFile(inputPath);

    /** @type {JsonObject} */
    const outputJson = {};
    extractColorTokens(inputJson, [], outputJson);

    if (Object.keys(outputJson).length === 0) {
        throw new Error(`No color token values found in "${inputPath}"`);
    }

    await mkdir(dirname(outputPath), { recursive: true });
    await writeFile(outputPath, `${JSON.stringify(outputJson, null, 2)}\n`, 'utf-8');
}

async function main() {
    const program = new Command();

    program
        .name('extract-figma-color-json')
        .description('Extract Figma color JSON preserving the first two child keys with value and codeSyntax')
        .option('-i, --input <path>', 'Path to Figma color JSON file', 'colorsfromfigma/colors.json')
        .option('-o, --output <path>', 'Path for extracted JSON output', 'colorsfromfigma/extracted/colors.json')
        .parse();

    const { input, output } = program.opts();
    const inputPath = resolve(process.cwd(), input);
    const outputPath = resolve(process.cwd(), output);

    await processColorFile(inputPath, outputPath);
    console.log(`Wrote ${outputPath}`);
}

main().catch((error) => {
    const message = error instanceof Error ? error.message : String(error);
    console.error(`Error: ${message}`);
    process.exit(1);
});
