import { DesignToken } from 'style-dictionary/types';

const ntpComponentsTokens: DesignToken = {
    $type: 'color',
    'next-steps-badge': {
        background: { $value: '{color.pollen.30}' },
        color: { $value: '{color.pollen.90}' },
    },
    'ntp-dismiss-btn': {
        border: { $value: '{color.blackAt.9}' },
        color: { $value: '{color.blackAt.60}' },
    },
};

export default ntpComponentsTokens;
