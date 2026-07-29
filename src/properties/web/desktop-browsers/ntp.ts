import { DesignToken } from 'style-dictionary/types';

const ntpComponentsTokens: DesignToken = {
    $type: 'color',
    ntp: {
        'next-steps-badge': {
            background: { $value: '{color.pollen.30}' },
            color: { $value: '{color.pollen.90}' },
        },
        card: {
            border: {
                dark: { $value: '{color.whiteAt.3}' },
            },
        },
        btn: {
            primary: {
                light: {
                    rest: { $value: '{color.pondwater.60}' },
                    hover: { $value: '{color.pondwater.70}' },
                    active: { $value: '{color.pondwater.80}' },
                },
                dark: {
                    rest: { $value: '{color.pondwater.40}' },
                    hover: { $value: '{color.pondwater.50}' },
                    active: { $value: '{color.pondwater.60}' },
                },
            },
            secondary: {
                light: {
                    rest: { $value: '{color.blackAt.6}' },
                },
                dark: {
                    rest: { $value: '{color.whiteAt.6}' },
                },
            },
            dismiss: {
                light: {
                    border: { $value: '{color.blackAt.9}' },
                    color: { $value: '{color.blackAt.60}' },
                    hover: { $value: '{color.blackAt.9}' },
                },
                dark: {
                    border: { $value: '{color.whiteAt.9}' },
                    color: { $value: '{color.whiteAt.60}' },
                    hover: { $value: '{color.whiteAt.18}' },
                },
            },
        },
    },
};

export default ntpComponentsTokens;
