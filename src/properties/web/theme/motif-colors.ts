import { DesignToken } from 'style-dictionary/types';

// Motifs are mini-themes that will be used on sections of views
// Motifs include light and dark styling
// Motifs will include most of the values of a theme, minus status and destructive colors which are the same in all contexts
const motifColors: DesignToken = {
    $type: 'color',
    motif: {
        // Light motifs
        blossomLight: {
            surface: {
                backdrop: {
                    $value: '{color.white}',
                },
                canvas: {
                    $value: '{color.blossom.0}',
                },
                primary: {
                    $value: '{color.blossom.20}',
                },
                secondary: {
                    $value: '{color.blossom.10}',
                },
                tertiary: {
                    $value: '{color.blossom.0}',
                },
                contrast: {
                    $value: '{color.blossom.100At.96}',
                },
                // decorations are used for things like shadows, hr lines
                decoration: {
                    primary: {
                        $value: '{color.blossom.100At.6}',
                    },
                    secondary: {
                        $value: '{color.blossom.100At.12}',
                    },
                    tertiary: {
                        $value: '{color.blossom.100At.16}',
                    },
                },
            },
            container: {
                primaryBackgroundColor: {
                    $value: '{color.blossom.100At.1}',
                },
                secondaryBackgroundColor: {
                    $value: '{color.blossom.100At.3}',
                },
                tertiaryBackgroundColor: {
                    $value: '{color.blossom.100At.6}',
                },
                primaryBorderColor: {
                    $value: '{color.blossom.100At.6}',
                },
                secondaryBorderColor: {
                    $value: '{color.blossom.100At.9}',
                },
                tertiaryBorderColor: {
                    $value: '{color.blossom.100At.12}',
                },
            },
            text: {
                primary: {
                    $value: '{color.blossom.100At.96}',
                },
                secondary: {
                    $value: '{color.blossom.100At.66}',
                },
                tertiary: {
                    $value: '{color.blossom.100At.36}',
                },
            },
            icons: {
                primary: {
                    $value: '{color.blossom.100At.84}',
                },
                secondary: {
                    $value: '{color.blossom.100At.60}',
                },
                tertiary: {
                    $value: '{color.blossom.100At.36}',
                },
            },
            accent: {
                primary: { $value: '{color.blossom.80}' },
                secondary: { $value: '{color.blossom.90}' },
                tertiary: { $value: '{color.blossom.100}' },
                quaternary: { $value: '{color.blossom.100}' },
                glowPrimary: { $value: '{color.blossom.80At.20}' },
                glowSecondary: { $value: '{color.blossom.80At.12}' },
                primaryTextColor: { $value: '{color.blossom.80}' },
                secondaryTextColor: { $value: '{color.blossom.90}' },
                tertiaryTextColor: { $value: '{color.blossom.100}' },
                primaryContentColor: { $value: '{color.white}' },
                secondaryContentColor: { $value: '{color.whiteAt.72}' },
                tertiaryContentColor: { $value: '{color.whiteAt.48}' },
            },
            accentAlt: {
                primary: { $value: '{color.blossom.10}' },
                secondary: { $value: '{color.blossom.20}' },
                tertiary: { $value: '{color.blossom.30}' },
                glowPrimary: { $value: '{color.blossom.40At.20}' },
                glowSecondary: { $value: '{color.blossom.40At.12}' },
                primaryTextColor: { $value: '{color.blossom.80}' },
                secondaryTextColor: { $value: '{color.blossom.90}' },
                tertiaryTextColor: { $value: '{color.blossom.100}' },
                primaryContentColor: { $value: '{color.blossom.90}' },
                secondaryContentColor: { $value: '{color.blossom.90At.72}' },
                tertiaryContentColor: { $value: '{color.blossom.90At.48}' },
            },
            control: {
                primaryBackgroundColor: {
                    $value: '{color.blossom.80At.9}',
                },
                secondaryBackgroundColor: {
                    $value: '{color.blossom.80At.12}',
                },
                tertiaryBackgroundColor: {
                    $value: '{color.blossom.80At.18}',
                },
                primaryBorderColor: {
                    $value: '{color.blossom.80At.30}',
                },
                secondaryBorderColor: {
                    $value: '{color.blossom.80At.48}',
                },
                tertiaryBorderColor: {
                    $value: '{color.blossom.80At.60}',
                },
                quaternaryBorderColor: {
                    $value: '{color.blossom.80At.72}',
                },
            },
            controlSubtle: {
                primaryBorderColor: {
                    $value: '{color.blossom.80At.12}',
                },
                secondaryBorderColor: {
                    $value: '{color.blossom.80At.18}',
                },
                tertiaryBorderColor: {
                    $value: '{color.blossom.80At.36}',
                },
            },
            controlRaised: {
                primaryBackgroundColor: {
                    $value: '{color.blossom.0}',
                },
                backdrop: {
                    $value: '{color.blackAt.9}',
                },
            },
            highlight: {
                primary: {
                    $value: '{color.blossom.0At.24}',
                },
            },
            tone: {
                brightenPrimary: {
                    $value: `{color.blossom.0At.60}`,
                },
                brightenSecondary: {
                    $value: `{color.blossom.0At.84}`,
                },
                darkenPrimary: {
                    $value: `{color.blackAt.3}`,
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
        },
        lilypadLight: {
            surface: {
                backdrop: {
                    $value: '{color.white}',
                },
                canvas: {
                    $value: '{color.lilypad.0}',
                },
                primary: {
                    $value: '{color.lilypad.20}',
                },
                secondary: {
                    $value: '{color.lilypad.10}',
                },
                tertiary: {
                    $value: '{color.lilypad.0}',
                },
                contrast: {
                    $value: '{color.lilypad.100At.96}',
                },
                // decorations are used for things like shadows, hr lines
                decoration: {
                    primary: {
                        $value: '{color.lilypad.100At.6}',
                    },
                    secondary: {
                        $value: '{color.lilypad.100At.12}',
                    },
                    tertiary: {
                        $value: '{color.lilypad.100At.16}',
                    },
                },
            },
            container: {
                primaryBackgroundColor: {
                    $value: '{color.lilypad.100At.1}',
                },
                secondaryBackgroundColor: {
                    $value: '{color.lilypad.100At.3}',
                },
                tertiaryBackgroundColor: {
                    $value: '{color.lilypad.100At.6}',
                },
                primaryBorderColor: {
                    $value: '{color.lilypad.100At.6}',
                },
                secondaryBorderColor: {
                    $value: '{color.lilypad.100At.9}',
                },
                tertiaryBorderColor: {
                    $value: '{color.lilypad.100At.12}',
                },
            },
            text: {
                primary: {
                    $value: '{color.lilypad.100At.96}',
                },
                secondary: {
                    $value: '{color.lilypad.100At.66}',
                },
                tertiary: {
                    $value: '{color.lilypad.100At.36}',
                },
            },
            icons: {
                primary: {
                    $value: '{color.lilypad.100At.84}',
                },
                secondary: {
                    $value: '{color.lilypad.100At.60}',
                },
                tertiary: {
                    $value: '{color.lilypad.100At.36}',
                },
            },
            accent: {
                primary: { $value: '{color.lilypad.60}' },
                secondary: { $value: '{color.lilypad.70}' },
                tertiary: { $value: '{color.lilypad.80}' },
                quaternary: { $value: '{color.lilypad.90}' },
                glowPrimary: { $value: '{color.lilypad.60At.20}' },
                glowSecondary: { $value: '{color.lilypad.60At.12}' },
                primaryTextColor: { $value: '{color.lilypad.60}' },
                secondaryTextColor: { $value: '{color.lilypad.70}' },
                tertiaryTextColor: { $value: '{color.lilypad.80}' },
                primaryContentColor: { $value: '{color.white}' },
                secondaryContentColor: { $value: '{color.whiteAt.72}' },
                tertiaryContentColor: { $value: '{color.whiteAt.48}' },
            },
            accentAlt: {
                primary: { $value: '{color.lilypad.10}' },
                secondary: { $value: '{color.lilypad.20}' },
                tertiary: { $value: '{color.lilypad.30}' },
                glowPrimary: { $value: '{color.lilypad.40At.20}' },
                glowSecondary: { $value: '{color.lilypad.40At.12}' },
                primaryTextColor: { $value: '{color.lilypad.70}' },
                secondaryTextColor: { $value: '{color.lilypad.80}' },
                tertiaryTextColor: { $value: '{color.lilypad.90}' },
                primaryContentColor: { $value: '{color.lilypad.90}' },
                secondaryContentColor: { $value: '{color.lilypad.90At.72}' },
                tertiaryContentColor: { $value: '{color.lilypad.90At.48}' },
            },
            control: {
                primaryBackgroundColor: {
                    $value: '{color.lilypad.60At.9}',
                },
                secondaryBackgroundColor: {
                    $value: '{color.lilypad.60At.12}',
                },
                tertiaryBackgroundColor: {
                    $value: '{color.lilypad.60At.18}',
                },
                primaryBorderColor: {
                    $value: '{color.lilypad.60At.30}',
                },
                secondaryBorderColor: {
                    $value: '{color.lilypad.60At.48}',
                },
                tertiaryBorderColor: {
                    $value: '{color.lilypad.60At.60}',
                },
                quaternaryBorderColor: {
                    $value: '{color.lilypad.60At.72}',
                },
            },
            controlSubtle: {
                primaryBorderColor: {
                    $value: '{color.lilypad.60At.12}',
                },
                secondaryBorderColor: {
                    $value: '{color.lilypad.60At.18}',
                },
                tertiaryBorderColor: {
                    $value: '{color.lilypad.60At.36}',
                },
            },
            controlRaised: {
                primaryBackgroundColor: {
                    $value: '{color.lilypad.0}',
                },
                backdrop: {
                    $value: '{color.blackAt.9}',
                },
            },
            highlight: {
                primary: {
                    $value: '{color.lilypad.0At.24}',
                },
            },
            tone: {
                brightenPrimary: {
                    $value: `{color.lilypad.0At.60}`,
                },
                brightenSecondary: {
                    $value: `{color.lilypad.0At.84}`,
                },
                darkenPrimary: {
                    $value: `{color.blackAt.3}`,
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
        },
        mandarinLight: {
            surface: {
                backdrop: {
                    $value: '{color.white}',
                },
                canvas: {
                    $value: '{color.mandarin.0}',
                },
                primary: {
                    $value: '{color.mandarin.20}',
                },
                secondary: {
                    $value: '{color.mandarin.10}',
                },
                tertiary: {
                    $value: '{color.mandarin.0}',
                },
                contrast: {
                    $value: '{color.mandarin.100At.96}',
                },
                // decorations are used for things like shadows, hr lines
                decoration: {
                    primary: {
                        $value: '{color.mandarin.100At.6}',
                    },
                    secondary: {
                        $value: '{color.mandarin.100At.12}',
                    },
                    tertiary: {
                        $value: '{color.mandarin.100At.16}',
                    },
                },
            },
            container: {
                primaryBackgroundColor: {
                    $value: '{color.mandarin.100At.1}',
                },
                secondaryBackgroundColor: {
                    $value: '{color.mandarin.100At.3}',
                },
                tertiaryBackgroundColor: {
                    $value: '{color.mandarin.100At.6}',
                },
                primaryBorderColor: {
                    $value: '{color.mandarin.100At.6}',
                },
                secondaryBorderColor: {
                    $value: '{color.mandarin.100At.9}',
                },
                tertiaryBorderColor: {
                    $value: '{color.mandarin.100At.12}',
                },
            },
            text: {
                primary: {
                    $value: '{color.mandarin.100At.96}',
                },
                secondary: {
                    $value: '{color.mandarin.100At.66}',
                },
                tertiary: {
                    $value: '{color.mandarin.100At.36}',
                },
            },
            icons: {
                primary: {
                    $value: '{color.mandarin.100At.84}',
                },
                secondary: {
                    $value: '{color.mandarin.100At.60}',
                },
                tertiary: {
                    $value: '{color.mandarin.100At.36}',
                },
            },
            accent: {
                primary: { $value: '{color.mandarin.50}' },
                secondary: { $value: '{color.mandarin.60}' },
                tertiary: { $value: '{color.mandarin.70}' },
                quaternary: { $value: '{color.mandarin.80}' },
                glowPrimary: { $value: '{color.mandarin.50At.20}' },
                glowSecondary: { $value: '{color.mandarin.50At.12}' },
                primaryTextColor: { $value: '{color.mandarin.50}' },
                secondaryTextColor: { $value: '{color.mandarin.60}' },
                tertiaryTextColor: { $value: '{color.mandarin.70}' },
                primaryContentColor: { $value: '{color.white}' },
                secondaryContentColor: { $value: '{color.whiteAt.72}' },
                tertiaryContentColor: { $value: '{color.whiteAt.48}' },
            },
            accentAlt: {
                primary: { $value: '{color.mandarin.10}' },
                secondary: { $value: '{color.mandarin.20}' },
                tertiary: { $value: '{color.mandarin.30}' },
                glowPrimary: { $value: '{color.mandarin.40At.20}' },
                glowSecondary: { $value: '{color.mandarin.40At.12}' },
                primaryTextColor: { $value: '{color.mandarin.70}' },
                secondaryTextColor: { $value: '{color.mandarin.80}' },
                tertiaryTextColor: { $value: '{color.mandarin.90}' },
                primaryContentColor: { $value: '{color.mandarin.90}' },
                secondaryContentColor: { $value: '{color.mandarin.90At.72}' },
                tertiaryContentColor: { $value: '{color.mandarin.90At.48}' },
            },
            control: {
                primaryBackgroundColor: {
                    $value: '{color.mandarin.50At.9}',
                },
                secondaryBackgroundColor: {
                    $value: '{color.mandarin.50At.12}',
                },
                tertiaryBackgroundColor: {
                    $value: '{color.mandarin.50At.18}',
                },
                primaryBorderColor: {
                    $value: '{color.mandarin.50At.30}',
                },
                secondaryBorderColor: {
                    $value: '{color.mandarin.50At.48}',
                },
                tertiaryBorderColor: {
                    $value: '{color.mandarin.50At.60}',
                },
                quaternaryBorderColor: {
                    $value: '{color.mandarin.50At.72}',
                },
            },
            controlSubtle: {
                primaryBorderColor: {
                    $value: '{color.mandarin.50At.12}',
                },
                secondaryBorderColor: {
                    $value: '{color.mandarin.50At.18}',
                },
                tertiaryBorderColor: {
                    $value: '{color.mandarin.50At.36}',
                },
            },
            controlRaised: {
                primaryBackgroundColor: {
                    $value: '{color.mandarin.0}',
                },
                backdrop: {
                    $value: '{color.blackAt.9}',
                },
            },
            highlight: {
                primary: {
                    $value: '{color.mandarin.0At.24}',
                },
            },
            tone: {
                brightenPrimary: {
                    $value: `{color.mandarin.0At.60}`,
                },
                brightenSecondary: {
                    $value: `{color.mandarin.0At.84}`,
                },
                darkenPrimary: {
                    $value: `{color.blackAt.3}`,
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
        },
        pollenLight: {
            surface: {
                backdrop: {
                    $value: '{color.white}',
                },
                canvas: {
                    $value: '{color.pollen.0}',
                },
                primary: {
                    $value: '{color.pollen.20}',
                },
                secondary: {
                    $value: '{color.pollen.10}',
                },
                tertiary: {
                    $value: '{color.pollen.0}',
                },
                contrast: {
                    $value: '{color.pollen.100At.96}',
                },
                // decorations are used for things like shadows, hr lines
                decoration: {
                    primary: {
                        $value: '{color.pollen.100At.6}',
                    },
                    secondary: {
                        $value: '{color.pollen.100At.12}',
                    },
                    tertiary: {
                        $value: '{color.pollen.100At.16}',
                    },
                },
            },
            container: {
                primaryBackgroundColor: {
                    $value: '{color.pollen.100At.1}',
                },
                secondaryBackgroundColor: {
                    $value: '{color.pollen.100At.3}',
                },
                tertiaryBackgroundColor: {
                    $value: '{color.pollen.100At.6}',
                },
                primaryBorderColor: {
                    $value: '{color.pollen.100At.6}',
                },
                secondaryBorderColor: {
                    $value: '{color.pollen.100At.9}',
                },
                tertiaryBorderColor: {
                    $value: '{color.pollen.100At.12}',
                },
            },
            text: {
                primary: {
                    $value: '{color.pollen.100At.96}',
                },
                secondary: {
                    $value: '{color.pollen.100At.66}',
                },
                tertiary: {
                    $value: '{color.pollen.100At.36}',
                },
            },
            icons: {
                primary: {
                    $value: '{color.pollen.100At.84}',
                },
                secondary: {
                    $value: '{color.pollen.100At.60}',
                },
                tertiary: {
                    $value: '{color.pollen.100At.36}',
                },
            },
            accent: {
                primary: { $value: '{color.pollen.20}' },
                secondary: { $value: '{color.pollen.30}' },
                tertiary: { $value: '{color.pollen.40}' },
                quaternary: { $value: '{color.pollen.100}' },
                glowPrimary: { $value: '{color.pollen.40At.20}' },
                glowSecondary: { $value: '{color.pollen.40At.12}' },
                primaryTextColor: { $value: '{color.pollen.70}' },
                secondaryTextColor: { $value: '{color.pollen.80}' },
                tertiaryTextColor: { $value: '{color.pollen.90}' },
                primaryContentColor: { $value: '{color.pollen.80}' },
                secondaryContentColor: { $value: '{color.pollen.80At.72}' },
                tertiaryContentColor: { $value: '{color.pollen.80At.48}' },
            },
            accentAlt: {
                primary: { $value: '{color.pollen.10}' },
                secondary: { $value: '{color.pollen.20}' },
                tertiary: { $value: '{color.pollen.30}' },
                glowPrimary: { $value: '{color.pollen.50At.20}' },
                glowSecondary: { $value: '{color.pollen.50At.12}' },
                primaryTextColor: { $value: '{color.pollen.70}' },
                secondaryTextColor: { $value: '{color.pollen.80}' },
                tertiaryTextColor: { $value: '{color.pollen.90}' },
                primaryContentColor: { $value: '{color.pollen.90}' },
                secondaryContentColor: { $value: '{color.pollen.90At.72}' },
                tertiaryContentColor: { $value: '{color.pollen.90At.48}' },
            },
            control: {
                primaryBackgroundColor: {
                    $value: '{color.pollen.40At.28}',
                },
                secondaryBackgroundColor: {
                    $value: '{color.pollen.40At.40}',
                },
                tertiaryBackgroundColor: {
                    $value: '{color.pollen.40At.56}',
                },
                primaryBorderColor: {
                    $value: '{color.pollen.40At.30}',
                },
                secondaryBorderColor: {
                    $value: '{color.pollen.40At.48}',
                },
                tertiaryBorderColor: {
                    $value: '{color.pollen.40At.60}',
                },
                quaternaryBorderColor: {
                    $value: '{color.pollen.40At.72}',
                },
            },
            controlSubtle: {
                primaryBorderColor: {
                    $value: '{color.pollen.40At.12}',
                },
                secondaryBorderColor: {
                    $value: '{color.pollen.40At.18}',
                },
                tertiaryBorderColor: {
                    $value: '{color.pollen.40At.36}',
                },
            },
            controlRaised: {
                primaryBackgroundColor: {
                    $value: '{color.pollen.0}',
                },
                backdrop: {
                    $value: '{color.blackAt.9}',
                },
            },
            highlight: {
                primary: {
                    $value: '{color.pollen.0At.24}',
                },
            },
            tone: {
                brightenPrimary: {
                    $value: `{color.pollen.0At.60}`,
                },
                brightenSecondary: {
                    $value: `{color.pollen.0At.84}`,
                },
                darkenPrimary: {
                    $value: `{color.blackAt.3}`,
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
        },
        pondwaterLight: {
            surface: {
                backdrop: {
                    $value: '{color.white}',
                },
                canvas: {
                    $value: '{color.pondwater.0}',
                },
                primary: {
                    $value: '{color.pondwater.20}',
                },
                secondary: {
                    $value: '{color.pondwater.10}',
                },
                tertiary: {
                    $value: '{color.pondwater.0}',
                },
                contrast: {
                    $value: '{color.pondwater.100At.96}',
                },
                // decorations are used for things like shadows, hr lines
                decoration: {
                    primary: {
                        $value: '{color.pondwater.100At.6}',
                    },
                    secondary: {
                        $value: '{color.pondwater.100At.12}',
                    },
                    tertiary: {
                        $value: '{color.pondwater.100At.16}',
                    },
                },
            },
            container: {
                primaryBackgroundColor: {
                    $value: '{color.pondwater.100At.1}',
                },
                secondaryBackgroundColor: {
                    $value: '{color.pondwater.100At.3}',
                },
                tertiaryBackgroundColor: {
                    $value: '{color.pondwater.100At.6}',
                },
                primaryBorderColor: {
                    $value: '{color.pondwater.100At.6}',
                },
                secondaryBorderColor: {
                    $value: '{color.pondwater.100At.9}',
                },
                tertiaryBorderColor: {
                    $value: '{color.pondwater.100At.12}',
                },
            },
            text: {
                primary: {
                    $value: '{color.pondwater.100At.96}',
                },
                secondary: {
                    $value: '{color.pondwater.100At.66}',
                },
                tertiary: {
                    $value: '{color.pondwater.100At.36}',
                },
            },
            icons: {
                primary: {
                    $value: '{color.pondwater.100At.96}',
                },
                secondary: {
                    $value: '{color.pondwater.100At.60}',
                },
                tertiary: {
                    $value: '{color.pondwater.100At.36}',
                },
            },
            accent: {
                primary: { $value: '{color.pondwater.60}' },
                secondary: { $value: '{color.pondwater.70}' },
                tertiary: { $value: '{color.pondwater.80}' },
                quaternary: { $value: '{color.pondwater.90}' },
                glowPrimary: { $value: '{color.pondwater.60At.20}' },
                glowSecondary: { $value: '{color.pondwater.60At.12}' },
                primaryTextColor: { $value: '{color.pondwater.60}' },
                secondaryTextColor: { $value: '{color.pondwater.70}' },
                tertiaryTextColor: { $value: '{color.pondwater.80}' },
                primaryContentColor: { $value: '{color.white}' },
                secondaryContentColor: { $value: '{color.whiteAt.72}' },
                tertiaryContentColor: { $value: '{color.whiteAt.48}' },
            },
            accentAlt: {
                primary: { $value: '{color.pondwater.10}' },
                secondary: { $value: '{color.pondwater.20}' },
                tertiary: { $value: '{color.pondwater.30}' },
                glowPrimary: { $value: '{color.pondwater.40At.20}' },
                glowSecondary: { $value: '{color.pondwater.40At.12}' },
                primaryTextColor: { $value: '{color.pondwater.70}' },
                secondaryTextColor: { $value: '{color.pondwater.80}' },
                tertiaryTextColor: { $value: '{color.pondwater.90}' },
                primaryContentColor: { $value: '{color.pondwater.90}' },
                secondaryContentColor: { $value: '{color.pondwater.90At.72}' },
                tertiaryContentColor: { $value: '{color.pondwater.90At.48}' },
            },
            control: {
                primaryBackgroundColor: {
                    $value: '{color.pondwater.60At.9}',
                },
                secondaryBackgroundColor: {
                    $value: '{color.pondwater.60At.12}',
                },
                tertiaryBackgroundColor: {
                    $value: '{color.pondwater.60At.18}',
                },
                primaryBorderColor: {
                    $value: '{color.pondwater.60At.30}',
                },
                secondaryBorderColor: {
                    $value: '{color.pondwater.60At.48}',
                },
                tertiaryBorderColor: {
                    $value: '{color.pondwater.60At.60}',
                },
                quaternaryBorderColor: {
                    $value: '{color.pondwater.60At.72}',
                },
            },
            controlSubtle: {
                primaryBorderColor: {
                    $value: '{color.pondwater.60At.12}',
                },
                secondaryBorderColor: {
                    $value: '{color.pondwater.60At.18}',
                },
                tertiaryBorderColor: {
                    $value: '{color.pondwater.60At.36}',
                },
            },
            controlRaised: {
                primaryBackgroundColor: {
                    $value: '{color.pondwater.0}',
                },
                backdrop: {
                    $value: '{color.blackAt.9}',
                },
            },
            highlight: {
                primary: {
                    $value: '{color.pondwater.0At.24}',
                },
            },
            tone: {
                brightenPrimary: {
                    $value: `{color.pondwater.0At.60}`,
                },
                brightenSecondary: {
                    $value: `{color.pondwater.0At.84}`,
                },
                darkenPrimary: {
                    $value: `{color.blackAt.3}`,
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
        },
        // Dark motifs
        blossomDark: {
            surface: {
                backdrop: {
                    $value: '{color.gray.111}',
                },
                canvas: {
                    $value: '{color.blossom.100}',
                },
                primary: {
                    $value: '{color.blossom.100}',
                },
                secondary: {
                    $value: '{color.blossom.90}',
                },
                tertiary: {
                    $value: '{color.blossom.80}',
                },
                contrast: {
                    $value: '{color.whiteAt.96}',
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
                    $value: '{color.blossom.0At.3}',
                },
                secondaryBackgroundColor: {
                    $value: '{color.blossom.0At.6}',
                },
                tertiaryBackgroundColor: {
                    $value: '{color.blossom.0At.9}',
                },
                primaryBorderColor: {
                    $value: '{color.blossom.0At.6}',
                },
                secondaryBorderColor: {
                    $value: '{color.blossom.0At.9}',
                },
                tertiaryBorderColor: {
                    $value: '{color.blossom.0At.12}',
                },
            },
            text: {
                primary: {
                    $value: '{color.blossom.0}',
                },
                secondary: {
                    $value: '{color.blossom.0At.66}',
                },
                tertiary: {
                    $value: '{color.blossom.0At.36}',
                },
            },
            icons: {
                primary: {
                    $value: '{color.blossom.0}',
                },
                secondary: {
                    $value: '{color.blossom.0At.48}',
                },
                tertiary: {
                    $value: '{color.blossom.0At.24}',
                },
            },
            accent: {
                primary: { $value: '{color.blossom.30}' },
                secondary: { $value: '{color.blossom.40}' },
                tertiary: { $value: '{color.blossom.50}' },
                quaternary: { $value: '{color.blossom.60}' },
                glowPrimary: { $value: '{color.blossom.40At.20}' },
                glowSecondary: { $value: '{color.blossom.40At.12}' },
                primaryTextColor: { $value: '{color.blossom.30}' },
                secondaryTextColor: { $value: '{color.blossom.40}' },
                tertiaryTextColor: { $value: '{color.blossom.50}' },
                primaryContentColor: { $value: '{color.blossom.100}' },
                secondaryContentColor: { $value: '{color.blossom.100At.72}' },
                tertiaryContentColor: { $value: '{color.blossom.100At.48}' },
            },
            accentAlt: {
                primary: { $value: '{color.blossom.60}' },
                secondary: { $value: '{color.blossom.70}' },
                tertiary: { $value: '{color.blossom.80}' },
                glowPrimary: { $value: '{color.blossom.30At.20}' },
                glowSecondary: { $value: '{color.blossom.30At.12}' },
                primaryTextColor: { $value: '{color.blossom.20}' },
                secondaryTextColor: { $value: '{color.blossom.30}' },
                tertiaryTextColor: { $value: '{color.blossom.40}' },
                primaryContentColor: { $value: '{color.blossom.0}' },
                secondaryContentColor: { $value: '{color.blossom.0At.72}' },
                tertiaryContentColor: { $value: '{color.blossom.0At.48}' },
            },
            control: {
                primaryBackgroundColor: {
                    $value: '{color.blossom.10At.12}',
                },
                secondaryBackgroundColor: {
                    $value: '{color.blossom.10At.18}',
                },
                tertiaryBackgroundColor: {
                    $value: '{color.blossom.10At.24}',
                },
                primaryBorderColor: {
                    $value: '{color.blossom.10At.36}',
                },
                secondaryBorderColor: {
                    $value: '{color.blossom.10At.64}',
                },
                tertiaryBorderColor: {
                    $value: '{color.blossom.10At.72}',
                },
                quaternaryBorderColor: {
                    $value: '{color.blossom.10At.80}',
                },
            },
            controlSubtle: {
                primaryBorderColor: {
                    $value: '{color.blossom.10At.12}',
                },
                secondaryBorderColor: {
                    $value: '{color.blossom.10At.18}',
                },
                tertiaryBorderColor: {
                    $value: '{color.blossom.10At.36}',
                },
            },
            controlRaised: {
                primaryBackgroundColor: {
                    $value: '{color.blossom.0At.18}',
                },
                backdrop: {
                    $value: '{color.whiteAt.12}',
                },
            },
            highlight: {
                primary: {
                    $value: '{color.blossom.0At.12}',
                },
            },
            tone: {
                brightenPrimary: {
                    $value: `{color.blossom.10At.6}`,
                },
                brightenSecondary: {
                    $value: `{color.blossom.10At.12}`,
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
        },
        lilypadDark: {
            surface: {
                backdrop: {
                    $value: '{color.gray.111}',
                },
                canvas: {
                    $value: '{color.lilypad.100}',
                },
                primary: {
                    $value: '{color.lilypad.100}',
                },
                secondary: {
                    $value: '{color.lilypad.90}',
                },
                tertiary: {
                    $value: '{color.lilypad.80}',
                },
                contrast: {
                    $value: '{color.whiteAt.96}',
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
                    $value: '{color.lilypad.0At.3}',
                },
                secondaryBackgroundColor: {
                    $value: '{color.lilypad.0At.6}',
                },
                tertiaryBackgroundColor: {
                    $value: '{color.lilypad.0At.9}',
                },
                primaryBorderColor: {
                    $value: '{color.lilypad.0At.6}',
                },
                secondaryBorderColor: {
                    $value: '{color.lilypad.0At.9}',
                },
                tertiaryBorderColor: {
                    $value: '{color.lilypad.0At.12}',
                },
            },
            text: {
                primary: {
                    $value: '{color.lilypad.0}',
                },
                secondary: {
                    $value: '{color.lilypad.0At.66}',
                },
                tertiary: {
                    $value: '{color.lilypad.0At.36}',
                },
            },
            icons: {
                primary: {
                    $value: '{color.lilypad.0}',
                },
                secondary: {
                    $value: '{color.lilypad.0At.48}',
                },
                tertiary: {
                    $value: '{color.lilypad.0At.24}',
                },
            },
            accent: {
                primary: { $value: '{color.lilypad.30}' },
                secondary: { $value: '{color.lilypad.40}' },
                tertiary: { $value: '{color.lilypad.50}' },
                quaternary: { $value: '{color.lilypad.60}' },
                glowPrimary: { $value: '{color.lilypad.40At.20}' },
                glowSecondary: { $value: '{color.lilypad.40At.12}' },
                primaryTextColor: { $value: '{color.lilypad.30}' },
                secondaryTextColor: { $value: '{color.lilypad.40}' },
                tertiaryTextColor: { $value: '{color.lilypad.50}' },
                primaryContentColor: { $value: '{color.lilypad.100}' },
                secondaryContentColor: { $value: '{color.lilypad.100At.72}' },
                tertiaryContentColor: { $value: '{color.lilypad.100At.48}' },
            },
            accentAlt: {
                primary: { $value: '{color.lilypad.60}' },
                secondary: { $value: '{color.lilypad.70}' },
                tertiary: { $value: '{color.lilypad.80}' },
                glowPrimary: { $value: '{color.lilypad.30At.20}' }, // this will change
                glowSecondary: { $value: '{color.lilypad.30At.12}' }, // this will change
                primaryTextColor: { $value: '{color.lilypad.20}' },
                secondaryTextColor: { $value: '{color.lilypad.30}' },
                tertiaryTextColor: { $value: '{color.lilypad.40}' },
                primaryContentColor: { $value: '{color.lilypad.0}' },
                secondaryContentColor: { $value: '{color.lilypad.0At.72}' },
                tertiaryContentColor: { $value: '{color.lilypad.0At.48}' },
            },
            control: {
                primaryBackgroundColor: {
                    $value: '{color.lilypad.10At.12}',
                },
                secondaryBackgroundColor: {
                    $value: '{color.lilypad.10At.18}',
                },
                tertiaryBackgroundColor: {
                    $value: '{color.lilypad.10At.24}',
                },
                primaryBorderColor: {
                    $value: '{color.lilypad.10At.36}',
                },
                secondaryBorderColor: {
                    $value: '{color.lilypad.10At.64}',
                },
                tertiaryBorderColor: {
                    $value: '{color.lilypad.10At.72}',
                },
                quaternaryBorderColor: {
                    $value: '{color.lilypad.10At.80}',
                },
            },
            controlSubtle: {
                primaryBorderColor: {
                    $value: '{color.lilypad.10At.12}',
                },
                secondaryBorderColor: {
                    $value: '{color.lilypad.10At.18}',
                },
                tertiaryBorderColor: {
                    $value: '{color.lilypad.10At.36}',
                },
            },
            controlRaised: {
                primaryBackgroundColor: {
                    $value: '{color.lilypad.0At.18}',
                },
                backdrop: {
                    $value: '{color.whiteAt.12}',
                },
            },
            highlight: {
                primary: {
                    $value: '{color.lilypad.0At.12}',
                },
            },
            tone: {
                brightenPrimary: {
                    $value: `{color.lilypad.10At.6}`,
                },
                brightenSecondary: {
                    $value: `{color.lilypad.10At.12}`,
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
        },
        mandarinDark: {
            surface: {
                backdrop: {
                    $value: '{color.gray.111}',
                },
                canvas: {
                    $value: '{color.mandarin.100}',
                },
                primary: {
                    $value: '{color.mandarin.100}',
                },
                secondary: {
                    $value: '{color.mandarin.90}',
                },
                tertiary: {
                    $value: '{color.mandarin.80}',
                },
                contrast: {
                    $value: '{color.whiteAt.96}',
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
                    $value: '{color.mandarin.0At.3}',
                },
                secondaryBackgroundColor: {
                    $value: '{color.mandarin.0At.6}',
                },
                tertiaryBackgroundColor: {
                    $value: '{color.mandarin.0At.9}',
                },
                primaryBorderColor: {
                    $value: '{color.mandarin.0At.6}',
                },
                secondaryBorderColor: {
                    $value: '{color.mandarin.0At.9}',
                },
                tertiaryBorderColor: {
                    $value: '{color.mandarin.0At.12}',
                },
            },
            text: {
                primary: {
                    $value: '{color.mandarin.0}',
                },
                secondary: {
                    $value: '{color.mandarin.0At.66}',
                },
                tertiary: {
                    $value: '{color.mandarin.0At.36}',
                },
            },
            icons: {
                primary: {
                    $value: '{color.mandarin.0}',
                },
                secondary: {
                    $value: '{color.mandarin.0At.48}',
                },
                tertiary: {
                    $value: '{color.mandarin.0At.24}',
                },
            },
            accent: {
                // Yes, this is correct. Mandarin buttons will use pollen colors in dark mode
                primary: { $value: '{color.pollen.30}' },
                secondary: { $value: '{color.pollen.40}' },
                tertiary: { $value: '{color.pollen.50}' },
                quaternary: { $value: '{color.pollen.60}' },
                glowPrimary: { $value: '{color.pollen.40At.20}' },
                glowSecondary: { $value: '{color.pollen.40At.12}' },
                primaryTextColor: { $value: '{color.pollen.30}' },
                secondaryTextColor: { $value: '{color.pollen.40}' },
                tertiaryTextColor: { $value: '{color.pollen.50}' },
                primaryContentColor: { $value: '{color.pollen.100}' },
                secondaryContentColor: { $value: '{color.pollen.100At.72}' },
                tertiaryContentColor: { $value: '{color.pollen.100At.48}' },
            },
            accentAlt: {
                primary: { $value: '{color.mandarin.60}' },
                secondary: { $value: '{color.mandarin.70}' },
                tertiary: { $value: '{color.mandarin.80}' },
                glowPrimary: { $value: '{color.mandarin.30At.20}' }, // this will change
                glowSecondary: { $value: '{color.mandarin.30At.12}' }, // this will change
                primaryTextColor: { $value: '{color.mandarin.20}' },
                secondaryTextColor: { $value: '{color.mandarin.30}' },
                tertiaryTextColor: { $value: '{color.mandarin.40}' },
                primaryContentColor: { $value: '{color.mandarin.0}' },
                secondaryContentColor: { $value: '{color.mandarin.0At.72}' },
                tertiaryContentColor: { $value: '{color.mandarin.0At.48}' },
            },
            control: {
                primaryBackgroundColor: {
                    $value: '{color.mandarin.10At.12}',
                },
                secondaryBackgroundColor: {
                    $value: '{color.mandarin.10At.18}',
                },
                tertiaryBackgroundColor: {
                    $value: '{color.mandarin.10At.24}',
                },
                primaryBorderColor: {
                    $value: '{color.mandarin.10At.36}',
                },
                secondaryBorderColor: {
                    $value: '{color.mandarin.10At.64}',
                },
                tertiaryBorderColor: {
                    $value: '{color.mandarin.10At.72}',
                },
                quaternaryBorderColor: {
                    $value: '{color.mandarin.10At.80}',
                },
            },
            controlSubtle: {
                primaryBorderColor: {
                    $value: '{color.mandarin.10At.12}',
                },
                secondaryBorderColor: {
                    $value: '{color.mandarin.10At.18}',
                },
                tertiaryBorderColor: {
                    $value: '{color.mandarin.10At.36}',
                },
            },
            controlRaised: {
                primaryBackgroundColor: {
                    $value: '{color.mandarin.0At.18}',
                },
                backdrop: {
                    $value: '{color.whiteAt.12}',
                },
            },
            highlight: {
                primary: {
                    $value: '{color.mandarin.0At.12}',
                },
            },
            tone: {
                brightenPrimary: {
                    $value: `{color.mandarin.10At.6}`,
                },
                brightenSecondary: {
                    $value: `{color.mandarin.10At.12}`,
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
        },
        pollenDark: {
            surface: {
                backdrop: {
                    $value: '{color.gray.111}',
                },
                canvas: {
                    $value: '{color.pollen.100}',
                },
                primary: {
                    $value: '{color.pollen.100}',
                },
                secondary: {
                    $value: '{color.pollen.90}',
                },
                tertiary: {
                    $value: '{color.pollen.80}',
                },
                contrast: {
                    $value: '{color.whiteAt.96}',
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
                    $value: '{color.pollen.0At.3}',
                },
                secondaryBackgroundColor: {
                    $value: '{color.pollen.0At.6}',
                },
                tertiaryBackgroundColor: {
                    $value: '{color.pollen.0At.9}',
                },
                primaryBorderColor: {
                    $value: '{color.pollen.0At.6}',
                },
                secondaryBorderColor: {
                    $value: '{color.pollen.0At.9}',
                },
                tertiaryBorderColor: {
                    $value: '{color.pollen.0At.12}',
                },
            },
            text: {
                primary: {
                    $value: '{color.pollen.0}',
                },
                secondary: {
                    $value: '{color.pollen.0At.66}',
                },
                tertiary: {
                    $value: '{color.pollen.0At.36}',
                },
            },
            icons: {
                primary: {
                    $value: '{color.pollen.0}',
                },
                secondary: {
                    $value: '{color.pollen.0At.48}', // may change
                },
                tertiary: {
                    $value: '{color.pollen.0At.24}', // may change
                },
            },
            accent: {
                // Yes, this is correct. pollen buttons will use pollen colors
                primary: { $value: '{color.pollen.30}' },
                secondary: { $value: '{color.pollen.40}' },
                tertiary: { $value: '{color.pollen.50}' },
                quaternary: { $value: '{color.pollen.60}' },
                glowPrimary: { $value: '{color.pollen.40At.20}' },
                glowSecondary: { $value: '{color.pollen.40At.12}' },
                primaryTextColor: { $value: '{color.pollen.30}' },
                secondaryTextColor: { $value: '{color.pollen.40}' },
                tertiaryTextColor: { $value: '{color.pollen.50}' },
                primaryContentColor: { $value: '{color.pollen.100}' },
                secondaryContentColor: { $value: '{color.pollen.100At.72}' },
                tertiaryContentColor: { $value: '{color.pollen.100At.48}' },
            },
            accentAlt: {
                primary: { $value: '{color.pollen.60}' },
                secondary: { $value: '{color.pollen.70}' },
                tertiary: { $value: '{color.pollen.80}' },
                glowPrimary: { $value: '{color.pollen.30At.20}' },
                glowSecondary: { $value: '{color.pollen.30At.12}' },
                primaryTextColor: { $value: '{color.pollen.20}' },
                secondaryTextColor: { $value: '{color.pollen.30}' },
                tertiaryTextColor: { $value: '{color.pollen.40}' },
                primaryContentColor: { $value: '{color.pollen.0}' },
                secondaryContentColor: { $value: '{color.pollen.0At.72}' },
                tertiaryContentColor: { $value: '{color.pollen.0At.48}' },
            },
            control: {
                primaryBackgroundColor: {
                    $value: '{color.pollen.10At.12}',
                },
                secondaryBackgroundColor: {
                    $value: '{color.pollen.10At.18}',
                },
                tertiaryBackgroundColor: {
                    $value: '{color.pollen.10At.24}',
                },
                primaryBorderColor: {
                    $value: '{color.pollen.10At.36}',
                },
                secondaryBorderColor: {
                    $value: '{color.pollen.10At.64}',
                },
                tertiaryBorderColor: {
                    $value: '{color.pollen.10At.72}',
                },
                quaternaryBorderColor: {
                    $value: '{color.pollen.10At.80}',
                },
            },
            controlSubtle: {
                primaryBorderColor: {
                    $value: '{color.pollen.10At.12}',
                },
                secondaryBorderColor: {
                    $value: '{color.pollen.10At.18}',
                },
                tertiaryBorderColor: {
                    $value: '{color.pollen.10At.36}',
                },
            },
            controlRaised: {
                primaryBackgroundColor: {
                    $value: '{color.pollen.0At.18}',
                },
                backdrop: {
                    $value: '{color.whiteAt.12}',
                },
            },
            highlight: {
                primary: {
                    $value: '{color.pollen.0At.12}',
                },
            },
            tone: {
                brightenPrimary: {
                    $value: `{color.pollen.10At.6}`,
                },
                brightenSecondary: {
                    $value: `{color.pollen.10At.12}`,
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
        },
        pondwaterDark: {
            surface: {
                backdrop: {
                    $value: '{color.gray.111}',
                },
                canvas: {
                    $value: '{color.pondwater.100}',
                },
                primary: {
                    $value: '{color.pondwater.100}',
                },
                secondary: {
                    $value: '{color.pondwater.90}',
                },
                tertiary: {
                    $value: '{color.pondwater.80}',
                },
                contrast: {
                    $value: '{color.whiteAt.96}',
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
                    $value: '{color.pondwater.0At.3}',
                },
                secondaryBackgroundColor: {
                    $value: '{color.pondwater.0At.6}',
                },
                tertiaryBackgroundColor: {
                    $value: '{color.pondwater.0At.9}',
                },
                primaryBorderColor: {
                    $value: '{color.pondwater.0At.6}',
                },
                secondaryBorderColor: {
                    $value: '{color.pondwater.0At.9}',
                },
                tertiaryBorderColor: {
                    $value: '{color.pondwater.0At.12}',
                },
            },
            text: {
                primary: {
                    $value: '{color.pondwater.0}',
                },
                secondary: {
                    $value: '{color.pondwater.0At.66}',
                },
                tertiary: {
                    $value: '{color.pondwater.0At.36}',
                },
            },
            icons: {
                primary: {
                    $value: '{color.pondwater.0}',
                },
                secondary: {
                    $value: '{color.pondwater.0At.48}',
                },
                tertiary: {
                    $value: '{color.pondwater.0At.24}',
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
                    $value: '{color.pondwater.10At.12}',
                },
                secondaryBackgroundColor: {
                    $value: '{color.pondwater.10At.18}',
                },
                tertiaryBackgroundColor: {
                    $value: '{color.pondwater.10At.24}',
                },
                primaryBorderColor: {
                    $value: '{color.pondwater.10At.36}',
                },
                secondaryBorderColor: {
                    $value: '{color.pondwater.10At.64}',
                },
                tertiaryBorderColor: {
                    $value: '{color.pondwater.10At.72}',
                },
                quaternaryBorderColor: {
                    $value: '{color.pondwater.10At.80}',
                },
            },
            controlSubtle: {
                primaryBorderColor: {
                    $value: '{color.pondwater.10At.12}',
                },
                secondaryBorderColor: {
                    $value: '{color.pondwater.10At.18}',
                },
                tertiaryBorderColor: {
                    $value: '{color.pondwater.10At.36}',
                },
            },
            controlRaised: {
                primaryBackgroundColor: {
                    $value: '{color.pondwater.0At.18}',
                },
                backdrop: {
                    $value: '{color.whiteAt.12}',
                },
            },
            highlight: {
                primary: {
                    $value: '{color.pondwater.0At.12}',
                },
            },
            tone: {
                brightenPrimary: {
                    $value: `{color.pondwater.10At.6}`,
                },
                brightenSecondary: {
                    $value: `{color.pondwater.10At.12}`,
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
        },
    },
};

export default motifColors;
