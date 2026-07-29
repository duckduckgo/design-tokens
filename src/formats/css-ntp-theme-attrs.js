/**
 * Custom Style Dictionary format that outputs NTP color tokens split by theme.
 * Tokens nested under ntp.light.* / ntp.dark.* are emitted inside
 * [data-theme="light"] / [data-theme="dark"] attribute selectors (matching the NTP's
 * own theme-switching convention), with the "light"/"dark" segment stripped from the
 * variable name so the same variable name resolves differently per theme.
 * All other ntp.* tokens (theme-independent) are emitted as flat variables in :root, :host.
 * Resolves to final color values (no var() indirection) since this is a standalone file.
 */
import { fileHeader, formattedVariables } from 'style-dictionary/utils';

export default async function ntpThemeAttrs({ dictionary, file, options, platform }) {
    const header = await fileHeader({ file });
    const prefix = platform?.prefix || 'ds';

    const lightTokens = dictionary.allTokens.filter((token) => token.path[0] === 'ntp' && token.path[1] === 'light');
    const darkTokens = dictionary.allTokens.filter((token) => token.path[0] === 'ntp' && token.path[1] === 'dark');
    const flatTokens = dictionary.allTokens.filter(
        (token) => token.path[0] === 'ntp' && token.path[1] !== 'light' && token.path[1] !== 'dark',
    );

    function formatTokens(tokens) {
        const tokenDictionary = {
            ...dictionary,
            allTokens: tokens,
        };

        return formattedVariables({
            format: 'css',
            dictionary: tokenDictionary,
            ...options,
        });
    }

    /** Strips the ntp-light- / ntp-dark- segment from variable names, e.g. --ds-ntp-light-btn-primary-rest -> --ds-ntp-btn-primary-rest */
    function stripThemeSegment(variables) {
        return variables
            .split('\n')
            .map((line) => {
                const match = line.match(/^(\s*)(--[^:]+):\s*(.+);/);
                if (!match) return null;

                const [, , fullVarName, value] = match;
                const shortVarName = fullVarName
                    .replace(`--${prefix}-ntp-light-`, `--${prefix}-ntp-`)
                    .replace(`--${prefix}-ntp-dark-`, `--${prefix}-ntp-`);

                return `  ${shortVarName}: ${value};`;
            })
            .filter((line) => line !== null)
            .join('\n');
    }

    const flatVariables = formatTokens(flatTokens);
    const lightVariables = stripThemeSegment(formatTokens(lightTokens));
    const darkVariables = stripThemeSegment(formatTokens(darkTokens));

    return (
        header +
        ':root,\n:host {\n' +
        flatVariables +
        '\n}\n\n' +
        '[data-theme="light"] {\n' +
        lightVariables +
        '\n}\n\n' +
        '[data-theme="dark"] {\n' +
        darkVariables +
        '\n}\n'
    );
}
