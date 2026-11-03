import { DesignToken } from 'style-dictionary/types';

// Labels only are shared between marketing & product stacks
const typography: DesignToken = {
    font: {
        label: {
            '01': {
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
                    $value: '18px',
                    comment: 'Button label',
                },
                weight: {
                    $value: '{font.weight.bold}',
                },
            },
            '02': {
                fontFamily: {
                    $value: '{font.family.product}',
                },
                letterSpacing: {
                    $value: '{font.letterSpacing.normal}',
                },
                lineHeight: {
                    $value: '16px',
                },
                size: {
                    $value: '16px',
                    comment: 'button label & eyecatch label',
                },
                weight: {
                    $value: '{font.weight.bold}',
                },
            },
            '03': {
                fontFamily: {
                    $value: '{font.family.product}',
                },
                letterSpacing: {
                    $value: '{font.letterSpacing.normal}',
                },
                lineHeight: {
                    $value: '14px',
                },
                size: {
                    $value: '14px',
                },
                weight: {
                    $value: '{font.weight.bold}',
                },
            },
            '04': {
                fontFamily: {
                    $value: '{font.family.product}',
                },
                letterSpacing: {
                    $value: '{font.letterSpacing.normal}',
                },
                lineHeight: {
                    $value: '12px',
                },
                size: {
                    $value: '12px',
                },
                weight: {
                    $value: '{font.weight.bold}',
                },
            },
        },
    },
};

export default typography;
