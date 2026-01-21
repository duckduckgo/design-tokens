import { DesignToken } from 'style-dictionary/types';

// Definitions for DuckSans + rebrand, these values will be used by the typography properties
const font: DesignToken = {
    $type: 'font',
    font: {
        family: {
            // For usage on text size 19px or larger
            display: {
                $value: "'DuckSansDisplay', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif",
                comment: 'Use for titles and any text over 19px or more in font-size',
            },
            // For usage on text size 18px or smaller
            product: {
                $value: "'DuckSansProduct', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif",
                comment: 'Use for most body text, any usage 18px or smaller in font-size',
            },
            monospace: {
                $value: "ui-monospace, Menlo, Monaco, 'Cascadia Mono', 'Segoe UI Mono', 'Roboto Mono', 'Oxygen Mono', 'Ubuntu Monospace', 'Source Code Pro', 'Fira Mono', 'Droid Sans Mono', 'Courier New', monospace",
            },
        },
        weight: {
            $type: 'number',
            normal: {
                $value: '400',
            },
            semibold: {
                $value: '500',
            },
            bold: {
                $value: '700',
            },
        },
        letterSpacing: {
            $type: 'dimension',
            narrow: {
                $value: '-1px',
            },
            normal: {
                $value: '0',
            },
            wide: {
                $value: '2px',
            },
        },
    },
};

export default font;
