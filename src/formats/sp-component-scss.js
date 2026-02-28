/**
 * Custom Style Dictionary format that outputs component-specific tokens wrapped in a CSS class selector
 */
import { fileHeader, formattedVariables } from 'style-dictionary/utils';

/**
 * Convert kebab-case to camelCase
 * e.g., 'icon-button' -> 'iconButton'
 */
function kebabToCamel(str) {
    return str.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
}

export default async function componentScss({ dictionary, file, options, platform }) {
    const header = await fileHeader({ file });

    // Get component name from options
    const componentName = options?.componentName;
    if (!componentName) {
        throw new Error('component-scss format requires componentName option');
    }

    // Convert kebab-case to camelCase for token path matching
    // Token paths use camelCase (from object keys), but componentName may be kebab-case (from filename)
    const componentNameCamel = kebabToCamel(componentName);

    // Filter tokens where the first path segment matches the component name
    // e.g., ['button', 'xxs', 'borderRadius'] for component 'button'
    // or ['iconButton', 'xxs', 'padding'] for component 'icon-button'
    const componentTokens = dictionary.allTokens.filter((token) => token.path[0] === componentName || token.path[0] === componentNameCamel);

    if (componentTokens.length === 0) {
        // Return empty class if no tokens found
        return header + `.${componentName} {\n}\n`;
    }

    // Create filtered dictionary for this component
    const componentDictionary = {
        ...dictionary,
        allTokens: componentTokens,
    };

    const variables = formattedVariables({
        format: 'css',
        dictionary: componentDictionary,
        ...options,
        outputReferences: false,
    });

    // Wrap variables in component class selector
    const output = header + `.${componentName} {\n${variables}\n}\n`;

    return output;
}
