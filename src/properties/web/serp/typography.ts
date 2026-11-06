import { DesignToken } from 'style-dictionary/types';

// Definitions for DuckSans + rebrand
const serpTypography: DesignToken = {
    font: {
        // Regular titles
        'title-01': {
            fontFamily: {
                $value: '{font.family.display}',
            },
            letterSpacing: {
                $value: '{font.letterSpacing.narrow}',
            },
            lineHeight: {
                $value: '32px',
            },
            size: {
                $value: '24px',
            },
            weight: {
                $value: '{font.weight.normal}',
            },
        },
        'title-02': {
            fontFamily: {
                $value: '{font.family.display}',
            },
            letterSpacing: {
                $value: '{font.letterSpacing.narrow}',
            },
            lineHeight: {
                $value: '24px',
            },
            size: {
                $value: '20px',
            },
            weight: {
                $value: '{font.weight.normal}',
            },
        },
        // Body text variants
        headline: {
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
                $value: '16px',
                comment: 'Headline-like body',
            },
            weight: {
                $value: '{font.weight.bold}',
            },
        },
        body: {
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
                $value: '14px',
            },
            weight: {
                $value: '{font.weight.normal}',
            },
        },
        'body-long': {
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
            weight: {
                $value: '{font.weight.normal}',
            },
        },
        footnote: {
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
                $value: '13px',
            },
            weight: {
                $value: '{font.weight.normal}',
            },
        },
        'serp-organic': {
            fontFamily: {
                $value: '{font.family.display}',
            },
            letterSpacing: {
                $value: '{font.letterSpacing.normal}',
            },
            lineHeight: {
                $value: '26px',
            },
            size: {
                $value: '21px',
            },
            weight: {
                $value: '{font.weight.normal}',
            },
        },
    },
};

export default serpTypography;
