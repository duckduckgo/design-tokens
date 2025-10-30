// import { DesignToken } from 'style-dictionary/types';
// const themeColors: DesignToken = {
//     $type: 'color',
//     undo: 'none',
//     themeColor: {
//         coolGrayDark: {
//             window: { $value: '#080a17' },
//             surface: {
//                 primary: { $value: '#2b2f45' },
//                 secondary: { $value: '#393e56' },
//                 tertiary: { $value: '#414762' },
//             },
//             controlBase: {
//                 $value: '#c6d3f1',
//             },
//             accent: {
//                 primary: { $value: '#a0b6e3' },
//                 secondary: { $value: '#829bce' },
//                 tertiary: { $value: '#708bc2' },
//                 glow: { $value: 'rgba(160, 182, 227, 0.2)' },
//             },
//             content: {
//                 default: { $value: '#eeeff7' },
//                 accent: { $value: '#050614' },
//             },
//             effect: {
//                 light: { $value: '#f4f4f6' },
//                 dark: { $value: '#050614' },
//             },
//         },
//         coolGrayLight: {
//             window: { $value: '#a7abbe' },
//             surface: {
//                 primary: { $value: '#d6d9e6' },
//                 secondary: { $value: '#edeef3' },
//                 tertiary: { $value: '#f4f4f6' },
//             },
//             controlBase: {
//                 $value: '#2A416F',
//             },
//             accent: {
//                 primary: { $value: '#283246' },
//                 secondary: { $value: '#1e2534' },
//                 tertiary: { $value: '#121721' },
//             },
//             // content: {
//             //     default: { $value: '#' },
//             //     accent: { $value: '#' },
//             // },
//             // effect: {
//             //     light: { $value: '#' },
//             //     dark: { $value: '#' },
//             // },
//         },
//         // slateBlueDark: {
//         //     window: { $value: '#' },
//         //     surface: {
//         //         primary: { $value: '#' },
//         //         secondary: { $value: '#' },
//         //         tertiary: { $value: '#' },
//         //     },
//         //     controlBase: {
//         //         $value: '#',
//         //     },
//         //     accent: {
//         //         primary: { $value: '#' },
//         //         secondary: { $value: '#' },
//         //         tertiary: { $value: '#' },
//         //     },
//         //     content: {
//         //         default: { $value: '#' },
//         //         accent: { $value: '#' },
//         //     },
//         //     effect: {
//         //         light: { $value: '#' },
//         //         dark: { $value: '#' },
//         //     },
//         // },
//         // slateBlueLight: {
//         //     window: { $value: '#' },
//         //     surface: {
//         //         primary: { $value: '#' },
//         //         secondary: { $value: '#' },
//         //         tertiary: { $value: '#' },
//         //     },
//         //     controlBase: {
//         //         $value: '#',
//         //     },
//         //     accent: {
//         //         primary: { $value: '#' },
//         //         secondary: { $value: '#' },
//         //         tertiary: { $value: '#' },
//         //     },
//         //     content: {
//         //         default: { $value: '#' },
//         //         accent: { $value: '#' },
//         //     },
//         //     effect: {
//         //         light: { $value: '#' },
//         //         dark: { $value: '#' },
//         //     },
//         // },
//         // greenLight: {
//         //     window: { $value: '#' },
//         //     surface: {
//         //         primary: { $value: '#' },
//         //         secondary: { $value: '#' },
//         //         tertiary: { $value: '#' },
//         //     },
//         //     controlBase: {
//         //         $value: '#',
//         //     },
//         //     accent: {
//         //         primary: { $value: '#' },
//         //         secondary: { $value: '#' },
//         //         tertiary: { $value: '#' },
//         //     },
//         //     content: {
//         //         default: { $value: '#' },
//         //         accent: { $value: '#' },
//         //     },
//         //     effect: {
//         //         light: { $value: '#' },
//         //         dark: { $value: '#' },
//         //     },
//         // },
//         // greenDark: {
//         //     window: { $value: '#' },
//         //     surface: {
//         //         primary: { $value: '#' },
//         //         secondary: { $value: '#' },
//         //         tertiary: { $value: '#' },
//         //     },
//         //     controlBase: {
//         //         $value: '#',
//         //     },
//         //     accent: {
//         //         primary: { $value: '#' },
//         //         secondary: { $value: '#' },
//         //         tertiary: { $value: '#' },
//         //     },
//         //     content: {
//         //         default: { $value: '#' },
//         //         accent: { $value: '#' },
//         //     },
//         //     effect: {
//         //         light: { $value: '#' },
//         //         dark: { $value: '#' },
//         //     },
//         // },
//         // violetLight: {
//         //     window: { $value: '#' },
//         //     surface: {
//         //         primary: { $value: '#' },
//         //         secondary: { $value: '#' },
//         //         tertiary: { $value: '#' },
//         //     },
//         //     controlBase: {
//         //         $value: '#',
//         //     },
//         //     accent: {
//         //         primary: { $value: '#' },
//         //         secondary: { $value: '#' },
//         //         tertiary: { $value: '#' },
//         //     },
//         //     content: {
//         //         default: { $value: '#' },
//         //         accent: { $value: '#' },
//         //     },
//         //     effect: {
//         //         light: { $value: '#' },
//         //         dark: { $value: '#' },
//         //     },
//         // },
//         // violetDark: {
//         //     window: { $value: '#' },
//         //     surface: {
//         //         primary: { $value: '#' },
//         //         secondary: { $value: '#' },
//         //         tertiary: { $value: '#' },
//         //     },
//         //     controlBase: {
//         //         $value: '#',
//         //     },
//         //     accent: {
//         //         primary: { $value: '#' },
//         //         secondary: { $value: '#' },
//         //         tertiary: { $value: '#' },
//         //     },
//         //     content: {
//         //         default: { $value: '#' },
//         //         accent: { $value: '#' },
//         //     },
//         //     effect: {
//         //         light: { $value: '#' },
//         //         dark: { $value: '#' },
//         //     },
//         // },
//         // roseLight: {
//         //     window: { $value: '#' },
//         //     surface: {
//         //         primary: { $value: '#' },
//         //         secondary: { $value: '#' },
//         //         tertiary: { $value: '#' },
//         //     },
//         //     controlBase: {
//         //         $value: '#',
//         //     },
//         //     accent: {
//         //         primary: { $value: '#' },
//         //         secondary: { $value: '#' },
//         //         tertiary: { $value: '#' },
//         //     },
//         //     content: {
//         //         default: { $value: '#' },
//         //         accent: { $value: '#' },
//         //     },
//         //     effect: {
//         //         light: { $value: '#' },
//         //         dark: { $value: '#' },
//         //     },
//         // },
//         // roseDark: {
//         //     window: { $value: '#' },
//         //     surface: {
//         //         primary: { $value: '#' },
//         //         secondary: { $value: '#' },
//         //         tertiary: { $value: '#' },
//         //     },
//         //     controlBase: {
//         //         $value: '#',
//         //     },
//         //     accent: {
//         //         primary: { $value: '#' },
//         //         secondary: { $value: '#' },
//         //         tertiary: { $value: '#' },
//         //     },
//         //     content: {
//         //         default: { $value: '#' },
//         //         accent: { $value: '#' },
//         //     },
//         //     effect: {
//         //         light: { $value: '#' },
//         //         dark: { $value: '#' },
//         //     },
//         // },
//         // orangeLight: {
//         //     window: { $value: '#' },
//         //     surface: {
//         //         primary: { $value: '#' },
//         //         secondary: { $value: '#' },
//         //         tertiary: { $value: '#' },
//         //     },
//         //     controlBase: {
//         //         $value: '#',
//         //     },
//         //     accent: {
//         //         primary: { $value: '#' },
//         //         secondary: { $value: '#' },
//         //         tertiary: { $value: '#' },
//         //     },
//         //     content: {
//         //         default: { $value: '#' },
//         //         accent: { $value: '#' },
//         //     },
//         //     effect: {
//         //         light: { $value: '#' },
//         //         dark: { $value: '#' },
//         //     },
//         // },
//         // orangeDark: {
//         //     window: { $value: '#' },
//         //     surface: {
//         //         primary: { $value: '#' },
//         //         secondary: { $value: '#' },
//         //         tertiary: { $value: '#' },
//         //     },
//         //     controlBase: {
//         //         $value: '#',
//         //     },
//         //     accent: {
//         //         primary: { $value: '#' },
//         //         secondary: { $value: '#' },
//         //         tertiary: { $value: '#' },
//         //     },
//         //     content: {
//         //         default: { $value: '#' },
//         //         accent: { $value: '#' },
//         //     },
//         //     effect: {
//         //         light: { $value: '#' },
//         //         dark: { $value: '#' },
//         //     },
//         // },
//         // desertLight: {
//         //     window: { $value: '#' },
//         //     surface: {
//         //         primary: { $value: '#' },
//         //         secondary: { $value: '#' },
//         //         tertiary: { $value: '#' },
//         //     },
//         //     controlBase: {
//         //         $value: '#',
//         //     },
//         //     accent: {
//         //         primary: { $value: '#' },
//         //         secondary: { $value: '#' },
//         //         tertiary: { $value: '#' },
//         //     },
//         //     content: {
//         //         default: { $value: '#' },
//         //         accent: { $value: '#' },
//         //     },
//         //     effect: {
//         //         light: { $value: '#' },
//         //         dark: { $value: '#' },
//         //     },
//         // },
//         // desertDark: {
//         //     window: { $value: '#' },
//         //     surface: {
//         //         primary: { $value: '#' },
//         //         secondary: { $value: '#' },
//         //         tertiary: { $value: '#' },
//         //     },
//         //     controlBase: {
//         //         $value: '#',
//         //     },
//         //     accent: {
//         //         primary: { $value: '#' },
//         //         secondary: { $value: '#' },
//         //         tertiary: { $value: '#' },
//         //     },
//         //     content: {
//         //         default: { $value: '#' },
//         //         accent: { $value: '#' },
//         //     },
//         //     effect: {
//         //         light: { $value: '#' },
//         //         dark: { $value: '#' },
//         //     },
//         // },
//     },
// };

// export default themeColors;
