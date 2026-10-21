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
                decoration: {
                    primary: {
                        $value: '{color.blackAt.9}',
                    },
                    secondary: {
                        $value: '{color.blackAt.16}',
                    },
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
                    $value: 'rgba(0, 0, 0, 0.20)',
                },
                primaryBackgroundColor: {
                    $value: '{color.blackAt.6}',
                    comment: 'Maps to Fill-Primary in Figma',
                },
                secondaryBackgroundColor: {
                    $value: '{color.blackAt.9}',
                    comment: 'Maps to Fill-Secondary in Figma',
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
                decoration: {
                    primary: {
                        $value: '{color.whiteAt.6}',
                    },
                    secondary: {
                        $value: '{color.whiteAt.9}',
                    },
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
                primaryBackgroundColor: {
                    $value: '{color.whiteAt.12}',
                    comment: 'Maps to Fill-Primary in Figma',
                },
                secondaryBackgroundColor: {
                    $value: '{color.whiteAt.18}',
                    comment: 'Maps to Fill-Secondary in Figma',
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
