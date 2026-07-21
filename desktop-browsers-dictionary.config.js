import { transformGroups, logBrokenReferenceLevels, logVerbosityLevels, logWarningLevels } from 'style-dictionary/enums';
import cssVariablesShadowDom from './src/formats/css-variables-shadow-dom.js';
import onboardingThemeClasses from './src/formats/css-onboarding-theme-classes.js';
import fileHeader from './dist/src/utils/file-header.js';

export default {
    source: [
        'dist/src/properties/web/theme/colors.js',
        'dist/src/properties/web/base/*.{js,json}',
        'dist/src/properties/web/desktop-browsers/theme.js',
        'dist/src/properties/web/base/colors.{js,json}',
        'dist/src/properties/web/desktop-browsers/onboarding.{js,json}',
        'dist/src/properties/web/desktop-browsers/next-steps-badge.{js,json}',
    ],
    hooks: {
        formats: {
            'css/variables-shadow-dom': cssVariablesShadowDom,
            'onboarding-theme-classes': onboardingThemeClasses,
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
        css: {
            prefix: 'ds',
            transformGroup: transformGroups.css,
            buildPath: 'build/',
            files: [
                {
                    destination: 'desktop-browsers/tokens.css',
                    format: 'css/variables-shadow-dom',
                    // base/colors and theme/colors are intentionally not exposed here;
                    // onboarding and next-steps-badge are emitted as standalone files below.
                    filter: (token) =>
                        !token.filePath?.includes('base/colors') &&
                        !token.filePath?.includes('desktop-browsers/onboarding') &&
                        !token.filePath?.includes('desktop-browsers/next-steps-badge') &&
                        !token.filePath?.includes('theme/colors'),
                    options: {
                        outputReferences: true,
                        showFileHeader: true,
                    },
                },
                {
                    destination: 'desktop-browsers/next-steps-badge.css',
                    format: 'css/variables-shadow-dom',
                    filter: (token) => token.filePath?.includes('desktop-browsers/next-steps-badge'),
                    options: {
                        outputReferences: false,
                        showFileHeader: true,
                    },
                },
                {
                    destination: 'desktop-browsers/onboarding.css',
                    format: 'onboarding-theme-classes',
                    options: {
                        outputReferences: false,
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
