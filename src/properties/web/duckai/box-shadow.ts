import { DesignToken } from 'style-dictionary/types';

const duckaiBoxShadow: DesignToken = {
    'box-shadow': {
        'main-chat-light': { $value: '0px 4px 12px 0px rgba(0, 0, 0, 0.04)' },
        'main-chat-dark': { $value: '0px 4px 12px 0px rgba(0, 0, 0, 0.20), 0px 20px 40px 0px rgba(0, 0, 0, 0.16)' },
        'scroll-top-light': { $value: '0px 1px 12px rgba(0, 0, 0, 0.08)' },
        'scroll-top-dark': { $value: '0px 1px 12px 0px var({color.gray.100}), 0px 1px 12px 0px var({color.gray.100})' },
    },
};

export default duckaiBoxShadow;
