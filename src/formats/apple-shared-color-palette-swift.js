/**
 * Custom Style Dictionary format that outputs a macOS `SharedColorPaletteDefinition`
 * struct, matching the files in apple-browsers'
 * SharedPackages/Infrastructure/DesignResourcesKit/Sources/DesignResourcesKit/Colors/SharedPalettes.
 *
 * Tokens are read from `color-theme.<palette>.<light|dark>.*` and each light/dark pair
 * becomes one `static let <name> = DynamicColor(lightHex:, lightOpacityHex:, darkHex:, darkOpacityHex:)`.
 * Opacity arguments are omitted when the color is fully opaque.
 *
 * Options (via file.options):
 *   palette:       string  – key under `color-theme` to output, e.g. 'coolGray' (required)
 *   structName:    string  – Swift struct name (default: `${Palette}ColorPalette`, or 'LatestColorPalette' for 'default')
 *   copyrightYear: number  – year in the license header (default: 2025)
 */

const FIGMA_URL = 'https://www.figma.com/design/lowzSNK3XysASQ1urGCZFp/Browser-Color-Themes?node-id=504-17677&m=dev';

// Token paths that don't map onto the Swift names by plain camelCasing.
const NAME_OVERRIDES = {
    'input.fieldPrimaryBackgroundColor': 'unifiedInputFieldFillPrimary',
    'input.fieldSecondaryBackgroundColor': 'unifiedInputFieldFillSecondary',
    'input.control.primaryBackgroundColor': 'unifiedInputControlFillPrimary',
    'input.control.secondaryBackgroundColor': 'unifiedInputControlFillSecondary',
    'input.control.shadowPrimary': 'unifiedInputControlShadowPrimary',
};

// Leading path segments that are named differently in Swift.
const SEGMENT_RENAMES = {
    control: 'controls',
    input: 'unifiedInput',
};

// Hand-maintained colors that aren't part of the Figma themes. LatestColorPalette is the
// baseline; the other palettes inherit `destructiveGlow` from it.
const NOT_SPECIALIZED = `    static let alertGreen = DynamicColor(lightColor: RebrandingColor.Green.green40, darkColor: RebrandingColor.Green.green40)
    static let alertYellow = DynamicColor(lightColor: .alertYellow, darkColor: .alertYellow)
    static let shieldPrivacy = DynamicColor(lightColor: RebrandingColor.Lilypad.lilypad70, darkColor: RebrandingColor.Lilypad.lilypad50)

    static let buttonsWhite = DynamicColor(lightColor: .white, darkColor: .black)

    static let buttonsPrimaryDefault = DynamicColor(lightColor: .blue50, darkColor: .blue30)
    static let buttonsPrimaryPressed = DynamicColor(lightColor: .blue70, darkColor: .blue50)
    static let buttonsPrimaryDisabled = DynamicColor(lightColor: .shade(0.06), darkColor: .tint(0.18))
    static let buttonsPrimaryText = DynamicColor(lightColor: .white, darkColor: .shade(0.84))
    static let buttonsPrimaryTextDisabled = DynamicColor(lightColor: .shade(0.36), darkColor: .tint(0.36))

    static let buttonsSecondaryFillDefault = DynamicColor(lightColor: .shade(0.06), darkColor: .tint(0.18))
    static let buttonsSecondaryFillPressed = DynamicColor(lightColor: .shade(0.18), darkColor: .tint(0.3))
    static let buttonsSecondaryFillDisabled = DynamicColor(lightColor: .shade(0.06), darkColor: .tint(0.18))
    static let buttonsSecondaryFillText = DynamicColor(lightColor: .shade(0.84), darkColor: .white)
    static let buttonsSecondaryFillTextDisabled = DynamicColor(lightColor: .shade(0.36), darkColor: .tint(0.36))

    static let lines = DynamicColor(lightHex: 0x1F1F1F, lightOpacity: 0.09, darkHex: 0xF9F9F9, darkOpacity: 0.12)`;

const DESTRUCTIVE_GLOW = `    static let destructiveGlow = DynamicColor(lightHex: 0xee1025, lightOpacityHex: 0x33, darkHex: 0xee1025, darkOpacityHex: 0x33)`;

const LATEST_ONLY = `    static let spinnerStart = DynamicColor(lightHex: 0x000000, lightOpacity: 0.42, darkHex: 0xffffff, darkOpacity: 0.6)
    static let spinnerFinal = DynamicColor(lightColor: .green60, darkColor: .green30)`;

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

