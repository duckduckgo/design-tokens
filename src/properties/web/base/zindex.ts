import { DesignToken } from 'style-dictionary/types';

const Zindexes: DesignToken = {
    $type: 'dimension',
    undo: 'none',
    zIndex: {
        deepdive: { $value: -99999 },
        default: { $value: 1 },
        sticky: { $value: 1000 },
        dropdown: { $value: 1100 },
        'dialog-backdrop': { $value: 1200 },
        dialog: { $value: 1300 },
        notification: { $value: 1600 },
        alert: { $value: 1700 },
    },
};

export default Zindexes;
