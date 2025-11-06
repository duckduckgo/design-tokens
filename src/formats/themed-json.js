/**
 * Custom Style Dictionary format that outputs tokens in the dsTokensLight/dsTokensDark structure
 */
export default function themedJsonFormat(args) {
    const { dictionary, platform } = args;
    const lightTokens = {};
    const darkTokens = {};

    // Get prefix from platform options
    const prefix = platform?.prefix || '';

    // Helper function to build the CSS variable name from token path
    function buildName(token) {
        if (prefix) {
            return `--${prefix}-${token.path.join('-')}`;
        }
        return `--${token.path.join('-')}`;
    }

    // Get all tokens from the dictionary
    const allTokens = dictionary?.allTokens || [];

    // Build a set of actual token paths (not groups) for detecting theme variants
    const actualTokenPaths = new Set();
    allTokens.forEach((token) => {
        // A token is "actual" if it has a value defined
        if (token.value !== undefined || token.original?.$value !== undefined) {
            actualTokenPaths.add(token.path.join('.'));
        }
    });

    // Process each token
    allTokens.forEach((token) => {
        const lastPathElement = token.path[token.path.length - 1];

        // Skip tokens that ARE theme variants (have .dark as last element AND their parent is an actual token)
        if (lastPathElement === 'dark') {
            const parentPath = token.path.slice(0, -1).join('.');
            if (actualTokenPaths.has(parentPath)) {
                // This is a theme variant of an actual token, skip it
                return;
            }
            // Otherwise, it's an actual token named 'dark' (like color-background-dark)
        }

        const name = buildName(token);

        // Get the base value - prefer token.value, but fall back to token.original.$value if undefined
        let lightValue = token.value !== undefined ? token.value : (token.original?.$value ?? token.value);
        let darkValue = lightValue;

        if (token.original) {
            // Check for dark variant
            if (typeof token.original === 'object' && 'dark' in token.original) {
                // Get light value from original.$value
                if ('$value' in token.original) {
                    lightValue = token.original.$value;
                }
                // Get dark value
                if (typeof token.original.dark === 'object' && '$value' in token.original.dark) {
                    darkValue = token.original.dark.$value;
                } else {
                    darkValue = token.original.dark;
                }
            }
        }

        // Add to both light and dark (skip if both are undefined)
        if (lightValue !== undefined && darkValue !== undefined) {
            lightTokens[name] = lightValue;
            darkTokens[name] = darkValue;
        }
    });

    const output = {
        dsTokensLight: lightTokens,
        dsTokensDark: darkTokens,
    };

    return JSON.stringify(output, null, 2);
}
