/**
 * Custom Style Dictionary format that outputs theme color tokens in .theme-light and .theme-dark CSS classes
 * Only outputs values from theme-colors.ts (no motif colors)
 */
import { fileHeader, formattedVariables } from 'style-dictionary/utils';

export default async function themeColorsClasses({ dictionary, file, options, platform }) {
    const header = await fileHeader({ file });

    const lightTokens = dictionary.allTokens.filter((token) => token.path[0] === 'theme' && token.path[1] === 'light');
    const darkTokens = dictionary.allTokens.filter((token) => token.path[0] === 'theme' && token.path[1] === 'dark');

    const lightDictionary = {
        ...dictionary,
        allTokens: lightTokens,
    };

    const darkDictionary = {
        ...dictionary,
        allTokens: darkTokens,
    };

    let lightVariables = formattedVariables({
        format: 'css',
        dictionary: lightDictionary,
        ...options,
    });

    let darkVariables = formattedVariables({
        format: 'css',
        dictionary: darkDictionary,
        ...options,
    });

    const prefix = platform?.prefix || 'ds';

    function processVariables(variables, themeType) {
        const themePattern = new RegExp(`--${prefix}-theme-${themeType}-`, 'g');
        const shortPrefix = `--${prefix}-`;

        return variables
            .split('\n')
            .map((line) => {
                const match = line.match(/^(\s*)(--[^:]+):\s*(.+);/);
                if (!match) return line;

                const [, indent, fullVarName, resolvedValue] = match;

                const shortVarName = fullVarName.replace(themePattern, shortPrefix);

                const commentMatch = line.match(/;\s*(\/\*.*\*\/)/);
                const comment = commentMatch ? ` ${commentMatch[1]}` : '';

                return `${indent}${shortVarName}: ${resolvedValue};${comment}`;
            })
            .join('\n');
    }

    lightVariables = processVariables(lightVariables, 'light');
    darkVariables = processVariables(darkVariables, 'dark');

    return header + '.theme-light {\n' + lightVariables + '\n}\n\n.theme-dark {\n' + darkVariables + '\n}\n';
}
