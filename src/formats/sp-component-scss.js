/**
 * Custom Style Dictionary format that outputs component-specific tokens wrapped in a SCSS @mixin
 */
import { fileHeader, formattedVariables } from 'style-dictionary/utils';

/**
 * Convert kebab-case to camelCase
 * e.g., 'icon-button' -> 'iconButton'
 */
function kebabToCamel(str) {
    return str.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
}

function buildComponentExportName(componentNameCamel) {
    return `dsTokens${componentNameCamel.charAt(0).toUpperCase()}${componentNameCamel.slice(1)}`;
}

export default async function componentScss({ dictionary, file, options }) {
    const { componentName, outputType = 'scss', exportName, outputReferences = false, ...formatOptions } = options ?? {};
    if (!componentName) {
        throw new Error('component-scss format requires componentName option');
    }
    if (outputType !== 'scss' && outputType !== 'js') {
        throw new Error(`component-scss format received invalid outputType "${outputType}"`);
    }

    // Convert kebab-case to camelCase for token path matching
    // Token paths use camelCase (from object keys), but componentName may be kebab-case (from filename)
    const componentNameCamel = kebabToCamel(componentName);

    // Filter tokens where the first path segment matches the component name
    // e.g., ['button', 'xxs', 'borderRadius'] for component 'button'
    // or ['iconButton', 'xxs', 'padding'] for component 'icon-button'
    const componentTokens = dictionary.allTokens.filter((token) => token.path[0] === componentName || token.path[0] === componentNameCamel);

    if (componentTokens.length === 0) {
        if (outputType === 'js') {
            const jsHeader = await fileHeader({ file, commentStyle: 'short' });
            const componentExportName = exportName ?? buildComponentExportName(componentNameCamel);
            return `${jsHeader}const ${componentExportName} = {};\n\nexport default ${componentExportName};\n`;
        }
        const scssHeader = await fileHeader({ file });
        return scssHeader + `@mixin ${componentNameCamel} {\n}\n`;
    }

    // Create filtered dictionary for this component
    const componentDictionary = {
        ...dictionary,
        allTokens: componentTokens,
    };

    if (outputType === 'js') {
        const jsHeader = await fileHeader({ file, commentStyle: 'short' });
        const componentExportName = exportName ?? buildComponentExportName(componentNameCamel);
        const cssVariables = formattedVariables({
            format: 'css',
            dictionary: componentDictionary,
            ...formatOptions,
            outputReferences,
        });
        const variableEntries = cssVariables
            .split('\n')
            .map((line) => line.trim())
            .filter(Boolean)
            .map((line) => {
                const match = line.match(/^(--[^:]+):\s*(.+);$/);
                if (!match) {
                    return null;
                }
                const [, variableName, value] = match;
                return `    '${variableName}': ${JSON.stringify(value)},`;
            })
            .filter(Boolean);

        return [
            `${jsHeader}const ${componentExportName} = {`,
            variableEntries.join('\n'),
            '};',
            '',
            `export default ${componentExportName};`,
            '',
        ].join('\n');
    }

    const header = await fileHeader({ file });
    const variables = formattedVariables({
        format: 'css',
        dictionary: componentDictionary,
        ...formatOptions,
        outputReferences: false,
    });

    const output = header + `@mixin ${componentNameCamel} {\n${variables}\n}\n`;

    return output;
}
