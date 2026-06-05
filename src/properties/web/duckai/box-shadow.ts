import { DesignToken } from 'style-dictionary/types';

const duckaiBoxShadow: DesignToken = {
    'box-shadow': {
        'scroll-top-light': { $value: '0px 1px 12px rgba(0, 0, 0, 0.08)' },
        'scroll-top-dark': { $value: '0px 1px 12px 0px var({color.gray.100}), 0px 1px 12px 0px var({color.gray.100})' },
        'scroll-bottom-light': { $value: '0px -1px 12px rgba(0, 0, 0, 0.08)' },
        'scroll-bottom-dark': { $value: '0px -1px 12px 0px var(--ds-surface-backdrop), 0px -1px 12px 0px var(--ds-surface-backdrop)' },
    },
};

export default duckaiBoxShadow;
