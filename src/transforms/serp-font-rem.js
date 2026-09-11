/**
 * Custom Style Dictionary transform (SERP only).
 *
 * Converts pixel-based SERP *font* token values (font sizes / line-heights) to rem.
 * Only tokens under the `font` group are affected — spacing, radius, and other
 * dimensions are intentionally left in px.
 *
 * The SERP project applies a base font-size of 90% (1rem = 0.9 * 16px = 14.4px), so a
 * naive `px / 16` conversion would render ~10% too small. Dividing by 14.4
 * (i.e. the standard `px / 16` scaled up by 1 / 0.9 ≈ 1.111) keeps the rendered
 * result identical to the original pixel values.
 *
 * Rules:
 *   - Only font tokens whose value is a plain pixel string (e.g. '16px') are considered.
 *   - Values with an absolute size of 2px or less are left untouched (e.g. letter-spacing),
 *     matching the requirement to only convert values ABOVE 2px.
 */

// Standard browser root font-size, in px.
const ROOT_PX = 16;

// SERP renders with a base font-size of 90%.
// To keep the rendered size identical we divide by (16 * 0.9) = 14.4.
// If a literal +10% is ever preferred instead, change this to `ROOT_PX / 1.1`.
const SERP_BASE_SCALE = 0.9;
const SERP_BASE_PX = ROOT_PX * SERP_BASE_SCALE;

// Values at or below this size (in absolute px) are kept in px.
const MIN_PX_TO_CONVERT = 2;

// Matches a plain pixel value such as '16px', '-1px', '0.5px'.
const PX_VALUE = /^-?\d*\.?\d+px$/;

function getValue(token, options) {
    return options?.usesDtcg ? token.$value : token.value;
}

function isPxValue(value) {
    return typeof value === 'string' && PX_VALUE.test(value.trim());
}

function isFontToken(token) {
    return Array.isArray(token.path) && token.path[0] === 'font';
}

const serpFontRem = {
    name: 'serp/font/rem',
    type: 'value',
    transitive: true,
    filter: (token, options) => isFontToken(token) && isPxValue(getValue(token, options)),
    transform: (token, _config, options) => {
        const px = parseFloat(getValue(token, options));

        if (Math.abs(px) <= MIN_PX_TO_CONVERT) {
            return `${px}px`;
        }

        const rem = px / SERP_BASE_PX;
        // Trim floating-point noise / trailing zeros while preserving accuracy.
        return `${parseFloat(rem.toFixed(5))}rem`;
    },
};

export default serpFontRem;
