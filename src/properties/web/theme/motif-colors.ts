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
                    $value: '{color.white}',
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
                    $value: '{color.blossom.100At.60}',
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
                textPrimary: { $value: '{color.blossom.80}' },
                textSecondary: { $value: '{color.blossom.90}' },
                textTertiary: { $value: '{color.blossom.100}' },
                contentPrimary: { $value: '{color.white}' },
                contentSecondary: { $value: '{color.whiteAt.72}' },
                contentTertiary: { $value: '{color.whiteAt.48}' },
            },
            accentAlt: {
                primary: { $value: '{color.blossom.10}' },
                secondary: { $value: '{color.blossom.20}' },
                tertiary: { $value: '{color.blossom.30}' },
                glowPrimary: { $value: '{color.blossom.40At.20}' },
                glowSecondary: { $value: '{color.blossom.40At.12}' },
                textPrimary: { $value: '{color.blossom.80}' },
                textSecondary: { $value: '{color.blossom.90}' },
                textTertiary: { $value: '{color.blossom.100}' },
                contentPrimary: { $value: '{color.blossom.90}' },
                contentSecondary: { $value: '{color.blossom.90At.72}' },
                contentTertiary: { $value: '{color.blossom.90At.48}' },
            },
            control: {
                fillPrimary: {
                    $value: '{color.blossom.80At.18}',
                },
                fillSecondary: {
                    $value: '{color.blossom.80At.21}',
                },
                fillTertiary: {
                    $value: '{color.blossom.80At.27}',
                },
                borderPrimary: {
                    $value: '{color.blossom.80At.39}',
                },
                borderSecondary: {
                    $value: '{color.blossom.80At.57}',
                },
                borderTertiary: {
                    $value: '{color.blossom.80At.69}',
                },
                borderQuaternary: {
                    $value: '{color.blossom.80At.81}',
                },
            },
            controlRaised: {
                fillPrimary: {
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
                brighten: {
                    $value: `{color.blossom.0At.60}`,
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
                    $value: '{color.white}',
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
                    $value: '{color.lilypad.100At.60}',
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
                textPrimary: { $value: '{color.lilypad.60}' },
                textSecondary: { $value: '{color.lilypad.70}' },
                textTertiary: { $value: '{color.lilypad.80}' },
                contentPrimary: { $value: '{color.white}' },
                contentSecondary: { $value: '{color.whiteAt.72}' },
                contentTertiary: { $value: '{color.whiteAt.48}' },
            },
            accentAlt: {
                primary: { $value: '{color.lilypad.10}' },
                secondary: { $value: '{color.lilypad.20}' },
                tertiary: { $value: '{color.lilypad.30}' },
                glowPrimary: { $value: '{color.lilypad.40At.20}' },
                glowSecondary: { $value: '{color.lilypad.40At.12}' },
                textPrimary: { $value: '{color.lilypad.70}' },
                textSecondary: { $value: '{color.lilypad.80}' },
                textTertiary: { $value: '{color.lilypad.90}' },
                contentPrimary: { $value: '{color.lilypad.90}' },
                contentSecondary: { $value: '{color.lilypad.90At.72}' },
                contentTertiary: { $value: '{color.lilypad.90At.48}' },
            },
            control: {
                fillPrimary: {
                    $value: '{color.lilypad.60At.9}',
                },
                fillSecondary: {
                    $value: '{color.lilypad.60At.12}',
                },
                fillTertiary: {
                    $value: '{color.lilypad.60At.18}',
                },
                borderPrimary: {
                    $value: '{color.lilypad.60At.30}',
                },
                borderSecondary: {
                    $value: '{color.lilypad.60At.48}',
                },
                borderTertiary: {
                    $value: '{color.lilypad.60At.60}',
                },
                borderQuaternary: {
                    $value: '{color.lilypad.60At.72}',
                },
            },
            controlRaised: {
                fillPrimary: {
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
                brighten: {
                    $value: `{color.lilypad.0At.60}`,
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
                    $value: '{color.white}',
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
                    $value: '{color.mandarin.100At.60}',
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
                textPrimary: { $value: '{color.mandarin.50}' },
                textSecondary: { $value: '{color.mandarin.60}' },
                textTertiary: { $value: '{color.mandarin.70}' },
                contentPrimary: { $value: '{color.white}' },
                contentSecondary: { $value: '{color.whiteAt.72}' },
                contentTertiary: { $value: '{color.whiteAt.48}' },
            },
            accentAlt: {
                primary: { $value: '{color.mandarin.10}' },
                secondary: { $value: '{color.mandarin.20}' },
                tertiary: { $value: '{color.mandarin.30}' },
                glowPrimary: { $value: '{color.mandarin.40At.20}' },
                glowSecondary: { $value: '{color.mandarin.40At.12}' },
                textPrimary: { $value: '{color.mandarin.70}' },
                textSecondary: { $value: '{color.mandarin.80}' },
                textTertiary: { $value: '{color.mandarin.90}' },
                contentPrimary: { $value: '{color.mandarin.90}' },
                contentSecondary: { $value: '{color.mandarin.90At.72}' },
                contentTertiary: { $value: '{color.mandarin.90At.48}' },
            },
            control: {
                fillPrimary: {
                    $value: '{color.mandarin.50At.9}',
                },
                fillSecondary: {
                    $value: '{color.mandarin.50At.12}',
                },
                fillTertiary: {
                    $value: '{color.mandarin.50At.18}',
                },
                borderPrimary: {
                    $value: '{color.mandarin.50At.30}',
                },
                borderSecondary: {
                    $value: '{color.mandarin.50At.48}',
                },
                borderTertiary: {
                    $value: '{color.mandarin.50At.60}',
                },
                borderQuaternary: {
                    $value: '{color.mandarin.50At.72}',
                },
            },
            controlRaised: {
                fillPrimary: {
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
                brighten: {
                    $value: `{color.mandarin.0At.60}`,
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
                    $value: '{color.white}',
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
                    $value: '{color.pollen.100At.60}',
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
                primary: { $value: '{color.pollen.40}' },
                secondary: { $value: '{color.pollen.50}' },
                tertiary: { $value: '{color.pollen.60}' },
                quaternary: { $value: '{color.pollen.100}' },
                glowPrimary: { $value: '{color.pollen.40At.20}' },
                glowSecondary: { $value: '{color.pollen.40At.12}' },
                textPrimary: { $value: '{color.pollen.70}' },
                textSecondary: { $value: '{color.pollen.80}' },
                textTertiary: { $value: '{color.pollen.90}' },
                contentPrimary: { $value: '{color.white}' },
                contentSecondary: { $value: '{color.whiteAt.72}' },
                contentTertiary: { $value: '{color.whiteAt.48}' },
            },
            accentAlt: {
                primary: { $value: '{color.pollen.10}' },
                secondary: { $value: '{color.pollen.20}' },
                tertiary: { $value: '{color.pollen.30}' },
                glowPrimary: { $value: '{color.pollen.50At.20}' },
                glowSecondary: { $value: '{color.pollen.50At.12}' },
                textPrimary: { $value: '{color.pollen.70}' },
                textSecondary: { $value: '{color.pollen.80}' },
                textTertiary: { $value: '{color.pollen.90}' },
                contentPrimary: { $value: '{color.pollen.90}' },
                contentSecondary: { $value: '{color.pollen.90At.72}' },
                contentTertiary: { $value: '{color.pollen.90At.48}' },
            },
            control: {
                fillPrimary: {
                    $value: '{color.pollen.30At.18}',
                },
                fillSecondary: {
                    $value: '{color.pollen.30At.21}',
                },
                fillTertiary: {
                    $value: '{color.pollen.30At.27}',
                },
                borderPrimary: {
                    $value: '{color.pollen.30At.39}',
                },
                borderSecondary: {
                    $value: '{color.pollen.30At.57}',
                },
                borderTertiary: {
                    $value: '{color.pollen.30At.69}',
                },
                borderQuaternary: {
                    $value: '{color.pollen.30At.81}',
                },
            },
            controlRaised: {
                fillPrimary: {
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
                brighten: {
                    $value: `{color.pollen.0At.60}`,
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
                    $value: '{color.white}',
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
                quaternary: { $value: '{color.pondwater.90}' },
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
                    $value: '{color.pondwater.60At.9}',
                },
                fillSecondary: {
                    $value: '{color.pondwater.60At.12}',
                },
                fillTertiary: {
                    $value: '{color.pondwater.60At.18}',
                },
                borderPrimary: {
                    $value: '{color.pondwater.60At.30}',
                },
                borderSecondary: {
                    $value: '{color.pondwater.60At.48}',
                },
                borderTertiary: {
                    $value: '{color.pondwater.60At.60}',
                },
                borderQuaternary: {
                    $value: '{color.pondwater.60At.72}',
                },
            },
            controlRaised: {
                fillPrimary: {
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
                brighten: {
                    $value: `{color.pondwater.0At.60}`,
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
                    $value: '{color.blossom.0At.60}',
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
                textPrimary: { $value: '{color.blossom.30}' },
                textSecondary: { $value: '{color.blossom.40}' },
                textTertiary: { $value: '{color.blossom.50}' },
                contentPrimary: { $value: '{color.blossom.100}' },
                contentSecondary: { $value: '{color.blossom.100At.72}' },
                contentTertiary: { $value: '{color.blossom.100At.48}' },
            },
            accentAlt: {
                primary: { $value: '{color.blossom.60}' },
                secondary: { $value: '{color.blossom.70}' },
                tertiary: { $value: '{color.blossom.80}' },
                glowPrimary: { $value: '{color.blossom.30At.20}' },
                glowSecondary: { $value: '{color.blossom.30At.12}' },
                textPrimary: { $value: '{color.blossom.20}' },
                textSecondary: { $value: '{color.blossom.30}' },
                textTertiary: { $value: '{color.blossom.40}' },
                contentPrimary: { $value: '{color.blossom.0}' },
                contentSecondary: { $value: '{color.blossom.0At.72}' },
                contentTertiary: { $value: '{color.blossom.0At.48}' },
            },
            control: {
                fillPrimary: {
                    $value: '{color.blossom.10At.12}',
                },
                fillSecondary: {
                    $value: '{color.blossom.10At.18}',
                },
                fillTertiary: {
                    $value: '{color.blossom.10At.24}',
                },
                borderPrimary: {
                    $value: '{color.blossom.10At.36}',
                },
                borderSecondary: {
                    $value: '{color.blossom.10At.64}',
                },
                borderTertiary: {
                    $value: '{color.blossom.10At.72}',
                },
                borderQuaternary: {
                    $value: '{color.blossom.10At.80}',
                },
            },
            controlRaised: {
                fillPrimary: {
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
                brighten: {
                    $value: `{color.blossom.10At.6}`,
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
                    $value: '{color.lilypad.0At.60}',
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
                textPrimary: { $value: '{color.lilypad.30}' },
                textSecondary: { $value: '{color.lilypad.40}' },
                textTertiary: { $value: '{color.lilypad.50}' },
                contentPrimary: { $value: '{color.lilypad.100}' },
                contentSecondary: { $value: '{color.lilypad.100At.72}' },
                contentTertiary: { $value: '{color.lilypad.100At.48}' },
            },
            accentAlt: {
                primary: { $value: '{color.lilypad.60}' },
                secondary: { $value: '{color.lilypad.70}' },
                tertiary: { $value: '{color.lilypad.80}' },
                glowPrimary: { $value: '{color.lilypad.30At.20}' }, // this will change
                glowSecondary: { $value: '{color.lilypad.30At.12}' }, // this will change
                textPrimary: { $value: '{color.lilypad.20}' },
                textSecondary: { $value: '{color.lilypad.30}' },
                textTertiary: { $value: '{color.lilypad.40}' },
                contentPrimary: { $value: '{color.lilypad.0}' },
                contentSecondary: { $value: '{color.lilypad.0At.72}' },
                contentTertiary: { $value: '{color.lilypad.0At.48}' },
            },
            control: {
                fillPrimary: {
                    $value: '{color.lilypad.10At.12}',
                },
                fillSecondary: {
                    $value: '{color.lilypad.10At.18}',
                },
                fillTertiary: {
                    $value: '{color.lilypad.10At.24}',
                },
                borderPrimary: {
                    $value: '{color.lilypad.10At.36}',
                },
                borderSecondary: {
                    $value: '{color.lilypad.10At.64}',
                },
                borderTertiary: {
                    $value: '{color.lilypad.10At.72}',
                },
                borderQuaternary: {
                    $value: '{color.lilypad.10At.80}',
                },
            },
            controlRaised: {
                fillPrimary: {
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
                brighten: {
                    $value: `{color.lilypad.10At.6}`,
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
                    $value: '{color.mandarin.0At.60}',
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
                textPrimary: { $value: '{color.pollen.30}' },
                textSecondary: { $value: '{color.pollen.40}' },
                textTertiary: { $value: '{color.pollen.50}' },
                contentPrimary: { $value: '{color.pollen.100}' },
                contentSecondary: { $value: '{color.pollen.100At.72}' },
                contentTertiary: { $value: '{color.pollen.100At.48}' },
            },
            accentAlt: {
                primary: { $value: '{color.mandarin.60}' },
                secondary: { $value: '{color.mandarin.70}' },
                tertiary: { $value: '{color.mandarin.80}' },
                glowPrimary: { $value: '{color.mandarin.30At.20}' }, // this will change
                glowSecondary: { $value: '{color.mandarin.30At.12}' }, // this will change
                textPrimary: { $value: '{color.mandarin.20}' },
                textSecondary: { $value: '{color.mandarin.30}' },
                textTertiary: { $value: '{color.mandarin.40}' },
                contentPrimary: { $value: '{color.mandarin.0}' },
                contentSecondary: { $value: '{color.mandarin.0At.72}' },
                contentTertiary: { $value: '{color.mandarin.0At.48}' },
            },
            control: {
                fillPrimary: {
                    $value: '{color.mandarin.10At.12}',
                },
                fillSecondary: {
                    $value: '{color.mandarin.10At.18}',
                },
                fillTertiary: {
                    $value: '{color.mandarin.10At.24}',
                },
                borderPrimary: {
                    $value: '{color.mandarin.10At.36}',
                },
                borderSecondary: {
                    $value: '{color.mandarin.10At.64}',
                },
                borderTertiary: {
                    $value: '{color.mandarin.10At.72}',
                },
                borderQuaternary: {
                    $value: '{color.mandarin.10At.80}',
                },
            },
            controlRaised: {
                fillPrimary: {
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
                brighten: {
                    $value: `{color.mandarin.10At.6}`,
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
                    $value: '{color.pollen.0At.60}',
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
                textPrimary: { $value: '{color.pollen.30}' },
                textSecondary: { $value: '{color.pollen.40}' },
                textTertiary: { $value: '{color.pollen.50}' },
                contentPrimary: { $value: '{color.pollen.100}' },
                contentSecondary: { $value: '{color.pollen.100At.72}' },
                contentTertiary: { $value: '{color.pollen.100At.48}' },
            },
            accentAlt: {
                primary: { $value: '{color.pollen.60}' },
                secondary: { $value: '{color.pollen.70}' },
                tertiary: { $value: '{color.pollen.80}' },
                glowPrimary: { $value: '{color.pollen.30At.20}' },
                glowSecondary: { $value: '{color.pollen.30At.12}' },
                textPrimary: { $value: '{color.pollen.20}' },
                textSecondary: { $value: '{color.pollen.30}' },
                textTertiary: { $value: '{color.pollen.40}' },
                contentPrimary: { $value: '{color.pollen.0}' },
                contentSecondary: { $value: '{color.pollen.0At.72}' },
                contentTertiary: { $value: '{color.pollen.0At.48}' },
            },
            control: {
                fillPrimary: {
                    $value: '{color.pollen.10At.12}',
                },
                fillSecondary: {
                    $value: '{color.pollen.10At.18}',
                },
                fillTertiary: {
                    $value: '{color.pollen.10At.24}',
                },
                borderPrimary: {
                    $value: '{color.pollen.10At.36}',
                },
                borderSecondary: {
                    $value: '{color.pollen.10At.64}',
                },
                borderTertiary: {
                    $value: '{color.pollen.10At.72}',
                },
                borderQuaternary: {
                    $value: '{color.pollen.10At.80}',
                },
            },
            controlRaised: {
                fillPrimary: {
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
                brighten: {
                    $value: `{color.pollen.10At.6}`,
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
                    $value: '{color.pondwater.0At.60}',
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
                    $value: '{color.pondwater.10At.12}',
                },
                fillSecondary: {
                    $value: '{color.pondwater.10At.18}',
                },
                fillTertiary: {
                    $value: '{color.pondwater.10At.24}',
                },
                borderPrimary: {
                    $value: '{color.pondwater.10At.36}',
                },
                borderSecondary: {
                    $value: '{color.pondwater.10At.64}',
                },
                borderTertiary: {
                    $value: '{color.pondwater.10At.72}',
                },
                borderQuaternary: {
                    $value: '{color.pondwater.10At.80}',
                },
            },
            controlRaised: {
                fillPrimary: {
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
                brighten: {
                    $value: `{color.pondwater.10At.6}`,
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
        },
    },
};

export default motifColors;
