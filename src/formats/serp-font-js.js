import { fileHeader, formattedVariables } from 'style-dictionary/utils';

const FONT_SETUP_PREFIXES = ['family', 'weight', 'letter-spacing'];

function extractVariableLines(cssVariables) {
    return cssVariables.split('\n').filter((line) => line.trim() !== '' && line.trim() !== ':root {' && line.trim() !== '}');
}

function getVariableName(line) {
    const trimmed = line.trim();
    const end = trimmed.indexOf(':');
    if (!trimmed.startsWith('--') || end === -1) return null;
    return trimmed.slice(0, end);
}

function parseVariableLine(line) {
    const match = line.match(/^\s*(--[^:]+):\s*(.+?);\s*(\/\*.*\*\/)?\s*$/);
    if (!match) return null;

    return {
        name: match[1],
        value: match[2],
        comment: match[3]?.replace(/^\/\*\s?/, '').replace(/\s?\*\/$/, ''),
    };
}

function toObjectEntry(line) {
    const parsed = parseVariableLine(line);
    if (!parsed) return null;

    const serializedValue = JSON.stringify(parsed.value);
    const entry = `    '${parsed.name}': ${serializedValue},`;
    return parsed.comment ? `${entry} // ${parsed.comment}` : entry;
}

function isFontSetupVariable(variableName, prefix) {
    return FONT_SETUP_PREFIXES.some((segment) => variableName.startsWith(`--${prefix}-font-${segment}-`));
}

function isTypographyVariable(variableName, prefix) {
    return new RegExp(`^--${prefix}-font-.+-(font-family|letter-spacing|line-height|size|weight|text-transform)$`).test(variableName);
}

export default async function serpFontJs({ dictionary, file, options, platform }) {
    const header = await fileHeader({ file, commentStyle: 'short' });
    const prefix = platform?.prefix || 'ds';
    const { exportName = 'dsTypography' } = options;
    const cssVariables = formattedVariables({
        format: 'css',
        dictionary,
        ...options,
    });

    const variableLines = extractVariableLines(cssVariables);

    const fontSetupLines = variableLines
        .filter((line) => {
            const variableName = getVariableName(line);
            return variableName ? isFontSetupVariable(variableName, prefix) : false;
        })
        .map(toObjectEntry)
        .filter(Boolean);

    const typographyLines = variableLines
        .filter((line) => {
            const variableName = getVariableName(line);
            return variableName ? isTypographyVariable(variableName, prefix) : false;
        })
        .map(toObjectEntry)
        .filter(Boolean);

    return [
        `${header}const ${exportName} = {`,
        '    /** FONT SETUP */',
        ...fontSetupLines,
        '',
        '    /** TYPESTACK DEFINITIONS */',
        ...typographyLines,
        '};',
        '',
        `export default ${exportName};`,
        '',
    ].join('\n');
}
