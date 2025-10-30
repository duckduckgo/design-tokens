import { DesignToken } from 'style-dictionary/types';

const font: DesignToken = {
    $type: 'dimension',
    undo: 'none',
    display: {
        fontSize: {
            title: {
                '01': { $value: '64px' },
                '02': { $value: '48px' },
                '03': { $value: '36px' },
                '04': { $value: '24px' },
                '05': { $value: '20px' },
                '06': { $value: '16px' },
            },
            body: {
                '01': { $value: '32px' },
                '02': { $value: '24px' },
                '03': { $value: '20px' },
                '04': { $value: '16px' },
                '05': { $value: '14px' },
            },
        },
    },
};

export default font;
