import { DesignToken } from 'style-dictionary/types';

const iconButton: DesignToken = {
    iconButton: {
        // Border radius is the same for all sizes
        borderRadius: {
            $value: '{radius.full}',
        },
        xxs: {
            // Padding is the same for all sizes
            padding: {
                $value: '{space.x1_5}',
            },
            // Icon size is for height and width values
            iconSize: {
                $value: '16px',
            },
        },
        xs: {
            padding: {
                $value: '{space.x02}',
            },
            iconSize: {
                $value: '16px',
            },
        },
        sm: {
            padding: {
                $value: '{space.x02_5}',
            },
            iconSize: {
                $value: '16px',
            },
        },
        md: {
            padding: {
                $value: '{space.x03}',
            },
            iconSize: {
                $value: '16px',
            },
        },
        lg: {
            padding: {
                $value: '{space.x04}',
            },
            iconSize: {
                $value: '16px',
            },
        },
        xl: {
            padding: {
                $value: '{space.x05}',
            },
            iconSize: {
                $value: '16px',
            },
        },
    },
};
export default iconButton;
