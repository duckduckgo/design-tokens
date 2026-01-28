/**
 * Custom Style Dictionary format that outputs breakpoint tokens as SCSS variables
 */
import { fileHeader, formattedVariables } from 'style-dictionary/utils';

export default async function breakpointsScss({ dictionary, file, options, platform }) {
    const header = await fileHeader({ file });
    const breakpointComment =
        "/* CSS variables (var(--ds-breakpoint-md)) can't be used in media queries. Media queries are evaluated at parse time, before CSS variables resolve. */";
    // Filter tokens where the first path segment is 'breakpoint'
    const breakpointTokens = dictionary.allTokens.filter((token) => token.path[0] === 'breakpoint');

    if (breakpointTokens.length === 0) {
        return header + '\n' + breakpointComment + '\n';
    }

    // Create filtered dictionary for breakpoint tokens
    const breakpointDictionary = {
        ...dictionary,
        allTokens: breakpointTokens,
    };

    // Use formattedVariables to get CSS variables (this handles value resolution)
    // Then convert CSS variables (--variable) to SCSS variables ($variable)
    const cssVariables = formattedVariables({
        format: 'css',
        dictionary: breakpointDictionary,
        ...options,
    });

    // Convert CSS variables to SCSS variables
    // Replace --prefix- with $prefix- and remove the :root wrapper if present
    const scssVariables = cssVariables
        .split('\n')
        .map((line) => {
            // Match CSS variable declaration: --name: value;
            const match = line.match(/^(\s*)(--[^:]+):\s*(.+);/);
            if (!match) {
                // Skip non-variable lines (like :root { or })
                return line.trim() === '' || line.trim() === ':root {' || line.trim() === '}' ? '' : line;
            }

            const [, indent, cssVarName, value] = match;

            // Convert --ds-breakpoint-xs to $ds-breakpoint-xs
            const scssVarName = cssVarName.replace(/^--/, '$');

            // Preserve comments if present
            const commentMatch = line.match(/;\s*(\/\*.*\*\/)/);
            const comment = commentMatch ? ` ${commentMatch[1]}` : '';

            return `${indent}${scssVarName}: ${value};${comment}`;
        })
        .filter((line) => line.trim() !== '') // Remove empty lines
        .join('\n');

    return header + '\n' + breakpointComment + '\n' + scssVariables + '\n';
}
