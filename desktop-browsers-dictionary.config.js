import { transformGroups, logBrokenReferenceLevels, logVerbosityLevels, logWarningLevels } from 'style-dictionary/enums';
import cssVariablesShadowDom from './src/formats/css-variables-shadow-dom.js';
import fileHeader from './dist/src/utils/file-header.js';

export default {
    source: ['dist/src/properties/web/base/sds-colors.js', 'dist/src/properties/web/desktop-browsers/theme.js'],
    hooks: {
        formats: {
            'css/variables-shadow-dom': cssVariablesShadowDom,
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
