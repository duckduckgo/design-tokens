import { formats, transformGroups, logBrokenReferenceLevels, logVerbosityLevels, logWarningLevels } from 'style-dictionary/enums';
import serpBaseTokensTs from './src/formats/serp-base-tokens-js.js';
import serpColorsTs from './src/formats/serp-colors-js.js';
import serpFontJs from './src/formats/serp-font-js.js';
import serpThemesTs from './src/formats/serp-themes-js.js';
import fileHeader from './dist/src/utils/file-header.js';

export default {
    source: [
        'dist/src/properties/web/base/colors.{js,json}',
        'dist/src/properties/web/base/*.{js,json}',
        'dist/src/properties/web/theme/*.{js,json}',
        'dist/src/properties/web/components/*.{js,json}',
        'dist/src/properties/web/serp/*.{js,json}',
    ],
    hooks: {
        formats: {
            'serp-base-tokens-ts': serpBaseTokensTs,
            'serp-colors-ts': serpColorsTs,
            'serp-font-js': serpFontJs,
            'serp-themes-ts': serpThemesTs,
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
            prefix: 'ds',
            transformGroup: transformGroups.css,
            buildPath: 'build/',
            files: [
                {
                    destination: 'serp/tokens.json',
                    format: formats.jsonFlat,
                    options: {
                        showFileHeader: true,
                    },
                },
                {
                    destination: 'serp/space.js',
                    format: 'serp-base-tokens-ts',
                    options: {
                        showFileHeader: true,
                        sections: [
                            {
                                pathPrefix: 'space',
                                exportName: 'dsTokensSpace',
                                valueFormat: 'rem',
                            },
                        ],
                    },
                },
                {
                    destination: 'serp/radius.js',
                    format: 'serp-base-tokens-ts',
                    options: {
                        sections: [
                            {
                                pathPrefix: 'radius',
                                exportName: 'dsTokensRadius',
                                valueFormat: 'raw',
                            },
                        ],
                    },
                },
                {
                    destination: 'serp/color-palette.js',
                    format: 'serp-colors-ts',
                    filter: (token) => !token.filePath?.includes('theme/colors'),
                    options: {
                        exportName: 'dsColorPalette',
                    },
                },
                {
                    destination: 'serp/colors-light.js',
                    format: 'serp-themes-ts',
                    options: {
                        variant: 'light',
                        exportName: 'dsThemeColorsLight',
                    },
                },
                {
                    destination: 'serp/colors-dark.js',
                    format: 'serp-themes-ts',
                    options: {
                        variant: 'dark',
                        exportName: 'dsThemeColorsDark',
                    },
                },
                {
                    destination: 'serp/zindex.js',
                    format: 'serp-base-tokens-ts',
                    options: {
                        sections: [
                            {
                                pathPrefix: 'zIndex',
                                exportName: 'dsTokensZindex',
                                valueFormat: 'number',
                            },
                        ],
                    },
                },
                {
                    destination: 'serp/font.js',
                    format: 'serp-font-js',
                    options: {
                        exportName: 'dsFont',
                        showFileHeader: true,
                        outputReferences: true,
                    },
                },
                {
                    destination: 'serp/full-font-stack.js',
                    format: 'serp-font-js',
                    options: {
                        exportName: 'dsFullFontStack',
                        showFileHeader: true,
                        outputReferences: true,
                        includeAllTypography: true,
                        topComment: [
                            'This is the full type stack established for use in static-pages.',
                            'This is only to be imported when building features that need more font styles than the basics from SERP.',
                        ],
                    },
                },
            ],
            options: {
                ...fileHeader,
            },
        },
    },
};
