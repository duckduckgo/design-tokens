import { transformGroups, logBrokenReferenceLevels, logVerbosityLevels, logWarningLevels } from 'style-dictionary/enums';
import duckaiExtraColorsJs from './src/formats/duckai-extracolors-js.js';
import fileHeader from './dist/src/utils/file-header.js';

export default {
    source: [
        'dist/src/properties/web/base/colors.{js,json}',
        'dist/src/properties/web/base/*.{js,json}',
        'dist/src/properties/web/theme/*.{js,json}',
        'dist/src/properties/web/components/*.{js,json}',
        'dist/src/properties/web/serp/*.{js,json}',
        'dist/src/properties/web/duckai/*.{js,json}',
    ],
    hooks: {
        formats: {
            'duckai-extracolors-js': duckaiExtraColorsJs,
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
        duckai: {
            prefix: 'duckai',
            transformGroup: transformGroups.css,
            buildPath: 'build/',
            files: [
                {
                    destination: 'duckai/extra-colors.js',
                    format: 'duckai-extracolors-js',
                    filter: (token) => token.filePath?.includes('/duckai/'),
                    options: {
                        showFileHeader: true,
                        refPrefix: 'ds',
                        exportName: 'duckaiExtraColors',
                    },
                },
            ],
            options: {
                ...fileHeader,
            },
        },
    },
};
