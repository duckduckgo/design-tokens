import { DesignToken } from 'style-dictionary/types';

const onboardingTokens: DesignToken = {
    $type: 'color',
    onboarding: {
        light: {
            surface: {
                backdrop: {
                    $value: '{color.white}',
                },
                canvas: {
                    $value: '{color.white}',
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
                decoration: {
                    primary: {
                        $value: '{color.eggshell.90At.9}',
                    },
                    secondary: {
                        $value: '{color.eggshell.90At.16}',
                    },
                    tertiary: {
                        $value: '{color.eggshell.90At.24}',
                    },
                },
            },
            container: {
                primaryBackgroundColor: {
                    $value: '{color.eggshell.90At.1}',
                },
                secondaryBackgroundColor: {
                    $value: '{color.eggshell.90At.3}',
                },
                tertiaryBackgroundColor: {
                    $value: '{color.eggshell.90At.6}',
                },
                primaryBorderColor: {
                    $value: '{color.eggshell.90At.6}',
                },
                secondaryBorderColor: {
                    $value: '{color.eggshell.90At.9}',
                },
                tertiaryBorderColor: {
                    $value: '{color.eggshell.90At.12}',
                },
            },
            text: {
                primary: {
                    $value: '{color.eggshell.90At.96}',
                },
                secondary: {
                    $value: '{color.eggshell.90At.60}',
                },
                tertiary: {
                    $value: '{color.eggshell.90At.36}',
                },
            },
            icons: {
                primary: {
                    $value: '{color.eggshell.90At.84}',
                },
                secondary: {
                    $value: '{color.gray.80At.60}',
                },
                tertiary: {
                    $value: '{color.eggshell.90At.40}',
                },
            },
            accent: {
                primary: { $value: '{color.pondwater.50}' },
                secondary: { $value: '{color.pondwater.60}' },
                tertiary: { $value: '{color.pondwater.60}' },
                quaternary: { $value: '{color.pondwater.70}' },
                glowPrimary: { $value: 'rgba(47, 149, 238, 0.20)' },
                glowSecondary: { $value: 'rgba(47, 149, 238, 0.12)' },
                primaryTextColor: { $value: '{color.pondwater.60}' },
                secondaryTextColor: { $value: '{color.pondwater.70}' },
                tertiaryTextColor: { $value: '{color.pondwater.80}' },
                primaryContentColor: { $value: '{color.white}' },
                secondaryContentColor: { $value: 'rgba(255, 255, 255, 0.70)' },
                tertiaryContentColor: { $value: 'rgba(255, 255, 255, 0.50)' },
            },
            accentAlt: {
                primary: { $value: '{color.pondwater.20}' },
                secondary: { $value: '{color.pondwater.30}' },
                tertiary: { $value: '{color.pondwater.30}' },
                glowPrimary: { $value: 'rgba(161, 207, 247, 0.16)' },
                glowSecondary: { $value: 'rgba(161, 207, 247, 0.08)' },
                primaryTextColor: { $value: '{color.pondwater.60}' },
                secondaryTextColor: { $value: '{color.pondwater.70}' },
                tertiaryTextColor: { $value: '{color.pondwater.80}' },
                primaryContentColor: { $value: '#0C2031' },
                secondaryContentColor: { $value: 'rgba(12, 32, 49, 0.70)' },
                tertiaryContentColor: { $value: 'rgba(12, 32, 49, 0.50)' },
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
                    $value: '{color.blackAt.20}',
                },
                secondaryBorderColor: {
                    $value: '{color.blackAt.24}',
                },
                tertiaryBorderColor: {
                    $value: '{color.blackAt.28}',
                },
                quaternaryBorderColor: {
                    $value: '{color.blackAt.32}',
                },
            },
            controlRaised: {
                primaryBackgroundColor: {
                    $value: '{color.white}',
                },
                backdrop: {
                    $value: '{color.blackAt.9}',
                },
            },
            highlight: {
                primary: {
                    $value: '{color.whiteAt.24}',
                },
            },
            tone: {
                brightenPrimary: {
                    $value: '{color.whiteAt.60}',
                },
                brightenSecondary: {
                    $value: '{color.whiteAt.84}',
                },
                darkenPrimary: {
                    $value: '{color.eggshell.90At.3}',
                },
            },
            shadow: {
                primaryColor: {
                    $value: '{color.blackAt.5}',
                },
                secondaryColor: {
                    $value: '{color.blackAt.8}',
                },
                tertiaryColor: {
                    $value: '{color.blackAt.16}',
                },
            },
            destructive: {
                primary: { $value: '{color.red.50}' },
                secondary: { $value: '{color.red.60}' },
                tertiary: { $value: '{color.red.70}' },
                glowPrimary: { $value: 'rgba(229, 36, 75, 0.20)' },
                glowSecondary: { $value: 'rgba(229, 36, 75, 0.12)' },
                primaryTextColor: { $value: '{color.red.50}' },
                secondaryTextColor: { $value: '{color.red.60}' },
                tertiaryTextColor: { $value: '{color.red.70}' },
                primaryContentColor: { $value: '{color.white}' },
                secondaryContentColor: { $value: '{color.whiteAt.90}' },
                tertiaryContentColor: { $value: '{color.whiteAt.60}' },
            },
            status: {
                green: { $value: '{color.lilypad.60}' },
                yellow: { $value: '{color.pollen.40}' },
                red: { $value: '{color.red.50}' },
            },
        },
        dark: {
            surface: {
                backdrop: {
                    $value: '#133E7C',
                },
                canvas: {
                    $value: '{color.black}',
                },
                primary: {
                    $value: '#123269',
                },
                secondary: {
                    $value: '#051E3D',
                },
                tertiary: {
                    $value: '#011D34',
                },
                decoration: {
                    primary: {
                        $value: '{color.whiteAt.6}',
                    },
                    secondary: {
                        $value: '{color.whiteAt.9}',
                    },
                    tertiary: {
                        $value: '{color.whiteAt.20}',
                    },
                },
            },
            container: {
                primaryBackgroundColor: {
                    $value: '{color.whiteAt.1}',
                },
                secondaryBackgroundColor: {
                    $value: '{color.whiteAt.6}',
                },
                tertiaryBackgroundColor: {
                    $value: '{color.whiteAt.9}',
                },
                primaryBorderColor: {
                    $value: '{color.whiteAt.9}',
                },
                secondaryBorderColor: {
                    $value: '{color.whiteAt.12}',
                },
                tertiaryBorderColor: {
                    $value: '{color.whiteAt.18}',
                },
            },
            text: {
                primary: {
                    $value: '{color.white}',
                },
                secondary: {
                    $value: '#C7C4C1',
                },
                tertiary: {
                    $value: '{color.gray.50}',
                },
            },
            icons: {
                primary: {
                    $value: 'rgba(251, 250, 249, 0.78)',
                },
                secondary: {
                    $value: 'rgba(251, 250, 249, 0.48)',
                },
                tertiary: {
                    $value: 'rgba(251, 250, 249, 0.48)',
                },
            },
            accent: {
                primary: { $value: '{color.pondwater.40}' },
                secondary: { $value: '{color.pondwater.50}' },
                tertiary: { $value: '{color.pondwater.60}' },
                quaternary: { $value: '{color.pondwater.70}' },
                glowPrimary: { $value: 'rgba(117, 182, 235, 0.16)' },
                glowSecondary: { $value: 'rgba(117, 182, 235, 0.12)' },
                primaryTextColor: { $value: '{color.pondwater.40}' },
                secondaryTextColor: { $value: '{color.pondwater.50}' },
                tertiaryTextColor: { $value: '{color.pondwater.60}' },
                primaryContentColor: { $value: '#222222' },
                secondaryContentColor: { $value: 'rgba(17, 17, 17, 0.70)' },
                tertiaryContentColor: { $value: 'rgba(17, 17, 17, 0.50)' },
            },
            accentAlt: {
                primary: { $value: '#133E7C' },
                secondary: { $value: '#722408' },
                tertiary: { $value: '#99300B' },
                glowPrimary: { $value: 'rgba(161, 207, 247, 0.12)' },
                glowSecondary: { $value: 'rgba(161, 207, 247, 0.08)' },
                primaryTextColor: { $value: '#F8B7A0' },
                secondaryTextColor: { $value: '#F69B79' },
                tertiaryTextColor: { $value: '#F37E53' },
                primaryContentColor: { $value: '#F8B7A0' },
                secondaryContentColor: { $value: '#FCE2D9' },
                tertiaryContentColor: { $value: '{color.white}' },
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
            controlRaised: {
                primaryBackgroundColor: {
                    $value: '{color.white}',
                },
                backdrop: {
                    $value: '{color.blackAt.9}',
                },
            },
            highlight: {
                primary: {
                    $value: '{color.whiteAt.24}',
                },
            },
            tone: {
                brightenPrimary: {
                    $value: 'rgba(204, 218, 255, 0.12)',
                },
                brightenSecondary: {
                    $value: 'rgba(204, 218, 255, 0.24)',
                },
                darkenPrimary: {
                    $value: '{color.blackAt.6}',
                },
            },
            shadow: {
                primaryColor: {
                    $value: '{color.blackAt.5}',
                },
                secondaryColor: {
                    $value: '{color.blackAt.8}',
                },
                tertiaryColor: {
                    $value: '{color.blackAt.16}',
                },
            },
            destructive: {
                primary: { $value: '{color.red.30}' },
                secondary: { $value: '{color.red.20}' },
                tertiary: { $value: '{color.red.10}' },
                glowPrimary: { $value: 'rgba(238, 109, 135, 0.20)' },
                glowSecondary: { $value: 'rgba(238, 109, 135, 0.12)' },
                primaryTextColor: { $value: '{color.red.30}' },
                secondaryTextColor: { $value: '{color.red.20}' },
                tertiaryTextColor: { $value: '{color.red.10}' },
                primaryContentColor: { $value: '{color.white}' },
                secondaryContentColor: { $value: '{color.whiteAt.90}' },
                tertiaryContentColor: { $value: '{color.whiteAt.60}' },
            },
            status: {
                green: { $value: '{color.lilypad.30}' },
                yellow: { $value: '{color.pollen.30}' },
                red: { $value: '{color.red.30}' },
            },
        },
    },
};

export default onboardingTokens;
