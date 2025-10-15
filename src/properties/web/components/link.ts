import { DesignToken } from 'style-dictionary/types';

const link: DesignToken = {
    $type: 'link',
    undo: 'none',
    link: {
        rest: {
            textColor: {
                $value: 'red',
                dark: {
                    $value: 'red',
                },
            },
        },
        hover: {
            textColor: {
                $value: 'red',
                dark: {
                    $value: 'red',
                },
            },
            textDecoration: {
                $value: 'underline',
            },
        },
        active: {
            textColor: {
                $value: 'red',
                dark: {
                    $value: 'red',
                },
            },
        },
        disabled: {
            textColor: {
                $value: 'red',
                dark: {
                    $value: 'red',
                },
            },
        },
    },
};

export default link;
