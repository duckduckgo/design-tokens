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
                contrast: {
                    $value: '{color.black}',
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
                    comment: 'Maps to Fill-Primary in Figma',
                },
                secondaryBackgroundColor: {
                    $value: '{color.blackAt.3}',
                    comment: 'Maps to Fill-Secondary in Figma',
                },
                tertiaryBackgroundColor: {
                    $value: '{color.blackAt.6}',
                    comment: 'Maps to Fill-Tertiary in Figma',
                },
                primaryBorderColor: {
                    $value: '{color.blackAt.6}',
                    comment: 'Maps to Border-Primary in Figma',
                },
                secondaryBorderColor: {
                    $value: '{color.blackAt.9}',
                    comment: 'Maps to Border-Secondary in Figma',
                },
                tertiaryBorderColor: {
                    $value: '{color.blackAt.12}',
                    comment: 'Maps to Border-Tertiary in Figma',
                },
            },
            text: {
                primary: {
                    $value: '{color.blackAt.96}',
                },
                secondary: {
                    $value: '{color.blackAt.66}',
                },
                tertiary: {
                    $value: '{color.blackAt.36}',
                },
            },
            icons: {
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
            accent: {
                primary: { $value: '{color.pondwater.60}' },
                secondary: { $value: '{color.pondwater.70}' },
                tertiary: { $value: '{color.pondwater.80}' },
                quaternary: { $value: '{color.pondwater.90}' },
                glowPrimary: { $value: '{color.pondwater.60At.20}' },
                glowSecondary: { $value: '{color.pondwater.60At.12}' },
                primaryTextColor: { $value: '{color.pondwater.60}', comment: 'For standalone text elements on surface or containers' },
                secondaryTextColor: { $value: '{color.pondwater.70}', comment: 'For standalone text elements on surface or containers' },
                tertiaryTextColor: { $value: '{color.pondwater.80}', comment: 'For standalone text elements on surface or containers' },
                primaryContentColor: { $value: '{color.white}', comment: 'For text elements on top of accent backgrounds' },
                secondaryContentColor: { $value: '{color.whiteAt.72}', comment: 'For text elements on top of accent backgrounds' },
                tertiaryContentColor: { $value: '{color.whiteAt.48}', comment: 'For text elements on top of accent backgrounds' },
            },
            accentAlt: {
                primary: { $value: '{color.pondwater.10}' },
                secondary: { $value: '{color.pondwater.20}' },
                tertiary: { $value: '{color.pondwater.30}' },
                glowPrimary: { $value: '{color.pondwater.40At.20}' },
                glowSecondary: { $value: '{color.pondwater.40At.12}' },
                primaryTextColor: { $value: '{color.pondwater.70}', comment: 'For standalone text elements on surface or containers' },
                secondaryTextColor: { $value: '{color.pondwater.80}', comment: 'For standalone text elements on surface or containers' },
                tertiaryTextColor: { $value: '{color.pondwater.90}', comment: 'For standalone text elements on surface or containers' },
                primaryContentColor: { $value: '{color.pondwater.90}', comment: 'For text elements on top of accent backgrounds' },
                secondaryContentColor: { $value: '{color.pondwater.90At.72}', comment: 'For text elements on top of accent backgrounds' },
                tertiaryContentColor: { $value: '{color.pondwater.90At.48}', comment: 'For text elements on top of accent backgrounds' },
            },
            control: {
                primaryBackgroundColor: {
                    $value: '{color.blackAt.6}',
                },
                secondaryBackgroundColor: {
                    $value: '{color.blackAt.9}',
                },
                tertiaryBackgroundColor: {
                    $value: '{color.blackAt.12}',
                },
                primaryBorderColor: {
                    $value: '{color.blackAt.30}',
                },
                secondaryBorderColor: {
                    $value: '{color.blackAt.48}',
                },
                tertiaryBorderColor: {
                    $value: '{color.blackAt.60}',
                },
                quaternaryBorderColor: {
                    $value: '{color.blackAt.72}',
                },
            },
            controlSubtle: {
                primaryBorderColor: {
                    $value: '{color.blackAt.12}',
                },
                secondaryBorderColor: {
                    $value: '{color.blackAt.18}',
                },
                tertiaryBorderColor: {
                    $value: '{color.blackAt.36}',
                },
            },
            controlRaised: {
                primaryBackgroundColor: {
                    $value: '{color.white}',
                },
                secondaryBackgroundColor: {
                    $value: '{color.gray.10}',
                },
                tertiaryBackgroundColor: {
                    $value: '{color.gray.20}',
                },
                backdrop: {
                    $value: '{color.blackAt.9}',
                },
            },
            input: {
                primaryBackgroundColor: {
                    $value: '{color.white}',
                },
            },
            highlight: {
                primary: {
                    $value: '{color.gray.0At.24}',
                },
            },
            tone: {
                brightenPrimary: {
                    $value: `{color.gray.0At.32}`,
                    comment: 'Maps to Tint-Primary in Figma',
                },
                brightenSecondary: {
                    $value: `{color.gray.0At.60}`,
                    comment: 'Maps to Tint-Secondary in Figma',
                },
                darkenPrimary: {
                    $value: `{color.blackAt.3}`,
                    comment: 'Maps to Shade-Primary in Figma',
                },
            },
            shadow: {
                primaryColor: {
                    $value: '{color.blackAt.6}',
                },
                secondaryColor: {
                    $value: '{color.blackAt.8}',
                },
                tertiaryColor: {
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
                    $value: `{color.red.40At.20}`,
                },
                glowSecondary: {
                    $value: `{color.red.40At.12}`,
                },
                primaryTextColor: {
                    $value: `{color.red.60}`,
                },
                secondaryTextColor: {
                    $value: `{color.red.70}`,
                },
                tertiaryTextColor: {
                    $value: `{color.red.80}`,
                },
                primaryContentColor: {
                    $value: `{color.white}`,
                },
                secondaryContentColor: {
                    $value: `{color.whiteAt.90}`,
                },
                tertiaryContentColor: {
                    $value: `{color.whiteAt.60}`,
                },
            },
            status: {
                green: { $value: `{color.green.40}` },
                greenText: { $value: `{color.green.60}` },
                yellow: { $value: '{color.pollen.50}' },
                red: { $value: '{color.red.50}' },
                gray: { $value: '{color.gray.50}' },
            },
        },
        dark: {
            surface: {
                backdrop: {
                    $value: '{color.gray.111}',
                },
                canvas: {
                    $value: '{color.eggshell.100}',
                },
                primary: {
                    $value: '{color.eggshell.100}',
                },
                secondary: {
                    $value: '{color.eggshell.90}',
                },
                tertiary: {
                    $value: '{color.eggshell.80}',
                },
                contrast: {
                    $value: '{color.eggshell.20}',
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
                    $value: '{color.whiteAt.66}',
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
                primary: { $value: '{color.pondwater.40}' },
                secondary: { $value: '{color.pondwater.50}' },
                tertiary: { $value: '{color.pondwater.60}' },
                quaternary: { $value: '{color.pondwater.60}' },
                glowPrimary: { $value: '{color.pondwater.40At.20}' },
                glowSecondary: { $value: '{color.pondwater.40At.12}' },
                primaryTextColor: { $value: '{color.pondwater.40}' },
                secondaryTextColor: { $value: '{color.pondwater.50}' },
                tertiaryTextColor: { $value: '{color.pondwater.60}' },
                primaryContentColor: { $value: '{color.pondwater.100}' },
                secondaryContentColor: { $value: '{color.pondwater.100At.72}' },
                tertiaryContentColor: { $value: '{color.pondwater.100At.48}' },
            },
            accentAlt: {
                primary: { $value: '{color.pondwater.60}' },
                secondary: { $value: '{color.pondwater.70}' },
                tertiary: { $value: '{color.pondwater.80}' },
                glowPrimary: { $value: '{color.pondwater.20At.20}' },
                glowSecondary: { $value: '{color.pondwater.20At.12}' },
                primaryTextColor: { $value: '{color.pondwater.20}' },
                secondaryTextColor: { $value: '{color.pondwater.30}' },
                tertiaryTextColor: { $value: '{color.pondwater.40}' },
                primaryContentColor: { $value: '{color.pondwater.0}' },
                secondaryContentColor: { $value: '{color.pondwater.0At.72}' },
                tertiaryContentColor: { $value: '{color.pondwater.0At.48}' },
            },
            control: {
                primaryBackgroundColor: {
                    $value: '{color.whiteAt.12}',
                },
                secondaryBackgroundColor: {
                    $value: '{color.whiteAt.18}',
                },
                tertiaryBackgroundColor: {
                    $value: '{color.whiteAt.24}',
                },
                primaryBorderColor: {
                    $value: '{color.whiteAt.36}',
                },
                secondaryBorderColor: {
                    $value: '{color.whiteAt.64}',
                },
                tertiaryBorderColor: {
                    $value: '{color.whiteAt.72}',
                },
                quaternaryBorderColor: {
                    $value: '{color.whiteAt.80}',
                },
            },
            controlSubtle: {
                primaryBorderColor: {
                    $value: '{color.whiteAt.12}',
                },
                secondaryBorderColor: {
                    $value: '{color.whiteAt.18}',
                },
                tertiaryBorderColor: {
                    $value: '{color.whiteAt.36}',
                },
            },
            controlRaised: {
                primaryBackgroundColor: {
                    $value: '{color.gray.90}',
                },
                secondaryBackgroundColor: {
                    $value: '{color.gray.70}',
                },
                tertiaryBackgroundColor: {
                    $value: '{color.gray.50}',
                },
                backdrop: {
                    $value: '{color.whiteAt.12}',
                },
            },
            input: {
                primaryBackgroundColor: {
                    $value: '{color.eggshell.80}',
                },
            },
            highlight: {
                primary: {
                    $value: '{color.whiteAt.12}',
                },
            },
            tone: {
                brightenPrimary: {
                    $value: `{color.whiteAt.6}`,
                },
                brightenSecondary: {
                    $value: `{color.whiteAt.12}`,
                },
                darkenPrimary: {
                    $value: `{color.blackAt.12}`,
                },
            },
            shadow: {
                primaryColor: {
                    $value: '{color.blackAt.16}',
                },
                secondaryColor: {
                    $value: '{color.blackAt.24}',
                },
                tertiaryColor: {
                    $value: '{color.blackAt.32}',
                },
            },
            destructive: {
                primary: {
                    $value: `{color.red.40}`,
                },
                secondary: {
                    $value: `{color.red.50}`,
                },
                tertiary: {
                    $value: `{color.red.60}`,
                },
                glowPrimary: {
                    $value: `{color.red.30At.20}`,
                },
                glowSecondary: {
                    $value: `{color.red.30At.12}`,
                },
                primaryTextColor: {
                    $value: `{color.red.30}`,
                },
                secondaryTextColor: {
                    $value: `{color.red.40}`,
                },
                tertiaryTextColor: {
                    $value: `{color.red.50}`,
                },
                primaryContentColor: {
                    $value: `{color.black}`,
                },
                secondaryContentColor: {
                    $value: `{color.blackAt.90}`,
                },
                tertiaryContentColor: {
                    $value: `{color.blackAt.60}`,
                },
            },
            status: {
                green: { $value: `{color.green.40}` },
                greenText: { $value: `{color.green.30}` },
                yellow: { $value: '{color.pollen.50}' },
                red: { $value: '{color.red.50}' },
                gray: { $value: '{color.gray.50}' },
            },
        },
    },
};

export default themeColors;
