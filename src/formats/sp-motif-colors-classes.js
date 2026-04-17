/**
 * Custom Style Dictionary format that outputs motif color tokens as per-motif SCSS files.
 * Expects options.motifName to specify which motif to output.
 * Each file contains .theme-light .motif-{name} {} and .theme-dark .motif-{name} {} blocks.
 */
import { fileHeader, formattedVariables } from 'style-dictionary/utils';

function getMotifTokens(dictionary, motifName, themeType) {
    const motifKey = `${motifName}${themeType.charAt(0).toUpperCase() + themeType.slice(1)}`;
    return dictionary.allTokens.filter((token) => token.path[0] === 'motif' && token.path[1] === motifKey);
}

function camelToKebab(str) {
    return str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
}

function pathToKebab(path) {
    return path.map((segment) => camelToKebab(segment)).join('-');
}

/**
 * Extract unique motif names from dictionary tokens.
 * Useful for the config to discover available motifs at build time.
 */
export function extractMotifNames(dictionary) {
    const motifNames = new Set();

    dictionary.allTokens.forEach((token) => {
        if (token.path[0] === 'motif' && token.path.length > 1) {
            motifNames.add(token.path[1].replace(/(Light|Dark)$/, ''));
        }
    });

    return Array.from(motifNames).sort();
}

export default async function motifColorsClasses({ dictionary, file, options, platform }) {
    const motifName = options?.motifName;
    if (!motifName) {
        throw new Error('motif-colors-classes format requires options.motifName');
    }

    const header = await fileHeader({ file });
    const prefix = platform?.prefix || 'ds';

    const lightThemeTokens = dictionary.allTokens.filter((token) => token.path[0] === 'theme' && token.path[1] === 'light');
    const darkThemeTokens = dictionary.allTokens.filter((token) => token.path[0] === 'theme' && token.path[1] === 'dark');

    function createMotifClass(motifTokens, themeType, baseThemeTokens) {
        if (motifTokens.length === 0) return '';

        const motifDictionary = {
            ...dictionary,
            allTokens: motifTokens,
        };

        const motifVariables = formattedVariables({
            format: 'css',
            dictionary: motifDictionary,
            ...options,
        });

        const themeTokenMap = new Map();
        baseThemeTokens.forEach((token) => {
            if (token.path.includes('destructive') || token.path.includes('status')) {
                return;
            }

            const shortPath = token.path.slice(2);
            const shortPathKebab = pathToKebab(shortPath);
            const shortName = `--${prefix}-${shortPathKebab}`;
            themeTokenMap.set(shortPathKebab, {
                shortName,
                fullName: token.name,
            });
        });

        const motifClassContent = motifVariables
            .split('\n')
            .map((line) => {
                const match = line.match(/^(\s*)(--[^:]+):\s*(.+);/);
                if (!match) {
                    return '';
                }

                const [, , fullMotifVarName, resolvedValue] = match;

                const pathMatch = fullMotifVarName.match(new RegExp(`--${prefix}-motif-${motifName}-${themeType}-(.+)`));
                if (!pathMatch) return '';

                const tokenPath = pathMatch[1];

                const baseToken = themeTokenMap.get(tokenPath);
                if (!baseToken) return '';

                const shortVarName = baseToken.shortName;

                const commentMatch = line.match(/;\s*(\/\*.*\*\/)/);
                const comment = commentMatch ? ` ${commentMatch[1]}` : '';

                return `    ${shortVarName}: ${resolvedValue};${comment}`;
            })
            .filter((line) => line.trim() !== '')
            .join('\n');

        return `  .motif-${motifName} {\n${motifClassContent}\n  }`;
    }

    const lightTokens = getMotifTokens(dictionary, motifName, 'light');
    const darkTokens = getMotifTokens(dictionary, motifName, 'dark');

    const lightClass = createMotifClass(lightTokens, 'light', lightThemeTokens);
    const darkClass = createMotifClass(darkTokens, 'dark', darkThemeTokens);

    let output = header;
    output += '.theme-light {\n' + lightClass + '\n}\n\n';
    output += '.theme-dark {\n' + darkClass + '\n}\n';

    return output;
}
