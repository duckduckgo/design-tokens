import { formats, logBrokenReferenceLevels, logVerbosityLevels, logWarningLevels, transforms } from 'style-dictionary/enums';
import appleSharedColorPaletteSwift from './src/formats/apple-shared-color-palette-swift.js';
import fileHeader from './dist/src/utils/file-header.js';

// Keys under `color-theme` in src/properties/native-apps/theme.ts
const SHARED_PALETTES = ['default', 'coolGray', 'desert', 'green', 'orange', 'rose', 'slateBlue', 'violet'];

const paletteFileName = (palette) => (palette === 'default' ? 'Latest' : palette.charAt(0).toUpperCase() + palette.slice(1));

export default {
    source: ['dist/src/properties/base/colors.{js,json}', 'dist/src/properties/native-apps/theme.{js,json}'],
    hooks: {
        formats: {
            'apple/shared-color-palette-swift': appleSharedColorPaletteSwift,
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
        appleBrowsers: {
            // SwiftUI Color (rather than the ios-swift group's UIColor) so the output compiles on both iOS and macOS
            transforms: [transforms.attributeCti, transforms.nameCamel, transforms.colorColorSwiftUI],
            buildPath: 'build/apple-browsers/',
            files: [
                {
                    destination: 'DesignSystemColors.swift',
                    format: formats.iosSwiftEnumSwift,
                    filter: (token) => token.filePath?.includes('base/colors'),
                    options: {
                        className: 'DesignSystemColors',
                        import: ['SwiftUI'],
                        accessControl: 'public',
                        showFileHeader: true,
                    },
                },
            ],
            options: {
                ...fileHeader,
                showFileHeader: true,
            },
        },
        // Mirrors DesignResourcesKit/Colors/SharedPalettes in apple-browsers.
        // No color transform: the format reads the authored hex/rgba values directly.
        appleBrowsersSharedPalettes: {
            transforms: [transforms.nameCamel],
            buildPath: 'build/apple-browsers/SharedPalettes/',
            files: SHARED_PALETTES.map((palette) => ({
                destination: `${paletteFileName(palette)}ColorPalette.swift`,
                format: 'apple/shared-color-palette-swift',
                filter: (token) => token.path[0] === 'color-theme' && token.path[1] === palette,
                options: { palette },
            })),
        },
    },
};
