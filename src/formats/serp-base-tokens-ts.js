/**
 * Custom Style Dictionary format that outputs TypeScript const objects
 * with `as const` assertions and derived type exports.
 *
 * Options (via file.options):
 *   sections: Array<{
 *     pathPrefix:  string  – first path element to filter tokens (e.g. 'space')
 *     exportName:  string  – exported const name        (e.g. 'dsTokensSpace')
 *     typeName:    string  – exported type alias name    (e.g. 'DSTokenSpace')
 *     valueFormat: 'rem-calc' | 'number' | 'raw'
 *       - rem-calc : wraps pixel values in calc(N * var(--<prefix>-base-px-in-rem))
 *       - number   : outputs the numeric value without quotes
 *       - raw      : outputs the resolved value as a string (default)
 *   }>
 */
export default function serpBaseTokensTs({ dictionary, platform, options }) {
    const prefix = platform?.prefix || 'sds';
    const { sections = [] } = options;

    function toKebab(str) {
        return str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
    }

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
                const value = formatValue(token, section);
                return `    '${name}': ${value},`;
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

    return blocks.join('\n\n') + '\n';
}
