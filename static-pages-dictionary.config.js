import { formats, transformGroups, logBrokenReferenceLevels, logVerbosityLevels, logWarningLevels } from 'style-dictionary/enums';
import themeColorsClasses from './src/formats/sp-theme-colors-classes.js';
import fileHeader from './dist/src/utils/file-header.js';

export default {
    hooks: {
        formats: {
            'theme-colors-classes': themeColorsClasses,
        },
    },
    source: [
        'dist/src/properties/web/base/colors.{js,json}',
        'dist/src/properties/web/base/*.{js,json}',
        'dist/src/properties/web/theme/*.{js,json}',
        'dist/src/properties/web/components/*.{js,json}',
        'dist/src/properties/web/static-pages/*.{js,json}',
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
                    options: {
                        outputReferences: true,
                    },
                },
                {
                    destination: 'static-pages/tokens.json',
                    format: formats.jsonFlat,
                },
                {
                    destination: 'static-pages/theme-colors.scss',
                    format: 'theme-colors-classes',
                    options: {
                        outputReferences: true,
                        showFileHeader: true,
                    },
                },
            ],
            options: {
                ...fileHeader,
            },
        },
    },
};
