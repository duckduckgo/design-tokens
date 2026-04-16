import { formats, transformGroups, logBrokenReferenceLevels, logVerbosityLevels, logWarningLevels } from 'style-dictionary/enums';
import themedJsonFormat from './src/formats/serp-themed-json.js';
import fileHeader from './dist/src/utils/file-header.js';

export default {
    source: [
        'dist/src/properties/web/base/colors.{js,json}',
        'dist/src/properties/web/base/*.{js,json}',
        'dist/src/properties/web/theme/*.{js,json}',
        'dist/src/properties/web/components/*.{js,json}',
        'dist/src/properties/web/serp/*.{js,json}',
        'dist/src/properties/web/duckai/*.{js,json}',
    ],
    hooks: {
        formats: {
            'themed-json': themedJsonFormat,
        },
    },
    log: {
        warnings: logWarningLevels.warn, // 'warn' | 'error' | 'disabled'
        verbosity: logVerbosityLevels.verbose, // 'default' | 'silent' | 'verbose'
        errors: {
            brokenReferences: logBrokenReferenceLevels.throw, // 'throw' | 'console'
        },
    },
    platforms: {
        duckai: {
            prefix: 'ds',
            transformGroup: transformGroups.css,
            buildPath: 'build/',
            files: [
                {
                    destination: 'duckai/tokens.scss',
                    format: formats.cssVariables,
                    options: {
                        outputReferences: true,
                        showFileHeader: true,
                    },
                },
                {
                    destination: 'duckai/tokens.json',
                    format: formats.jsonFlat,
                    options: {
                        outputReferences: true,
                        showFileHeader: true,
                    },
                },
                {
                    destination: 'duckai/tokens-themes.json',
                    format: 'themed-json',
                    options: {
                        outputReferences: false,
                        showFileHeader: false,
                    },
                },
            ],
            options: {
                ...fileHeader,
            },
        },
    },
};
