import { fileHeader, formattedVariables } from 'style-dictionary/utils';

function extractVariableLines(cssVariables) {
    return cssVariables
        .split('\n')
        .filter((line) => line.trim() !== '' && line.trim() !== ':root {' && line.trim() !== '}')
        .join('\n');
}

function sectionMatchesToken(section, token) {
    const matchesPathPrefix = section.pathPrefix ? token.path[0] === section.pathPrefix : true;
    const matchesTokenMatcher = typeof section.tokenMatcher === 'function' ? section.tokenMatcher(token) : true;
    return matchesPathPrefix && matchesTokenMatcher;
}

export default async function spBaseTokens({ dictionary, file, options }) {
    const header = await fileHeader({ file });
    const { sections = [] } = options;
    const showSectionComments = sections.length > 1;

    const sectionOutputs = sections
        .map((section) => {
            const tokens = dictionary.allTokens.filter((token) => sectionMatchesToken(section, token));

            if (tokens.length === 0) {
                return '';
            }

            const filteredDictionary = { ...dictionary, allTokens: tokens };
            const cssVariables = formattedVariables({
                format: 'css',
                dictionary: filteredDictionary,
                ...options,
            });
            const variableLines = extractVariableLines(cssVariables);

            if (showSectionComments && section.comment) {
                return `  /* *** ${section.comment} *** */\n${variableLines}`;
            }

            return variableLines;
        })
        .filter((output) => output !== '');

    return header + '\n:root {\n' + sectionOutputs.join('\n\n') + '\n}\n';
}
