import { DesignToken } from 'style-dictionary/types';

// Legacy typography tokens still consumed by embedded-fe, restored at their v0.44.0 values
const typography: DesignToken = {
    font: {
        'body-md': {
            fontFamily: {
                $value: '{font.family.product}',
            },
            letterSpacing: {
                $value: '{font.letterSpacing.normal}',
            },
            lineHeight: {
                $value: '20px',
            },
            size: {
                $value: '14px',
            },
        },
        'body-sm': {
            lineHeight: {
                $value: '16px',
            },
        },
        buttonLabel: {
            '01': {
                size: {
                    $value: '18px',
                },
            },
            '03': {
                fontFamily: {
                    $value: '{font.family.product}',
                },
                letterSpacing: {
                    $value: '{font.letterSpacing.normal}',
                },
                size: {
                    $value: '14px',
                },
            },
        },
    },
};

export default typography;
