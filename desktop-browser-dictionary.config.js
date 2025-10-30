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
        'dist/properties/web/components/*.{js,json}',
        'dist/properties/web/desktop-browsers/*.{js,json}',
    ],
    log: {
        warnings: logWarningLevels.warn, // 'warn' | 'error' | 'disabled'
        verbosity: logVerbosityLevels.verbose, // 'default' | 'silent' | 'verbose'
        errors: {
            brokenReferences: logBrokenReferenceLevels.throw, // 'throw' | 'console'
        },
    },
    platforms: {
        css: {
            prefix: 'ds',
            transformGroup: transformGroups.css,
            buildPath: 'build/',
            files: [
                {
                    destination: 'desktop-browsers/tokens.css',
                    format: formats.cssVariables,
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
