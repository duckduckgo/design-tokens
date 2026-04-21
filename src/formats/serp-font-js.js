import { fileHeader, formattedVariables } from 'style-dictionary/utils';

const FONT_SETUP_PREFIXES = ['family', 'weight', 'letter-spacing'];

const STYLE_NAME_MAP = new Map([
    ['body-md', 'body-md'],
    ['body-lg', 'body-lg'],
    ['title-05', 'title-05'],
    ['title-06', 'title-06'],
    ['label-01', 'label-01'],
    ['caption-01', 'caption-01'],
    ['button-label-01', 'button-label-01'],
    ['button-label-02', 'button-label-02'],
    ['button-label-03', 'button-label-03'],
]);

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

function normalizeTopComment(topComment) {
    if (!topComment) return [];

    const lines = Array.isArray(topComment) ? topComment : [topComment];
    return lines
        .map((line) => String(line).trim())
        .filter(Boolean)
        .map((line) => `// ${line}`);
}

function toSerpTypographyLine(line, prefix, includeAllTypography = false) {
    const variableName = getVariableName(line);
    if (!variableName) return null;

    const match = variableName.match(
        new RegExp(`^(--${prefix}-font-)(.+)-(font-family|letter-spacing|line-height|size|weight|text-transform)$`),
    );

    if (!match) return null;

    if (includeAllTypography) return line;

    const [, namePrefix, sourceStyleName, propertyName] = match;
    const outputStyleName = STYLE_NAME_MAP.get(sourceStyleName);

    if (!outputStyleName) return null;

    const outputVariableName = `${namePrefix}${outputStyleName}-${propertyName}`;
    return line.replace(variableName, outputVariableName);
}

export default async function serpFontJs({ dictionary, file, options, platform }) {
    const header = await fileHeader({ file, commentStyle: 'short' });
    const prefix = platform?.prefix || 'ds';
    const { exportName = 'dsTypography', includeAllTypography = false, topComment } = options;
    const topCommentLines = normalizeTopComment(topComment);
    const topCommentBlock = topCommentLines.length > 0 ? `${topCommentLines.join('\n')}\n\n` : '';
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
        .map((line) => toSerpTypographyLine(line, prefix, includeAllTypography))
        .filter(Boolean)
        .map(toObjectEntry)
        .filter(Boolean);

    return [
        `${header}${topCommentBlock}const ${exportName} = {`,
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
