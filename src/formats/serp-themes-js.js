import { fileHeader } from 'style-dictionary/utils';
import { toKebab } from '../utils/to-kebab.js';

/**
 * Custom Style Dictionary format that outputs theme-variant JavaScript files
 * with a flat object of CSS custom properties and a default export.
 *
 * Tokens are filtered by theme variant (light/dark) and grouped by category
 * (surface, container, text, etc.) with JSDoc section comments.
 *
 * Options (via file.options):
 *   variant:    'light' | 'dark'  – which theme variant to output (default: 'light')
 *   exportName: string            – exported const name  (default: 'dsThemeColors')
 */
export default async function serpThemesTs({ dictionary, platform, file, options }) {
    const prefix = platform?.prefix || 'ds';
    const { variant = 'light', exportName = 'dsThemeColors' } = options;

    function isThemeVariantToken(token) {
        return token.path[0] === 'theme' && token.path[1] === variant;
    }

    function isSerpThemeOverrideToken(token) {
        return isThemeVariantToken(token) && token.filePath?.match(/[\\/]web[\\/]serp[\\/]colors\./);
    }

    function buildName(pathSegments) {
        const kebabPath = pathSegments.map(toKebab).join('-');
        return `--${prefix}-${kebabPath}`;
    }

    function getCategory(token) {
        const category = token.path[2];

        // Keep SERP link tokens together in a single section.
        if (isSerpThemeOverrideToken(token) && /^link/i.test(String(category))) {
            return 'linkColors';
        }

        return category;
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

    const themeTokens = dictionary.allTokens.filter(isThemeVariantToken);
    const mergedThemeTokens = new Map();

    // Build base theme tokens first, then apply SERP color overrides by CSS var name.
    for (const token of themeTokens) {
        mergedThemeTokens.set(buildName(token.path.slice(2)), token);
    }

    const serpThemeOverrideTokens = dictionary.allTokens.filter(isSerpThemeOverrideToken);
    for (const token of serpThemeOverrideTokens) {
        mergedThemeTokens.set(buildName(token.path.slice(2)), token);
    }

    const groups = new Map();
    for (const token of mergedThemeTokens.values()) {
        const category = getCategory(token);
        if (!groups.has(category)) {
            groups.set(category, []);
        }
        groups.get(category).push(token);
    }

    const header = await fileHeader({ file, commentStyle: 'short' });
    const lines = [header + `const ${exportName} = {`];

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

    lines.push('};');
    lines.push('');
    lines.push(`export default ${exportName};`);
    lines.push('');

    return lines.join('\n');
}
