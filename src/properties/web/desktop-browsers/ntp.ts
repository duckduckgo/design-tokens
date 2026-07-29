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
                primary: {
                    rest: { backgroundColor: { $value: '{color.pondwater.60}' } },
                    hover: { backgroundColor: { $value: '{color.pondwater.70}' } },
                    active: { backgroundColor: { $value: '{color.pondwater.80}' } },
                },
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
                primary: {
                    rest: { backgroundColor: { $value: '{color.pondwater.40}' } },
                    hover: { backgroundColor: { $value: '{color.pondwater.50}' } },
                    active: { backgroundColor: { $value: '{color.pondwater.60}' } },
                },
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
};

export default ntpComponentsTokens;
