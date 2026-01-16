import { DesignToken } from 'style-dictionary/types';

const themeColors: DesignToken = {
    $type: 'color',
    // This is called Default (Web) in Figma
    // The difference between a theme and a motif is that a theme will typically apply to whole page
    // and a motif will typically apply to a specific component or section of a page
    // motifs will still have light and dark styling
    theme: {
        light: {
            surface: {
                backdrop: {
                    $value: '{color.white}',
                },
                canvas: {
                    $value: '{color.eggshell.0}',
                },
                primary: {
                    $value: '{color.eggshell.20}',
                },
                secondary: {
                    $value: '{color.eggshell.10}',
                },
                tertiary: {
                    $value: '{color.white}',
                },
                // decorations are used for things like shadows, hr lines
                decoration: {
                    primary: {
                        $value: '{color.blackAt.6}',
                    },
                    secondary: {
                        $value: '{color.blackAt.12}',
                    },
                    tertiary: {
                        $value: '{color.blackAt.16}',
                    },
                },
            },
            container: {
                primaryBackgroundColor: {
                    $value: '{color.blackAt.1}',
                },
                secondaryBackgroundColor: {
                    $value: '{color.blackAt.3}',
                },
                tertiaryBackgroundColor: {
                    $value: '{color.blackAt.6}',
                },
                primaryBorderColor: {
                    $value: '{color.blackAt.6}',
                },
                secondaryBorderColor: {
                    $value: '{color.blackAt.9}',
                },
                tertiaryBorderColor: {
                    $value: '{color.blackAt.12}',
                },
            },
            text: {
                primary: {
                    $value: '{color.blackAt.96}',
                },
                secondary: {
                    $value: '{color.blackAt.60}',
                },
                tertiary: {
                    $value: '{color.blackAt.36}',
                },
            },
            icons: {
                primary: {
                    $value: '{color.blackAt.84}',
                },
                secondary: {
                    $value: '{color.blackAt.60}',
                },
                tertiary: {
                    $value: '{color.blackAt.36}',
                },
            },
            accent: {
                primary: { $value: '{color.pondwater.60}' },
                secondary: { $value: '{color.pondwater.70}' },
                tertiary: { $value: '{color.pondwater.80}' },
                quaternary: { $value: '{color.gray.111}' },
                glowPrimary: { $value: '{color.pondwater60At.20}' },
                glowSecondary: { $value: '{color.pondwater60At.12}' },
                textPrimary: { $value: '{color.pondwater.60}' },
                textSecondary: { $value: '{color.pondwater.70}' },
                textTertiary: { $value: '{color.pondwater.80}' },
                contentPrimary: { $value: '{color.white}' },
                contentSecondary: { $value: '{color.whiteAt.70}' },
                contentTertiary: { $value: '{color.whiteAt.50}' },
            },
            accentAlt: {
                primary: { $value: '{color.pondwater.10}' },
                secondary: { $value: '{color.pondwater.20}' },
                tertiary: { $value: '{color.pondwater.30}' },
                glowPrimary: { $value: '{color.pondwater40At.20}' },
                glowSecondary: { $value: '{color.pondwater40At.12}' },
                textPrimary: { $value: '{color.pondwater.70}' },
                textSecondary: { $value: '{color.pondwater.80}' },
                textTertiary: { $value: '{color.pondwater.90}' },
                contentPrimary: { $value: '{color.pondwater.70}' },
                contentSecondary: { $value: '{color.whiteAt.80}' },
                contentTertiary: { $value: '{color.whiteAt.90}' },
            },
            control: {
                fillPrimary: {
                    $value: '{color.blackAt.6}',
                },
                fillSecondary: {
                    $value: '{color.blackAt.9}',
                },
                fillTertiary: {
                    $value: '{color.blackAt.12}',
                },
                borderPrimary: {
                    $value: '{color.blackAt.30}',
                },
                borderSecondary: {
                    $value: '{color.blackAt.48}',
                },
                borderTertiary: {
                    $value: '{color.blackAt.60}',
                },
                borderQuaternary: {
                    $value: '{color.blackAt.72}',
                },
            },
            controlRaised: {
                fillPrimary: {
                    $value: '{color.gray.0}',
                },
                backdrop: {
                    $value: '{color.blackAt.9}',
                },
            },
            highlight: {
                primary: {
                    $value: '{color.gray0At.24}',
                },
            },
            tone: {
                brighten: {
                    $value: `{color.gray0At.32}`,
                },
                darken: {
                    $value: `{color.blackAt.3}`,
                },
            },
            shadow: {
                primary: {
                    $value: '{color.blackAt.5}',
                },
                secondary: {
                    $value: '{color.blackAt.8}',
                },
                tertiary: {
                    $value: '{color.blackAt.16}',
                },
            },
            destructive: {
                primary: {
                    $value: `{color.red.50}`,
                },
                secondary: {
                    $value: `{color.red.60}`,
                },
                tertiary: {
                    $value: `{color.red.70}`,
                },
                glowPrimary: {
                    $value: `{color.red50At.20}`,
                },
                glowSecondary: {
                    $value: `{color.red50At.12}`,
                },
                textPrimary: {
                    $value: `{color.red.50}`,
                },
                textSecondary: {
                    $value: `{color.red.60}`,
                },
                textTertiary: {
                    $value: `{color.red.70}`,
                },
                contentPrimary: {
                    $value: `{color.white}`,
                },
                contentSecondary: {
                    $value: `{color.whiteAt.90}`,
                },
                contentTertiary: {
                    $value: `{color.whiteAt.60}`,
                },
            },
            status: {
                green: { $value: `{color.green40}` },
                yellow: { $value: '{color.pollen.40}' },
                red: { $value: '{color.red.50}' },
            },
        },
    },
};

export default themeColors;
