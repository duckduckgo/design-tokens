import { fileHeader } from 'style-dictionary/utils';
import { toKebab } from '../utils/to-kebab.js';

/**
 * Custom Style Dictionary format that outputs TypeScript const objects
 * with `as const` assertions and derived type exports.
 *
 * Options (via file.options):
 *   sections: Array<{
 *     pathPrefix:  string  – first path element to filter tokens (e.g. 'space')
 *     exportName:  string  – exported const name        (e.g. 'dsTokensSpace')
 *     typeName:    string  – exported type alias name    (e.g. 'DSTokenSpace')
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

    function buildName(token) {
        const path = token.path.map(toKebab).join('-');
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
                const name = buildName(token);
                const result = formatValue(token, section);
                if (typeof result === 'object') {
                    return `    '${name}': ${result.value}, // ${result.comment}`;
                }
                return `    '${name}': ${result},`;
            });

            return [
                `export const ${section.exportName} = {`,
                entries.join('\n'),
                '} as const;',
                '',
                `export type ${section.typeName} = typeof ${section.exportName};`,
            ].join('\n');
        })
        .filter(Boolean);

    const header = await fileHeader({ file, commentStyle: 'short' });
    return header + blocks.join('\n\n') + '\n';
}
