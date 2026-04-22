import { promises as fs } from 'node:fs';
import path from 'node:path';

const PACKAGE_NAME = '@duckduckgo/design-tokens';
const SERP_BUILD_DIRECTORY = path.resolve('build/serp');
const LEGACY_OUTPUT_FILENAME = 'design-tokens-serp.d.ts';
const REPOSITORY_URL = 'https://github.com/duckduckgo/design-tokens';
const PACKAGE_JSON_PATH = new URL('../package.json', import.meta.url);
const TOKEN_KEY_PATTERN = /^\s*['"](--[^'"]+)['"]\s*:/gm;
const TOKEN_VALUE_PATTERN =
    /^\s*['"]--[^'"]+['"]:\s*((?:'[^'\\]*(?:\\.[^'\\]*)*'|"[^"\\]*(?:\\.[^"\\]*)*"|`[^`\\]*(?:\\.[^`\\]*)*`|-?(?:\d+|\d+\.\d+|\.\d+)))\s*,\s*$/gm;

function getHeaderLines(version) {
    const date = new Date();
    const formattedDate = date.toLocaleString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    });

    return [
        '// Do not edit directly, this file was auto-generated.',
        `// Source: ${REPOSITORY_URL}`,
        `// Version: ${version}`,
        `// Last updated: ${formattedDate}`,
    ];
}

async function getPackageVersion() {
    const packageJsonContents = await fs.readFile(PACKAGE_JSON_PATH, 'utf8');
    const packageJson = JSON.parse(packageJsonContents);
    return packageJson.version;
}

function getExportName(fileContents) {
    const constMatch = fileContents.match(/const\s+([A-Za-z_$][\w$]*)\s*=\s*\{/);
    if (constMatch) {
        return constMatch[1];
    }

    const defaultExportMatch = fileContents.match(/export\s+default\s+([A-Za-z_$][\w$]*)\s*;?/);
    if (defaultExportMatch) {
        return defaultExportMatch[1];
    }

    return null;
}

function getTokenKeys(fileContents) {
    return [...new Set([...fileContents.matchAll(TOKEN_KEY_PATTERN)].map((match) => match[1]))];
}

function getTokenValues(fileContents) {
    return [...new Set([...fileContents.matchAll(TOKEN_VALUE_PATTERN)].map((match) => match[1].trim()))];
}

function toPascalCase(value) {
    const normalizedValue = value.replace(/([a-z0-9])([A-Z])/g, '$1 $2');
    const segments = normalizedValue.match(/[A-Za-z0-9]+/g) ?? [];
    const pascalCaseValue = segments.map((segment) => segment[0].toUpperCase() + segment.slice(1)).join('');
    return pascalCaseValue || 'DesignToken';
}

function getKeyTypeName(exportName) {
    const pascalCaseName = toPascalCase(exportName);
    const normalizedName = exportName.startsWith('ds') ? pascalCaseName.replace(/^Ds/, 'DS') : pascalCaseName;
    return `${normalizedName}Keys`;
}

function getValueTypeName(exportName) {
    const pascalCaseName = toPascalCase(exportName);
    const normalizedName = exportName.startsWith('ds') ? pascalCaseName.replace(/^Ds/, 'DS') : pascalCaseName;
    return `${normalizedName}Values`;
}

function escapeTypeLiteral(value) {
    return value.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

function isNumberLiteral(value) {
    return /^-?(?:\d+|\d+\.\d+|\.\d+)$/.test(value);
}

function isStringLiteral(value) {
    const quote = value[0];
    return (quote === "'" || quote === '"' || quote === '`') && value[value.length - 1] === quote;
}

function toValueTypeLiteral(value) {
    if (isNumberLiteral(value)) {
        return value;
    }

    if (!isStringLiteral(value)) {
        return null;
    }

    const unquotedValue = value.slice(1, -1);
    return `'${escapeTypeLiteral(unquotedValue)}'`;
}

function inferValueType(tokenValues) {
    if (tokenValues.length === 0) {
        return { kind: 'simple', expression: 'string' };
    }

    const literalValues = [];

    for (const tokenValue of tokenValues) {
        const valueTypeLiteral = toValueTypeLiteral(tokenValue);
        if (!valueTypeLiteral) {
            const hasNumberValue = tokenValues.some((value) => isNumberLiteral(value));
            const hasStringValue = tokenValues.some((value) => isStringLiteral(value));

            if (hasNumberValue && hasStringValue) {
                return { kind: 'simple', expression: 'string | number' };
            }

            if (hasNumberValue) {
                return { kind: 'simple', expression: 'number' };
            }

            return { kind: 'simple', expression: 'string' };
        }

        if (!literalValues.includes(valueTypeLiteral)) {
            literalValues.push(valueTypeLiteral);
        }
    }

    return { kind: 'union', members: literalValues };
}

function buildKeyTypeDeclaration(typeName, tokenKeys) {
    if (tokenKeys.length === 0) {
        return `    export type ${typeName} = \`--\${string}\`;`;
    }

    const unionLines = tokenKeys.map((tokenKey) => `        | '${escapeTypeLiteral(tokenKey)}'`);
    unionLines[unionLines.length - 1] = `${unionLines[unionLines.length - 1]};`;

    return [`    export type ${typeName} =`, ...unionLines].join('\n');
}

function buildValueTypeDeclaration(typeName, valueType) {
    if (valueType.kind === 'simple' || valueType.members.length <= 1) {
        const typeExpression = valueType.kind === 'simple' ? valueType.expression : valueType.members[0];
        return `    export type ${typeName} = ${typeExpression};`;
    }

    const unionLines = valueType.members.map((member) => `        | ${member}`);
    unionLines[unionLines.length - 1] = `${unionLines[unionLines.length - 1]};`;

    return [`    export type ${typeName} =`, ...unionLines].join('\n');
}

function buildModuleDeclaration(moduleName, exportName, tokenKeys, valueType) {
    const keyTypeName = getKeyTypeName(exportName);
    const valueTypeName = getValueTypeName(exportName);

    return [
        `declare module '${moduleName}' {`,
        buildKeyTypeDeclaration(keyTypeName, tokenKeys),
        buildValueTypeDeclaration(valueTypeName, valueType),
        `    const ${exportName}: Record<${keyTypeName}, ${valueTypeName}>;`,
        `    export default ${exportName};`,
        '}',
    ].join('\n');
}

async function generateSerpTypes() {
    const packageVersion = await getPackageVersion();
    let directoryEntries = [];

    try {
        directoryEntries = await fs.readdir(SERP_BUILD_DIRECTORY, { withFileTypes: true });
    } catch {
        throw new Error(`Missing directory: "${SERP_BUILD_DIRECTORY}". Run token build first.`);
    }

    const jsFiles = directoryEntries
        .filter((entry) => entry.isFile() && entry.name.endsWith('.js'))
        .map((entry) => entry.name)
        .sort((left, right) => left.localeCompare(right));

    const legacyOutputPath = path.join(SERP_BUILD_DIRECTORY, LEGACY_OUTPUT_FILENAME);
    await fs.rm(legacyOutputPath, { force: true });

    let generatedFileCount = 0;

    for (const jsFile of jsFiles) {
        const modulePathWithoutExtension = jsFile.replace(/\.js$/, '');
        const absoluteFilePath = path.join(SERP_BUILD_DIRECTORY, jsFile);
        const moduleName = `${PACKAGE_NAME}/build/serp/${modulePathWithoutExtension}`;
        const fileContents = await fs.readFile(absoluteFilePath, 'utf8');
        const exportName = getExportName(fileContents);

        if (!exportName) {
            continue;
        }

        const tokenKeys = getTokenKeys(fileContents);
        const tokenValues = getTokenValues(fileContents);
        const valueType = inferValueType(tokenValues);
        const declaration = buildModuleDeclaration(moduleName, exportName, tokenKeys, valueType);
        const outputContents = [...getHeaderLines(packageVersion), '', declaration, ''].join('\n');
        const outputPath = path.join(SERP_BUILD_DIRECTORY, `${modulePathWithoutExtension}.d.ts`);
        await fs.writeFile(outputPath, outputContents, 'utf8');
        generatedFileCount += 1;
    }

    console.log(`Generated ${generatedFileCount} declaration files from ${jsFiles.length} JS files.`);
}

generateSerpTypes().catch((error) => {
    console.error(error instanceof Error ? error.message : String(error));
    process.exitCode = 1;
});
