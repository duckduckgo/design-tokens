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
            link: {
                primary: { $value: '#1a0dab', comment: 'Matches --sds-color-palette-blue-hyperlink' },
                primaryVisited: { $value: '#6C00A2', comment: 'Matches --sds-color-palette-purple-hyperlink' },
                secondary: { $value: '#666666', comment: 'Matches --sds-color-palette-gray-70' },
                secondaryHover: { $value: '#444444', comment: 'Matches --sds-color-palette-gray-80' },
                header: {
                    $value: '#1635B6',
                    comment: 'For the SERP Duckbar links',
                },
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

            link: {
                primary: { $value: '#adc2fc', comment: 'Matches --sds-color-palette-blue-10' },
                primaryVisited: { $value: '#A591DC', comment: 'Matches --sds-color-palette-purple-20' },
                secondary: { $value: '#aaaaaa', comment: 'Matches --sds-color-palette-gray-50' },
                secondaryHover: { $value: '#cccccc', comment: 'Matches --sds-color-palette-gray-40' },
                header: {
                    $value: '#adc2fc',
                    comment: 'For the SERP Duckbar links',
                },
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
