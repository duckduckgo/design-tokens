import { DesignToken } from 'style-dictionary/types';

const border: DesignToken = {
    $type: 'dimesions',
    undo: 'none',
    border: {
        radius: {
            xs: {
                $value: '4px',
            },
            sm: {
                $value: '8px',
            },
            base: {
                $value: '12px',
            },
            md: {
                $value: '16px',
            },
            lg: {
                $value: '20px',
            },
            xl: {
                $value: '30px',
            },
            xxl: {
                $value: '40px',
            },
            full: {
                $value: '100%',
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
