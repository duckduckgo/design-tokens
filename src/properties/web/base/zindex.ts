import { DesignToken } from 'style-dictionary/types';

const Zindexes: DesignToken = {
    zIndex: {
        hidden: { $value: -999 },
        default: { $value: 1 },
        popover: { $value: 100 },
        'side-menu': { $value: 200 },
        'modal-backdrop': { $value: 300 },
        modal: { $value: 305 },
        alert: { $value: 400, comment: 'Used for alerts, toasts' },
    },
};

export default Zindexes;
