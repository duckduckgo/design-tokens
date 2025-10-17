import { DesignToken } from 'style-dictionary/types';

const eyebrow: DesignToken = {
    $type: 'eyebrow',
    undo: 'none',
    display: {
        fontSize: {
            eyebrow: {
                '01': { $value: '18px' },
                '02': { $value: '{display.fontSize.body.05}' },
            },
        },
    },
};

export default eyebrow;
