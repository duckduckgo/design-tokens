import { DesignToken } from 'style-dictionary/types';

const sdsTypography: DesignToken = {
    font: {
        family: {
            '01': {
                $type: 'fontFamily',
                $value: "'DDG_ProximaNova', 'DDG_ProximaNova_UI_0', 'DDG_ProximaNova_UI_1', 'DDG_ProximaNova_UI_2', 'DDG_ProximaNova_UI_3', 'DDG_ProximaNova_UI_4', 'DDG_ProximaNova_UI_5', 'DDG_ProximaNova_UI_6', 'Proxima Nova', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif",
            },
            monospace: {
                $type: 'fontFamily',
                $value: "ui-monospace, Menlo, Monaco, 'Cascadia Mono', 'Segoe UI Mono', 'Roboto Mono', 'Oxygen Mono', 'Ubuntu Monospace', 'Source Code Pro','Fira Mono', 'Droid Sans Mono', 'Courier New', monospace",
            },
        },
        size: {
            $type: 'dimension',
            '01': {
                $value: '1rem',
            },
            'title-01': {
                $value: 'calc(24 / 14 * 1rem)',
            },
            'title-02': {
                $value: 'calc(19 / 14 * 1rem)',
            },
            'body-large': {
                $value: 'calc(16 / 14 * 1rem)',
            },
            body: {
                $value: '1rem',
            },
            caption: {
                $value: 'calc(13 / 14 * 1rem)',
            },
            label: {
                $value: 'calc(12 / 14 * 1rem)',
            },
        },
        'line-height': {
            $type: 'other',
            '01': {
                $value: 'calc(18 / 14)',
            },
            'title-01': {
                $value: 'calc(32 / 24)',
            },
            'title-02': {
                $value: 'calc(24 / 19)',
            },
            'body-large': {
                $value: 'calc(20 / 16)',
            },
            body: {
                $value: 'calc(18 / 14)',
            },
            caption: {
                $value: 'calc(16 / 13)',
            },
            label: {
                $value: '1',
            },
        },
        weight: {
            $type: 'fontWeight',
            normal: {
                $value: '400',
            },
            medium: {
                $value: '430',
            },
            bold: {
                $value: '700',
            },
        },
    },
};

export default sdsTypography;
