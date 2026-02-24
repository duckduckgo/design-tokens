import { transformGroups, logBrokenReferenceLevels, logVerbosityLevels, logWarningLevels } from 'style-dictionary/enums';
import onboardingThemeClasses from './src/formats/onboarding-theme-classes.js';
import fileHeader from './dist/src/utils/file-header.js';

export default {
    source: ['dist/src/properties/web/base/colors.{js,json}', 'dist/src/properties/web/desktop-browsers/onboarding.{js,json}'],
    hooks: {
        formats: {
            'onboarding-theme-classes': onboardingThemeClasses,
        },
    },
    log: {
        warnings: logWarningLevels.warn,
        verbosity: logVerbosityLevels.verbose,
        errors: {
            brokenReferences: logBrokenReferenceLevels.throw,
        },
    },
    platforms: {
        css: {
            prefix: 'ds',
            transformGroup: transformGroups.css,
            buildPath: 'build/',
            files: [
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
