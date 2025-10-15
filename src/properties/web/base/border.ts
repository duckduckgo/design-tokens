import { DesignToken } from 'style-dictionary/types';

const border: DesignToken = {
    $type: 'dimension',
    undo: 'none',
    border: {
        radius: {
            x01: {
                $value: '4px',
            },
            x02: {
                $value: '8px',
            },
            x03: {
                $value: '12px',
            },
            x04: {
                $value: '16px',
            },
            x05: {
                $value: '20px',
            },
            x06: {
                $value: '24px',
            },
            x07: {
                $value: '28px',
            },
            x08: {
                $value: '32px',
            },
            full: {
                $value: '999px',
            },
        },
        width: {
            base: {
                $value: '1px',
            },
            lg: {
                $value: '2px',
            },
            xl: {
                $value: '3px',
            },
        },
        style: {
            base: {
                $value: 'solid',
            },
        },
        color: {
            rest: {
                $value: 'red',
                dark: {
                    $value: 'red',
                },
            },
            active: {
                $value: 'red',
                dark: {
                    $value: 'red',
                },
            },
        },
    },
};

export default border;
