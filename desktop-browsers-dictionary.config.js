import { transformGroups, logBrokenReferenceLevels, logVerbosityLevels, logWarningLevels } from 'style-dictionary/enums';
import cssVariablesShadowDom from './src/formats/css-variables-shadow-dom.js';
import onboardingThemeClasses from './src/formats/css-onboarding-theme-classes.js';
import fileHeader from './dist/src/utils/file-header.js';

export default {
    source: [
        'dist/src/properties/web/serp-legacy/sds-colors.js',
        'dist/src/properties/web/desktop-browsers/theme.js',
        'dist/src/properties/web/base/colors.{js,json}',
        'dist/src/properties/web/desktop-browsers/onboarding.{js,json}',
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
                    // Exclude base/colors and desktop-browsers/onboarding tokens
                    filter: (token) => !token.filePath?.includes('base/colors') && !token.filePath?.includes('desktop-browsers/onboarding'),
                    options: {
                        outputReferences: true,
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
