import { formats, transformGroups, logBrokenReferenceLevels, logVerbosityLevels, logWarningLevels } from 'style-dictionary/enums';
import themedJsonFormat from './src/formats/themed-json.js';
import fileHeader from './dist/src/utils/file-header.js';

export default {
    source: [
        'dist/src/properties/web/serp/sds-colors.{js,json}',
        'dist/src/properties/web/serp/sds-semantic.{js,json}',
        'dist/src/properties/web/serp/sds-spacing.{js,json}',
        'dist/src/properties/web/serp/sds-typography.{js,json}',
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
        serp: {
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
                {
                    destination: 'serp/tokens-themes.json',
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
