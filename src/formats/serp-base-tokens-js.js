import { fileHeader } from 'style-dictionary/utils';
import { toKebab } from '../utils/to-kebab.js';

/**
 * Custom Style Dictionary format that outputs JavaScript const objects
 * with a default export.
 *
 * Options (via file.options):
 *   sections: Array<{
 *     pathPrefix:  string  – first path element to filter tokens (e.g. 'space')
 *     exportName:  string  – exported const name        (e.g. 'dsTokensSpace')
 *     pathNameOverrides?: Record<string, string> – optional kebab-cased token-path -> output path override
 *     valueFormat: 'rem' | 'rem-calc' | 'number' | 'raw'
 *       - rem      : converts pixel values to rem with a px comment (e.g. '0.5rem', // 8px)
 *       - rem-calc : wraps pixel values in calc(N * var(--<prefix>-base-px-in-rem))
 *       - number   : outputs the numeric value without quotes
 *       - raw      : outputs the resolved value as a string (default)
 *   }>
 */
export default async function serpBaseTokensTs({ dictionary, platform, file, options }) {
    const prefix = platform?.prefix;
    const { sections = [] } = options;

    function buildName(token, section) {
        const kebabPath = token.path.map(toKebab);
        const tokenPathKey = kebabPath.join('.');
        const overridePath = section.pathNameOverrides?.[tokenPathKey];
        const path = overridePath ?? kebabPath.join('-');
        if (prefix) {
            return `--${prefix}-${path}`;
        }
        return `--${path}`;
    }

    function formatValue(token, section) {
        const originalValue = token.original?.$value ?? token.value;

        switch (section.valueFormat) {
            case 'rem': {
                const px = parseInt(String(originalValue), 10);
                const rem = px / 16;
                return { value: `'${rem}rem'`, comment: `${px}px` };
            }
            case 'rem-calc': {
                const px = parseInt(String(originalValue), 10);
                return `'calc(${px} * var(--${prefix}-base-px-in-rem))'`;
            }
            case 'number':
                return String(Number(originalValue));
            default:
                return `'${token.value ?? originalValue}'`;
        }
    }

    const blocks = sections
        .map((section) => {
            const tokens = dictionary.allTokens.filter((token) => token.path[0] === section.pathPrefix);

            if (tokens.length === 0) return '';

            const entries = tokens.map((token) => {
                const name = buildName(token, section);
                const result = formatValue(token, section);
                if (typeof result === 'object') {
                    return `    '${name}': ${result.value}, // ${result.comment}`;
                }
                return `    '${name}': ${result},`;
            });

            return {
                exportName: section.exportName,
                entries,
            };
        })
        .filter(Boolean);

    const header = await fileHeader({ file, commentStyle: 'short' });
    if (blocks.length === 0) return `${header}\n`;

    if (blocks.length > 1) {
        throw new Error('serp-base-tokens-ts expects exactly one populated section per output file');
    }

    const [{ exportName, entries }] = blocks;
    return [`${header}const ${exportName} = {`, entries.join('\n'), '};', '', `export default ${exportName};`, ''].join('\n');
}
