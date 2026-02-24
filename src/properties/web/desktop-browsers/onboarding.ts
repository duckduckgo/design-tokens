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
                glowPrimary: { $value: 'rgba(161, 207, 247, 0.16)' },
                glowSecondary: { $value: 'rgba(161, 207, 247, 0.08)' },
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
                    $value: '#133E7C',
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
                primaryContentColor: { $value: '#222222' },
            },
            accentAlt: {
                primary: { $value: '#133E7C' },
                glowPrimary: { $value: 'rgba(161, 207, 247, 0.12)' },
                glowSecondary: { $value: 'rgba(161, 207, 247, 0.08)' },
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
