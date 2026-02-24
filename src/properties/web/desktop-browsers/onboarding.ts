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
            },
            text: {
                primary: {
                    $value: '{color.eggshell.90At.96}',
                },
            },
            accent: {
                primary: { $value: '{color.pondwater.50}' },
                secondary: { $value: '{color.pondwater.60}' },
                primaryTextColor: { $value: '{color.pondwater.60}' },
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
            },
            text: {
                primary: {
                    $value: '{color.white}',
                },
            },
            accent: {
                primary: { $value: '{color.pondwater.40}' },
                secondary: { $value: '{color.pondwater.50}' },
                primaryTextColor: { $value: '{color.pondwater.40}' },
                primaryContentColor: { $value: '{color.gray.90}' },
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
