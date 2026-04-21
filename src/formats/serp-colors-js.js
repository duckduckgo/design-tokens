import { fileHeader } from 'style-dictionary/utils';
import { toKebab } from '../utils/to-kebab.js';

/**
 * Custom Style Dictionary format that outputs a color-palette JavaScript file
 * with a flat object of CSS custom properties and a default export.
 *
 * Tokens are grouped by color family with JSDoc section comments.
 *
 * Options (via file.options):
 *   exportName: string – exported const name   (default: 'dsColorPalette')
 */
export default async function serpColorsTs({ dictionary, platform, file, options }) {
    const prefix = platform?.prefix || 'sds';
    const { exportName = 'dsColorPalette' } = options;

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

    const header = await fileHeader({ file, commentStyle: 'short' });
    const lines = [header + `const ${exportName} = {`];

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

    lines.push('};');
    lines.push('');
    lines.push(`export default ${exportName};`);
    lines.push('');

    return lines.join('\n');
}
