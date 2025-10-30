import { formats, transformGroups, logBrokenReferenceLevels, logVerbosityLevels, logWarningLevels } from 'style-dictionary/enums';

const defaultOptions = {
    fileHeader: async (messages) => {
        const date = new Date();
        const options = {
            dateStyle: 'long',
            timeStyle: 'long',
        };

        // prettier-ignore
        return [
        ...messages,
        `Source: https://dub.duckduckgo.com/duckduckgo/design-tokens`,
        `Last updated: ${date.toLocaleString('en-US', options)}`,
      ];
    },
};

export default {
    source: [
        'dist/properties/global/*.{js,json}',
        'dist/properties/web/base/sizes.{js,json}',
        'dist/properties/web/base/colors.{js,json}',
        'dist/properties/web/base/*.{js,json}',
        'dist/properties/web/serp/*.{js,json}',
        'dist/properties/web/components/*.{js,json}',
        'dist/properties/web/serp/*.{js,json}',
        'dist/properties/web/serp/**/*.{js,json}',
    ],
    log: {
        warnings: logWarningLevels.warn, // 'warn' | 'error' | 'disabled'
        verbosity: logVerbosityLevels.verbose, // 'default' | 'silent' | 'verbose'
        errors: {
            brokenReferences: logBrokenReferenceLevels.throw, // 'throw' | 'console'
        },
    },
    platforms: {
        serp: {
            prefix: 'ds',
            transformGroup: transformGroups.css,
            buildPath: 'build/',
            files: [
                {
                    destination: 'serp/tokens.scss',
                    format: formats.cssVariables,
                    options: {
                        outputReferences: true,
                        showFileHeader: true,
                    },
                },
                {
                    destination: 'serp/tokens.json',
                    format: formats.jsonFlat,
                    options: {
                        outputReferences: true,
                        showFileHeader: true,
                    },
                },
            ],
            options: {
                ...defaultOptions,
            },
        },
    },
};
