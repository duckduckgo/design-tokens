import { DesignToken } from 'style-dictionary/types';

// To be used for media queries
// In the rebrand, we are using fewere breakpoints than the old design system
const breakpoints: DesignToken = {
    $type: 'dimension',
    breakpoint: {
        xs: { $value: '425px', comment: 'Max width for extra small screens' },
        sm: { $value: '640px', comment: 'Max width for small screens' },
        md: { $value: '1024px', comment: 'Max width for medium screens' },
        lg: { $value: '1025px', comment: 'Min width for large screens' },
        textShift: { $value: '800px', comment: 'This the device width at which the text shifts up or down a size' },
    },
};

export default breakpoints;
