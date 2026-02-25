import { DesignToken } from 'style-dictionary/types';

const onboardingTokens: DesignToken = {
    $type: 'color',
    onboarding: {
        light: {
            surface: {
                backdrop: {
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
                decorationPrimary: {
                    $value: '{color.blackAt.9}',
                },
                decorationSecondary: {
                    $value: '{color.blackAt.16}',
                },
            },
            text: {
                primary: {
                    $value: '{color.eggshell.90At.96}',
                },
                secondary: {
                    $value: '{color.eggshell.90At.60}',
                },
            },
            accent: {
                primary: { $value: '{color.pondwater.50}' },
                secondary: { $value: '{color.pondwater.60}' },
                primaryTextColor: { $value: '{color.pondwater.60}' },
                primaryContentColor: { $value: '{color.white}' },
            },
            accentButton: {
                primary: { $value: '{color.mandarin.50}' },
                secondary: { $value: '{color.mandarin.60}' },
                primaryContentColor: { $value: '{color.white}' },
            },
            accentAlt: {
                primary: { $value: '{color.pondwater.20}' },
                glowPrimary: { $value: '{color.pondwater.30At.16}' },
                glowSecondary: { $value: '{color.pondwater.30At.8}' },
            },
            control: {
                primaryBorderColor: {
                    $value: '{color.blackAt.20}',
                },
                primaryFillColor: {
                    $value: '{color.blackAt.6}',
                },
                secondaryFillColor: {
                    $value: '{color.blackAt.9}',
                },
            },
            shadow: {
                secondaryColor: {
                    $value: '{color.blackAt.8}',
                },
            },
        },
        dark: {
            surface: {
                backdrop: {
                    $value: '{color.pondwater.80}',
                },
                primary: {
                    $value: '{color.pondwater.80}',
                },
                secondary: {
                    $value: '{color.pondwater.90}',
                },
                tertiary: {
                    $value: '{color.pondwater.100}',
                },
                decorationPrimary: {
                    $value: '{color.whiteAt.6}',
                },
                decorationSecondary: {
                    $value: '{color.whiteAt.9}',
                },
            },
            text: {
                primary: {
                    $value: '{color.white}',
                },
                secondary: {
                    $value: '{color.eggshell.30}',
                },
            },
            accent: {
                primary: { $value: '{color.pondwater.40}' },
                secondary: { $value: '{color.pondwater.50}' },
                primaryTextColor: { $value: '{color.pondwater.40}' },
                primaryContentColor: { $value: '{color.eggshell.90}' },
            },
            accentButton: {
                primary: { $value: '{color.pollen.30}' },
                secondary: { $value: '{color.pollen.40}' },
                primaryContentColor: { $value: '{color.pollen.100}' },
            },
            accentAlt: {
                primary: { $value: '{color.pondwater.80}' },
                glowPrimary: { $value: '{color.pondwater.30At.12}' },
                glowSecondary: { $value: '{color.pondwater.30At.8}' },
            },
            control: {
                primaryBorderColor: {
                    $value: '{color.whiteAt.36}',
                },
                primaryFillColor: {
                    $value: '{color.whiteAt.12}',
                },
                secondaryFillColor: {
                    $value: '{color.whiteAt.18}',
                },
            },
            shadow: {
                secondaryColor: {
                    $value: '{color.blackAt.8}',
                },
            },
        },
    },
};

export default onboardingTokens;
