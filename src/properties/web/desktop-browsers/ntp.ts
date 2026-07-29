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
