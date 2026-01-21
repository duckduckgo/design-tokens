/**
 * Custom Style Dictionary format that outputs component-specific tokens wrapped in a CSS class selector
 */
import { fileHeader, formattedVariables } from 'style-dictionary/utils';

export default async function componentScss({ dictionary, file, options, platform }) {
    const header = await fileHeader({ file });

    // Get component name from options
    const componentName = options?.componentName;
    if (!componentName) {
        throw new Error('component-scss format requires componentName option');
    }

    // Filter tokens where the first path segment matches the component name
    // e.g., ['button', 'xxs', 'borderRadius'] for component 'button'
    const componentTokens = dictionary.allTokens.filter((token) => token.path[0] === componentName);

    if (componentTokens.length === 0) {
        // Return empty class if no tokens found
        return header + `.${componentName} {\n}\n`;
    }

    // Create filtered dictionary for this component
    const componentDictionary = {
        ...dictionary,
        allTokens: componentTokens,
    };

    // Format variables using formattedVariables (this handles reference resolution)
    const variables = formattedVariables({
        format: 'css',
        dictionary: componentDictionary,
        ...options,
    });

    // Wrap variables in component class selector
    const output = header + `.${componentName} {\n${variables}\n}\n`;

    return output;
}
