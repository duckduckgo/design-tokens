import { DesignToken } from 'style-dictionary/types';

const duckAiColors: DesignToken = {
    $type: 'color',
    undo: 'none',
    duckAiColor: {
        primary: {
            $value: '{color.blue.50}',
        },
        openai: {
            a: {
                10: { $value: '#EBF1FF' },
                30: { $value: '#AEC5F9' },
                50: { $value: '#7B9CEA' },
                70: { $value: '#5278D1' },
                90: { $value: '#3F5CA2' },
            },
            b: {
                10: { $value: '#EBF7FF' },
                30: { $value: '#9BD6FD' },
                50: { $value: '#4FB4F8' },
                70: { $value: '#0F90E6' },
                90: { $value: '#0D5F96' },
            },
            c: {
                10: { $value: '#D8F7FF' },
                30: { $value: '#7EE3FF' },
                50: { $value: '#00D1EC' },
                70: { $value: '#00A2CE' },
                90: { $value: '#054E62' },
            },
            d: {
                10: { $value: '#F1EBFF' },
                30: { $value: '#CBB3F9' },
                50: { $value: '#A684EB' },
                70: { $value: '#855ED4' },
                90: { $value: '#6845B0' },
            },
            e: {
                10: { $value: '#E3EBF5' },
                30: { $value: '#B0C6E0' },
                50: { $value: '#7B9CC5' },
                70: { $value: '#7E93AD' },
                90: { $value: '#394C63' },
            },
        },
        claude: {
            a: {
                10: { $value: '#D1FFE9' },
                30: { $value: '#88F6C1' },
                50: { $value: '#4BE299' },
                70: { $value: '#2EAD70' },
                90: { $value: '#276346' },
            },
            b: {
                10: { $value: '#DEFCD5' },
                30: { $value: '#A7EC92' },
                50: { $value: '#77D15B' },
                70: { $value: '#559C3F' },
                90: { $value: '#3B5832' },
            },
        },
        llama: {
            a: {
                10: { $value: '#FFE5FB' },
                30: { $value: '#FA9EE1' },
                50: { $value: '#FA6AD1' },
                70: { $value: '#E72D9D' },
                90: { $value: '#932E70' },
            },
            b: {
                10: { $value: '#FFE5E5' },
                30: { $value: '#FAA3AF' },
                50: { $value: '#EC698C' },
                70: { $value: '#D73777' },
                90: { $value: '#9B2C67' },
            },
        },
        mistral: {
            a: {
                10: { $value: '#FFE8DE' },
                30: { $value: '#FEB695' },
                50: { $value: '#FB864B' },
                70: { $value: '#F25A07' },
                90: { $value: '#A64107' },
            },
        },
        internal: {
            a: {
                10: { $value: '#D8F7FF' },
                30: { $value: '#7EE3FF' },
                50: { $value: '#00D1EC' },
                70: { $value: '#00A2CE' },
                90: { $value: '#054E62' },
            },
            b: {
                10: { $value: '#E3E8FF' },
                30: { $value: '#BCC7FF' },
                50: { $value: '#7189FE' },
                70: { $value: '#5162B4' },
                90: { $value: '#434A70' },
            },
        },
        duckassist: {
            10: { $value: '#F0F0F0' },
            30: { $value: '#C2C2C2' },
            50: { $value: '#222222' },
            70: { $value: '#666666' },
            90: { $value: '#222222' },
        },
    },
};

export default duckAiColors;
