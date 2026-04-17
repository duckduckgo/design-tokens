import { formats, transformGroups, logBrokenReferenceLevels, logVerbosityLevels, logWarningLevels } from 'style-dictionary/enums';
import serpBaseTokensTs from './src/formats/serp-base-tokens-ts.js';
import serpColorsTs from './src/formats/serp-colors-ts.js';
import serpThemesTs from './src/formats/serp-themes-ts.js';
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
                    destination: 'serp/space.ts',
                    format: 'serp-base-tokens-ts',
                    options: {
                        showFileHeader: true,
                        sections: [
                            {
                                pathPrefix: 'space',
                                exportName: 'dsTokensSpace',
                                typeName: 'DSTokenSpace',
                                valueFormat: 'rem',
                            },
                        ],
                    },
                },
                {
                    destination: 'serp/radius.ts',
                    format: 'serp-base-tokens-ts',
                    options: {
                        sections: [
                            {
                                pathPrefix: 'radius',
                                exportName: 'dsTokensRadius',
                                typeName: 'DSTokenRadius',
                                valueFormat: 'raw',
                            },
                        ],
                    },
                },
                {
                    destination: 'serp/color-palette.ts',
                    format: 'serp-colors-ts',
                    filter: (token) => !token.filePath?.includes('theme/colors'),
                    options: {
                        exportName: 'dsColorPalette',
                        typeName: 'DSColorPalette',
                    },
                },
                {
                    destination: 'serp/colors-light.ts',
                    format: 'serp-themes-ts',
                    options: {
                        variant: 'light',
                        exportName: 'dsThemeColorsLight',
                        typeName: 'DSThemeColorsLight',
                    },
                },
                {
                    destination: 'serp/colors-dark.ts',
                    format: 'serp-themes-ts',
                    options: {
                        variant: 'dark',
                        exportName: 'dsThemeColorsDark',
                        typeName: 'DSThemeColorsDark',
                    },
                },
                {
                    destination: 'serp/zindex.ts',
                    format: 'serp-base-tokens-ts',
                    options: {
                        sections: [
                            {
                                pathPrefix: 'zIndex',
                                exportName: 'dsTokensZindex',
                                typeName: 'DSTokenZindex',
                                valueFormat: 'number',
                            },
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
