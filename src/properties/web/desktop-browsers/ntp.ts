import { DesignToken } from 'style-dictionary/types';

const ntpComponentsTokens: DesignToken = {
    $type: 'color',
    ntp: {
        'next-steps-badge': {
            background: { $value: '{color.pollen.30}' },
            color: { $value: '{color.pollen.90}' },
        },
        light: {
            btn: {
                primary: {
                    rest: { $value: '{color.pondwater.60}' },
                    hover: { $value: '{color.pondwater.70}' },
                    active: { $value: '{color.pondwater.80}' },
                },
                secondary: {
                    rest: { $value: '{color.blackAt.6}' },
                },
                dismiss: {
                    border: { $value: '{color.blackAt.9}' },
                    color: { $value: '{color.blackAt.60}' },
                    hover: { $value: '{color.blackAt.9}' },
                },
            },
        },
        dark: {
            card: {
                border: { $value: '{color.whiteAt.3}' },
            },
            btn: {
                primary: {
                    rest: { $value: '{color.pondwater.40}' },
                    hover: { $value: '{color.pondwater.50}' },
                    active: { $value: '{color.pondwater.60}' },
                },
                secondary: {
                    rest: { $value: '{color.whiteAt.6}' },
                },
                dismiss: {
                    border: { $value: '{color.whiteAt.9}' },
                    color: { $value: '{color.whiteAt.60}' },
                    hover: { $value: '{color.whiteAt.18}' },
                },
            },
        },
    },
};

export default ntpComponentsTokens;