function swiftName(pathSegments) {
    const key = pathSegments.join('.');
    if (NAME_OVERRIDES[key]) return NAME_OVERRIDES[key];

    const [first, ...rest] = pathSegments;
    return [SEGMENT_RENAMES[first] ?? first, ...rest.map(capitalize)].join('');
}

const toHexByte = (n) => n.toString(16).padStart(2, '0');

/**
 * Parses '#rrggbb', '#rrggbbaa' or 'rgba(r, g, b, a)' into { hex: 'rrggbb', opacity: 'aa' | null }.
 * Alpha is floored to a byte, matching the Figma export used for the existing palettes (0.96 -> 0xf4).
 */
function parseColor(value) {
    const hexMatch = /^#([0-9a-f]{6})([0-9a-f]{2})?$/i.exec(value);
    if (hexMatch) {
        const opacity = hexMatch[2]?.toLowerCase();
        return { hex: hexMatch[1].toLowerCase(), opacity: opacity && opacity !== 'ff' ? opacity : null };
    }

    const rgbaMatch = /^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*([\d.]+)\s*)?\)$/i.exec(value);
    if (rgbaMatch) {
        const [, r, g, b, a = '1'] = rgbaMatch;
        const alpha = Math.floor(Number(a) * 255 + 1e-9);
        return { hex: [r, g, b].map((c) => toHexByte(Number(c))).join(''), opacity: alpha < 255 ? toHexByte(alpha) : null };
    }

    throw new Error(`apple/shared-color-palette-swift: unsupported color value "${value}"`);
}

function dynamicColor(light, dark) {
    const args = [`lightHex: 0x${light.hex}`];
    if (light.opacity) args.push(`lightOpacityHex: 0x${light.opacity}`);
    args.push(`darkHex: 0x${dark.hex}`);
    if (dark.opacity) args.push(`darkOpacityHex: 0x${dark.opacity}`);
    return `DynamicColor(${args.join(', ')})`;
}

function licenseHeader(fileName, year) {
    return `//
//  ${fileName}
//
//  Copyright © ${year} DuckDuckGo. All rights reserved.
//
//  Licensed under the Apache License, Version 2.0 (the "License");
//  you may not use this file except in compliance with the License.
//  You may obtain a copy of the License at
//
//  http://www.apache.org/licenses/LICENSE-2.0
//
//  Unless required by applicable law or agreed to in writing, software
//  distributed under the License is distributed on an "AS IS" BASIS,
//  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//  See the License for the specific language governing permissions and
//  limitations under the License.
//`;
}

export default async function appleSharedColorPaletteSwift({ dictionary, file, options }) {
    const { palette, copyrightYear = 2025 } = options;
    if (!palette) throw new Error('apple/shared-color-palette-swift: `palette` option is required');

    const isLatest = palette === 'default';
    const structName = options.structName ?? (isLatest ? 'LatestColorPalette' : `${capitalize(palette)}ColorPalette`);

    // Collect light/dark values keyed by Swift name
    const colors = new Map();
    for (const token of dictionary.allTokens) {
        const [root, tokenPalette, mode, ...rest] = token.path;
        if (root !== 'color-theme' || tokenPalette !== palette || (mode !== 'light' && mode !== 'dark')) continue;

        const name = swiftName(rest);
        if (!colors.has(name)) colors.set(name, {});
        colors.get(name)[mode] = parseColor(token.$value ?? token.value);
    }

    if (colors.size === 0) throw new Error(`apple/shared-color-palette-swift: no tokens found for palette "${palette}"`);

    const lines = [...colors.keys()].sort().map((name) => {
        const { light, dark } = colors.get(name);
        if (!light || !dark) throw new Error(`apple/shared-color-palette-swift: ${palette}.${name} is missing a light or dark value`);
        return `    static let ${name} = ${dynamicColor(light, dark)}`;
    });

    const footer = isLatest
        ? ['    // MARK: - Not Specialized', '', DESTRUCTIVE_GLOW, '', NOT_SPECIALIZED, LATEST_ONLY]
        : [
              '    // MARK: - Inherited from LatestColorPalette',
              '',
              DESTRUCTIVE_GLOW,
              '',
              '    // MARK: - Not Specialized',
              '',
              NOT_SPECIALIZED,
          ];

    return [
        licenseHeader(file.destination.split('/').pop(), copyrightYear),
        '',
        'import SwiftUI',
        '',
        isLatest ? '#if canImport(AppKit)' : '#if os(macOS)',
        '',
        `/// Autogenerated from [Figma](${FIGMA_URL})`,
        `struct ${structName}: SharedColorPaletteDefinition {`,
        ...lines,
        '',
        ...footer,
        '}',
        '',
        '#endif',
        '',
    ].join('\n');
}
