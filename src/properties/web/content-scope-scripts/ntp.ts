import { DesignToken } from 'style-dictionary/types';

const ntpComponentsTokens: DesignToken = {
    $type: 'color',
    ntp: {
        'next-steps-badge': {
            background: { $value: '{color.pollen.30}' },
            color: { $value: '{color.pollen.90}' },
        },
        light: {
            button: {
                secondary: {
                    rest: { backgroundColor: { $value: '{color.blackAt.6}' } },
                },
                dismiss: {
                    rest: {
                        borderColor: { $value: '{color.blackAt.9}' },
                        color: { $value: '{color.blackAt.60}' },
                    },
                    hover: { backgroundColor: { $value: '{color.blackAt.9}' } },
                },
            },
        },
        dark: {
            card: {
                borderColor: { $value: '{color.whiteAt.3}' },
            },
            button: {
                secondary: {
                    rest: { backgroundColor: { $value: '{color.whiteAt.6}' } },
                },
                dismiss: {
                    rest: {
                        borderColor: { $value: '{color.whiteAt.9}' },
                        color: { $value: '{color.whiteAt.60}' },
                    },
                    hover: { backgroundColor: { $value: '{color.whiteAt.18}' } },
                },
            },
        },
    },
    // Partial theme for NTP custom color/gradient/image backgrounds. Content-scope-scripts
    // remaps these when body[data-rebrand="true"]:not([data-background-kind="default"]) matches.
    'color-theme': {
        ntpOnCustomBackground: {
            dark: {
                container: {
                    border: {
                        secondary: {
                            $value: 'rgba(255, 255, 255, 0.12)',
                        },
                    },
                    fill: {
                        secondary: {
                            $value: 'rgba(0, 0, 0, 0.36)',
                        },
                    },
                },
                input: {
                    textPrimary: {
                        $value: 'rgba(0, 0, 0, 0.84)',
                    },
                    textSecondary: {
                        $value: 'rgba(0, 0, 0, 0.6)',
                    },
                    iconsPrimary: {
                        $value: 'rgba(0, 0, 0, 0.84)',
                    },
                    iconsSecondary: {
                        $value: 'rgba(0, 0, 0, 0.6)',
                    },
                    fieldPrimaryBackgroundColor: {
                        $value: 'rgba(255, 255, 255, 0.24)',
                    },
                    fieldSecondaryBackgroundColor: {
                        $value: 'rgba(255, 255, 255, 0.3)',
                    },
                    control: {
                        primaryBackgroundColor: {
                            $value: 'rgba(0, 0, 0, 0.6)',
                        },
                        secondaryBackgroundColor: {
                            $value: 'rgba(255, 255, 255, 0.18)',
                        },
                        tertiaryBackgroundColor: {
                            $value: 'rgba(0, 0, 0, 0.36)',
                        },
                        shadowPrimary: {
                            $value: 'transparent',
                        },
                    },
                },
                shadow: {
                    primary: {
                        $value: 'rgba(0, 0, 0, 0.06)',
                    },
                    secondary: {
                        $value: 'rgba(0, 0, 0, 0.08)',
                    },
                },
            },
            light: {
                container: {
                    border: {
                        secondary: {
                            $value: 'rgba(255, 255, 255, 0.48)',
                        },
                    },
                    fill: {
                        secondary: {
                            $value: 'rgba(255, 255, 255, 0.42)',
                        },
                    },
                },
                input: {
                    textPrimary: {
                        $value: 'rgba(0, 0, 0, 0.96)',
                    },
                    textSecondary: {
                        $value: 'rgba(0, 0, 0, 0.6)',
                    },
                    iconsPrimary: {
                        $value: 'rgba(0, 0, 0, 0.84)',
                    },
                    iconsSecondary: {
                        $value: 'rgba(0, 0, 0, 0.6)',
                    },
                    fieldPrimaryBackgroundColor: {
                        $value: 'rgba(255, 255, 255, 0.54)',
                    },
                    fieldSecondaryBackgroundColor: {
                        $value: 'rgba(0, 0, 0, 0.18)',
                    },
                    control: {
                        primaryBackgroundColor: {
                            $value: 'rgba(255, 255, 255, 0.6)',
                        },
                        secondaryBackgroundColor: {
                            $value: 'rgba(0, 0, 0, 0.06)',
                        },
                        tertiaryBackgroundColor: {
                            $value: 'rgba(0, 0, 0, 0.06)',
                        },
                        shadowPrimary: {
                            $value: 'rgba(0, 0, 0, 0.06)',
                        },
                    },
                },
                shadow: {
                    primary: {
                        $value: 'rgba(0, 0, 0, 0.06)',
                    },
                    secondary: {
                        $value: 'rgba(0, 0, 0, 0.08)',
                    },
                },
            },
        },
    },
};

export default ntpComponentsTokens;
