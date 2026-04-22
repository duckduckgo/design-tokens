import { fileHeader } from 'style-dictionary/utils';
import { toKebab } from '../utils/to-kebab.js';

/**
 * Custom Style Dictionary format that outputs a JavaScript file with a flat
 * object of CSS custom properties for duckai-specific tokens.
 *
 * Cross-file references ({path.segments}) are resolved to a configurable
 * prefix (default 'ds') so the output can be used alongside serp tokens.
 *
 * Options (via file.options):
 *   refPrefix:  string – prefix for resolved external references (default: 'ds')
 *   exportName: string – exported const name  (default: 'duckaiExtraColors')
 */
export default async function duckaiExtraColorsJs({ dictionary, platform, file, options }) {
    const prefix = platform?.prefix || 'duckai';
    const { refPrefix = 'ds', exportName = 'duckaiExtraColors' } = options;

    function buildName(token) {
        const path = token.path.map(toKebab).join('-');
        return `--${prefix}-${path}`;
    }

    function resolveValue(token) {
        const original = token.original?.$value ?? token.value;
        if (typeof original !== 'string') return String(token.value ?? original);

        return original.replace(/\{([^}]+)\}/g, (_match, refPath) => {
            const segments = refPath.split('.');
            const kebabPath = segments.map(toKebab).join('-');
            return `--${refPrefix}-${kebabPath}`;
        });
    }

    const duckaiTokens = dictionary.allTokens.filter((token) => token.filePath?.includes('/duckai/'));

    const groups = new Map();
    for (const token of duckaiTokens) {
        const category = token.path[0];
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
            const name = buildName(token);
            const value = resolveValue(token);
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
