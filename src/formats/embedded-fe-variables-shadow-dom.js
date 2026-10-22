/**
 * Custom Style Dictionary format that outputs CSS variables with both :root and :host selectors
 * for compatibility with both regular DOM and Shadow DOM.
 */
import { fileHeader, formattedVariables } from 'style-dictionary/utils';

export default async function cssVariablesShadowDom({ dictionary, file, options }) {
    const header = await fileHeader({ file });
    return (
        header +
        ':root,\n:host {\n' +
        formattedVariables({
            format: 'css',
            dictionary,
            ...options,
        }) +
        '\n}\n'
    );
}
