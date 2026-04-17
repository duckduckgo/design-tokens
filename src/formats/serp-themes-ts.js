import { fileHeader } from 'style-dictionary/utils';
import { toKebab } from '../utils/to-kebab.js';

/**
 * Custom Style Dictionary format that outputs theme-variant TypeScript files
 * with a flat `as const` object of CSS custom properties and derived type exports.
 *
 * Tokens are filtered by theme variant (light/dark) and grouped by category
 * (surface, container, text, etc.) with JSDoc section comments.
 *
 * Options (via file.options):
 *   variant:    'light' | 'dark'  – which theme variant to output (default: 'light')
 *   exportName: string            – exported const name  (default: 'dsThemeColors')
 *   typeName:   string            – exported type prefix  (default: 'DSThemeColors')
 */
export default async function serpThemesTs({ dictionary, platform, file, options }) {
    const prefix = platform?.prefix || 'ds';
    const { variant = 'light', exportName = 'dsThemeColors', typeName = 'DSThemeColors' } = options;

    function buildName(pathSegments) {
        const kebabPath = pathSegments.map(toKebab).join('-');
        return `--${prefix}-${kebabPath}`;
    }

    const refLookup = new Map();
    for (const token of dictionary.allTokens) {
        const val = token.original?.$value;
        if (val && typeof val === 'string' && !val.includes('{')) {
            refLookup.set(`{${token.path.join('.')}}`, val);
        }
    }

    function resolveValue(token) {
        const rawRef = token.original?.$value;
        if (!rawRef || typeof rawRef !== 'string' || !rawRef.includes('{')) return rawRef;
        return refLookup.get(rawRef) ?? rawRef;
    }

    const themeTokens = dictionary.allTokens.filter((t) => t.path[0] === 'theme' && t.path[1] === variant);

    const groups = new Map();
    for (const token of themeTokens) {
        const category = token.path[2];
        if (!groups.has(category)) {
            groups.set(category, []);
        }
        groups.get(category).push(token);
    }

    const header = await fileHeader({ file, commentStyle: 'short' });
    const lines = [header + `export const ${exportName} = {`];

    let first = true;
    for (const [category, tokens] of groups) {
        const label = toKebab(category).toUpperCase();
        if (!first) lines.push('');
        lines.push(`    /** ${label} */`);
        for (const token of tokens) {
            const name = buildName(token.path.slice(2));
            const value = resolveValue(token);
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
