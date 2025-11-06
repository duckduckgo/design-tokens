import { DesignToken } from 'style-dictionary/types';

const sdsSpacing: DesignToken = {
    base: {
        'font-size-value': {
            $value: '(0.9 * 16)',
            $type: 'other',
        },
        'font-size-in-px': {
            $value: '1px * var(--sds-base-font-size-value)',
            $type: 'other',
        },
        'px-in-rem': {
            $value: '(1rem / var(--sds-base-font-size-value))',
            $type: 'other',
        },
    },
    space: {
        $type: 'dimension',
        x_5: {
            $value: 'calc(2 * var(--sds-base-px-in-rem))',
        },
        x01: {
            $value: 'calc(4 * var(--sds-base-px-in-rem))',
        },
        x02: {
            $value: 'calc(8 * var(--sds-base-px-in-rem))',
        },
        x03: {
            $value: 'calc(12 * var(--sds-base-px-in-rem))',
        },
        x04: {
            $value: 'calc(16 * var(--sds-base-px-in-rem))',
        },
        x05: {
            $value: 'calc(20 * var(--sds-base-px-in-rem))',
        },
        x06: {
            $value: 'calc(24 * var(--sds-base-px-in-rem))',
        },
        x07: {
            $value: 'calc(28 * var(--sds-base-px-in-rem))',
        },
        x08: {
            $value: 'calc(32 * var(--sds-base-px-in-rem))',
        },
        x09: {
            $value: 'calc(36 * var(--sds-base-px-in-rem))',
        },
        x10: {
            $value: 'calc(40 * var(--sds-base-px-in-rem))',
        },
        x11: {
            $value: 'calc(44 * var(--sds-base-px-in-rem))',
        },
        x12: {
            $value: 'calc(48 * var(--sds-base-px-in-rem))',
        },
        x13: {
            $value: 'calc(52 * var(--sds-base-px-in-rem))',
        },
        x14: {
            $value: 'calc(56 * var(--sds-base-px-in-rem))',
        },
        x16: {
            $value: 'calc(64 * var(--sds-base-px-in-rem))',
        },
        x17: {
            $value: 'calc(68 * var(--sds-base-px-in-rem))',
        },
        x18: {
            $value: 'calc(72 * var(--sds-base-px-in-rem))',
        },
        x20: {
            $value: 'calc(80 * var(--sds-base-px-in-rem))',
        },
        x24: {
            $value: 'calc(96 * var(--sds-base-px-in-rem))',
        },
        x32: {
            $value: 'calc(128 * var(--sds-base-px-in-rem))',
        },
        x40: {
            $value: 'calc(160 * var(--sds-base-px-in-rem))',
        },
        x48: {
            $value: 'calc(192 * var(--sds-base-px-in-rem))',
        },
        x56: {
            $value: 'calc(224 * var(--sds-base-px-in-rem))',
        },
        x64: {
            $value: 'calc(256 * var(--sds-base-px-in-rem))',
        },
        x72: {
            $value: 'calc(288 * var(--sds-base-px-in-rem))',
        },
        x80: {
            $value: 'calc(320 * var(--sds-base-px-in-rem))',
        },
        x96: {
            $value: 'calc(384 * var(--sds-base-px-in-rem))',
        },
    },
    radius: {
        $type: 'dimension',
        x01: {
            $value: 'calc(4 * var(--sds-base-px-in-rem))',
        },
        x02: {
            $value: 'calc(8 * var(--sds-base-px-in-rem))',
        },
        x03: {
            $value: 'calc(12 * var(--sds-base-px-in-rem))',
        },
        x04: {
            $value: 'calc(16 * var(--sds-base-px-in-rem))',
        },
        x05: {
            $value: 'calc(20 * var(--sds-base-px-in-rem))',
        },
        x06: {
            $value: 'calc(24 * var(--sds-base-px-in-rem))',
        },
        x07: {
            $value: 'calc(28 * var(--sds-base-px-in-rem))',
        },
        x08: {
            $value: 'calc(32 * var(--sds-base-px-in-rem))',
        },
        full: {
            $value: 'calc(999 * var(--sds-base-px-in-rem))',
        },
    },
};

export default sdsSpacing;
