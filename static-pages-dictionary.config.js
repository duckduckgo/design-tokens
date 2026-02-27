import { formats, transformGroups, logBrokenReferenceLevels, logVerbosityLevels, logWarningLevels } from 'style-dictionary/enums';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import themeColorsClasses from './src/formats/sp-theme-colors-classes.js';
import componentScss from './src/formats/sp-component-scss.js';
import breakpointsScss from './src/formats/sp-breakpoints-scss.js';
import spBaseTokens from './src/formats/sp-base-tokens.js';
import fileHeader from './dist/src/utils/file-header.js';

// Get directory path for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Dynamically discover component files
const componentsDir = path.join(__dirname, 'src/properties/web/static-pages/components');
const componentFiles = fs
    .readdirSync(componentsDir)
    .filter((file) => file.endsWith('.ts'))
    .map((file) => path.basename(file, '.ts'));

// Generate file entries for each component
const componentFileEntries = componentFiles.map((componentName) => ({
    destination: `static-pages/${componentName}.scss`,
    format: 'component-scss',
    options: {
        componentName,
        outputReferences: true,
        showFileHeader: true,
    },
}));

export default {
    hooks: {
        formats: {
            'theme-colors-classes': themeColorsClasses,
            'component-scss': componentScss,
            'breakpoints-scss': breakpointsScss,
            'sp-base-tokens': spBaseTokens,
        },
    },
    source: [
        'dist/src/properties/web/base/colors.{js,json}',
        'dist/src/properties/web/base/*.{js,json}',
        'dist/src/properties/web/theme/*.{js,json}',
        'dist/src/properties/web/components/*.{js,json}',
        'dist/src/properties/web/static-pages/*.{js,json}',
        'dist/src/properties/web/static-pages/**/*.{js,json}',
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
                        showFileHeader: true,
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
                        showFileHeader: true,
                    },
                },
                {
                    destination: 'static-pages/breakpoints.scss',
                    format: 'breakpoints-scss',
                    options: {
                        showFileHeader: true,
                    },
                },
                {
                    destination: 'static-pages/colors.scss',
                    format: 'sp-base-tokens',
                    options: {
                        showFileHeader: true,
                        sections: [{ pathPrefix: 'color', comment: 'Color values' }],
                    },
                },
                {
                    destination: 'static-pages/zindexes.scss',
                    format: 'sp-base-tokens',
                    options: {
                        showFileHeader: true,
                        sections: [{ pathPrefix: 'zIndex', comment: 'Z-index values' }],
                    },
                },
                {
                    destination: 'static-pages/spacing.scss',
                    format: 'sp-base-tokens',
                    options: {
                        showFileHeader: true,
                        sections: [
                            { pathPrefix: 'space', comment: 'Spacing values' },
                            { pathPrefix: 'radius', comment: 'Radius values' },
                        ],
                    },
                },
                {
                    destination: 'static-pages/typography.scss',
                    format: 'sp-base-tokens',
                    options: {
                        showFileHeader: true,
                        outputReferences: true,
                        sections: [
                            { pathPrefix: 'font', comment: 'Font setup' },
                            { pathPrefix: 'typography', comment: 'Typography values' },
                        ],
                    },
                },
                ...componentFileEntries,
            ],
            options: {
                ...fileHeader,
            },
        },
    },
};
