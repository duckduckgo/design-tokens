import { formats, transformGroups, logBrokenReferenceLevels, logVerbosityLevels, logWarningLevels } from 'style-dictionary/enums';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import themeColorsClasses from './src/formats/sp-theme-colors-classes.js';
import componentScss from './src/formats/component-scss.js';
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
                    // options: {
                    //     outputReferences: true,
                    // },
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
                ...componentFileEntries,
            ],
            options: {
                ...fileHeader,
            },
        },
    },
};
