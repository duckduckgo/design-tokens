import { DesignToken } from 'style-dictionary/types';

// To be used for media queries
const breakpoints: DesignToken = {
    $type: 'dimension',
    breakpoint: {
        // max width for extra small screens
        xs: { $value: '425px' },
        // max width for small screens
        sm: { $value: '640px' },
        // max width for medium screens
        md: { $value: '1024px' },
        // min width for large screens
        lg: { $value: '1025px' },
        // This the device width at which the text shifts up or down a size
        textShift: { $value: '800px' },
    },
};

export default breakpoints;
