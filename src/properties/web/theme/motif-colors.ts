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
                        $value: '{color.blossom100At.6}',
                    },
                    secondary: {
                        $value: '{color.blossom100At.12}',
                    },
                    tertiary: {
                        $value: '{color.blossom100At.16}',
                    },
                },
            },
            container: {
                primaryBackgroundColor: {
                    $value: '{color.blossom100At.1}',
                },
                secondaryBackgroundColor: {
                    $value: '{color.blossom100At.3}',
                },
                tertiaryBackgroundColor: {
                    $value: '{color.blossom100At.6}',
                },
                primaryBorderColor: {
                    $value: '{color.blossom100At.6}',
                },
                secondaryBorderColor: {
                    $value: '{color.blossom100At.9}',
                },
                tertiaryBorderColor: {
                    $value: '{color.blossom100At.12}',
                },
            },
            text: {
                primary: {
                    $value: '{color.blossom100At.96}',
                },
                secondary: {
                    $value: '{color.blossom100At.60}',
                },
                tertiary: {
                    $value: '{color.blossom100At.36}',
                },
            },
            icons: {
                primary: {
                    $value: '{color.blossom100At.84}',
                },
                secondary: {
                    $value: '{color.blossom100At.60}',
                },
                tertiary: {
                    $value: '{color.blossom100At.36}',
                },
            },
            accent: {
                primary: { $value: '{color.blossom.80}' },
                secondary: { $value: '{color.blossom.90}' },
                tertiary: { $value: '{color.blossom.100}' },
                quaternary: { $value: '{color.blossom.100}' },
                glowPrimary: { $value: '{color.blossom80At.20}' },
                glowSecondary: { $value: '{color.blossom80At.12}' },
                textPrimary: { $value: '{color.blossom.80}' },
                textSecondary: { $value: '{color.blossom.90}' },
                textTertiary: { $value: '{color.blossom.100}' },
                contentPrimary: { $value: '{color.white}' },
                contentSecondary: { $value: '{color.whiteAt.70}' },
                contentTertiary: { $value: '{color.whiteAt.50}' },
            },
            accentAlt: {
                primary: { $value: '{color.blossom.10}' },
                secondary: { $value: '{color.blossom.20}' },
                tertiary: { $value: '{color.blossom.30}' },
                glowPrimary: { $value: '{color.blossom40At.20}' },
                glowSecondary: { $value: '{color.blossom40At.12}' },
                textPrimary: { $value: '{color.blossom.80}' },
                textSecondary: { $value: '{color.blossom.90}' },
                textTertiary: { $value: '{color.blossom.100}' },
                contentPrimary: { $value: '{color.blossom.80}' },
                contentSecondary: { $value: '{color.blossom.90}' },
                contentTertiary: { $value: '{color.blossom.100}' },
            },
            control: {
                fillPrimary: {
                    $value: '{color.blossom80At.18}',
                },
                fillSecondary: {
                    $value: '{color.blossom80At.21}',
                },
                fillTertiary: {
                    $value: '{color.blossom80At.27}',
                },
                borderPrimary: {
                    $value: '{color.blossom80At.39}',
                },
                borderSecondary: {
                    $value: '{color.blossom80At.57}',
                },
                borderTertiary: {
                    $value: '{color.blossom80At.69}',
                },
                borderQuaternary: {
                    $value: '{color.blossom80At.81}',
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
                    $value: '{color.blossom0At.24}',
                },
            },
            tone: {
                brighten: {
                    $value: `{color.blossom0At.60}`,
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
                        $value: '{color.lilypad100At.6}',
                    },
                    secondary: {
                        $value: '{color.lilypad100At.12}',
                    },
                    tertiary: {
                        $value: '{color.lilypad100At.16}',
                    },
                },
            },
            container: {
                primaryBackgroundColor: {
                    $value: '{color.lilypad100At.1}',
                },
                secondaryBackgroundColor: {
                    $value: '{color.lilypad100At.3}',
                },
                tertiaryBackgroundColor: {
                    $value: '{color.lilypad100At.6}',
                },
                primaryBorderColor: {
                    $value: '{color.lilypad100At.6}',
                },
                secondaryBorderColor: {
                    $value: '{color.lilypad100At.9}',
                },
                tertiaryBorderColor: {
                    $value: '{color.lilypad100At.12}',
                },
            },
            text: {
                primary: {
                    $value: '{color.lilypad100At.96}',
                },
                secondary: {
                    $value: '{color.lilypad100At.60}',
                },
                tertiary: {
                    $value: '{color.lilypad100At.36}',
                },
            },
            icons: {
                primary: {
                    $value: '{color.lilypad100At.84}',
                },
                secondary: {
                    $value: '{color.lilypad100At.60}',
                },
                tertiary: {
                    $value: '{color.lilypad100At.36}',
                },
            },
            accent: {
                primary: { $value: '{color.lilypad.60}' },
                secondary: { $value: '{color.lilypad.70}' },
                tertiary: { $value: '{color.lilypad.80}' },
                quaternary: { $value: '{color.lilypad.90}' },
                glowPrimary: { $value: '{color.lilypad60At.20}' },
                glowSecondary: { $value: '{color.lilypad60At.12}' },
                textPrimary: { $value: '{color.lilypad.60}' },
                textSecondary: { $value: '{color.lilypad.70}' },
                textTertiary: { $value: '{color.lilypad.80}' },
                contentPrimary: { $value: '{color.white}' },
                contentSecondary: { $value: '{color.whiteAt.70}' },
                contentTertiary: { $value: '{color.whiteAt.50}' },
            },
            accentAlt: {
                primary: { $value: '{color.lilypad.10}' },
                secondary: { $value: '{color.lilypad.20}' },
                tertiary: { $value: '{color.lilypad.30}' },
                glowPrimary: { $value: '{color.lilypad40At.20}' },
                glowSecondary: { $value: '{color.lilypad40At.12}' },
                textPrimary: { $value: '{color.lilypad.70}' },
                textSecondary: { $value: '{color.lilypad.80}' },
                textTertiary: { $value: '{color.lilypad.90}' },
                contentPrimary: { $value: '{color.lilypad.70}' },
                contentSecondary: { $value: '{color.lilypad.80}' },
                contentTertiary: { $value: '{color.lilypad.90}' },
            },
            control: {
                fillPrimary: {
                    $value: '{color.lilypad60At.9}',
                },
                fillSecondary: {
                    $value: '{color.lilypad60At.12}',
                },
                fillTertiary: {
                    $value: '{color.lilypad60At.18}',
                },
                borderPrimary: {
                    $value: '{color.lilypad60At.30}',
                },
                borderSecondary: {
                    $value: '{color.lilypad60At.48}',
                },
                borderTertiary: {
                    $value: '{color.lilypad60At.60}',
                },
                borderQuaternary: {
                    $value: '{color.lilypad60At.72}',
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
                    $value: '{color.lilypad0At.24}',
                },
            },
            tone: {
                brighten: {
                    $value: `{color.lilypad0At.60}`,
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
                        $value: '{color.mandarin100At.6}',
                    },
                    secondary: {
                        $value: '{color.mandarin100At.12}',
                    },
                    tertiary: {
                        $value: '{color.mandarin100At.16}',
                    },
                },
            },
            container: {
                primaryBackgroundColor: {
                    $value: '{color.mandarin100At.1}',
                },
                secondaryBackgroundColor: {
                    $value: '{color.mandarin100At.3}',
                },
                tertiaryBackgroundColor: {
                    $value: '{color.mandarin100At.6}',
                },
                primaryBorderColor: {
                    $value: '{color.mandarin100At.6}',
                },
                secondaryBorderColor: {
                    $value: '{color.mandarin100At.9}',
                },
                tertiaryBorderColor: {
                    $value: '{color.mandarin100At.12}',
                },
            },
            text: {
                primary: {
                    $value: '{color.mandarin100At.96}',
                },
                secondary: {
                    $value: '{color.mandarin100At.60}',
                },
                tertiary: {
                    $value: '{color.mandarin100At.36}',
                },
            },
            icons: {
                primary: {
                    $value: '{color.mandarin100At.84}',
                },
                secondary: {
                    $value: '{color.mandarin100At.60}',
                },
                tertiary: {
                    $value: '{color.mandarin100At.36}',
                },
            },
            accent: {
                primary: { $value: '{color.mandarin.50}' },
                secondary: { $value: '{color.mandarin.60}' },
                tertiary: { $value: '{color.mandarin.70}' },
                quaternary: { $value: '{color.mandarin.80}' },
                glowPrimary: { $value: '{color.mandarin50At.20}' },
                glowSecondary: { $value: '{color.mandarin50At.12}' },
                textPrimary: { $value: '{color.mandarin.50}' },
                textSecondary: { $value: '{color.mandarin.60}' },
                textTertiary: { $value: '{color.mandarin.70}' },
                contentPrimary: { $value: '{color.white}' },
                contentSecondary: { $value: '{color.whiteAt.70}' },
                contentTertiary: { $value: '{color.whiteAt.50}' },
            },
            accentAlt: {
                primary: { $value: '{color.mandarin.10}' },
                secondary: { $value: '{color.mandarin.20}' },
                tertiary: { $value: '{color.mandarin.30}' },
                glowPrimary: { $value: '{color.mandarin40At.20}' },
                glowSecondary: { $value: '{color.mandarin40At.12}' },
                textPrimary: { $value: '{color.mandarin.70}' },
                textSecondary: { $value: '{color.mandarin.80}' },
                textTertiary: { $value: '{color.mandarin.90}' },
                contentPrimary: { $value: '{color.mandarin.70}' },
                contentSecondary: { $value: '{color.mandarin.80}' },
                contentTertiary: { $value: '{color.mandarin.90}' },
            },
            control: {
                fillPrimary: {
                    $value: '{color.mandarin50At.9}',
                },
                fillSecondary: {
                    $value: '{color.mandarin50At.12}',
                },
                fillTertiary: {
                    $value: '{color.mandarin50At.18}',
                },
                borderPrimary: {
                    $value: '{color.mandarin50At.30}',
                },
                borderSecondary: {
                    $value: '{color.mandarin50At.48}',
                },
                borderTertiary: {
                    $value: '{color.mandarin50At.60}',
                },
                borderQuaternary: {
                    $value: '{color.mandarin50At.72}',
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
                    $value: '{color.mandarin0At.24}',
                },
            },
            tone: {
                brighten: {
                    $value: `{color.mandarin0At.60}`,
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
                        $value: '{color.pollen100At.6}',
                    },
                    secondary: {
                        $value: '{color.pollen100At.12}',
                    },
                    tertiary: {
                        $value: '{color.pollen100At.16}',
                    },
                },
            },
            container: {
                primaryBackgroundColor: {
                    $value: '{color.pollen100At.1}',
                },
                secondaryBackgroundColor: {
                    $value: '{color.pollen100At.3}',
                },
                tertiaryBackgroundColor: {
                    $value: '{color.pollen100At.6}',
                },
                primaryBorderColor: {
                    $value: '{color.pollen100At.6}',
                },
                secondaryBorderColor: {
                    $value: '{color.pollen100At.9}',
                },
                tertiaryBorderColor: {
                    $value: '{color.pollen100At.12}',
                },
            },
            text: {
                primary: {
                    $value: '{color.pollen100At.96}',
                },
                secondary: {
                    $value: '{color.pollen100At.60}',
                },
                tertiary: {
                    $value: '{color.pollen100At.36}',
                },
            },
            icons: {
                primary: {
                    $value: '{color.pollen100At.84}',
                },
                secondary: {
                    $value: '{color.pollen100At.60}',
                },
                tertiary: {
                    $value: '{color.pollen100At.36}',
                },
            },
            accent: {
                primary: { $value: '{color.pollen.40}' },
                secondary: { $value: '{color.pollen.50}' },
                tertiary: { $value: '{color.pollen.60}' },
                quaternary: { $value: '{color.pollen.100}' },
                glowPrimary: { $value: '{color.pollen40At.20}' },
                glowSecondary: { $value: '{color.pollen40At.12}' },
                textPrimary: { $value: '{color.pollen.70}' },
                textSecondary: { $value: '{color.pollen.80}' },
                textTertiary: { $value: '{color.pollen.90}' },
                contentPrimary: { $value: '{color.white}' },
                contentSecondary: { $value: '{color.whiteAt.70}' },
                contentTertiary: { $value: '{color.whiteAt.50}' },
            },
            accentAlt: {
                primary: { $value: '{color.pollen.10}' },
                secondary: { $value: '{color.pollen.20}' },
                tertiary: { $value: '{color.pollen.30}' },
                glowPrimary: { $value: '{color.pollen50At.20}' },
                glowSecondary: { $value: '{color.pollen50At.12}' },
                textPrimary: { $value: '{color.pollen.70}' },
                textSecondary: { $value: '{color.pollen.80}' },
                textTertiary: { $value: '{color.pollen.90}' },
                contentPrimary: { $value: '{color.pollen.70}' },
                contentSecondary: { $value: '{color.pollen.80}' },
                contentTertiary: { $value: '{color.pollen.90}' },
            },
            control: {
                fillPrimary: {
                    $value: '{color.pollen30At.18}',
                },
                fillSecondary: {
                    $value: '{color.pollen30At.21}',
                },
                fillTertiary: {
                    $value: '{color.pollen30At.27}',
                },
                borderPrimary: {
                    $value: '{color.pollen30At.39}',
                },
                borderSecondary: {
                    $value: '{color.pollen30At.57}',
                },
                borderTertiary: {
                    $value: '{color.pollen30At.69}',
                },
                borderQuaternary: {
                    $value: '{color.pollen30At.81}',
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
                    $value: '{color.pollen0At.24}',
                },
            },
            tone: {
                brighten: {
                    $value: `{color.pollen0At.60}`,
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
                        $value: '{color.pondwater100At.6}',
                    },
                    secondary: {
                        $value: '{color.pondwater100At.12}',
                    },
                    tertiary: {
                        $value: '{color.pondwater100At.16}',
                    },
                },
            },
            container: {
                primaryBackgroundColor: {
                    $value: '{color.pondwater100At.1}',
                },
                secondaryBackgroundColor: {
                    $value: '{color.pondwater100At.3}',
                },
                tertiaryBackgroundColor: {
                    $value: '{color.pondwater100At.6}',
                },
                primaryBorderColor: {
                    $value: '{color.pondwater100At.6}',
                },
                secondaryBorderColor: {
                    $value: '{color.pondwater100At.9}',
                },
                tertiaryBorderColor: {
                    $value: '{color.pondwater100At.12}',
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
                    $value: '{color.pondwater60At.9}',
                },
                fillSecondary: {
                    $value: '{color.pondwater60At.12}',
                },
                fillTertiary: {
                    $value: '{color.pondwater60At.18}',
                },
                borderPrimary: {
                    $value: '{color.pondwater60At.30}',
                },
                borderSecondary: {
                    $value: '{color.pondwater60At.48}',
                },
                borderTertiary: {
                    $value: '{color.pondwater60At.60}',
                },
                borderQuaternary: {
                    $value: '{color.pondwater60At.72}',
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
                    $value: '{color.pondwater0At.24}',
                },
            },
            tone: {
                brighten: {
                    $value: `{color.pondwater0At.60}`,
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
                    $value: '{color.blossom0At.3}',
                },
                secondaryBackgroundColor: {
                    $value: '{color.blossom0At.6}',
                },
                tertiaryBackgroundColor: {
                    $value: '{color.blossom0At.9}',
                },
                primaryBorderColor: {
                    $value: '{color.blossom0At.6}',
                },
                secondaryBorderColor: {
                    $value: '{color.blossom0At.9}',
                },
                tertiaryBorderColor: {
                    $value: '{color.blossom0At.12}',
                },
            },
            text: {
                primary: {
                    $value: '{color.blossom.0}',
                },
                secondary: {
                    $value: '{color.blossom0At.60}',
                },
                tertiary: {
                    $value: '{color.blossom0At.36}',
                },
            },
            icons: {
                primary: {
                    $value: '{color.blossom.0}',
                },
                secondary: {
                    $value: '{color.blossom0At.60}',
                },
                tertiary: {
                    $value: '{color.blossom0At.36}',
                },
            },
            accent: {
                primary: { $value: '{color.blossom.30}' },
                secondary: { $value: '{color.blossom.40}' },
                tertiary: { $value: '{color.blossom.50}' },
                quaternary: { $value: '{color.blossom.60}' },
                glowPrimary: { $value: '{color.blossom40At.20}' },
                glowSecondary: { $value: '{color.blossom40At.12}' },
                textPrimary: { $value: '{color.blossom.30}' },
                textSecondary: { $value: '{color.blossom.40}' },
                textTertiary: { $value: '{color.blossom.50}' },
                contentPrimary: { $value: '{color.blossom.100}' },
                contentSecondary: { $value: '{color.blossom100At.70}' },
                contentTertiary: { $value: '{color.blossom100At.50}' },
            },
            accentAlt: {
                primary: { $value: '{color.blossom.60}' },
                secondary: { $value: '{color.blossom.70}' },
                tertiary: { $value: '{color.blossom.80}' },
                glowPrimary: { $value: '{color.blossom40At.20}' }, // this will change
                glowSecondary: { $value: '{color.blossom40At.12}' }, // this will change
                textPrimary: { $value: '{color.blossom.20}' },
                textSecondary: { $value: '{color.blossom.30}' },
                textTertiary: { $value: '{color.blossom.40}' },
                contentPrimary: { $value: '{color.blossom.0}' },
                contentSecondary: { $value: '{color.blossom0At.70}' },
                contentTertiary: { $value: '{color.blossom0At.50}' },
            },
            control: {
                fillPrimary: {
                    $value: '{color.blossom10At.12}',
                },
                fillSecondary: {
                    $value: '{color.blossom10At.18}',
                },
                fillTertiary: {
                    $value: '{color.blossom10At.24}',
                },
                borderPrimary: {
                    $value: '{color.blossom10At.36}',
                },
                borderSecondary: {
                    $value: '{color.blossom10At.64}',
                },
                borderTertiary: {
                    $value: '{color.blossom10At.72}',
                },
                borderQuaternary: {
                    $value: '{color.blossom10At.80}',
                },
            },
            controlRaised: {
                fillPrimary: {
                    $value: '{color.blossom0At.18}',
                },
                backdrop: {
                    $value: '{color.whiteAt.12}',
                },
            },
            highlight: {
                primary: {
                    $value: '{color.blossom0At.12}',
                },
            },
            tone: {
                brighten: {
                    $value: `{color.blossom10At.6}`,
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
                    $value: '{color.lilypad0At.3}',
                },
                secondaryBackgroundColor: {
                    $value: '{color.lilypad0At.6}',
                },
                tertiaryBackgroundColor: {
                    $value: '{color.lilypad0At.9}',
                },
                primaryBorderColor: {
                    $value: '{color.lilypad0At.6}',
                },
                secondaryBorderColor: {
                    $value: '{color.lilypad0At.9}',
                },
                tertiaryBorderColor: {
                    $value: '{color.lilypad0At.12}',
                },
            },
            text: {
                primary: {
                    $value: '{color.lilypad.0}',
                },
                secondary: {
                    $value: '{color.lilypad0At.60}',
                },
                tertiary: {
                    $value: '{color.lilypad0At.36}',
                },
            },
            icons: {
                primary: {
                    $value: '{color.lilypad.0}',
                },
                secondary: {
                    $value: '{color.lilypad0At.60}', // may change
                },
                tertiary: {
                    $value: '{color.lilypad0At.36}', // may change
                },
            },
            accent: {
                primary: { $value: '{color.lilypad.30}' },
                secondary: { $value: '{color.lilypad.40}' },
                tertiary: { $value: '{color.lilypad.50}' },
                quaternary: { $value: '{color.lilypad.60}' },
                glowPrimary: { $value: '{color.lilypad40At.20}' },
                glowSecondary: { $value: '{color.lilypad40At.12}' },
                textPrimary: { $value: '{color.lilypad.30}' },
                textSecondary: { $value: '{color.lilypad.40}' },
                textTertiary: { $value: '{color.lilypad.50}' },
                contentPrimary: { $value: '{color.lilypad.100}' },
                contentSecondary: { $value: '{color.lilypad100At.70}' },
                contentTertiary: { $value: '{color.lilypad100At.50}' },
            },
            accentAlt: {
                primary: { $value: '{color.lilypad.60}' },
                secondary: { $value: '{color.lilypad.70}' },
                tertiary: { $value: '{color.lilypad.80}' },
                glowPrimary: { $value: '{color.lilypad30At.20}' }, // this will change
                glowSecondary: { $value: '{color.lilypad30At.12}' }, // this will change
                textPrimary: { $value: '{color.lilypad.20}' },
                textSecondary: { $value: '{color.lilypad.30}' },
                textTertiary: { $value: '{color.lilypad.40}' },
                contentPrimary: { $value: '{color.lilypad.0}' },
                contentSecondary: { $value: '{color.lilypad0At.70}' },
                contentTertiary: { $value: '{color.lilypad0At.50}' },
            },
            control: {
                fillPrimary: {
                    $value: '{color.lilypad10At.12}',
                },
                fillSecondary: {
                    $value: '{color.lilypad10At.18}',
                },
                fillTertiary: {
                    $value: '{color.lilypad10At.24}',
                },
                borderPrimary: {
                    $value: '{color.lilypad10At.36}',
                },
                borderSecondary: {
                    $value: '{color.lilypad10At.64}',
                },
                borderTertiary: {
                    $value: '{color.lilypad10At.72}',
                },
                borderQuaternary: {
                    $value: '{color.lilypad10At.80}',
                },
            },
            controlRaised: {
                fillPrimary: {
                    $value: '{color.lilypad0At.18}',
                },
                backdrop: {
                    $value: '{color.whiteAt.12}',
                },
            },
            highlight: {
                primary: {
                    $value: '{color.lilypad0At.12}',
                },
            },
            tone: {
                brighten: {
                    $value: `{color.lilypad10At.6}`,
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
                    $value: '{color.mandarin0At.3}',
                },
                secondaryBackgroundColor: {
                    $value: '{color.mandarin0At.6}',
                },
                tertiaryBackgroundColor: {
                    $value: '{color.mandarin0At.9}',
                },
                primaryBorderColor: {
                    $value: '{color.mandarin0At.6}',
                },
                secondaryBorderColor: {
                    $value: '{color.mandarin0At.9}',
                },
                tertiaryBorderColor: {
                    $value: '{color.mandarin0At.12}',
                },
            },
            text: {
                primary: {
                    $value: '{color.mandarin.0}',
                },
                secondary: {
                    $value: '{color.mandarin0At.60}',
                },
                tertiary: {
                    $value: '{color.mandarin0At.36}',
                },
            },
            icons: {
                primary: {
                    $value: '{color.mandarin.0}',
                },
                secondary: {
                    $value: '{color.mandarin0At.60}', // may change
                },
                tertiary: {
                    $value: '{color.mandarin0At.36}', // may change
                },
            },
            accent: {
                // Yes, this is correct. Mandarin buttons will use pollen colors
                primary: { $value: '{color.pollen.30}' },
                secondary: { $value: '{color.pollen.40}' },
                tertiary: { $value: '{color.pollen.50}' },
                quaternary: { $value: '{color.pollen.60}' },
                glowPrimary: { $value: '{color.pollen40At.20}' },
                glowSecondary: { $value: '{color.pollen40At.12}' },
                textPrimary: { $value: '{color.pollen.30}' },
                textSecondary: { $value: '{color.pollen.40}' },
                textTertiary: { $value: '{color.pollen.50}' },
                contentPrimary: { $value: '{color.pollen.100}' },
                contentSecondary: { $value: '{color.pollen100At.70}' },
                contentTertiary: { $value: '{color.pollen100At.50}' },
            },
            accentAlt: {
                primary: { $value: '{color.mandarin.60}' },
                secondary: { $value: '{color.mandarin.70}' },
                tertiary: { $value: '{color.mandarin.80}' },
                glowPrimary: { $value: '{color.mandarin30At.20}' }, // this will change
                glowSecondary: { $value: '{color.mandarin30At.12}' }, // this will change
                textPrimary: { $value: '{color.mandarin.20}' },
                textSecondary: { $value: '{color.mandarin.30}' },
                textTertiary: { $value: '{color.mandarin.40}' },
                contentPrimary: { $value: '{color.mandarin.0}' },
                contentSecondary: { $value: '{color.mandarin0At.70}' },
                contentTertiary: { $value: '{color.mandarin0At.50}' },
            },
            control: {
                fillPrimary: {
                    $value: '{color.mandarin10At.12}',
                },
                fillSecondary: {
                    $value: '{color.mandarin10At.18}',
                },
                fillTertiary: {
                    $value: '{color.mandarin10At.24}',
                },
                borderPrimary: {
                    $value: '{color.mandarin10At.36}',
                },
                borderSecondary: {
                    $value: '{color.mandarin10At.64}',
                },
                borderTertiary: {
                    $value: '{color.mandarin10At.72}',
                },
                borderQuaternary: {
                    $value: '{color.mandarin10At.80}',
                },
            },
            controlRaised: {
                fillPrimary: {
                    $value: '{color.mandarin0At.18}',
                },
                backdrop: {
                    $value: '{color.whiteAt.12}',
                },
            },
            highlight: {
                primary: {
                    $value: '{color.mandarin0At.12}',
                },
            },
            tone: {
                brighten: {
                    $value: `{color.mandarin10At.6}`,
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
                    $value: '{color.pollen0At.3}',
                },
                secondaryBackgroundColor: {
                    $value: '{color.pollen0At.6}',
                },
                tertiaryBackgroundColor: {
                    $value: '{color.pollen0At.9}',
                },
                primaryBorderColor: {
                    $value: '{color.pollen0At.6}',
                },
                secondaryBorderColor: {
                    $value: '{color.pollen0At.9}',
                },
                tertiaryBorderColor: {
                    $value: '{color.pollen0At.12}',
                },
            },
            text: {
                primary: {
                    $value: '{color.pollen.0}',
                },
                secondary: {
                    $value: '{color.pollen0At.60}',
                },
                tertiary: {
                    $value: '{color.pollen0At.36}',
                },
            },
            icons: {
                primary: {
                    $value: '{color.pollen.0}',
                },
                secondary: {
                    $value: '{color.pollen0At.60}', // may change
                },
                tertiary: {
                    $value: '{color.pollen0At.36}', // may change
                },
            },
            accent: {
                // Yes, this is correct. pollen buttons will use pollen colors
                primary: { $value: '{color.pollen.30}' },
                secondary: { $value: '{color.pollen.40}' },
                tertiary: { $value: '{color.pollen.50}' },
                quaternary: { $value: '{color.pollen.60}' },
                glowPrimary: { $value: '{color.pollen40At.20}' },
                glowSecondary: { $value: '{color.pollen40At.12}' },
                textPrimary: { $value: '{color.pollen.30}' },
                textSecondary: { $value: '{color.pollen.40}' },
                textTertiary: { $value: '{color.pollen.50}' },
                contentPrimary: { $value: '{color.pollen.100}' },
                contentSecondary: { $value: '{color.pollen100At.70}' },
                contentTertiary: { $value: '{color.pollen100At.50}' },
            },
            accentAlt: {
                primary: { $value: '{color.pollen.60}' },
                secondary: { $value: '{color.pollen.70}' },
                tertiary: { $value: '{color.pollen.80}' },
                glowPrimary: { $value: '{color.pollen30At.20}' }, // this will change
                glowSecondary: { $value: '{color.pollen30At.12}' }, // this will change
                textPrimary: { $value: '{color.pollen.20}' },
                textSecondary: { $value: '{color.pollen.30}' },
                textTertiary: { $value: '{color.pollen.40}' },
                contentPrimary: { $value: '{color.pollen.0}' },
                contentSecondary: { $value: '{color.pollen0At.70}' },
                contentTertiary: { $value: '{color.pollen0At.50}' },
            },
            control: {
                fillPrimary: {
                    $value: '{color.pollen10At.12}',
                },
                fillSecondary: {
                    $value: '{color.pollen10At.18}',
                },
                fillTertiary: {
                    $value: '{color.pollen10At.24}',
                },
                borderPrimary: {
                    $value: '{color.pollen10At.36}',
                },
                borderSecondary: {
                    $value: '{color.pollen10At.64}',
                },
                borderTertiary: {
                    $value: '{color.pollen10At.72}',
                },
                borderQuaternary: {
                    $value: '{color.pollen10At.80}',
                },
            },
            controlRaised: {
                fillPrimary: {
                    $value: '{color.pollen0At.18}',
                },
                backdrop: {
                    $value: '{color.whiteAt.12}',
                },
            },
            highlight: {
                primary: {
                    $value: '{color.pollen0At.12}',
                },
            },
            tone: {
                brighten: {
                    $value: `{color.pollen10At.6}`,
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
                    $value: '{color.pondwater0At.3}',
                },
                secondaryBackgroundColor: {
                    $value: '{color.pondwater0At.6}',
                },
                tertiaryBackgroundColor: {
                    $value: '{color.pondwater0At.9}',
                },
                primaryBorderColor: {
                    $value: '{color.pondwater0At.6}',
                },
                secondaryBorderColor: {
                    $value: '{color.pondwater0At.9}',
                },
                tertiaryBorderColor: {
                    $value: '{color.pondwater0At.12}',
                },
            },
            text: {
                primary: {
                    $value: '{color.pondwater.0}',
                },
                secondary: {
                    $value: '{color.pondwater0At.60}',
                },
                tertiary: {
                    $value: '{color.pondwater0At.36}',
                },
            },
            icons: {
                primary: {
                    $value: '{color.pondwater.0}',
                },
                secondary: {
                    $value: '{color.pondwater0At.60}',
                },
                tertiary: {
                    $value: '{color.pondwater0At.36}',
                },
            },
            accent: {
                primary: { $value: '{color.pondwater.30}' },
                secondary: { $value: '{color.pondwater.40}' },
                tertiary: { $value: '{color.pondwater.50}' },
                quaternary: { $value: '{color.pondwater.60}' },
                glowPrimary: { $value: '{color.pondwater40At.20}' },
                glowSecondary: { $value: '{color.pondwater40At.12}' },
                textPrimary: { $value: '{color.pondwater.30}' },
                textSecondary: { $value: '{color.pondwater.40}' },
                textTertiary: { $value: '{color.pondwater.50}' },
                contentPrimary: { $value: '{color.pondwater.100}' },
                contentSecondary: { $value: '{color.pondwater100At.70}' },
                contentTertiary: { $value: '{color.pondwater100At.50}' },
            },
            accentAlt: {
                primary: { $value: '{color.pondwater.60}' },
                secondary: { $value: '{color.pondwater.70}' },
                tertiary: { $value: '{color.pondwater.80}' },
                glowPrimary: { $value: '{color.pondwater20At.20}' },
                glowSecondary: { $value: '{color.pondwater20At.12}' },
                textPrimary: { $value: '{color.pondwater.20}' },
                textSecondary: { $value: '{color.pondwater.30}' },
                textTertiary: { $value: '{color.pondwater.40}' },
                contentPrimary: { $value: '{color.pondwater.0}' },
                contentSecondary: { $value: '{color.pondwater0At.70}' },
                contentTertiary: { $value: '{color.pondwater0At.50}' },
            },
            control: {
                fillPrimary: {
                    $value: '{color.pondwater10At.12}',
                },
                fillSecondary: {
                    $value: '{color.pondwater10At.18}',
                },
                fillTertiary: {
                    $value: '{color.pondwater10At.24}',
                },
                borderPrimary: {
                    $value: '{color.pondwater10At.36}',
                },
                borderSecondary: {
                    $value: '{color.pondwater10At.64}',
                },
                borderTertiary: {
                    $value: '{color.pondwater10At.72}',
                },
                borderQuaternary: {
                    $value: '{color.pondwater10At.80}',
                },
            },
            controlRaised: {
                fillPrimary: {
                    $value: '{color.pondwater0At.18}',
                },
                backdrop: {
                    $value: '{color.whiteAt.12}',
                },
            },
            highlight: {
                primary: {
                    $value: '{color.pondwater0At.12}',
                },
            },
            tone: {
                brighten: {
                    $value: `{color.pondwater10At.6}`,
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
