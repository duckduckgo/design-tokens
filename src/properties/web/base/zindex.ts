import { DesignToken } from 'style-dictionary/types';

const Zindexes: DesignToken = {
    $type: 'dimension',
    undo: 'none',
    zIndex: {
        'page-background': { $value: -1 },
        default: { $value: 1 },
        popover: { $value: 100 },
        'side-menu': { $value: 200 },
        'modal-backdrop': { $value: 300 },
        modal: { $value: 305 },
        alert: { $value: 400 },
    },
};

export default Zindexes;
