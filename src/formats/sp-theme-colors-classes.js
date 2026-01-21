/**
 * Custom Style Dictionary format that outputs theme color tokens in .theme-light and .theme-dark CSS classes
 */
import { fileHeader, formattedVariables } from 'style-dictionary/utils';

/**
 * Extract unique motif names from dictionary tokens
 * @param {Object} dictionary - Style Dictionary dictionary object
 * @returns {string[]} Array of unique motif names (e.g., ['blossom', 'pollen', ...])
 */
function extractMotifNames(dictionary) {
    const motifTokens = dictionary.allTokens.filter((token) => token.path[0] === 'motif');
    const motifNames = new Set();

    motifTokens.forEach((token) => {
        // Token paths are like: ['motif', 'blossomLight', 'surface', 'backdrop']
        // or ['motif', 'pollenDark', 'surface', 'backdrop']
        if (token.path.length > 1) {
            const motifKey = token.path[1];
            // Remove 'Light' or 'Dark' suffix to get base motif name
            const motifName = motifKey.replace(/(Light|Dark)$/, '');
            motifNames.add(motifName);
        }
    });

    return Array.from(motifNames).sort();
}

/**
 * Filter motif tokens by motif name and theme type
 * @param {Object} dictionary - Style Dictionary dictionary object
 * @param {string} motifName - Base motif name (e.g., 'blossom')
 * @param {string} themeType - Theme type ('light' or 'dark')
 * @returns {Array} Filtered tokens
 */
function getMotifTokens(dictionary, motifName, themeType) {
    const motifKey = `${motifName}${themeType.charAt(0).toUpperCase() + themeType.slice(1)}`;
    return dictionary.allTokens.filter((token) => token.path[0] === 'motif' && token.path[1] === motifKey);
}

