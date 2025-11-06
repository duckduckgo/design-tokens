import { DesignToken } from 'style-dictionary/types';

const sdsSemanticColors: DesignToken = {
    $type: 'color',
    'color-background': {
        '01': {
            $value: '#FFFFFF',
            dark: { $value: '#333333' },
        },
        '02': {
            $value: '#fafafa',
            dark: { $value: '#222222' },
        },
        semi: {
            $value: 'rgba(0, 0, 0, 0.60)',
            dark: { $value: 'rgba(0, 0, 0, 0.60)' },
        },
        'semi-state': {
            '01': {
                $value: 'rgba(0, 0, 0, 0.72)',
                dark: { $value: 'rgba(0, 0, 0, 0.72)' },
            },
            '02': {
                $value: 'rgba(0, 0, 0, 0.84)',
                dark: { $value: 'rgba(0, 0, 0, 0.84)' },
            },
        },
        inverse: {
            $value: '#222222',
            dark: { $value: '#FFFFFF' },
        },
        disabled: {
            $value: 'rgba(0, 0, 0, 0.06)',
            dark: { $value: 'rgba(255, 255, 255, 0.18)' },
        },
        'accent-01': {
            $value: '#3969ef',
            dark: { $value: '#7295f6' },
        },
        'accent-01-state': {
            '01': {
                $value: '#2b55ca',
                dark: { $value: '#557ff3' },
            },
            '02': {
                $value: '#1e42a4',
                dark: { $value: '#3969ef' },
            },
        },
        'accent-01-transparency': {
            '01': {
                $value: 'rgba(204, 218, 255, 0.40)',
                dark: { $value: 'rgba(114, 149, 246, 0.15)' },
            },
            '02': {
                $value: 'rgba(204, 218, 255, 0.80)',
                dark: { $value: 'rgba(114, 149, 246, 0.30)' },
            },
        },
        'accent-02': {
            $value: 'rgba(0, 0, 0, 0.90)',
            dark: { $value: 'rgba(255, 255, 255, 0.90)' },
        },
        'accent-01-alt': {
            $value: '#ccdaff',
            dark: { $value: '#2b55ca' },
        },
        'accent-01-alt-state': {
            '01': {
                $value: '#adc2fc',
                dark: { $value: '#1e42a4' },
            },
            '02': {
                $value: '#8fabf9',
                dark: { $value: '#14307e' },
            },
        },
        positive: {
            $value: '#21C000',
            dark: { $value: '#21C000' },
        },
        destructive: {
            $value: '#EB102D',
            dark: { $value: '#FF545A' },
        },
        'destructive-state': {
            '01': {
                $value: '#CF0E28',
                dark: { $value: '#E04A4F' },
            },
            '02': {
                $value: '#C10D25',
                dark: { $value: '#D1454A' },
            },
        },
        utility: {
            $value: 'rgba(0, 0, 0, 0.06)',
            dark: { $value: 'rgba(255, 255, 255, 0.18)' },
        },
        'utility-state': {
            '01': {
                $value: 'rgba(0, 0, 0, 0.12)',
                dark: { $value: 'rgba(255, 255, 255, 0.24)' },
            },
            '02': {
                $value: 'rgba(0, 0, 0, 0.18)',
                dark: { $value: 'rgba(255, 255, 255, 0.30)' },
            },
        },
        'utility-alt': {
            $value: 'rgba(0, 0, 0, 0.09)',
            dark: { $value: 'rgba(255, 255, 255, 0.12)' },
        },
        'utility-alt-state': {
            '01': {
                $value: 'rgba(0, 0, 0, 0.12)',
                dark: { $value: 'rgba(255, 255, 255, 0.18)' },
            },
            '02': {
                $value: 'rgba(0, 0, 0, 0.18)',
                dark: { $value: 'rgba(255, 255, 255, 0.24)' },
            },
        },
        'container-01': {
            $value: '#FFFFFF',
            dark: { $value: '#444444' },
        },
        'container-02': {
            $value: '#fafafa',
            dark: { $value: '#333333' },
        },
        'container-pre': {
            $value: 'rgba(0, 0, 0, 0.03)',
            dark: { $value: 'rgba(0, 0, 0, 0.24)' },
        },
        backdrop: {
            $value: 'rgba(0, 0, 0, 0.30)',
            dark: { $value: 'rgba(0, 0, 0, 0.60)' },
        },
        light: {
            $value: '#FFFFFF',
            dark: { $value: '#cccccc' },
        },
        dark: {
            $value: '#222222',
            dark: { $value: '#111111' },
        },
        'support-accent-state': {
            '01': {
                $value: 'rgba(204, 218, 255, 0.4)',
                dark: { $value: 'rgba(114, 149, 246, 0.15)' },
            },
            '02': {
                $value: 'rgba(204, 218, 255, 0.8)',
                dark: { $value: 'rgba(114, 149, 246, 0.3)' },
            },
        },
        'support-utility-state': {
            '01': {
                $value: 'rgba(0, 0, 0, 0.06)',
                dark: { $value: 'rgba(255, 255, 255, 0.18)' },
            },
            '02': {
                $value: 'rgba(0, 0, 0, 0.12)',
                dark: { $value: 'rgba(255, 255, 255, 0.24)' },
            },
        },
        'support-destructive-state': {
            '01': {
                $value: 'rgba(235, 16, 45, 0.1)',
                dark: { $value: 'rgba(255, 84, 90, 0.15)' },
            },
            '02': {
                $value: 'rgba(235, 16, 45, 0.25)',
                dark: { $value: 'rgba(255, 84, 90, 0.30)' },
            },
        },
    },
    'color-text': {
        '01': {
            $value: '#222222',
            dark: { $value: '#FFFFFF' },
        },
        '02': {
            $value: '#444444',
            dark: { $value: '#cccccc' },
        },
        '03': {
            $value: '#666666',
            dark: { $value: '#cccccc' },
        },
        '04': {
            $value: '#888888',
            dark: { $value: '#888888' },
        },
        disabled: {
            $value: 'rgba(0, 0, 0, 0.36)',
            dark: { $value: 'rgba(255, 255, 255, 0.36)' },
        },
        'on-color': {
            $value: '#FFFFFF',
            dark: { $value: '#222222' },
        },
        'on-dark': {
            '01': {
                $value: '#FFFFFF',
                dark: { $value: '#FFFFFF' },
            },
            '02': {
                $value: '#888888',
                dark: { $value: '#cccccc' },
            },
        },
        link: {
            '01': {
                $value: '#1a0dab',
                dark: { $value: '#adc2fc' },
            },
            '01-visited': {
                $value: '#6C00A2',
                dark: { $value: '#A591DC' },
            },
            '02': {
                $value: '#666666',
                dark: { $value: '#aaaaaa' },
            },
            '02-hover': {
                $value: '#444444',
                dark: { $value: '#cccccc' },
            },
        },
        'accent-01': {
            $value: '#3969ef',
            dark: { $value: '#7295f6' },
        },
        'accent-01-state': {
            '01': {
                $value: '#2b55ca',
                dark: { $value: '#8fabf9' },
            },
            '02': {
                $value: '#1e42a4',
                dark: { $value: '#adc2fc' },
            },
        },
        'accent-02': {
            $value: '#222222',
            dark: { $value: '#eeeeee' },
        },
        'accent-01-alt': {
            $value: '#1e42a4',
            dark: { $value: '#ccdaff' },
        },
        success: {
            $value: '#1a690d',
            dark: { $value: '#7BD66D' },
        },
        utility: {
            $value: 'rgba(0, 0, 0, 0.84)',
            dark: { $value: 'rgba(255, 255, 255, 0.84)' },
        },
        destructive: {
            $value: '#EB102D',
            dark: { $value: '#FF545A' },
        },
    },
    'color-border': {
        '01': {
            $value: 'rgba(0, 0, 0, 0.12)',
            dark: { $value: 'rgba(255, 255, 255, 0.24)' },
        },
        '02': {
            $value: 'rgba(0, 0, 0, 0.12)',
            dark: { $value: 'transparent' },
        },
        '03': {
            $value: 'rgba(0, 0, 0, 0.09)',
            dark: { $value: 'transparent' },
        },
        disabled: {
            $value: 'rgba(0, 0, 0, 0.12)',
            dark: { $value: 'rgba(255, 255, 255, 0.24)' },
        },
        'accent-01': {
            $value: '#3969ef',
            dark: { $value: '#7295f6' },
        },
        'accent-01-state': {
            '01': {
                $value: 'rgba(57, 105, 239, 0.20)',
                dark: { $value: 'rgba(114, 149, 246, 0.20)' },
            },
        },
        'inner-divider': {
            $value: 'rgba(0, 0, 0, 0.12)',
            dark: { $value: 'rgba(255, 255, 255, 0.09)' },
        },
        utility: {
            $value: 'rgba(0, 0, 0, 0.12)',
            dark: { $value: 'rgba(255, 255, 255, 0.24)' },
        },
        destructive: {
            $value: '#EB102D',
            dark: { $value: '#FF545A' },
        },
    },
};

export default sdsSemanticColors;
