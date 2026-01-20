import { DesignToken } from 'style-dictionary/types';

const themeColors: DesignToken = {
    $type: 'color',
    // This is called Default (Web) in Figma
    // The difference between a theme and a motif is that a theme will typically apply to whole page
    // and a motif will typically apply to a specific component or section of a page
    // motifs will still have light and dark styling
    // These are the names of the Theme values in Figma, the aim is to use these sparingly, mostly to be referenced by global page styles or component styles
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
                glowPrimary: { $value: '{color.pondwater.60At.20}' },
                glowSecondary: { $value: '{color.pondwater.60At.12}' },
                textPrimary: { $value: '{color.pondwater.60}' },
                textSecondary: { $value: '{color.pondwater.70}' },
                textTertiary: { $value: '{color.pondwater.80}' },
                contentPrimary: { $value: '{color.white}' },
                contentSecondary: { $value: '{color.whiteAt.72}' },
                contentTertiary: { $value: '{color.whiteAt.48}' },
            },
            accentAlt: {
                primary: { $value: '{color.pondwater.10}' },
                secondary: { $value: '{color.pondwater.20}' },
                tertiary: { $value: '{color.pondwater.30}' },
                glowPrimary: { $value: '{color.pondwater.40At.20}' },
                glowSecondary: { $value: '{color.pondwater.40At.12}' },
                textPrimary: { $value: '{color.pondwater.70}' },
                textSecondary: { $value: '{color.pondwater.80}' },
                textTertiary: { $value: '{color.pondwater.90}' },
                contentPrimary: { $value: '{color.pondwater.90}' },
                contentSecondary: { $value: '{color.pondwater.90At.72}' },
                contentTertiary: { $value: '{color.pondwater.90At.48}' },
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
                    $value: '{color.blackAt.6}',
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
                    $value: `{color.red.50At.20}`,
                },
                glowSecondary: {
                    $value: `{color.red.50At.12}`,
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
        dark: {
            surface: {
                backdrop: {
                    $value: '{color.gray.111}',
                },
                canvas: {
                    $value: '{color.gray.100}',
                },
                primary: {
                    $value: '{color.eggshell.100}',
                },
                secondary: {
                    $value: '{color.eggshell.90}',
                },
                tertiary: {
                    $value: '{color.gray.80}',
                },
                // decorations are used for things like shadows, hr lines
                decoration: {
                    primary: {
                        $value: '{color.whiteAt.6}',
                    },
                    secondary: {
                        $value: '{color.whiteAt.12}',
                    },
                    tertiary: {
                        $value: '{color.whiteAt.24}',
                    },
                },
            },
            container: {
                primaryBackgroundColor: {
                    $value: '{color.whiteAt.3}',
                },
                secondaryBackgroundColor: {
                    $value: '{color.whiteAt.6}',
                },
                tertiaryBackgroundColor: {
                    $value: '{color.whiteAt.9}',
                },
                primaryBorderColor: {
                    $value: '{color.whiteAt.6}',
                },
                secondaryBorderColor: {
                    $value: '{color.whiteAt.9}',
                },
                tertiaryBorderColor: {
                    $value: '{color.whiteAt.12}',
                },
            },
            text: {
                primary: {
                    $value: '{color.white}',
                },
                secondary: {
                    $value: '{color.whiteAt.60}',
                },
                tertiary: {
                    $value: '{color.whiteAt.36}',
                },
            },
            icons: {
                primary: {
                    $value: '{color.white}',
                },
                secondary: {
                    $value: '{color.whiteAt.60}',
                },
                tertiary: {
                    $value: '{color.whiteAt.36}',
                },
            },
            accent: {
                primary: { $value: '{color.pondwater.30}' },
                secondary: { $value: '{color.pondwater.40}' },
                tertiary: { $value: '{color.pondwater.50}' },
                quaternary: { $value: '{color.pondwater.60}' },
                glowPrimary: { $value: '{color.pondwater.40At.20}' },
                glowSecondary: { $value: '{color.pondwater.40At.12}' },
                textPrimary: { $value: '{color.pondwater.30}' },
                textSecondary: { $value: '{color.pondwater.40}' },
                textTertiary: { $value: '{color.pondwater.50}' },
                contentPrimary: { $value: '{color.pondwater.100}' },
                contentSecondary: { $value: '{color.pondwater.100At.72}' },
                contentTertiary: { $value: '{color.pondwater.100At.48}' },
            },
            accentAlt: {
                primary: { $value: '{color.pondwater.60}' },
                secondary: { $value: '{color.pondwater.70}' },
                tertiary: { $value: '{color.pondwater.80}' },
                glowPrimary: { $value: '{color.pondwater.20At.20}' },
                glowSecondary: { $value: '{color.pondwater.20At.12}' },
                textPrimary: { $value: '{color.pondwater.20}' },
                textSecondary: { $value: '{color.pondwater.30}' },
                textTertiary: { $value: '{color.pondwater.40}' },
                contentPrimary: { $value: '{color.pondwater.0}' },
                contentSecondary: { $value: '{color.pondwater.0At.72}' },
                contentTertiary: { $value: '{color.pondwater.0At.48}' },
            },
            control: {
                fillPrimary: {
                    $value: '{color.whiteAt.12}',
                },
                fillSecondary: {
                    $value: '{color.whiteAt.18}',
                },
                fillTertiary: {
                    $value: '{color.whiteAt.24}',
                },
                borderPrimary: {
                    $value: '{color.whiteAt.36}',
                },
                borderSecondary: {
                    $value: '{color.whiteAt.64}',
                },
                borderTertiary: {
                    $value: '{color.whiteAt.72}',
                },
                borderQuaternary: {
                    $value: '{color.whiteAt.80}',
                },
            },
            controlRaised: {
                fillPrimary: {
                    $value: '{color.whiteAt.18}',
                },
                backdrop: {
                    $value: '{color.whiteAt.12}',
                },
            },
            highlight: {
                primary: {
                    $value: '{color.whiteAt.12}',
                },
            },
            tone: {
                brighten: {
                    $value: `{color.whiteAt.6}`,
                },
                darken: {
                    $value: `{color.blackAt.12}`,
                },
            },
            shadow: {
                primary: {
                    $value: '{color.blackAt.16}',
                },
                secondary: {
                    $value: '{color.blackAt.24}',
                },
                tertiary: {
                    $value: '{color.blackAt.32}',
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
                    $value: `{color.red.50At.20}`,
                },
                glowSecondary: {
                    $value: `{color.red.50At.12}`,
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
                    $value: `{color.black}`,
                },
                contentSecondary: {
                    $value: `{color.blackAt.90}`,
                },
                contentTertiary: {
                    $value: `{color.blackAt.60}`,
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
