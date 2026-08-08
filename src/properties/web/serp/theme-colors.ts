import { DesignToken } from 'style-dictionary/types';

// This file is used to override the theme colors from Default (Web) to follow the Default (Web Product) theme vertical in
// Figma. This is primarily for switching in grays for eggshell hues.
const themeColors: DesignToken = {
    $type: 'color',
    theme: {
        light: {
            surface: {
                backdrop: { $value: '{color.gray.20}' },
                canvas: { $value: '{color.white}' },
                primary: { $value: '{color.white}' },
                secondary: { $value: '{color.white}' },
                tertiary: { $value: '{color.white}' },
            },
        },
        dark: {
            surface: {
                backdrop: { $value: '{color.gray.111}' },
                canvas: { $value: '{color.gray.100}' },
                primary: { $value: '{color.gray.90}' },
                secondary: { $value: '{color.gray.90}' },
                tertiary: { $value: '{color.gray.90}' },
                contrast: { $value: '{color.gray.20}' },
            },
            input: {
                primaryBackgroundColor: {
                    $value: '{color.gray.80}',
                },
            },
        },
    },
};

export default themeColors;