export default async function themeColorsClasses({ dictionary, file, options, platform }) {
    const header = await fileHeader({ file });

    // Filter tokens for theme-light and theme-dark
    const lightTokens = dictionary.allTokens.filter((token) => token.path[0] === 'theme' && token.path[1] === 'light');
    const darkTokens = dictionary.allTokens.filter((token) => token.path[0] === 'theme' && token.path[1] === 'dark');

    // Create filtered dictionaries for each theme
    const lightDictionary = {
        ...dictionary,
        allTokens: lightTokens,
    };

    const darkDictionary = {
        ...dictionary,
        allTokens: darkTokens,
    };

    // Format variables for each theme using formattedVariables (this handles reference resolution)
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

    // Get prefix from platform options
    const prefix = platform?.prefix || 'ds';

    // Process each line to:
    // 1. Replace variable names to remove "theme-light" or "theme-dark"
    // 2. Replace values to reference the full theme variable name instead of resolved colors
    function processVariables(variables, themeType) {
        const themePattern = new RegExp(`--${prefix}-theme-${themeType}-`, 'g');
        const shortPrefix = `--${prefix}-`;

        return variables
            .split('\n')
            .map((line) => {
                // Match CSS variable declaration: --name: value;
                const match = line.match(/^(\s*)(--[^:]+):\s*(.+);/);
                if (!match) return line;

                const [, indent, fullVarName] = match;

                // Create short variable name (remove theme-light/theme-dark)
                const shortVarName = fullVarName.replace(themePattern, shortPrefix);

                // Replace value to reference the full theme variable name
                // The value might be a resolved reference like "var(--ds-color-white)" or a direct value
                // We want to replace it with a reference to the full theme variable
                const newValue = `var(${fullVarName})`;

                // Preserve comments if present
                const commentMatch = line.match(/;\s*(\/\*.*\*\/)/);
                const comment = commentMatch ? ` ${commentMatch[1]}` : '';

                return `${indent}${shortVarName}: ${newValue};${comment}`;
            })
            .join('\n');
    }

    /**
     * Convert camelCase string to kebab-case
     * @param {string} str - String to convert
     * @returns {string} kebab-case string
     */
    function camelToKebab(str) {
        return str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
    }

    /**
     * Convert token path array to kebab-case string
     * @param {Array} path - Token path array
     * @returns {string} kebab-case path string
     */
    function pathToKebab(path) {
        return path.map((segment) => camelToKebab(segment)).join('-');
    }

    /**
     * Create CSS class for a motif that reassigns base theme tokens to motif tokens
     * @param {Array} motifTokens - Filtered motif tokens for this motif and theme
     * @param {string} motifName - Base motif name (e.g., 'blossom')
     * @param {string} themeType - Theme type ('light' or 'dark')
     * @param {string} prefix - CSS variable prefix
     * @param {Array} baseThemeTokens - Base theme tokens to map from
     * @returns {string} CSS class content
     */
    function createMotifClass(motifTokens, motifName, themeType, prefix, baseThemeTokens) {
        if (motifTokens.length === 0) return '';

        // Create a dictionary for motif tokens
        const motifDictionary = {
            ...dictionary,
            allTokens: motifTokens,
        };

        // Format motif variables using formattedVariables
        const motifVariables = formattedVariables({
            format: 'css',
            dictionary: motifDictionary,
            ...options,
        });

        // Create a map of base theme token paths to their short names
        // This helps us map motif tokens to the same short names
        // Use kebab-case for matching since Style Dictionary converts camelCase to kebab-case
        const themeTokenMap = new Map();
        baseThemeTokens.forEach((token) => {
            // Skip destructive and status tokens as they don't exist in motifs
            if (token.path.includes('destructive') || token.path.includes('status')) {
                return;
            }

            // Create short path (remove 'theme' and themeType from path)
            // e.g., ['theme', 'light', 'container', 'primaryBackgroundColor'] -> ['container', 'primaryBackgroundColor']
            const shortPath = token.path.slice(2);
            // Convert to kebab-case to match Style Dictionary's CSS variable naming
            const shortPathKebab = pathToKebab(shortPath);
            const shortName = `--${prefix}-${shortPathKebab}`;
            themeTokenMap.set(shortPathKebab, {
                shortName,
                fullName: token.name,
            });
        });

        // Process motif variables to map them to base token names
        const motifClassContent = motifVariables
            .split('\n')
            .map((line) => {
                // Match CSS variable declaration: --name: value;
                const match = line.match(/^(\s*)(--[^:]+):\s*(.+);/);
                if (!match) {
                    // Return empty string for non-variable lines (they'll be filtered out)
                    return '';
                }

                const [, , fullMotifVarName] = match;

                // Extract the path from the motif variable name
                // e.g., --ds-motif-blossom-light-surface-backdrop -> surface-backdrop
                const pathMatch = fullMotifVarName.match(new RegExp(`--${prefix}-motif-${motifName}-${themeType}-(.+)`));
                if (!pathMatch) return '';

                const tokenPath = pathMatch[1];

                // Find matching base theme token
                const baseToken = themeTokenMap.get(tokenPath);
                if (!baseToken) return ''; // Skip if no matching base token

                // Use the short name from base theme (same as base theme uses)
                const shortVarName = baseToken.shortName;

                // Reference the full motif variable name
                const newValue = `var(${fullMotifVarName})`;

                // Preserve comments if present
                const commentMatch = line.match(/;\s*(\/\*.*\*\/)/);
                const comment = commentMatch ? ` ${commentMatch[1]}` : '';

                // Use consistent indentation (4 spaces for nested class content)
                return `    ${shortVarName}: ${newValue};${comment}`;
            })
            .filter((line) => line.trim() !== '') // Remove empty lines
            .join('\n');

        return `  .motif-${motifName} {\n${motifClassContent}\n  }`;
    }

    lightVariables = processVariables(lightVariables, 'light');
    darkVariables = processVariables(darkVariables, 'dark');

    // Extract motif names and generate motif classes
    const motifNames = extractMotifNames(dictionary);

    // Generate motif classes for light theme
    const lightMotifClasses = motifNames
        .map((motifName) => {
            const motifTokens = getMotifTokens(dictionary, motifName, 'light');
            return createMotifClass(motifTokens, motifName, 'light', prefix, lightTokens);
        })
        .filter((classContent) => classContent !== '')
        .join('\n\n');

    // Generate motif classes for dark theme
    const darkMotifClasses = motifNames
        .map((motifName) => {
            const motifTokens = getMotifTokens(dictionary, motifName, 'dark');
            return createMotifClass(motifTokens, motifName, 'dark', prefix, darkTokens);
        })
        .filter((classContent) => classContent !== '')
        .join('\n\n');

    // Build the final output
    let output = header + '.theme-light {\n' + lightVariables;
    if (lightMotifClasses) {
        output += '\n\n' + lightMotifClasses;
    }
    output += '\n}\n\n.theme-dark {\n' + darkVariables;
    if (darkMotifClasses) {
        output += '\n\n' + darkMotifClasses;
    }
    output += '\n}\n';

    return output;
}
