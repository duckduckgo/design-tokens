import { DesignToken } from 'style-dictionary/types';

const colors: DesignToken = {
    $type: 'color',
    theme: {
        light: {
            linkPrimary: { $value: '#1a0dab', comment: 'Matches --sds-color-palette-blue-hyperlink' },
            linkPrimaryVisited: { $value: '#6C00A2', comment: 'Matches --sds-color-palette-purple-hyperlink' },
            linkSecondary: { $value: '#666666', comment: 'Matches --sds-color-palette-gray-70' },
            linkSecondaryHover: { $value: '#444444', comment: 'Matches --sds-color-palette-gray-80' },
        },
        dark: {
            linkPrimary: { $value: '#adc2fc', comment: 'Matches --sds-color-palette-blue-10' },
            linkPrimaryVisited: { $value: '#A591DC', comment: 'Matches --sds-color-palette-purple-20' },
            linkSecondary: { $value: '#aaaaaa', comment: 'Matches --sds-color-palette-gray-50' },
            linkSecondaryHover: { $value: '#cccccc', comment: 'Matches --sds-color-palette-gray-40' },
        },
    },
};

export default colors;
