/**
 * Custom Style Dictionary format that outputs onboarding color tokens in .theme-light and .theme-dark CSS classes.
 * Resolves to final color values (no var() indirection) since this is a standalone file.
 */
import { fileHeader, formattedVariables } from 'style-dictionary/utils';

export default async function onboardingThemeClasses({ dictionary, file, options, platform }) {
    const header = await fileHeader({ file });
    const prefix = platform?.prefix || 'ds';

    const lightTokens = dictionary.allTokens.filter((token) => token.path[0] === 'onboarding' && token.path[1] === 'light');
    const darkTokens = dictionary.allTokens.filter((token) => token.path[0] === 'onboarding' && token.path[1] === 'dark');

    /**
     * Format tokens into CSS variable declarations with semantic names.
     * Strips the "onboarding-light-" / "onboarding-dark-" prefix so that variable names
     * are identical to the base theme (e.g., --ds-surface-backdrop).
     */
    function formatTokens(tokens) {
        const tokenDictionary = {
            ...dictionary,
            allTokens: tokens,
        };

        const variables = formattedVariables({
            format: 'css',
            dictionary: tokenDictionary,
            ...options,
        });

        return variables
            .split('\n')
            .map((line) => {
                const match = line.match(/^(\s*)(--[^:]+):\s*(.+);/);
                if (!match) return null;

                const [, , fullVarName, value] = match;

                // Strip the onboarding-light- or onboarding-dark- segment from the variable name
                const shortVarName = fullVarName
                    .replace(`--${prefix}-onboarding-light-`, `--${prefix}-`)
                    .replace(`--${prefix}-onboarding-dark-`, `--${prefix}-`);

                return `  ${shortVarName}: ${value};`;
            })
            .filter((line) => line !== null)
            .join('\n');
    }

    const lightVariables = formatTokens(lightTokens);
    const darkVariables = formatTokens(darkTokens);

    return header + '.theme-light {\n' + lightVariables + '\n}\n\n.theme-dark {\n' + darkVariables + '\n}\n';
}
