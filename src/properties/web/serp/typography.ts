import { DesignToken } from 'style-dictionary/types';

// Definitions for DuckSans + rebrand
const serpTypography: DesignToken = {
    font: {
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
