/**
 * Custom Style Dictionary format that outputs a color-palette TypeScript file
 * with a flat `as const` object of CSS custom properties and derived type exports.
 *
 * Tokens are grouped by color family with JSDoc section comments.
 *
 * Options (via file.options):
 *   exportName: string – exported const name   (default: 'dsColorPalette')
 *   typeName:   string – exported type prefix   (default: 'DSColorPalette')
 */
export default function serpColorsTs({ dictionary, platform, options }) {
    const prefix = platform?.prefix || 'sds';
    const { exportName = 'dsColorPalette', typeName = 'DSColorPalette' } = options;

    function toKebab(str) {
        return str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
    }

    function buildName(token) {
        const path = token.path.map(toKebab).join('-');
        return `--${prefix}-${path}`;
    }

    const colorTokens = dictionary.allTokens.filter((t) => t.path[0] === 'color');

    const groups = new Map();
    for (const token of colorTokens) {
        const family = token.path[1];
        if (!groups.has(family)) {
            groups.set(family, []);
        }
        groups.get(family).push(token);
    }

    const lines = [`export const ${exportName} = {`];

    let first = true;
    for (const [family, tokens] of groups) {
        const label = toKebab(family).toUpperCase();
        if (!first) lines.push('');
        lines.push(`    /** ${label} */`);
        for (const token of tokens) {
            const name = buildName(token);
            const value = token.value ?? token.original?.$value;
            lines.push(`    '${name}': '${value}',`);
        }
        first = false;
    }

    lines.push('} as const;');
    lines.push('');
    lines.push(`export type ${typeName} = typeof ${exportName};`);
    lines.push('');
    lines.push(`export type ${typeName}Values = ${typeName}[keyof ${typeName}];`);
    lines.push('');
    lines.push(`export type ${typeName}Keys = keyof ${typeName};`);
    lines.push('');

    return lines.join('\n');
}
