import { promises as fs } from 'node:fs';
import path from 'node:path';

const PACKAGE_NAME = '@duckduckgo/design-tokens';
const DUCKAI_BUILD_DIRECTORY = path.resolve('build/duckai');
const LEGACY_OUTPUT_FILENAME = 'extra-colors.ts';
const REPOSITORY_URL = 'https://github.com/duckduckgo/design-tokens';
const PACKAGE_JSON_PATH = new URL('../package.json', import.meta.url);

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

function inferValueType(fileContents) {
    const valueMatches = [...fileContents.matchAll(/^\s*['"]--[^'"]+['"]:\s*([^,]+),/gm)].map((match) => match[1].trim());
    if (valueMatches.length === 0) {
        return 'string';
    }

    const hasNumberValue = valueMatches.some((value) => /^-?(?:\d+|\d+\.\d+|\.\d+)$/.test(value));
    const hasStringValue = valueMatches.some((value) => /^['"`]/.test(value));

    if (hasNumberValue && hasStringValue) {
        return 'string | number';
    }

    if (hasNumberValue) {
        return 'number';
    }

    return 'string';
}

function buildModuleDeclaration(moduleName, exportName, valueType) {
    return [
        `declare module '${moduleName}' {`,
        `    const ${exportName}: Record<\`--\${string}\`, ${valueType}>;`,
        `    export default ${exportName};`,
        '}',
    ].join('\n');
}

async function generateDuckaiTypes() {
    const packageVersion = await getPackageVersion();
    let directoryEntries = [];

    try {
        directoryEntries = await fs.readdir(DUCKAI_BUILD_DIRECTORY, { withFileTypes: true });
    } catch {
        throw new Error(`Missing directory: "${DUCKAI_BUILD_DIRECTORY}". Run token build first.`);
    }

    const jsFiles = directoryEntries
        .filter((entry) => entry.isFile() && entry.name.endsWith('.js'))
        .map((entry) => entry.name)
        .sort((left, right) => left.localeCompare(right));

    const legacyOutputPath = path.join(DUCKAI_BUILD_DIRECTORY, LEGACY_OUTPUT_FILENAME);
    await fs.rm(legacyOutputPath, { force: true });

    let generatedFileCount = 0;

    for (const jsFile of jsFiles) {
        const modulePathWithoutExtension = jsFile.replace(/\.js$/, '');
        const absoluteFilePath = path.join(DUCKAI_BUILD_DIRECTORY, jsFile);
        const moduleName = `${PACKAGE_NAME}/build/duckai/${modulePathWithoutExtension}`;
        const fileContents = await fs.readFile(absoluteFilePath, 'utf8');
        const exportName = getExportName(fileContents);

        if (!exportName) {
            continue;
        }

        const valueType = inferValueType(fileContents);
        const declaration = buildModuleDeclaration(moduleName, exportName, valueType);
        const outputContents = [...getHeaderLines(packageVersion), '', declaration, ''].join('\n');
        const outputPath = path.join(DUCKAI_BUILD_DIRECTORY, `${modulePathWithoutExtension}.d.ts`);
        await fs.writeFile(outputPath, outputContents, 'utf8');
        generatedFileCount += 1;
    }

    console.log(`Generated ${generatedFileCount} declaration files from ${jsFiles.length} JS files.`);
}

generateDuckaiTypes().catch((error) => {
    console.error(error instanceof Error ? error.message : String(error));
    process.exitCode = 1;
});
