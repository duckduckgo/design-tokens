import { DesignToken } from 'style-dictionary/types';

const base: DesignToken = {
    $type: 'base',
    base: {
        fontSize: {
            $value: '16px',
        },

        pxInRem: {
            $value: '(1rem / var(--sds-base-font-size-value))',
        },
    },
};

export default base;
