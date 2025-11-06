import { formats, transformGroups, logBrokenReferenceLevels, logVerbosityLevels, logWarningLevels } from 'style-dictionary/enums';
import fileHeader from './dist/utils/file-header.js';

export default {
    source: [
        'dist/properties/global/*.{js,json}',
        'dist/properties/web/base/sizes.{js,json}',
        'dist/properties/web/base/colors.{js,json}',
        'dist/properties/web/base/*.{js,json}',
        'dist/properties/web/components/*.{js,json}',
        'dist/properties/web/static-pages/*.{js,json}',
    ],
    log: {
        warnings: logWarningLevels.warn, // 'warn' | 'error' | 'disabled'
        verbosity: logVerbosityLevels.verbose, // 'default' | 'silent' | 'verbose'
        errors: {
            brokenReferences: logBrokenReferenceLevels.throw, // 'throw' | 'console'
        },
    },
    platforms: {
        staticPages: {
            prefix: 'ds',
            transformGroup: transformGroups.css,
            buildPath: 'build/',
            files: [
                {
                    destination: 'static-pages/tokens.scss',
                    format: formats.cssVariables,
                },
                {
                    destination: 'static-pages/tokens.json',
                    format: formats.jsonFlat,
                },
            ],
            options: {
                ...fileHeader,
            },
        },
    },
};
