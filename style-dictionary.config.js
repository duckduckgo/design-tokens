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
    source: ['dist/properties/**/*.{js,json}'],
    log: {
        warnings: logWarningLevels.warn, // 'warn' | 'error' | 'disabled'
        verbosity: logVerbosityLevels.default, // 'default' | 'silent' | 'verbose'
        errors: {
            brokenReferences: logBrokenReferenceLevels.throw, // 'throw' | 'console'
        },
    },
    // include: ["src/properties/base/*.js"],
    platforms: {
        scss: {
            prefix: 'spds',
            transformGroup: transformGroups.scss,
            buildPath: 'build/',
            files: [
                {
                    destination: 'static-pages/tokens.scss',
                    format: formats.scssVariables,
                },
            ],
            options: {
                ...defaultOptions,
            },
        },
        css: {
            prefix: 'bds',
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
        web: {
            prefix: 'sds',
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
