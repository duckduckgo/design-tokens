import { DesignToken } from 'style-dictionary/types';

// Definitions for DuckSans + rebrand
const typography: DesignToken = {
    font: {
        // Huge titles
        'display-01': {
            fontFamily: {
                $value: '{font.family.display}',
            },
            letterSpacing: {
                $value: '{font.letterSpacing.narrow}',
            },
            lineHeight: {
                $value: '64px',
            },
            size: {
                $value: '64px',
            },
            weight: {
                $value: '{font.weight.normal}',
            },
        },
        'display-02': {
            fontFamily: {
                $value: '{font.family.display}',
            },
            letterSpacing: {
                $value: '{font.letterSpacing.narrow}',
            },
            lineHeight: {
                $value: '52px',
            },
            size: {
                $value: '52px',
            },
            weight: {
                $value: '{font.weight.normal}',
            },
        },
        // Regular titles
        'title-01': {
            fontFamily: {
                $value: '{font.family.display}',
            },
            letterSpacing: {
                $value: '{font.letterSpacing.narrow}',
            },
            lineHeight: {
                $value: '44px',
            },
            size: {
                $value: '44px',
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
                $value: '44px',
            },
            size: {
                $value: '36px',
            },
            weight: {
                $value: '{font.weight.normal}',
            },
        },
        'title-03': {
            fontFamily: {
                $value: '{font.family.display}',
            },
            letterSpacing: {
                $value: '{font.letterSpacing.normal}',
            },
            lineHeight: {
                $value: '36px',
            },
            size: {
                $value: '28px',
            },
            weight: {
                $value: '{font.weight.normal}',
            },
        },
        'title-04': {
            fontFamily: {
                $value: '{font.family.display}',
            },
            letterSpacing: {
                $value: '{font.letterSpacing.normal}',
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
        // Body text variants
        lead: {
            fontFamily: {
                $value: '{font.family.display}',
            },
            letterSpacing: {
                $value: '{font.letterSpacing.normal}',
            },
            lineHeight: {
                $value: '28px',
            },
            size: {
                $value: '20px',
                comment: 'Headline-like body',
            },
            weight: {
                $value: '{font.weight.normal}',
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
                $value: '24px',
            },
            size: {
                $value: '16px',
            },
            weight: {
                $value: '{font.weight.normal}',
            },
        },
        'body-sm': {
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
                $value: '12px',
            },
            weight: {
                $value: '{font.weight.normal}',
            },
        },
        // Overline variants
        overline: {
            '01': {
                fontFamily: {
                    $value: '{font.family.product}',
                },
                letterSpacing: {
                    $value: '{font.letterSpacing.wide}',
                },
                lineHeight: {
                    $value: '18px',
                },
                size: {
                    $value: '16px',
                    comment: 'Previously called eyebrow',
                },
                weight: {
                    $value: '{font.weight.semibold}',
                },
                textTransform: {
                    $value: 'uppercase',
                },
            },
            '02': {
                fontFamily: {
                    $value: '{font.family.product}',
                },
                letterSpacing: {
                    $value: '{font.letterSpacing.wide}',
                },
                lineHeight: {
                    $value: '14px',
                },
                size: {
                    $value: '14px',
                    comment: 'Previously called eyebrow',
                },
                weight: {
                    $value: '{font.weight.semibold}',
                },
                textTransform: {
                    $value: 'uppercase',
                },
            },
        },
    },
};

export default typography;
