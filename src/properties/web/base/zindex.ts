import { DesignToken } from 'style-dictionary/types';

const Zindexes: DesignToken = {
    // the $type: 'other' is used to ensure the value is a number, and not given rems/px
    zIndex: {
        hidden: { $type: 'other', $value: -999 },
        default: { $type: 'other', $value: 1 },
        'middle-raised': { $type: 'other', $value: 50 },
        sticky: { $type: 'other', $value: 55 },
        popover: { $type: 'other', $value: 100 },
        'side-menu': { $type: 'other', $value: 200 },
        'modal-backdrop': { $type: 'other', $value: 300 },
        modal: { $type: 'other', $value: 305 },
        alert: { $type: 'other', $value: 400, comment: 'Used for alerts, toasts' },
    },
};

export default Zindexes;
