# DuckDuckGo Design Tokens Changelog

Generated from release tags. Each section expands to show token-level changes.

## ✨ [0.44.0](https://github.com/duckduckgo/design-tokens/releases/tag/v0.44.0) - 2026.09.11

SERP rem output now applies to font values only. Spacing, radius, button and icon-button sizes are back to px, as they were before 0.43.1. A new `build/serp/font-in-px.js` provides px font values for documentation sites ([#46](https://github.com/duckduckgo/design-tokens/pull/46)).

### Token Updates

#### SERP

<details>
<summary>🌱 New values (70)</summary>

- New output `build/serp/font-in-px.js` (70 tokens, with `font-in-px.d.ts` types): the SERP font tokens with px values instead of rem, intended for documentation sites

</details>

<details>
<summary>♻️ Updated values (85)</summary>

- 85 non-font sizes changed from rem back to px, reverting the 0.43.1 conversion
  - Space (42): `--ds-space-x01`: `0.27778rem` > `4px`, `--ds-space-x04`: `1.11111rem` > `16px`, `--ds-space-x175`: `48.61111rem` > `700px`
  - Radius (13): `--ds-radius-full`: `69.375rem` > `999px`, `--ds-radius-x02`: `0.55556rem` > `8px`, `--ds-radius-x12`: `3.33333rem` > `48px`
  - Button (17, `tokens.json`): `ds-button-md-padding-x`: `1.38889rem` > `20px`, `ds-button-md-padding-y`: `0.55556rem` > `8px`, `ds-button-xxs-border-radius`: `69.375rem` > `999px`
  - Icon button (13): `--ds-icon-button-md-icon-size`: `1.11111rem` > `16px`, `ds-icon-button-md-padding`: `0.83333rem` > `12px`, `ds-icon-button-border-radius`: `69.375rem` > `999px`

</details>

<details>
<summary>🛠️ Dev updates</summary>

- Renamed transform `src/transforms/serp-size-rem.js` > `src/transforms/serp-font-rem.js`, which now converts only tokens in the `font` group
- `serp-style-dictionary.config.js`: uses the `serp-font-rem` transform and adds a `serpFontPx` platform that builds `serp/font-in-px.js` without the rem transform
- `src/formats/serp-base-tokens-js.js`: reads `token.value` again for string values, removing the `$value` lookup added in 0.43.1

</details>

## ✨ [0.43.1](https://github.com/duckduckgo/design-tokens/releases/tag/v0.43.1) - 2026.09.10

SERP sizes above 2px now ship in rem instead of px, scaled for SERP's 90% base font size so they render at the same size as before ([#45](https://github.com/duckduckgo/design-tokens/pull/45)). This was experimental: 0.44.0 moved spacing, radius, button and icon-button sizes back to px and kept rem for font values only.

### Token Updates

#### SERP

<details>
<summary>♻️ Updated values (133)</summary>

- 133 sizes changed from px to rem (px ÷ 14.4, for the 90% base font size); values of 2px or less stay in px
  - Font (36): `--ds-font-title-05-size`: `24px` > `1.66667rem`, `--ds-font-body-md-size`: `14px` > `0.97222rem`, `--ds-font-caption-01-size`: `13px` > `0.90278rem`
  - Space (42): `--ds-space-x01`: `4px` > `0.27778rem`, `--ds-space-x04`: `16px` > `1.11111rem`, `--ds-space-x175`: `700px` > `48.61111rem`
  - Button (29, `tokens.json`): `ds-button-md-padding-x`: `20px` > `1.38889rem`, `ds-button-md-font-size`: `16px` > `1.11111rem`, `ds-button-xxs-border-radius`: `999px` > `69.375rem`
  - Radius (13): `--ds-radius-full`: `999px` > `69.375rem`, `--ds-radius-x02`: `8px` > `0.55556rem`, `--ds-radius-x12`: `48px` > `3.33333rem`
  - Icon button (13): `--ds-icon-button-md-icon-size`: `16px` > `1.11111rem`, `ds-icon-button-md-padding`: `12px` > `0.83333rem`, `ds-icon-button-border-radius`: `999px` > `69.375rem`

</details>

<details>
<summary>🛠️ Dev updates</summary>

- New transform `src/transforms/serp-size-rem.js`, which converts px values above 2px to rem using a 14.4px base
- `serp-style-dictionary.config.js`: registers the `serp/size/rem` transform and applies it to the `serp` platform
- `src/formats/serp-base-tokens-js.js`: reads the transformed `$value` for string values so the rem conversion reaches the JS outputs

</details>

## ✨ [0.43.0](https://github.com/duckduckgo/design-tokens/releases/tag/v0.43.0) - 2026.09.10

The build now runs on Node 24 and style-dictionary 5 ([#44](https://github.com/duckduckgo/design-tokens/pull/44)). The only output change is more precise alpha values in desktop-browsers colors. They render the same.

### Token Updates

#### Desktop Browsers

<details>
<summary>♻️ Updated values (555)</summary>

- 555 `rgba()` alpha values in `tokens.css` now show full float precision. This is a side effect of the style-dictionary 5 upgrade: alphas are now derived from 8-bit channel values
  - `--ds-color-theme-cool-gray-dark-accent-alt-content-secondary`: `rgba(238, 239, 247, 0.7)` > `rgba(238, 239, 247, 0.6980392156862745)`
  - `--ds-color-theme-cool-gray-dark-accent-alt-content-tertiary`: `rgba(238, 239, 247, 0.5)` > `rgba(238, 239, 247, 0.4980392156862745)`
  - `--ds-color-theme-cool-gray-dark-accent-alt-glow-secondary`: `rgba(160, 182, 227, 0.12)` > `rgba(160, 182, 227, 0.11764705882352941)`

</details>

<details>
<summary>🛠️ Dev updates</summary>

- Node 22 > 24
- `style-dictionary` ^4.3.0 > ^5.5.3

</details>

## ✨ [0.42.0](https://github.com/duckduckgo/design-tokens/releases/tag/v0.42.0) - 2026.08.19

Desktop browsers get New Tab Page tokens for content shown on a custom background, as part of the rebrand ([#41](https://github.com/duckduckgo/design-tokens/pull/41)).

### Token Updates

#### Desktop Browsers

<details>
<summary>🌱 New values (28)</summary>

- 28 tokens in `ntp.css`, 14 per mode, named `--ds-color-theme-ntp-on-custom-background-{light,dark}-*` (light / dark values below)
  - `…-container-border-secondary`: `rgba(255, 255, 255, 0.48)` / `rgba(255, 255, 255, 0.12)`
  - `…-container-fill-secondary`: `rgba(255, 255, 255, 0.42)` / `rgba(0, 0, 0, 0.36)`
  - `…-input-text-primary`: `rgba(0, 0, 0, 0.96)` / `rgba(0, 0, 0, 0.84)`
  - `…-input-text-secondary`: `rgba(0, 0, 0, 0.6)` / `rgba(0, 0, 0, 0.6)`
  - `…-input-icons-primary`: `rgba(0, 0, 0, 0.84)` / `rgba(0, 0, 0, 0.84)`
  - `…-input-icons-secondary`: `rgba(0, 0, 0, 0.6)` / `rgba(0, 0, 0, 0.6)`
  - `…-input-field-primary-background-color`: `rgba(255, 255, 255, 0.54)` / `rgba(255, 255, 255, 0.24)`
  - `…-input-field-secondary-background-color`: `rgba(0, 0, 0, 0.18)` / `rgba(255, 255, 255, 0.3)`
  - `…-input-control-primary-background-color`: `rgba(255, 255, 255, 0.6)` / `rgba(0, 0, 0, 0.6)`
  - `…-input-control-secondary-background-color`: `rgba(0, 0, 0, 0.06)` / `rgba(255, 255, 255, 0.18)`
  - `…-input-control-tertiary-background-color`: `rgba(0, 0, 0, 0.06)` / `rgba(0, 0, 0, 0.36)`
  - `…-input-control-shadow-primary`: `rgba(0, 0, 0, 0.06)` / `rgba(0, 0, 0, 0)`
  - `…-shadow-primary`: `rgba(0, 0, 0, 0.06)` / `rgba(0, 0, 0, 0.06)`
  - `…-shadow-secondary`: `rgba(0, 0, 0, 0.08)` / `rgba(0, 0, 0, 0.08)`

</details>

## ✨ [0.41.0](https://github.com/duckduckgo/design-tokens/releases/tag/v0.41.0) - 2026.08.17

Reverts the surface-backdrop color changes from 0.36.0 and 0.37.0 ([#43](https://github.com/duckduckgo/design-tokens/pull/43)). SERP light backdrop is white again, and static-pages backdrop and canvas swap back in both themes. SERP's light canvas stays `#ffffff` from 0.36.0.

### Token Updates

#### SERP

<details>
<summary>♻️ Updated values (2)</summary>

- `--ds-surface-backdrop` (colors-light.js): `#eeeeee` > `#ffffff`
- `ds-theme-light-surface-backdrop` (tokens.json): `#eeeeee` > `#ffffff`

</details>

#### Static Pages

<details>
<summary>♻️ Updated values (8)</summary>

- `--ds-surface-backdrop` (.theme-light): `#FBFAF9` > `#ffffff`
- `--ds-surface-canvas` (.theme-light): `#ffffff` > `#FBFAF9`
- `--ds-surface-backdrop` (.theme-dark): `#181817` > `#111111`
- `--ds-surface-canvas` (.theme-dark): `#111111` > `#181817`
- `--ds-theme-light-surface-backdrop`: `#FBFAF9` > `#ffffff`
- `--ds-theme-light-surface-canvas`: `#ffffff` > `#FBFAF9`
- `--ds-theme-dark-surface-backdrop`: `#181817` > `#111111`
- `--ds-theme-dark-surface-canvas`: `#111111` > `#181817`

</details>

## ✨ [0.40.0](https://github.com/duckduckgo/design-tokens/releases/tag/v0.40.0) - 2026.08.14

Light-mode status green on SERP and static pages goes back to `#38B26A`, reverting the 0.35.0 change ([#42](https://github.com/duckduckgo/design-tokens/pull/42)).

### Token Updates

#### SERP

<details>
<summary>♻️ Updated values (2)</summary>

- `--ds-status-green` (colors-light.js): `#269B61` > `#38B26A`
- `ds-theme-light-status-green` (tokens.json): `#269b61` > `#38b26a`

</details>

#### Static Pages

<details>
<summary>♻️ Updated values (2)</summary>

- `--ds-status-green` (.theme-light): `#269B61` > `#38B26A`
- `--ds-theme-light-status-green`: `#269B61` > `#38B26A`

</details>

## ✨ [0.39.0](https://github.com/duckduckgo/design-tokens/releases/tag/v0.39.0) - 2026.08.12

SERP and static pages get a `status-green-text` theme color for green text, along with the `green-30` and `green-60` palette colors it uses ([#40](https://github.com/duckduckgo/design-tokens/pull/40)).

### Token Updates

#### SERP

<details>
<summary>🌱 New values (7)</summary>

- `--ds-color-green-30`: `#5EC987`
- `ds-color-green-30` (tokens.json): `#5ec987`
- `--ds-color-green-60`: `#138356`
- `--ds-status-green-text` (colors-light.js): `#138356`
- `--ds-status-green-text` (colors-dark.js): `#5EC987`
- `ds-theme-light-status-green-text` (tokens.json): `#138356`
- `ds-theme-dark-status-green-text` (tokens.json): `#5ec987`

</details>

#### Static Pages

<details>
<summary>🌱 New values (6)</summary>

- `--ds-color-green-30`: `#5EC987`
- `--ds-color-green-60`: `#138356`
- `--ds-status-green-text` (.theme-light): `#138356`
- `--ds-status-green-text` (.theme-dark): `#5EC987`
- `--ds-theme-light-status-green-text`: `#138356`
- `--ds-theme-dark-status-green-text`: `#5EC987`

</details>

## ✨ [0.38.0](https://github.com/duckduckgo/design-tokens/releases/tag/v0.38.0) - 2026.08.12

SERP gets a `link-header` theme color for both light and dark themes ([#39](https://github.com/duckduckgo/design-tokens/pull/39)).

### Token Updates

#### SERP

<details>
<summary>🌱 New values (4)</summary>

- `--ds-link-header` (colors-light.js): `#1635B6`
- `--ds-link-header` (colors-dark.js): `#adc2fc`
- `ds-theme-light-link-header` (tokens.json): `#1635b6`
- `ds-theme-dark-link-header` (tokens.json): `#adc2fc`

</details>

<details>
<summary>🛠️ Dev updates</summary>

- Moved the SERP link colors from `src/properties/web/serp/colors.ts` into `src/properties/web/serp/theme-colors.ts` and removed `colors.ts`

</details>

## ✨ [0.37.0](https://github.com/duckduckgo/design-tokens/releases/tag/v0.37.0) - 2026.08.11

Static pages swap their backdrop and canvas colors in the Default (Web) theme, in both light and dark ([#37](https://github.com/duckduckgo/design-tokens/pull/37)).

### Token Updates

#### Static Pages

<details>
<summary>♻️ Updated values (8)</summary>

- `--ds-surface-backdrop` (.theme-light): `#ffffff` > `#FBFAF9`
- `--ds-surface-canvas` (.theme-light): `#FBFAF9` > `#ffffff`
- `--ds-surface-backdrop` (.theme-dark): `#111111` > `#181817`
- `--ds-surface-canvas` (.theme-dark): `#181817` > `#111111`
- `--ds-theme-light-surface-backdrop`: `#ffffff` > `#FBFAF9`
- `--ds-theme-light-surface-canvas`: `#FBFAF9` > `#ffffff`
- `--ds-theme-dark-surface-backdrop`: `#111111` > `#181817`
- `--ds-theme-dark-surface-canvas`: `#181817` > `#111111`

</details>

## ✨ [0.36.0](https://github.com/duckduckgo/design-tokens/releases/tag/v0.36.0) - 2026.08.08

Fixes SERP's light-theme surface colors: canvas is now white and backdrop is `#eeeeee` ([#36](https://github.com/duckduckgo/design-tokens/pull/36)).

### Token Updates

#### SERP

<details>
<summary>♻️ Updated values (4)</summary>

- `--ds-surface-backdrop` (colors-light.js): `#ffffff` > `#eeeeee`
- `--ds-surface-canvas` (colors-light.js): `#eeeeee` > `#ffffff`
- `ds-theme-light-surface-backdrop` (tokens.json): `#ffffff` > `#eeeeee`
- `ds-theme-light-surface-canvas` (tokens.json): `#eeeeee` > `#ffffff`

</details>

## ✨ [0.35.0](https://github.com/duckduckgo/design-tokens/releases/tag/v0.35.0) - 2026.08.07

Desktop browsers get input tokens for every theme. SERP and static pages get the `green-50` palette color, and light-mode status green now uses it ([#35](https://github.com/duckduckgo/design-tokens/pull/35)).

### Token Updates

#### SERP

<details>
<summary>🌱 New values (2)</summary>

- `--ds-color-green-50`: `#269B61`
- `ds-color-green-50` (tokens.json): `#269b61`

</details>

<details>
<summary>♻️ Updated values (2)</summary>

- `--ds-status-green` (colors-light.js): `#38B26A` > `#269B61`
- `ds-theme-light-status-green` (tokens.json): `#38b26a` > `#269b61`

</details>

#### Static Pages

<details>
<summary>🌱 New values (1)</summary>

- `--ds-color-green-50`: `#269B61`

</details>

<details>
<summary>♻️ Updated values (2)</summary>

- `--ds-status-green` (.theme-light): `#38B26A` > `#269B61`
- `--ds-theme-light-status-green`: `#38B26A` > `#269B61`

</details>

#### Desktop Browsers

<details>
<summary>🌱 New values (144)</summary>

- 144 input tokens in `tokens.css`: 9 per mode for light and dark in each of the 8 themes (cool-gray, default, desert, green, orange, rose, slate-blue, violet), named `--ds-color-theme-<theme>-<mode>-input-*`
  - Tokens: `text-primary`, `text-secondary`, `icons-primary`, `icons-secondary`, `field-primary-background-color`, `field-secondary-background-color`, `control-primary-background-color`, `control-secondary-background-color`, `control-shadow-primary`
  - `--ds-color-theme-default-light-input-text-primary`: `rgba(0, 0, 0, 0.96)`
  - `--ds-color-theme-default-light-input-field-secondary-background-color`: `#ebebeb`
  - `--ds-color-theme-default-dark-input-control-primary-background-color`: `#424242`

</details>

## ✨ [0.34.0](https://github.com/duckduckgo/design-tokens/releases/tag/v0.34.0) - 2026.07.29

Desktop browsers' New Tab Page tokens are now all under the `--ds-ntp-` prefix, which renames the next-steps badge and dismiss button tokens. This release also adds card border and button fill tokens and switches the Default theme's accent colors to a new blue ([#34](https://github.com/duckduckgo/design-tokens/pull/34)).

### Token Updates

#### Desktop Browsers

<details>
<summary>🌱 New values (5)</summary>

- `--ds-ntp-light-button-secondary-rest-background-color`: `rgba(0, 0, 0, 0.06)`
- `--ds-ntp-light-button-dismiss-hover-background-color`: `rgba(0, 0, 0, 0.09)`
- `--ds-ntp-dark-card-border-color`: `rgba(255, 255, 255, 0.03)`
- `--ds-ntp-dark-button-secondary-rest-background-color`: `rgba(255, 255, 255, 0.06)`
- `--ds-ntp-dark-button-dismiss-hover-background-color`: `rgba(255, 255, 255, 0.18)`

</details>

<details>
<summary>♻️ Updated values (16)</summary>

- `--ds-next-steps-badge-background` > `--ds-ntp-next-steps-badge-background` (renamed)
- `--ds-next-steps-badge-color` > `--ds-ntp-next-steps-badge-color` (renamed)
- `--ds-ntp-dismiss-btn-light-border` > `--ds-ntp-light-button-dismiss-rest-border-color` (renamed)
- `--ds-ntp-dismiss-btn-light-color` > `--ds-ntp-light-button-dismiss-rest-color` (renamed)
- `--ds-ntp-dismiss-btn-dark-border` > `--ds-ntp-dark-button-dismiss-rest-border-color` (renamed)
- `--ds-ntp-dismiss-btn-dark-color` > `--ds-ntp-dark-button-dismiss-rest-color` (renamed)
- `--ds-color-theme-default-light-accent-primary`: `#3869ef` > `#1074cc`
- `--ds-color-theme-default-light-accent-secondary`: `#2b55ca` > `#045eb2`
- `--ds-color-theme-default-light-accent-tertiary`: `#1e42a4` > `#034180`
- `--ds-color-theme-default-light-accent-glow-primary`: `rgba(57, 105, 239, 0.2)` > `rgba(16, 116, 204, 0.2)`
- `--ds-color-theme-default-light-accent-glow-secondary`: `rgba(57, 105, 239, 0.12)` > `rgba(16, 116, 204, 0.12)`
- `--ds-color-theme-default-dark-accent-primary`: `#8fabf9` > `#75b6eb`
- `--ds-color-theme-default-dark-accent-secondary`: `#7295f6` > `#4397e0`
- `--ds-color-theme-default-dark-accent-tertiary`: `#557ff3` > `#1074cc`
- `--ds-color-theme-default-dark-accent-glow-primary`: `rgba(114, 149, 246, 0.2)` > `rgba(117, 182, 235, 0.2)`
- `--ds-color-theme-default-dark-accent-glow-secondary`: `rgba(114, 149, 246, 0.12)` > `rgba(117, 182, 235, 0.12)`

</details>

## ✨ [0.33.0](https://github.com/duckduckgo/design-tokens/releases/tag/v0.33.0) - 2026.07.23

Desktop-browsers New Tab Page tokens now live in a single `build/desktop-browsers/ntp.css`. It carries the next-steps badge tokens, which replace `next-steps-badge.css`, and new dismiss button tokens for light and dark ([#33](https://github.com/duckduckgo/design-tokens/pull/33)).

### Token Updates

#### Desktop Browsers

<details>
<summary>🌱 New values (6)</summary>

- New output `build/desktop-browsers/ntp.css` (6 tokens): the two `--ds-next-steps-badge-*` tokens moved from `next-steps-badge.css`, plus `--ds-ntp-dismiss-btn-light-border`, `--ds-ntp-dismiss-btn-light-color`, `--ds-ntp-dismiss-btn-dark-border` and `--ds-ntp-dismiss-btn-dark-color`

</details>

<details>
<summary>✂️ Removed values (2)</summary>

- Removed output `build/desktop-browsers/next-steps-badge.css` (2 tokens). Its tokens are now in `ntp.css`

</details>

<details>
<summary>🛠️ Dev updates</summary>

- Moved `src/properties/web/desktop-browsers/next-steps-badge.ts` > `src/properties/web/desktop-browsers/ntp.ts`, which adds the dismiss button tokens
- `desktop-browsers-dictionary.config.js`: builds `desktop-browsers/ntp.css` from `ntp.ts` instead of `next-steps-badge.css`, and leaves NTP tokens out of `tokens.css`

</details>

## ✨ [0.32.0](https://github.com/duckduckgo/design-tokens/releases/tag/v0.32.0) - 2026.07.23

Desktop browsers get semantic tokens for the next-steps badge in a new `build/desktop-browsers/next-steps-badge.css` ([#32](https://github.com/duckduckgo/design-tokens/pull/32)).

### Token Updates

#### Desktop Browsers

<details>
<summary>🌱 New values (2)</summary>

- New output `build/desktop-browsers/next-steps-badge.css` (2 tokens): `--ds-next-steps-badge-background` and `--ds-next-steps-badge-color`

</details>

<details>
<summary>🛠️ Dev updates</summary>

- New property file `src/properties/web/desktop-browsers/next-steps-badge.ts`
- `desktop-browsers-dictionary.config.js`: builds `desktop-browsers/next-steps-badge.css` as a standalone file and leaves those tokens out of `tokens.css`

</details>

## ✨ [0.31.0](https://github.com/duckduckgo/design-tokens/releases/tag/v0.31.0) - 2026.07.09

Desktop-browsers `tokens.css` no longer ships the legacy SDS `--ds-color-palette-*` colors. It now carries the shared base font, space, radius and z-index tokens ([#31](https://github.com/duckduckgo/design-tokens/pull/31)).

### Token Updates

#### Desktop Browsers

<details>
<summary>🌱 New values (163)</summary>

- 163 base tokens added to `tokens.css` from `src/properties/web/base/`
  - Font (102): families, weights, letter spacing, and the title, body, eyebrow, button label, label and caption styles, e.g. `--ds-font-family-display`, `--ds-font-title-01-size`: `64px`, `--ds-font-body-md-line-height`: `20px`
  - Space (39): e.g. `--ds-space-x18`: `72px`, `--ds-space-x48`: `192px`, `--ds-space-x175`: `700px`
  - Radius (13): e.g. `--ds-radius-x01`: `4px`, `--ds-radius-x02`: `8px`, `--ds-radius-full`: `999px`
  - Z-index (9): e.g. `--ds-z-index-default`: `1`, `--ds-z-index-modal`: `305`, `--ds-z-index-alert`: `400`

</details>

<details>
<summary>✂️ Removed values (133)</summary>

- 133 legacy SDS `--ds-color-palette-*` colors removed from `tokens.css`: the gray, red, blue, green, yellow and purple ramps, red and green alerts, tints, shades, blue transparencies and the hyperlink colors, e.g. `--ds-color-palette-gray-90` (was `#222222`), `--ds-color-palette-red-50` (was `#de5833`), `--ds-color-palette-blue-hyperlink` (was `#1a0dab`)

</details>

<details>
<summary>🛠️ Dev updates</summary>

- `desktop-browsers-dictionary.config.js`: drops `serp-legacy/sds-colors` from the sources and adds `src/properties/web/base/*`
- Removed property file `src/properties/web/serp-legacy/sds-colors.ts`
- New scripts `scripts/extract-figma-color-json.js` and `scripts/extract-example-token-json.js`, which extract token JSON from the Figma exports added under `colorsfromfigma/` and `examples/`

</details>

## ✨ [0.30.0](https://github.com/duckduckgo/design-tokens/releases/tag/v0.30.0) - 2026.06.25

The mandarin palette moves to warmer, more orange tints, which updates the whole mandarin motif. Dark grays get darker, `status-green` is adjusted, and there are new `control-raised` secondary and tertiary background colors. SERP dark surfaces follow the new `gray-90` ([#30](https://github.com/duckduckgo/design-tokens/pull/30)).

### Token Updates

#### SERP

<details>
<summary>🌱 New values (8)</summary>

- `--ds-control-raised-secondary-background-color` (colors-light.js): `#f5f5f5`; (colors-dark.js): `#484848`
- `--ds-control-raised-tertiary-background-color` (colors-light.js): `#eeeeee`; (colors-dark.js): `#888888`
- The same tokens in `tokens.json` as `ds-theme-light-*` / `ds-theme-dark-*` (4)

</details>

<details>
<summary>♻️ Updated values (49)</summary>

- Palette: `--ds-color-gray-80`: `#383838` > `#333333`, `--ds-color-gray-90`: `#282828` > `#222222`, `--ds-color-green-40`: `#39B25E` > `#38B26A`
- Mandarin palette (4, plus 4 in `tokens.json`): `--ds-color-mandarin-0`: `#FFFAF9` > `#FFF7F0`, `--ds-color-mandarin-10`: `#FFEBE5` > `#FFECDB`, `--ds-color-mandarin-20`: `#FFDACC` > `#FFE4CC`, `--ds-color-mandarin-30`: `#FFB294` > `#FFB694`
- 22 mandarin alpha variants in `tokens.json` follow the new base colors, e.g. `ds-color-mandarin-0-at-24`: `rgba(255, 240, 249, 0.24)` > `rgba(255, 247, 240, 0.24)`, `ds-color-mandarin-10-at-36`: `rgba(255, 235, 229, 0.36)` > `rgba(255, 236, 219, 0.36)`, `ds-color-mandarin-30-at-20`: `rgba(255, 178, 148, 0.2)` > `rgba(255, 182, 148, 0.2)`
- `--ds-surface-primary` (colors-dark.js): `#282828` > `#222222`
- `--ds-surface-secondary` (colors-dark.js): `#282828` > `#222222`
- `--ds-surface-tertiary` (colors-dark.js): `#282828` > `#222222`
- `--ds-control-raised-primary-background-color` (colors-light.js): `#fafafa` > `#ffffff`; (colors-dark.js): `rgba(255, 255, 255, 0.18)` > `#222222`
- `--ds-input-primary-background-color` (colors-dark.js): `#383838` > `#333333`
- `--ds-status-green`: `#39B25E` > `#38B26A`
- The same theme changes in `tokens.json` as `ds-theme-light-*` / `ds-theme-dark-*` (8)

</details>

#### Static Pages

<details>
<summary>🌱 New values (8)</summary>

- `--ds-control-raised-secondary-background-color` (.theme-light): `#f5f5f5`; (.theme-dark): `#484848`
- `--ds-control-raised-tertiary-background-color` (.theme-light): `#eeeeee`; (.theme-dark): `#888888`
- The same tokens in `tokens.json`/`tokens.scss` as `--ds-theme-light-*` / `--ds-theme-dark-*` (4)

</details>

<details>
<summary>♻️ Updated values (124)</summary>

- Palette: `--ds-color-gray-80`: `#383838` > `#333333`, `--ds-color-gray-90`: `#282828` > `#222222`, `--ds-color-green-40`: `#39B25E` > `#38B26A`
- Mandarin palette (4): same changes as SERP, e.g. `--ds-color-mandarin-0`: `#FFFAF9` > `#FFF7F0`
- 22 mandarin alpha variants in `tokens.json`/`tokens.scss`, e.g. `--ds-color-mandarin-0-at-24`: `rgba(255, 240, 249, 0.24)` > `rgba(255, 247, 240, 0.24)`
- `--ds-control-raised-primary-background-color` (.theme-light): `#fafafa` > `#ffffff`; (.theme-dark): `rgba(255, 255, 255, 0.18)` > `#222222`
- `--ds-status-green`: `#39B25E` > `#38B26A`
- The same theme changes in `tokens.json`/`tokens.scss` as `--ds-theme-light-*` / `--ds-theme-dark-*` (4)
- Mandarin motif (88): 44 tokens in `motif-mandarin.scss` follow the new palette, with their `--ds-motif-mandarin-*` equivalents in `tokens.json`/`tokens.scss`
  - `--ds-surface-canvas` (.theme-light .motif-mandarin): `#FFFAF9` > `#FFF7F0`
  - `--ds-surface-primary` (.theme-light .motif-mandarin): `#FFDACC` > `#FFE4CC`
  - `--ds-text-secondary` (.theme-dark .motif-mandarin): `rgba(255, 240, 249, 0.66)` > `rgba(255, 247, 240, 0.66)`

</details>

<details>
<summary>🛠️ Dev updates</summary>

- Color changes in `src/properties/web/base/colors.ts`, `src/properties/web/theme/colors.ts` and `src/properties/web/theme/theme-colors.ts`

</details>

## ✨ [0.29.0](https://github.com/duckduckgo/design-tokens/releases/tag/v0.29.0) - 2026.06.15

Button padding is tighter at the xxs, xs, sm and md sizes. The xl icon button has more padding and a smaller 16px icon ([#29](https://github.com/duckduckgo/design-tokens/pull/29)).

### Token Updates

#### SERP

<details>
<summary>♻️ Updated values (16)</summary>

- `--ds-button-xxs-padding-y` (button.css): `var(--ds-space-x1-5)` > `var(--ds-space-x-5)`; (tokens.json): `6px` > `2px`
- `--ds-button-xs-padding-x` (button.css): `var(--ds-space-x04)` > `var(--ds-space-x03)`; (tokens.json): `16px` > `12px`
- `--ds-button-xs-padding-y` (button.css): `var(--ds-space-x02)` > `var(--ds-space-x01)`; (tokens.json): `8px` > `4px`
- `--ds-button-sm-padding-x` (button.css): `var(--ds-space-x05)` > `var(--ds-space-x03)`; (tokens.json): `20px` > `12px`
- `--ds-button-sm-padding-y` (button.css): `var(--ds-space-x02)` > `var(--ds-space-x1-5)`; (tokens.json): `8px` > `6px`
- `--ds-button-md-padding-x` (button.css): `var(--ds-space-x06)` > `var(--ds-space-x05)`; (tokens.json): `24px` > `20px`
- `--ds-icon-button-xl-padding` (icon-button.css): `var(--ds-space-x04)` > `var(--ds-space-x05)`; (tokens.json): `16px` > `20px`
- `--ds-icon-button-xl-icon-size`: `24px` > `16px`
- `--ds-icon-button-sm-padding` (icon-button.css): `10px` > `var(--ds-space-x02-5)`. Same value, now a space reference

</details>

#### Static Pages

<details>
<summary>♻️ Updated values (8)</summary>

- `--ds-button-xxs-padding-y`: `6px` > `2px`
- `--ds-button-xs-padding-x`: `16px` > `12px`
- `--ds-button-xs-padding-y`: `8px` > `4px`
- `--ds-button-sm-padding-x`: `20px` > `12px`
- `--ds-button-sm-padding-y`: `8px` > `6px`
- `--ds-button-md-padding-x`: `24px` > `20px`
- `--ds-icon-button-xl-padding`: `16px` > `20px`
- `--ds-icon-button-xl-icon-size`: `24px` > `16px`

</details>

<details>
<summary>🛠️ Dev updates</summary>

- Value changes in `src/properties/web/shared-components/button.ts` and `src/properties/web/shared-components/icon-button.ts`

</details>

## ✨ [0.28.0](https://github.com/duckduckgo/design-tokens/releases/tag/v0.28.0) - 2026.06.05

SERP `font.js` now includes the xxl, xl and sm body styles. Unused Duck.ai extra colors and main-chat box shadows have been removed ([#28](https://github.com/duckduckgo/design-tokens/pull/28)).

### Token Updates

#### SERP

<details>
<summary>🌱 New values (15)</summary>

- Body xxl, xl and sm styles in `font.js` (5 properties each):
  - `--ds-font-body-xxl-size`: `24px`, `--ds-font-body-xxl-line-height`: `32px`, `--ds-font-body-xxl-font-family`: `var(--ds-font-family-display)`
  - `--ds-font-body-xl-size`: `20px`, `--ds-font-body-xl-line-height`: `28px`, `--ds-font-body-xl-font-family`: `var(--ds-font-family-display)`
  - `--ds-font-body-sm-size`: `12px`, `--ds-font-body-sm-line-height`: `16px`, `--ds-font-body-sm-font-family`: `var(--ds-font-family-product)`
  - `-letter-spacing`: `var(--ds-font-letter-spacing-normal)` and `-weight`: `var(--ds-font-weight-normal)` for each

</details>

#### Duck.ai

<details>
<summary>✂️ Removed values (22)</summary>

- 22 tokens removed from `extra-colors.js`:
  - Internal A (5): `--duckai-color-internal-a-10` to `-90` (was `#D8F7FF` to `#054E62`)
  - Internal B (5): `--duckai-color-internal-b-10` to `-90` (was `#E3E8FF` to `#434A70`)
  - DuckAssist (5): `--duckai-color-duckassist-10` to `-90` (was `#F0F0F0` to `#222222`)
  - `--duckai-color-primary` (was `#000000`)
  - `--duckai-color-red-tint` (was `#FFD7CC3D`)
  - `--duckai-color-green-private-light` (was `#11604D`)
  - `--duckai-color-green-private-dark` (was `#589D88`)
  - `--duckai-color-voice-input-background-disabled` (was `rgba(255, 84, 90, 0.30)`)
  - `--duckai-box-shadow-main-chat-light` (was `0px 4px 12px 0px rgba(0, 0, 0, 0.04)`)
  - `--duckai-box-shadow-main-chat-dark` (was `0px 4px 12px 0px rgba(0, 0, 0, 0.20), 0px 20px 40px 0px rgba(0, 0, 0, 0.16)`)

</details>

<details>
<summary>🛠️ Dev updates</summary>

- `src/formats/serp-font-js.js`: passes every `body-*` style through instead of only the mapped ones
- Removed the deprecated tokens from `src/properties/web/duckai/colors.ts` and `src/properties/web/duckai/box-shadow.ts`

</details>

## ✨ [0.27.0](https://github.com/duckduckgo/design-tokens/releases/tag/v0.27.0) - 2026.05.29

The red palette and destructive colors are updated, and there is a new `input-primary-background-color`. SERP now uses the Default (Web Product) theme, which swaps eggshell surfaces for grays ([#27](https://github.com/duckduckgo/design-tokens/pull/27)).

### Token Updates

#### SERP

<details>
<summary>🌱 New values (8)</summary>

- `--ds-input-primary-background-color` (colors-light.js): `#ffffff`; (colors-dark.js): `#383838`
- Red alpha variants in `tokens.json`: `ds-color-red-30-at-12`: `rgba(240, 101, 101, 0.12)`, `ds-color-red-30-at-20`: `rgba(240, 101, 101, 0.2)`, `ds-color-red-40-at-12`: `rgba(228, 77, 85, 0.12)`, `ds-color-red-40-at-20`: `rgba(228, 77, 85, 0.2)`
- The same input token in `tokens.json` as `ds-theme-light-*` / `ds-theme-dark-*` (2)

</details>

<details>
<summary>♻️ Updated values (221)</summary>

- 162 `tokens.json` values changed formatting only, reverting the 0.24.0 formatting: hex is lowercase again (97, e.g. `ds-color-pondwater-60`: `#1074CC` > `#1074cc`) and alpha drops trailing zeros (65, e.g. `ds-color-black-at-30`: `rgba(0, 0, 0, 0.30)` > `rgba(0, 0, 0, 0.3)`)
- Red palette (6, plus 6 in `tokens.json`): `--ds-color-red-0`: `#FEF9FA` > `#FCECF0`, `--ds-color-red-10`: `#FCECF0` > `#FAD8DC`, `--ds-color-red-20`: `#FAD8DC` > `#F7AAAD`, `--ds-color-red-30`: `#F7AAAD` > `#F06565`, `--ds-color-red-40`: `#F06565` > `#E44D55`, `--ds-color-red-50`: `#EC434F` > `#D83544`
- `--ds-surface-canvas` (colors-light.js): `#FBFAF9` > `#eeeeee`; (colors-dark.js): `#181817` > `#181818`
- `--ds-surface-primary` (colors-light.js): `#ECEBE7` > `#ffffff`; (colors-dark.js): `#181817` > `#282828`
- `--ds-surface-secondary` (colors-light.js): `#F7F5F2` > `#ffffff`; (colors-dark.js): `#242323` > `#282828`
- `--ds-surface-tertiary` (colors-dark.js): `#30302F` > `#282828`
- `--ds-surface-contrast` (colors-dark.js): `#ECEBE7` > `#eeeeee`
- `--ds-destructive-primary` (colors-light.js): `#EC434F` > `#D83544`; (colors-dark.js): `#EC434F` > `#E44D55`
- `--ds-destructive-secondary` (colors-dark.js): `#CA2B3D` > `#D83544`
- `--ds-destructive-tertiary` (colors-dark.js): `#A02231` > `#CA2B3D`
- `--ds-destructive-glow-primary` (colors-light.js): `rgba(236, 67, 79, 0.20)` > `rgba(228, 77, 85, 0.20)`; (colors-dark.js): `rgba(236, 67, 79, 0.20)` > `rgba(240, 101, 101, 0.20)`
- `--ds-destructive-glow-secondary` (colors-light.js): `rgba(236, 67, 79, 0.12)` > `rgba(228, 77, 85, 0.12)`; (colors-dark.js): `rgba(236, 67, 79, 0.12)` > `rgba(240, 101, 101, 0.12)`
- `--ds-destructive-primary-text-color` (colors-light.js): `#EC434F` > `#CA2B3D`; (colors-dark.js): `#EC434F` > `#F06565`
- `--ds-destructive-secondary-text-color` (colors-light.js): `#CA2B3D` > `#A02231`; (colors-dark.js): `#CA2B3D` > `#E44D55`
- `--ds-destructive-tertiary-text-color` (colors-light.js): `#A02231` > `#671421`; (colors-dark.js): `#A02231` > `#D83544`
- `--ds-status-red`: `#EC434F` > `#D83544`
- The same theme changes in `tokens.json` as `ds-theme-light-*` / `ds-theme-dark-*` (24, with lowercase hex)

</details>

<details>
<summary>✂️ Removed values (2)</summary>

- `ds-color-red-50-at-12` (was `rgba(236, 67, 79, 0.12)`)
- `ds-color-red-50-at-20` (was `rgba(236, 67, 79, 0.20)`)

</details>

#### Static Pages

<details>
<summary>🌱 New values (8)</summary>

- `--ds-input-primary-background-color` (.theme-light): `#ffffff`; (.theme-dark): `#30302F`
- Red alpha variants in `tokens.json`/`tokens.scss`: `--ds-color-red-30-at-12`: `rgba(240, 101, 101, 0.12)`, `--ds-color-red-30-at-20`: `rgba(240, 101, 101, 0.20)`, `--ds-color-red-40-at-12`: `rgba(228, 77, 85, 0.12)`, `--ds-color-red-40-at-20`: `rgba(228, 77, 85, 0.20)`
- The same input token in `tokens.json`/`tokens.scss` as `--ds-theme-light-*` / `--ds-theme-dark-*` (2)

</details>

<details>
<summary>♻️ Updated values (37)</summary>

- Red palette (6): same changes as SERP, e.g. `--ds-color-red-50`: `#EC434F` > `#D83544`
- Destructive and status colors in `theme-colors.scss` (15) match the SERP values above, e.g. `--ds-destructive-primary` (.theme-light): `#EC434F` > `#D83544`; (.theme-dark): `#EC434F` > `#E44D55`
- The same theme changes in `tokens.json`/`tokens.scss` as `--ds-theme-light-*` / `--ds-theme-dark-*` (16)

</details>

<details>
<summary>✂️ Removed values (2)</summary>

- `--ds-color-red-50-at-12` (was `rgba(236, 67, 79, 0.12)`)
- `--ds-color-red-50-at-20` (was `rgba(236, 67, 79, 0.20)`)

</details>

<details>
<summary>🛠️ Dev updates</summary>

- New property file `src/properties/web/serp/theme-colors.ts`: SERP surface and dark input overrides that follow the Default (Web Product) theme in Figma
- Color changes in `src/properties/web/base/colors.ts`, `src/properties/web/theme/colors.ts` and `src/properties/web/theme/theme-colors.ts`

</details>

## ✨ [0.26.0](https://github.com/duckduckgo/design-tokens/releases/tag/v0.26.0) - 2026.05.12

Dark theme accents are one step darker in the pondwater ramp, in the default dark theme and the pondwater dark motif ([#26](https://github.com/duckduckgo/design-tokens/pull/26)).

### Token Updates

#### SERP

<details>
<summary>♻️ Updated values (12)</summary>

- `--ds-accent-primary` (colors-dark.js): `#A1D0F7` > `#75B6EB`
- `--ds-accent-secondary` (colors-dark.js): `#75B6EB` > `#4397E0`
- `--ds-accent-tertiary` (colors-dark.js): `#4397E0` > `#1074CC`
- `--ds-accent-primary-text-color` (colors-dark.js): `#A1D0F7` > `#75B6EB`
- `--ds-accent-secondary-text-color` (colors-dark.js): `#75B6EB` > `#4397E0`
- `--ds-accent-tertiary-text-color` (colors-dark.js): `#4397E0` > `#1074CC`
- The same tokens in `tokens.json` as `ds-theme-dark-*` (6)

</details>

#### Static Pages

<details>
<summary>♻️ Updated values (18)</summary>

- `--ds-accent-primary` (.theme-dark, .theme-dark .motif-pondwater): `#A1D0F7` > `#75B6EB`
- `--ds-accent-secondary` (.theme-dark, .theme-dark .motif-pondwater): `#75B6EB` > `#4397E0`
- `--ds-accent-tertiary` (.theme-dark, .theme-dark .motif-pondwater): `#4397E0` > `#1074CC`
- `--ds-accent-primary-text-color` (.theme-dark, .theme-dark .motif-pondwater): `#A1D0F7` > `#75B6EB`
- `--ds-accent-secondary-text-color` (.theme-dark, .theme-dark .motif-pondwater): `#75B6EB` > `#4397E0`
- `--ds-accent-tertiary-text-color` (.theme-dark, .theme-dark .motif-pondwater): `#4397E0` > `#1074CC`
- The same tokens in `tokens.json`/`tokens.scss` as `--ds-theme-dark-*` and `--ds-motif-pondwater-dark-*` (12)

</details>

<details>
<summary>🛠️ Dev updates</summary>

- Color changes in `src/properties/web/theme/theme-colors.ts` and `src/properties/web/theme/motif-colors.ts`

</details>

## ✨ [0.25.0](https://github.com/duckduckgo/design-tokens/releases/tag/v0.25.0) - 2026.04.29

This release adds `surface-contrast`, `control-subtle` border colors and `status-gray`, and lightens the near-white gray palette. Status yellow is now `#FAB341`. On static pages, each motif's `surface-tertiary` is now a tinted surface instead of white or a pale accent ([#25](https://github.com/duckduckgo/design-tokens/pull/25)).

### Token Updates

#### SERP

<details>
<summary>🌱 New values (27)</summary>

- `--ds-color-black-at-18`: `rgba(0, 0, 0, 0.18)`
- `--ds-color-white-at-96`: `rgba(255, 255, 255, 0.96)`
- `--ds-surface-contrast` (colors-light.js): `#000000`; (colors-dark.js): `#ECEBE7`
- `--ds-control-subtle-primary-border-color` (colors-light.js): `rgba(0, 0, 0, 0.12)`; (colors-dark.js): `rgba(255, 255, 255, 0.12)`
- `--ds-control-subtle-secondary-border-color` (colors-light.js): `rgba(0, 0, 0, 0.18)`; (colors-dark.js): `rgba(255, 255, 255, 0.18)`
- `--ds-control-subtle-tertiary-border-color` (colors-light.js): `rgba(0, 0, 0, 0.36)`; (colors-dark.js): `rgba(255, 255, 255, 0.36)`
- `--ds-status-gray`: `#888888`
- Alpha variants in `tokens.json` (6): `ds-color-blossom-80-at-36`: `rgba(82, 26, 97, 0.36)`, `ds-color-lilypad-60-at-36`: `rgba(36, 122, 100, 0.36)`, `ds-color-mandarin-50-at-36`: `rgba(240, 95, 43, 0.36)`, `ds-color-pollen-40-at-18`: `rgba(255, 201, 92, 0.18)`, `ds-color-pollen-40-at-36`: `rgba(255, 201, 92, 0.36)`, `ds-color-pondwater-60-at-36`: `rgba(16, 116, 204, 0.36)`
- The same theme tokens in `tokens.json` as `ds-theme-light-*` / `ds-theme-dark-*` (10)

</details>

<details>
<summary>♻️ Updated values (17)</summary>

- `--ds-color-gray-0`: `#fcfcfc` > `#fafafa`
- `--ds-color-gray-20`: `#e5e5e5` > `#eeeeee`
- `--ds-color-gray-30`: `#c5c5c5` > `#cccccc`
- `--ds-status-yellow`: `#FFC95C` > `#FAB341`
- `--ds-control-raised-primary-background-color` (colors-light.js): `#fcfcfc` > `#fafafa`
- `--ds-highlight-primary` (colors-light.js): `rgba(252, 252, 252, 0.24)` > `rgba(250, 250, 250, 0.24)`
- `--ds-tone-brighten-primary` (colors-light.js): `rgba(252, 252, 252, 0.32)` > `rgba(250, 250, 250, 0.32)`
- `--ds-tone-brighten-secondary` (colors-light.js): `rgba(252, 252, 252, 0.60)` > `rgba(250, 250, 250, 0.60)`
- `ds-color-gray-0-at-24`, `-at-32`, `-at-60` in `tokens.json` follow the new `gray-0`, e.g. `ds-color-gray-0-at-24`: `rgba(252, 252, 252, 0.24)` > `rgba(250, 250, 250, 0.24)`
- The same theme changes in `tokens.json` as `ds-theme-light-*` / `ds-theme-dark-*` (6)

</details>

<details>
<summary>✂️ Removed values (1)</summary>

- `--ds-color-black-at-20` (was `rgba(0, 0, 0, 0.20)`)

</details>

#### Static Pages

<details>
<summary>🌱 New values (103)</summary>

- `--ds-color-black-at-18`: `rgba(0, 0, 0, 0.18)`
- `--ds-color-white-at-96`: `rgba(255, 255, 255, 0.96)`
- `--ds-surface-contrast` (.theme-light): `#000000`; (.theme-dark): `#ECEBE7`
- `--ds-control-subtle-primary-border-color` (.theme-light): `rgba(0, 0, 0, 0.12)`; (.theme-dark): `rgba(255, 255, 255, 0.12)`
- `--ds-control-subtle-secondary-border-color` (.theme-light): `rgba(0, 0, 0, 0.18)`; (.theme-dark): `rgba(255, 255, 255, 0.18)`
- `--ds-control-subtle-tertiary-border-color` (.theme-light): `rgba(0, 0, 0, 0.36)`; (.theme-dark): `rgba(255, 255, 255, 0.36)`
- `--ds-status-gray`: `#888888`
- The same 6 alpha variants as SERP in `tokens.json`/`tokens.scss`, e.g. `--ds-color-pondwater-60-at-36`: `rgba(16, 116, 204, 0.36)`
- The same theme tokens in `tokens.json`/`tokens.scss` as `--ds-theme-light-*` / `--ds-theme-dark-*` (10)
- Motifs (36 in `motif-*.scss`, plus 40 `--ds-motif-*` equivalents in `tokens.json`/`tokens.scss`): each of blossom, lilypad, mandarin, pollen and pondwater gets `--ds-surface-contrast` and the three `--ds-control-subtle-*-border-color` tokens in light and dark, tinted with the motif hue
  - `--ds-surface-contrast` (.theme-light .motif-blossom): `rgba(35, 8, 41, 0.96)`; (.theme-dark, every motif): `rgba(255, 255, 255, 0.96)`
  - `--ds-control-subtle-primary-border-color` (.theme-light .motif-pondwater): `rgba(16, 116, 204, 0.12)`
  - `--ds-control-subtle-tertiary-border-color` (.theme-dark .motif-lilypad): `rgba(226, 243, 233, 0.36)`

</details>

<details>
<summary>♻️ Updated values (33)</summary>

- `--ds-color-gray-0`: `#fcfcfc` > `#fafafa`
- `--ds-color-gray-20`: `#e5e5e5` > `#eeeeee`
- `--ds-color-gray-30`: `#c5c5c5` > `#cccccc`
- `--ds-status-yellow`: `#FFC95C` > `#FAB341`
- `--ds-control-raised-primary-background-color` (.theme-light): `#fcfcfc` > `#fafafa`
- `--ds-highlight-primary` (.theme-light): `rgba(252, 252, 252, 0.24)` > `rgba(250, 250, 250, 0.24)`
- `--ds-tone-brighten-primary` (.theme-light): `rgba(252, 252, 252, 0.32)` > `rgba(250, 250, 250, 0.32)`
- `--ds-tone-brighten-secondary` (.theme-light): `rgba(252, 252, 252, 0.60)` > `rgba(250, 250, 250, 0.60)`
- `--ds-surface-tertiary` (.theme-light .motif-blossom): `#ffffff` > `#FBF7FF`
- `--ds-surface-tertiary` (.theme-light .motif-lilypad): `#ffffff` > `#F8FCF9`
- `--ds-surface-tertiary` (.theme-dark .motif-lilypad): `#AED5C2` > `#0A4739`
- `--ds-surface-tertiary` (.theme-light .motif-mandarin): `#ffffff` > `#FFFAF9`
- `--ds-surface-tertiary` (.theme-light .motif-pollen): `#ffffff` > `#FFFBF0`
- `--ds-surface-tertiary` (.theme-dark .motif-pollen): `#FFD885` > `#783B13`
- `--ds-surface-tertiary` (.theme-light .motif-pondwater): `#ffffff` > `#F5FBFE`
- `--ds-surface-tertiary` (.theme-dark .motif-pondwater): `#A1D0F7` > `#034180`
- `--ds-color-gray-0-at-24`, `-at-32`, `-at-60` in `tokens.json`/`tokens.scss` follow the new `gray-0`
- The same theme and motif changes in `tokens.json`/`tokens.scss` as `--ds-theme-*` / `--ds-motif-*` (14)

</details>

<details>
<summary>✂️ Removed values (1)</summary>

- `--ds-color-black-at-20` (was `rgba(0, 0, 0, 0.20)`)

</details>

<details>
<summary>🛠️ Dev updates</summary>

- Color changes in `src/properties/web/base/colors.ts`, `src/properties/web/theme/colors.ts`, `src/properties/web/theme/theme-colors.ts`, `src/properties/web/theme/motif-colors.ts` and `src/properties/web/desktop-browsers/onboarding.ts`

</details>

## ✨ [0.24.0](https://github.com/duckduckgo/design-tokens/releases/tag/v0.24.0) - 2026.04.24

SERP theme outputs now include link colors, and `space.js` ships px values plus a `--ds-px-in-rem` base value instead of rem ([#24](https://github.com/duckduckgo/design-tokens/pull/24)).

### Token Updates

#### SERP

<details>
<summary>🌱 New values (18)</summary>

- `--ds-link-primary` (colors-light.js): `#1a0dab`; (colors-dark.js): `#adc2fc`
- `--ds-link-primary-visited` (colors-light.js): `#6C00A2`; (colors-dark.js): `#A591DC`
- `--ds-link-secondary` (colors-light.js): `#666666`; (colors-dark.js): `#aaaaaa`
- `--ds-link-secondary-hover` (colors-light.js): `#444444`; (colors-dark.js): `#cccccc`
- `--ds-px-in-rem` (space.js): `16px`, and `ds-space-px-in-rem` in `tokens.json`
- The same link tokens in `tokens.json` as `ds-theme-light-*` / `ds-theme-dark-*` (8)

</details>

<details>
<summary>♻️ Updated values (225)</summary>

- 39 `space.js` values changed from rem to px, because the space section now outputs raw values
  - `--ds-space-x_5`: `0.125rem` > `2px`
  - `--ds-space-x01`: `0.25rem` > `4px`
  - `--ds-space-x04`: `1rem` > `16px`
- 186 `tokens.json` values changed formatting only and are the same colors
  - Hex is now uppercase (117), e.g. `ds-color-pondwater-60`: `#1074cc` > `#1074CC`, `ds-theme-light-destructive-primary`: `#ec434f` > `#EC434F`
  - Alpha now has two decimals (69), e.g. `ds-color-black-at-20`: `rgba(0, 0, 0, 0.2)` > `rgba(0, 0, 0, 0.20)`, `ds-color-black-at-60`: `rgba(0, 0, 0, 0.6)` > `rgba(0, 0, 0, 0.60)`

</details>

<details>
<summary>🛠️ Dev updates</summary>

- `serp-style-dictionary.config.js`: the `space.js` section uses the `raw` value format instead of `rem`, and maps `space.px-in-rem` to `--ds-px-in-rem`
- `src/formats/serp-base-tokens-js.js`: adds a `pathNameOverrides` section option for output names
- `src/formats/serp-themes-js.js`: merges SERP theme overrides from `web/serp/colors` over the base theme, and groups the link tokens together
- New property file `src/properties/web/serp/space.ts` (`pxInRem`), and SERP link colors added to `src/properties/web/serp/colors.ts`

</details>

## ✨ [0.23.0](https://github.com/duckduckgo/design-tokens/releases/tag/v0.23.0) - 2026.04.22

SERP button and icon-button tokens now ship as CSS custom properties (`button.css`, `icon-button.css`) instead of JS modules, and the motif colors are dropped from `build/serp/tokens.json`. The SERP and Duck.ai `.d.ts` files now list each module's exact token keys instead of a generic `--${string}` record ([#23](https://github.com/duckduckgo/design-tokens/pull/23)).

### Token Updates

#### SERP

<details>
<summary>♻️ Updated values (55)</summary>

- Moved output `build/serp/button.js` > `build/serp/button.css` (42 tokens, values unchanged, now `:root` custom properties)
- Moved output `build/serp/icon-button.js` > `build/serp/icon-button.css` (13 tokens, values unchanged)

</details>

<details>
<summary>✂️ Removed values (590)</summary>

- 590 motif color tokens removed from `build/serp/tokens.json` (118 for each of blossom, lilypad, mandarin, pollen and pondwater, light and dark)
  - `ds-motif-blossom-light-surface-backdrop` (was `#ffffff`)
  - `ds-motif-blossom-light-surface-canvas` (was `#fbf7ff`)
  - `ds-motif-blossom-light-surface-primary` (was `#eadafd`)

</details>

<details>
<summary>🛠️ Dev updates</summary>

- New script `scripts/generate-types-shared.js` with the shared type-generation logic; `generate-serp-types.js` and `generate-duckai-types.js` now use it and emit key union types
- `serp-style-dictionary.config.js`: builds `button.css` and `icon-button.css` with the `css/variables` format instead of the shared-component JS entries, and filters `theme/motif-colors` out of `tokens.json`

</details>

## ✨ [0.22.0](https://github.com/duckduckgo/design-tokens/releases/tag/v0.22.0) - 2026.04.22

Duck.ai extra colors now ship as a JS module (`build/duckai/extra-colors.js`) instead of TypeScript, with three new tokens. Types are split into one `.d.ts` per output: the single `build/serp/design-tokens-serp.d.ts` is replaced by a `.d.ts` next to each SERP JS file, and `build/duckai/extra-colors.d.ts` is new ([#22](https://github.com/duckduckgo/design-tokens/pull/22)).

### Token Updates

#### Duck.ai

<details>
<summary>🌱 New values (3)</summary>

- `--duckai-color-transparent`: `transparent`
- `--duckai-box-shadow-scroll-bottom-light`: `0px -1px 12px rgba(0, 0, 0, 0.08)`
- `--duckai-box-shadow-scroll-bottom-dark`: `0px -1px 12px 0px var(--ds-surface-backdrop), 0px -1px 12px 0px var(--ds-surface-backdrop)`

</details>

<details>
<summary>♻️ Updated values (31)</summary>

- Moved output `build/duckai/extra-colors.ts` > `build/duckai/extra-colors.js` (31 tokens, values unchanged, now a default export)

</details>

<details>
<summary>🛠️ Dev updates</summary>

- New script `scripts/generate-duckai-types.js` and package script `build:duckai-types`, run at the end of `build:dictionary`
- `scripts/generate-serp-types.js`: writes one `.d.ts` per SERP JS output and deletes the old `design-tokens-serp.d.ts`
- Renamed format `src/formats/duckai-extracolors-ts.js` > `src/formats/duckai-extracolors-js.js`
- `duckai-style-dictionary.config.js`: builds `duckai/extra-colors.js` with the JS format

</details>

## ✨ [0.21.0](https://github.com/duckduckgo/design-tokens/releases/tag/v0.21.0) - 2026.04.22

SERP JS outputs now come with TypeScript declarations, so `@duckduckgo/design-tokens/build/serp/*` imports are typed. No token values changed ([#21](https://github.com/duckduckgo/design-tokens/pull/21)).

<details>
<summary>🛠️ Dev updates</summary>

- New output `build/serp/design-tokens-serp.d.ts`: module declarations for the 10 SERP JS outputs (`button`, `color-palette`, `colors-dark`, `colors-light`, `font`, `full-font-stack`, `icon-button`, `radius`, `space`, `zindex`)
- New script `scripts/generate-serp-types.js` and package script `build:serp-types`, run at the end of `build:dictionary`

</details>

## ✨ [0.20.0](https://github.com/duckduckgo/design-tokens/releases/tag/v0.20.0) - 2026.04.22

SERP outputs switch from TypeScript to plain JS modules with default exports, and gain font, full font stack, button and icon-button outputs. Static-pages `--ds-typography-*` tokens are renamed to `--ds-font-*`, with body sizes moving from numbered to t-shirt names ([#20](https://github.com/duckduckgo/design-tokens/pull/20)).

### Token Updates

#### SERP

<details>
<summary>🌱 New values (259)</summary>

- New output `build/serp/font.js` (55 tokens): font families, weights, letter spacing and the basic SERP type stack
- New output `build/serp/full-font-stack.js` (102 tokens): the full static-pages type stack, for features that need more than the SERP basics
- New output `build/serp/button.js` (42 tokens): button radius, padding, font size and line height for sizes `xxs` to `xl`
- New output `build/serp/icon-button.js` (13 tokens): icon-button icon sizes, padding and radius
- `build/serp/tokens.json` gains 148 tokens: font (93), button (42) and icon-button (13), e.g. `ds-font-title-05-size`, `ds-button-md-padding-x`, `ds-icon-button-xl-icon-size`

</details>

<details>
<summary>♻️ Updated values (322)</summary>

- 6 outputs moved from `.ts` to `.js` (322 tokens, values unchanged; named `export const` replaced by a default export and the exported types dropped)
  - `build/serp/color-palette.ts` > `build/serp/color-palette.js` (126)
  - `build/serp/colors-light.ts` > `build/serp/colors-light.js` and `colors-dark.ts` > `colors-dark.js` (73 each)
  - `build/serp/space.ts` > `space.js` (39), `radius.ts` > `radius.js` (13), `zindex.ts` > `zindex.js` (9)

</details>

#### Static Pages

<details>
<summary>🌱 New values (8)</summary>

- `--ds-font-caption-01-*` (5 tokens): `size` `13px`, `line-height` `16px`, `weight` `400`, `letter-spacing` `0`, `font-family` `DuckSansProduct` stack, in `tokens.json`, `tokens.scss` and `typography.scss`

</details>

<details>
<summary>♻️ Updated values (139)</summary>

- 139 `--ds-typography-*` tokens renamed to `--ds-font-*` (renamed), values unchanged
  - `--ds-typography-title-01-size` > `--ds-font-title-01-size` (renamed)
  - `--ds-typography-body-01-size` > `--ds-font-body-xxl-size` (renamed)
  - Body steps map as `body-01` > `body-xxl`, `body-02` > `body-xl`, `body-03` > `body-lg`, `body-04` > `body-md`, `body-05` > `body-sm`

</details>

<details>
<summary>🛠️ Dev updates</summary>

- Renamed formats `src/formats/serp-base-tokens-ts.js` > `serp-base-tokens-js.js`, `serp-colors-ts.js` > `serp-colors-js.js` and `serp-themes-ts.js` > `serp-themes-js.js`
- New format `src/formats/serp-font-js.js`
- `src/formats/sp-component-scss.js`: can also output JS (`outputType: 'js'`), used for the SERP button outputs
- `src/formats/sp-base-tokens.js`: sections can filter with a `tokenMatcher`
- Moved `src/properties/web/static-pages/typography.ts` > `src/properties/web/base/typography.ts`
- Moved `src/properties/web/static-pages/components/button.ts` and `icon-button.ts` > `src/properties/web/shared-components/`
- `serp-style-dictionary.config.js`: builds JS instead of TS and adds the font, full font stack, button and icon-button outputs
- `static-pages-dictionary.config.js`: reads components from `shared-components` too, and splits font setup and typestack sections

</details>

## ✨ [0.19.0](https://github.com/duckduckgo/design-tokens/releases/tag/v0.19.0) - 2026.04.17

SERP moves off the legacy `sds-*` token set onto the shared `ds-*` tokens, with new TypeScript outputs for the color palette, light and dark theme colors, space, radius and z-index. `build/serp/tokens.scss` and `build/serp/tokens-themes.json` are removed. Duck.ai gets its first output, `build/duckai/extra-colors.ts` ([#18](https://github.com/duckduckgo/design-tokens/pull/18)).

### Token Updates

#### SERP

<details>
<summary>🌱 New values (1434)</summary>

- `build/serp/tokens.json` now carries 1183 `ds-*` tokens, replacing the legacy `sds-*` set
  - Color palette (377): `ds-color-black`: `#000000`, `ds-color-black-at-12`: `rgba(0, 0, 0, 0.12)`, `ds-color-gray-10`: `#f5f5f5`
  - Theme colors (146, light and dark): e.g. `ds-theme-light-text-tertiary`: `rgba(0, 0, 0, 0.36)`
  - Motif colors (590, 118 for each of 5 motifs): e.g. `ds-motif-blossom-light-surface-backdrop`: `#ffffff`
  - Space (39), radius (13), z-index (9) and font family, weight and letter spacing (9)
- New output `build/serp/color-palette.ts` (126 tokens): `dsColorPalette`
- New outputs `build/serp/colors-light.ts` and `build/serp/colors-dark.ts` (73 tokens each): `dsThemeColorsLight` and `dsThemeColorsDark`
- New output `build/serp/space.ts` (39 tokens): rem values with px comments, e.g. `--ds-space-x01`: `0.25rem`
- New output `build/serp/radius.ts` (13 tokens)
- New output `build/serp/zindex.ts` (9 tokens)

</details>

<details>
<summary>✂️ Removed values (777)</summary>

- Removed output `build/serp/tokens.scss` (259 tokens), and the same 259 legacy `sds-*` tokens from `build/serp/tokens.json`
  - Color (200): `sds-color-palette-black` (was `#000000`), `sds-color-palette-gray-10` (was `#f5f5f5`)
  - Space (28), font (19), radius (9) and base (3): e.g. `sds-base-px-in-rem`
- Removed output `build/serp/tokens-themes.json` (518 tokens)

</details>

#### Static Pages

<details>
<summary>🌱 New values (6)</summary>

- `--ds-space-x02-5`: `10px`
- `--ds-space-x03-5`: `14px`
- `--ds-space-x04-5`: `18px`
- `--ds-space-x96`: `384px`
- `--ds-z-index-middle-raised`: `50`
- `--ds-z-index-sticky`: `55`

</details>

<details>
<summary>✂️ Removed values (24)</summary>

- 14 large space steps from `spacing.scss`, `tokens.json` and `tokens.scss`, from `--ds-space-x60` (was `240px`) to `--ds-space-x256` (was `1024px`), e.g. `--ds-space-x142` (was `568px`), `--ds-space-x192` (was `768px`)
- 10 alpha colors from `colors.scss`:
  - `--ds-color-gray-0-at-24`, `-at-32`, `-at-60` (was `rgba(252, 252, 252, 0.24)`, `0.32`, `0.60`)
  - `--ds-color-eggshell-90-at-60`, `-at-96` (was `rgba(36, 35, 35, 0.60)`, `0.96`)
  - `--ds-color-pondwater-30-at-8`, `-at-12`, `-at-16` (was `rgba(161, 208, 247, 0.08)`, `0.12`, `0.16`)
  - `--ds-color-red-50-at-12`, `-at-20` (was `rgba(236, 67, 79, 0.12)`, `0.20`)

</details>

#### Duck.ai

<details>
<summary>🌱 New values (31)</summary>

- New output `build/duckai/extra-colors.ts` (31 tokens): Duck.ai-specific colors and box shadows, e.g. `--duckai-color-primary`: `#000000`, `--duckai-box-shadow-main-chat-light`: `0px 4px 12px 0px rgba(0, 0, 0, 0.04)`

</details>

<details>
<summary>🛠️ Dev updates</summary>

- New config `duckai-style-dictionary.config.js`, added to the `build:dictionary`, `lint` and `lint:fix` package scripts
- New formats `src/formats/serp-base-tokens-ts.js`, `serp-colors-ts.js`, `serp-themes-ts.js` and `duckai-extracolors-ts.js`
- Removed format `src/formats/serp-themed-json.js`
- `serp-style-dictionary.config.js`: prefix `sds` > `ds`, reads the shared base, theme, component and serp sources, and replaces `tokens.scss` and `tokens-themes.json` with the TS outputs
- `desktop-browsers-dictionary.config.js`: reads legacy colors from the new `serp-legacy` path and excludes theme colors
- Moved `src/properties/web/serp/sds-colors.ts` > `src/properties/web/serp-legacy/sds-colors.ts`
- Removed `src/properties/web/serp/sds-semantic.ts`, `sds-spacing.ts` and `sds-typography.ts`
- Moved `src/properties/web/static-pages/spacing.ts` > `src/properties/web/base/spacing.ts`, and `src/properties/web/base/typography.ts` > `src/properties/web/static-pages/typography.ts`
- New properties `src/properties/web/duckai/colors.ts`, `src/properties/web/duckai/box-shadow.ts` and `src/properties/web/serp/colors.ts`

</details>

## ✨ [0.18.0](https://github.com/duckduckgo/design-tokens/releases/tag/v0.18.0) - 2026.04.17

Static-pages motif colors move out of `theme-colors.scss` into one file per motif (`motif-blossom.scss`, `motif-lilypad.scss`, `motif-mandarin.scss`, `motif-pollen.scss`, `motif-pondwater.scss`), so pages can load only the motif they use. The Storybook `theme-and-motif.json` output is removed ([#19](https://github.com/duckduckgo/design-tokens/pull/19)).

### Token Updates

#### Static Pages

<details>
<summary>♻️ Updated values (503)</summary>

- Moved the `.theme-light .motif-*` and `.theme-dark .motif-*` scopes from `build/static-pages/theme-colors.scss` > `build/static-pages/motif-<name>.scss` (118 tokens per motif, 59 each for light and dark; values unchanged). `theme-colors.scss` now holds only the `.theme-light` and `.theme-dark` base theme colors

</details>

<details>
<summary>✂️ Removed values (736)</summary>

- Removed output `build/static-pages/theme-and-motif.json` (736 tokens): flat `ds-theme-*` and `ds-motif-*` values added for Storybook in 0.17.0

</details>

<details>
<summary>🛠️ Dev updates</summary>

- New format `src/formats/sp-motif-colors-classes.js`
- `src/formats/sp-theme-colors-classes.js`: no longer emits motif scopes
- `static-pages-dictionary.config.js`: generates one `motif-<name>.scss` entry per motif found in the motif color source, and drops the `theme-and-motif.json` output

</details>

## ✨ [0.17.0](https://github.com/duckduckgo/design-tokens/releases/tag/v0.17.0) - 2026.03.25

Static-pages component files (`button.scss`, `icon-button.scss`, `tabs.scss`) now wrap their variables in an SCSS `@mixin` instead of a class selector, so consumers need to `@include` them where they want them. A new `build/static-pages/theme-and-motif.json` provides every theme and motif color as flat JSON for Storybook ([#17](https://github.com/duckduckgo/design-tokens/pull/17)).

### Token Updates

#### Static Pages

<details>
<summary>🌱 New values (736)</summary>

- New output `build/static-pages/theme-and-motif.json` (736 tokens): flat JSON of the resolved theme and motif colors for Storybook, covering `.theme-light`/`.theme-dark` (73 each) and the five motifs in light and dark (59 each), for example `ds-motif-blossom-light-surface-canvas`: `#FBF7FF`

</details>

<details>
<summary>♻️ Updated values (61)</summary>

- 61 component variables moved from a class selector to an SCSS mixin, with names and values unchanged
  - `button.scss` (42): `.button` > `@mixin button`, e.g. `--ds-button-xxs-border-radius`: `999px`
  - `icon-button.scss` (13): `.icon-button` > `@mixin iconButton`
  - `tabs.scss` (6): `.tabs` > `@mixin tabs`

</details>

<details>
<summary>🛠️ Dev updates</summary>

- `src/formats/sp-component-scss.js`: wraps component tokens in `@mixin <componentNameCamel>` instead of `.<component-name>`
- `static-pages-dictionary.config.js`: adds the `static-pages/theme-and-motif.json` output (`json/flat`, filtered to `theme-colors` and `motif-colors` sources)

</details>

## ✨ [0.16.0](https://github.com/duckduckgo/design-tokens/releases/tag/v0.16.0) - 2026.03.02

`build/static-pages/colors.scss` now contains only the system colors. The motif alpha variants that only the themes and motifs use are no longer output there ([#16](https://github.com/duckduckgo/design-tokens/pull/16)).

### Token Updates

#### Static Pages

<details>
<summary>✂️ Removed values (241)</summary>

- 241 motif alpha colors removed from `colors.scss`: blossom (47), lilypad (47), mandarin (45), pollen (56), pondwater (46)
  - `--ds-color-blossom-0-at-3` (was `rgba(251, 247, 255, 0.03)`)
  - `--ds-color-mandarin-0-at-36` (was `rgba(255, 240, 249, 0.36)`)
  - `--ds-color-pondwater-0-at-24` (was `rgba(245, 251, 254, 0.24)`)

</details>

<details>
<summary>🛠️ Dev updates</summary>

- Moved the theme- and motif-only colors from `src/properties/web/base/colors.ts` to a new `src/properties/web/theme/colors.ts`
- `static-pages-dictionary.config.js`: the `colors.scss` output excludes tokens from `theme/colors`

</details>

## ✨ [0.15.0](https://github.com/duckduckgo/design-tokens/releases/tag/v0.15.0) - 2026.02.28

Eggshell 100 is now `#181817`, which also changes the dark surface canvas and primary colors. Static-pages component files now output resolved values instead of `var()` references ([#15](https://github.com/duckduckgo/design-tokens/pull/15)).

### Token Updates

#### Static Pages

<details>
<summary>♻️ Updated values (53)</summary>

- 48 component values in `button.scss` (42) and `icon-button.scss` (6) changed from `var()` references to resolved values, because component outputs no longer use references
  - `--ds-button-xxs-padding-x`: `var(--ds-space-x02)` > `8px`
  - `--ds-button-md-font-size`: `var(--ds-typography-button-label-02-size)` > `16px`
  - `--ds-icon-button-border-radius`: `var(--ds-radius-full)` > `999px`
- `--ds-color-eggshell-100`: `#171716` > `#181817`
- `--ds-surface-canvas` (.theme-dark): `#171716` > `#181817`
- `--ds-surface-primary` (.theme-dark): `#171716` > `#181817`
- `--ds-theme-dark-surface-canvas`: `#171716` > `#181817`
- `--ds-theme-dark-surface-primary`: `#171716` > `#181817`

</details>

<details>
<summary>✂️ Removed values (1)</summary>

- `--ds-button-primary-rest-background-color` (was `var(--ds-control-primary-background-color)`)

</details>

<details>
<summary>🛠️ Dev updates</summary>

- `src/formats/sp-component-scss.js`: always sets `outputReferences: false`

</details>

## ✨ [0.14.0](https://github.com/duckduckgo/design-tokens/releases/tag/v0.14.0) - 2026.02.27

Static pages get four new SCSS outputs for base colors, spacing, typography and z-indexes. `theme-colors.scss` now outputs resolved values instead of `var()` references to the full theme variables. The light icon primary color is darker and the pollen light motif accents are lighter. The onboarding build is now part of the desktop-browsers build ([#14](https://github.com/duckduckgo/design-tokens/pull/14)).

### Token Updates

#### Static Pages

<details>
<summary>🌱 New values (543)</summary>

- New output `build/static-pages/colors.scss` (377 tokens): base color values
- New output `build/static-pages/spacing.scss` (62 tokens): space and radius values
- New output `build/static-pages/typography.scss` (97 tokens): font setup and typography values
- New output `build/static-pages/zindexes.scss` (7 tokens): z-index values

</details>

<details>
<summary>♻️ Updated values (741)</summary>

- 736 short theme variables in `theme-colors.scss` changed from `var()` references to resolved values, in `.theme-light`/`.theme-dark` (73 each) and each motif in light and dark (59 each)
  - `--ds-surface-canvas` (.theme-light): `var(--ds-theme-light-surface-canvas)` > `#FBFAF9`
  - `--ds-text-primary` (.theme-dark): `var(--ds-theme-dark-text-primary)` > `#ffffff`
  - `--ds-accent-primary` (.theme-light .motif-blossom): `var(--ds-motif-blossom-light-accent-primary)` > `#521A61`
- `--ds-color-green40` > `--ds-color-green-40` (renamed)
- `--ds-theme-light-icons-primary`: `rgba(0, 0, 0, 0.84)` > `rgba(0, 0, 0, 0.96)`
- `--ds-motif-pollen-light-accent-primary`: `#FFC95C` > `#FFEAB8`
- `--ds-motif-pollen-light-accent-secondary`: `#FAB341` > `#FFD885`
- `--ds-motif-pollen-light-accent-tertiary`: `#F5A031` > `#FFC95C`

</details>

<details>
<summary>🛠️ Dev updates</summary>

- New format `src/formats/sp-base-tokens.js`
- Renamed formats `component-scss.js` > `sp-component-scss.js`, `breakpoints-scss.js` > `sp-breakpoints-scss.js`, `themed-json.js` > `serp-themed-json.js` and `onboarding-theme-classes.js` > `css-onboarding-theme-classes.js`
- `src/formats/sp-theme-colors-classes.js`: writes the resolved value for short theme and motif variables instead of a `var()` reference
- Removed `onboarding-dictionary.config.js`, and dropped it from the `build:dictionary`, `lint` and `lint:fix` scripts
- `desktop-browsers-dictionary.config.js`: builds `desktop-browsers/onboarding.css`, and filters the base color and onboarding tokens out of `tokens.css`
- `static-pages-dictionary.config.js`: adds the `colors.scss`, `spacing.scss`, `typography.scss` and `zindexes.scss` outputs, and stops using references in `theme-colors.scss`
- `serp-style-dictionary.config.js`: uses the renamed `serp-themed-json.js` format

</details>

## ✨ [0.13.0](https://github.com/duckduckgo/design-tokens/releases/tag/v0.13.0) - 2026.02.25

The desktop onboarding theme gains the color tokens it was missing: decoration surfaces, secondary text, accent buttons and control backgrounds, for both light and dark ([#13](https://github.com/duckduckgo/design-tokens/pull/13)).

### Token Updates

#### Static Pages

<details>
<summary>🌱 New values (1)</summary>

- `--ds-color-eggshell-90-at-60`: `rgba(36, 35, 35, 0.60)`

</details>

#### Desktop Browsers

<details>
<summary>🌱 New values (16)</summary>

- `--ds-surface-decoration-primary` (.theme-light): `rgba(0, 0, 0, 0.09)`
- `--ds-surface-decoration-primary` (.theme-dark): `rgba(255, 255, 255, 0.06)`
- `--ds-surface-decoration-secondary` (.theme-light): `rgba(0, 0, 0, 0.16)`
- `--ds-surface-decoration-secondary` (.theme-dark): `rgba(255, 255, 255, 0.09)`
- `--ds-text-secondary` (.theme-light): `rgba(36, 35, 35, 0.6)`
- `--ds-text-secondary` (.theme-dark): `#d1cecb`
- `--ds-accent-button-primary` (.theme-light): `#f05f2b`
- `--ds-accent-button-primary` (.theme-dark): `#ffd885`
- `--ds-accent-button-secondary` (.theme-light): `#cc3b0a`
- `--ds-accent-button-secondary` (.theme-dark): `#ffc95c`
- `--ds-accent-button-primary-content-color` (.theme-light): `#ffffff`
- `--ds-accent-button-primary-content-color` (.theme-dark): `#240f04`
- `--ds-control-primary-background-color` (.theme-light): `rgba(0, 0, 0, 0.06)`
- `--ds-control-primary-background-color` (.theme-dark): `rgba(255, 255, 255, 0.12)`
- `--ds-control-secondary-background-color` (.theme-light): `rgba(0, 0, 0, 0.09)`
- `--ds-control-secondary-background-color` (.theme-dark): `rgba(255, 255, 255, 0.18)`

</details>

<details>
<summary>♻️ Updated values (1)</summary>

- `--ds-accent-primary-content-color` (.theme-dark): `#282828` > `#242323`

</details>

## ✨ [0.12.0](https://github.com/duckduckgo/design-tokens/releases/tag/v0.12.0) - 2026.02.24

Adds a standalone onboarding color theme for desktop browsers, `build/desktop-browsers/onboarding.css`, with light and dark classes ([#12](https://github.com/duckduckgo/design-tokens/pull/12)). Three static-pages `gray0` alpha colors are renamed to `gray-0`, so update any references to them.

### Token Updates

#### Static Pages

<details>
<summary>🌱 New values (5)</summary>

- `--ds-color-black-at-20`: `rgba(0, 0, 0, 0.20)`
- `--ds-color-eggshell-90-at-96`: `rgba(36, 35, 35, 0.96)`
- `--ds-color-pondwater-30-at-8`: `rgba(161, 208, 247, 0.08)`
- `--ds-color-pondwater-30-at-12`: `rgba(161, 208, 247, 0.12)`
- `--ds-color-pondwater-30-at-16`: `rgba(161, 208, 247, 0.16)`

</details>

<details>
<summary>♻️ Updated values (3)</summary>

- `--ds-color-gray0-at-24` > `--ds-color-gray-0-at-24` (renamed)
- `--ds-color-gray0-at-32` > `--ds-color-gray-0-at-32` (renamed)
- `--ds-color-gray0-at-60` > `--ds-color-gray-0-at-60` (renamed)

</details>

#### Desktop Browsers

<details>
<summary>🌱 New values (28)</summary>

- New output `build/desktop-browsers/onboarding.css` (28 tokens): onboarding surface, text, accent, control and shadow colors under `.theme-light` and `.theme-dark`

</details>

<details>
<summary>🛠️ Dev updates</summary>

- New config `onboarding-dictionary.config.js`: builds `desktop-browsers/onboarding.css` from the base colors and the new onboarding properties
- New format `src/formats/onboarding-theme-classes.js`
- New source properties `src/properties/web/desktop-browsers/onboarding.ts`
- `package.json`: `build:dictionary`, `lint` and `lint:fix` now include the onboarding config

</details>

## ✨ [0.11.0](https://github.com/duckduckgo/design-tokens/releases/tag/v0.11.0) - 2026.02.17

Fixes the dark-mode tertiary surface for the Lilypad, Pollen and Pondwater motifs, and tunes the default dark canvas and tertiary surface ([#11](https://github.com/duckduckgo/design-tokens/pull/11)).

### Token Updates

#### Static Pages

<details>
<summary>♻️ Updated values (5)</summary>

- `--ds-motif-lilypad-dark-surface-tertiary`: `#0A4739` > `#AED5C2`
- `--ds-motif-pollen-dark-surface-tertiary`: `#783B13` > `#FFD885`
- `--ds-motif-pondwater-dark-surface-tertiary`: `#034180` > `#A1D0F7`
- `--ds-theme-dark-surface-canvas`: `#181818` > `#171716`
- `--ds-theme-dark-surface-tertiary`: `#383838` > `#30302F`

</details>

## ✨ [0.10.0](https://github.com/duckduckgo/design-tokens/releases/tag/v0.10.0) - 2026.02.17

Static-pages tone tokens are split into primary and secondary levels: `--ds-tone-brighten` and `--ds-tone-darken` become `-primary`, and a new `--ds-tone-brighten-secondary` is added for every theme and motif ([#10](https://github.com/duckduckgo/design-tokens/pull/10)). Also adds four large space values, retunes `red-40` and drops the unused `pondwater-ui` palette ([#9](https://github.com/duckduckgo/design-tokens/pull/9)).

### Token Updates

#### Static Pages

<details>
<summary>🌱 New values (34)</summary>

- `--ds-tone-brighten-secondary` in `theme-colors.scss` for all 12 theme and motif scopes, e.g. (.theme-light): `var(--ds-theme-light-tone-brighten-secondary)`
- 12 raw `*-tone-brighten-secondary` values in `tokens.json`/`tokens.scss`, e.g. `--ds-theme-light-tone-brighten-secondary`: `rgba(252, 252, 252, 0.60)`, `--ds-motif-pollen-light-tone-brighten-secondary`: `rgba(255, 251, 240, 0.84)`, `--ds-theme-dark-tone-brighten-secondary`: `rgba(255, 255, 255, 0.12)`
- `--ds-color-gray0-at-60`: `rgba(252, 252, 252, 0.60)`
- `--ds-color-blossom-0-at-84`: `rgba(251, 247, 255, 0.84)`
- `--ds-color-lilypad-0-at-84`: `rgba(248, 252, 249, 0.84)`
- `--ds-color-mandarin-0-at-84`: `rgba(255, 240, 249, 0.84)`
- `--ds-color-pollen-0-at-84`: `rgba(255, 251, 240, 0.84)`
- `--ds-color-pondwater-0-at-84`: `rgba(245, 251, 254, 0.84)`
- `--ds-space-x15`: `60px`
- `--ds-space-x22`: `88px`
- `--ds-space-x60`: `240px`
- `--ds-space-x90`: `360px`

</details>

<details>
<summary>♻️ Updated values (49)</summary>

- 48 tone tokens renamed with a `-primary` suffix, with values unchanged
  - `theme-colors.scss` (24, every theme and motif scope): `--ds-tone-brighten` > `--ds-tone-brighten-primary` (renamed), `--ds-tone-darken` > `--ds-tone-darken-primary` (renamed)
  - `tokens.json`/`tokens.scss` (24): `--ds-theme-light-tone-brighten` > `--ds-theme-light-tone-brighten-primary` (renamed), `--ds-motif-pollen-dark-tone-darken` > `--ds-motif-pollen-dark-tone-darken-primary` (renamed)
- `--ds-color-red-40`: `#F68E8F` > `#F06565`

</details>

<details>
<summary>✂️ Removed values (11)</summary>

- The `pondwater-ui` palette (11), `--ds-color-pondwater-ui-0` to `--ds-color-pondwater-ui-100`, e.g. `--ds-color-pondwater-ui-0` (was `#F4FAFE`), `--ds-color-pondwater-ui-60` (was `#0075DB`), `--ds-color-pondwater-ui-100` (was `#001838`)

</details>

## ✨ [0.9.0](https://github.com/duckduckgo/design-tokens/releases/tag/v0.9.0) - 2026.02.03

Static-pages z-index tokens are now unitless numbers, so they work in `z-index` declarations. Also adds a new `label-01` typography style ([#8](https://github.com/duckduckgo/design-tokens/pull/8)).

### Token Updates

#### Static Pages

<details>
<summary>🌱 New values (6)</summary>

- `--ds-typography-label-01-font-family`: `'DuckSansProduct', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif`
- `--ds-typography-label-01-letter-spacing`: `0`
- `--ds-typography-label-01-line-height`: `12px`
- `--ds-typography-label-01-size`: `12px`
- `--ds-typography-label-01-weight`: `700`
- `--ds-typography-label-01-text-transform`: `uppercase`

</details>

<details>
<summary>♻️ Updated values (6)</summary>

- `--ds-z-index-default`: `1rem` > `1`
- `--ds-z-index-popover`: `100rem` > `100`
- `--ds-z-index-side-menu`: `200rem` > `200`
- `--ds-z-index-modal-backdrop`: `300rem` > `300`
- `--ds-z-index-modal`: `305rem` > `305`
- `--ds-z-index-alert`: `400rem` > `400`

</details>

## ✨ [0.8.0](https://github.com/duckduckgo/design-tokens/releases/tag/v0.8.0) - 2026.01.28

Breakpoints now ship as SCSS variables in `build/static-pages/breakpoints.scss`, because CSS custom properties can't be used in media queries. Pollen light control colors move to `pollen-40` with stronger background opacity ([#7](https://github.com/duckduckgo/design-tokens/pull/7)).

### Token Updates

#### Static Pages

<details>
<summary>🌱 New values (12)</summary>

- New output `build/static-pages/breakpoints.scss` (5 tokens): `$ds-breakpoint-*` SCSS variables for use in media queries
- `--ds-color-pollen-40-at-28`: `rgba(255, 201, 92, 0.28)`
- `--ds-color-pollen-40-at-30`: `rgba(255, 201, 92, 0.30)`
- `--ds-color-pollen-40-at-40`: `rgba(255, 201, 92, 0.40)`
- `--ds-color-pollen-40-at-48`: `rgba(255, 201, 92, 0.48)`
- `--ds-color-pollen-40-at-56`: `rgba(255, 201, 92, 0.56)`
- `--ds-color-pollen-40-at-60`: `rgba(255, 201, 92, 0.60)`
- `--ds-color-pollen-40-at-72`: `rgba(255, 201, 92, 0.72)`

</details>

<details>
<summary>♻️ Updated values (7)</summary>

- `--ds-motif-pollen-light-control-primary-background-color`: `rgba(255, 216, 133, 0.09)` > `rgba(255, 201, 92, 0.28)`
- `--ds-motif-pollen-light-control-secondary-background-color`: `rgba(255, 216, 133, 0.12)` > `rgba(255, 201, 92, 0.40)`
- `--ds-motif-pollen-light-control-tertiary-background-color`: `rgba(255, 216, 133, 0.18)` > `rgba(255, 201, 92, 0.56)`
- `--ds-motif-pollen-light-control-primary-border-color`: `rgba(255, 216, 133, 0.30)` > `rgba(255, 201, 92, 0.30)`
- `--ds-motif-pollen-light-control-secondary-border-color`: `rgba(255, 216, 133, 0.48)` > `rgba(255, 201, 92, 0.48)`
- `--ds-motif-pollen-light-control-tertiary-border-color`: `rgba(255, 216, 133, 0.60)` > `rgba(255, 201, 92, 0.60)`
- `--ds-motif-pollen-light-control-quaternary-border-color`: `rgba(255, 216, 133, 0.72)` > `rgba(255, 201, 92, 0.72)`

</details>

<details>
<summary>🛠️ Dev updates</summary>

- New format `src/formats/breakpoints-scss.js`
- `static-pages-dictionary.config.js`: registers the breakpoints format and builds `static-pages/breakpoints.scss`

</details>

## ✨ [0.7.0](https://github.com/duckduckgo/design-tokens/releases/tag/v0.7.0) - 2026.01.27

Adds icon button tokens and an early set of tab tokens for static pages, each with its own component SCSS file ([#6](https://github.com/duckduckgo/design-tokens/pull/6)).

### Token Updates

#### Static Pages

<details>
<summary>🌱 New values (25)</summary>

- New output `build/static-pages/icon-button.scss` (13 tokens): `.icon-button` padding, icon size and border radius per size, `xxs` to `xl`
- New output `build/static-pages/tabs.scss` (6 tokens): `.tabs` selected and unselected background, border and text colors
- The same icon-button and tabs tokens are added to `tokens.json`/`tokens.scss`, with resolved values, e.g. `--ds-icon-button-md-padding`: `12px`, `--ds-icon-button-xl-icon-size`: `24px`, `--ds-icon-button-border-radius`: `999px`

</details>

<details>
<summary>🛠️ Dev updates</summary>

- New source properties `src/properties/web/static-pages/components/icon-button.ts` and `tabs.ts`
- `src/formats/component-scss.js`: matches kebab-case component file names (`icon-button`) to camelCase token paths (`iconButton`)

</details>

## ✨ [0.6.0](https://github.com/duckduckgo/design-tokens/releases/tag/v0.6.0) - 2026.01.22

Retunes the Pollen, Pondwater and Eggshell palettes, and the theme and motif colors that use them. Secondary text opacity rises from 60% to 66% across all themes and motifs ([#5](https://github.com/duckduckgo/design-tokens/pull/5)).

### Token Updates

#### Static Pages

<details>
<summary>🌱 New values (28)</summary>

- A `pondwater-ui` palette (11), `--ds-color-pondwater-ui-0` to `--ds-color-pondwater-ui-100`, e.g. `--ds-color-pondwater-ui-0`: `#F4FAFE`, `--ds-color-pondwater-ui-60`: `#0075DB`, `--ds-color-pondwater-ui-100`: `#001838`
- 17 new alpha colors, mostly `-at-66` for black, white and the motif `0`/`100` shades, e.g. `--ds-color-black-at-66`: `rgba(0, 0, 0, 0.66)`, `--ds-color-pollen-80-at-48`: `rgba(120, 59, 19, 0.48)`, `--ds-color-pondwater-100-at-96`: `rgba(1, 20, 45, 0.96)`

</details>

<details>
<summary>♻️ Updated values (312)</summary>

- 27 base palette colors retuned
  - Eggshell (8): `--ds-color-eggshell-50`: `#888888` > `#8A8886`, `--ds-color-eggshell-90`: `#282828` > `#242323`, `--ds-color-eggshell-100`: `#181818` > `#171716`
  - Pollen (11): `--ds-color-pollen-30`: `#FEDA7B` > `#FFD885`, `--ds-color-pollen-40`: `#FFC542` > `#FFC95C`, `--ds-color-pollen-100`: `#1A0B03` > `#240F04`
  - Pondwater (8): `--ds-color-pondwater-50`: `#4393E5` > `#4397E0`, `--ds-color-pondwater-80`: `#0D3C73` > `#034180`, `--ds-color-pondwater-100`: `#09192D` > `#01142D`
- 66 alpha variants of those palettes follow the new base colors, e.g. `--ds-color-pollen-40-at-12` and `--ds-color-pondwater-100-at-72`
- 219 theme and motif colors follow the palette changes
  - Theme light/dark (39): `--ds-theme-light-accent-secondary`: `#05579E` > `#045EB2`, `--ds-theme-dark-surface-primary`: `#181818` > `#171716`
  - Pollen motif (100): `--ds-motif-pollen-light-surface-primary`: `#FFF1B5` > `#FFEAB8`, `--ds-motif-pollen-dark-surface-secondary`: `#331705` > `#47210A`
  - Pondwater motif (62): `--ds-motif-pondwater-dark-surface-canvas`: `#09192D` > `#01142D`, `--ds-motif-pondwater-light-text-primary`: `rgba(0, 0, 0, 0.96)` > `rgba(1, 20, 45, 0.96)`
  - Mandarin motif (14): dark accents move to the new Pollen values, e.g. `--ds-motif-mandarin-dark-accent-primary`: `#FEDA7B` > `#FFD885`
  - Blossom and Lilypad motifs (4): secondary text only
- Secondary text opacity `0.60` > `0.66` in all 12 themes and motifs (included in the counts above), e.g. `--ds-theme-light-text-secondary`: `rgba(0, 0, 0, 0.60)` > `rgba(0, 0, 0, 0.66)`

</details>

## ✨ [0.5.0](https://github.com/duckduckgo/design-tokens/releases/tag/v0.5.0) - 2026.01.21

Static pages move to the rebrand: new color palettes, light and dark themes with five color motifs, DuckSans typography styles, and button tokens. Two new outputs, `theme-colors.scss` and `button.scss`, provide theme classes and component variables. The old SERP-derived palette, semantic colors and font tokens are removed from static pages, and spacing and radius are now px instead of rem calc expressions ([#4](https://github.com/duckduckgo/design-tokens/pull/4)).

### Token Updates

#### Static Pages

<details>
<summary>🌱 New values (1996)</summary>

- New output `build/static-pages/theme-colors.scss` (724 tokens): semantic color variables (surface, container, text, icons, accent, control, tone, shadow, destructive, status) under `.theme-light` and `.theme-dark`, each with `.motif-blossom`, `.motif-lilypad`, `.motif-mandarin`, `.motif-pollen` and `.motif-pondwater` variants
- New output `build/static-pages/button.scss` (43 tokens): `.button` border radius and padding per size, `xxs` to `xl`, plus `--ds-button-primary-rest-background-color`
- 1230 new tokens in `tokens.json`/`tokens.scss`
  - Color palettes (341): black, white, gray, eggshell, blossom, lilypad, mandarin, pollen, pondwater, red and green, with alpha variants, e.g. `--ds-color-pollen-40`: `#FFC542`, `--ds-color-black-at-6`: `rgba(0, 0, 0, 0.06)`, `--ds-color-green40`: `#39B25E`
  - Theme and motif colors (724): `--ds-theme-{light,dark}-*` (144) and `--ds-motif-{name}-{light,dark}-*` (580), e.g. `--ds-theme-dark-surface-backdrop`: `#111111`, `--ds-motif-pollen-light-surface-canvas`: `#FFFDF0`
  - Typography (82): title, body, eyebrow and button styles, e.g. `--ds-typography-title-01-line-height`: `64px`, `--ds-typography-eyebrow-01-letter-spacing`: `2px`
  - Fonts (6): `--ds-font-family-display`, `--ds-font-family-product`, `--ds-font-weight-semibold` and letter-spacing values
  - Button (43): the `button.scss` tokens with resolved values, e.g. `--ds-button-md-padding-x`: `24px`
  - Space (18), e.g. `--ds-space-x1-5`: `6px`, `--ds-space-x100`: `400px`, `--ds-space-x256`: `1024px`
  - Z-index (7), e.g. `--ds-z-index-hidden`: `-999`, `--ds-z-index-popover`: `100rem`
  - Breakpoints (5), e.g. `--ds-breakpoint-sm`: `640px`, `--ds-breakpoint-md`: `1024px`
  - Radius (4): `--ds-radius-x09` to `--ds-radius-x12`, e.g. `--ds-radius-x12`: `48px`

</details>

<details>
<summary>♻️ Updated values (36)</summary>

- 36 space and radius values changed from rem calc expressions to px, because the `--sds-base-px-in-rem` base is removed
  - `--ds-radius-full`: `calc(999 * var(--sds-base-px-in-rem))` > `999px`
  - `--ds-radius-x02`: `calc(8 * var(--sds-base-px-in-rem))` > `8px`
  - `--ds-space-x64`: `calc(256 * var(--sds-base-px-in-rem))` > `256px`

</details>

<details>
<summary>✂️ Removed values (220)</summary>

- 200 SERP-era colors: `--ds-color-palette-*` (133), `--ds-color-background-*` (38), `--ds-color-text-*` (20) and `--ds-color-border-*` (9), e.g. `--ds-color-palette-blue-50` (was `#3969ef`), `--ds-color-palette-blue-hyperlink` (was `#1a0dab`), `--ds-color-background-accent-02` (was `rgba(0, 0, 0, 0.9)`)
- 16 font tokens: `--ds-font-family-01`, `--ds-font-weight-medium`, and the `--ds-font-size-*` (7) and `--ds-font-line-height-*` (7) sets, e.g. `--ds-font-size-title-01` (was `calc(24 / 14 * 1rem)`), `--ds-font-line-height-body` (was `calc(18 / 14)`)
- `--ds-base-font-size-value` (was `(0.9 * 16)`)
- `--ds-base-font-size-in-px` (was `1px * var(--sds-base-font-size-value)`)
- `--ds-base-px-in-rem` (was `(1rem / var(--sds-base-font-size-value))`)
- `--ds-space-x96` (was `calc(384 * var(--sds-base-px-in-rem))`)

</details>

<details>
<summary>🛠️ Dev updates</summary>

- New `clean` script (`rm -rf dist && rm -rf build`), which `build` now runs first
- New formats `src/formats/component-scss.js` and `src/formats/sp-theme-colors-classes.js`
- Moved `src/properties/web/base/sds-*.ts` (colors, semantic, spacing, typography) > `src/properties/web/serp/`
- New source properties: `src/properties/web/base/` (`colors`, `font`, `radius`, `typography`, `zindex`), `src/properties/web/theme/` (`theme-colors`, `motif-colors`) and `src/properties/web/static-pages/` (`breakpoints`, `spacing`, `components/button`)
- `static-pages-dictionary.config.js`: adds the theme and static-pages component sources, builds `theme-colors.scss`, and generates one SCSS file per component in `static-pages/components/`
- `serp-style-dictionary.config.js` and `desktop-browsers-dictionary.config.js`: read the SDS sources from their new `serp/` path

</details>

## ✨ [0.4.0](https://github.com/duckduckgo/design-tokens/releases/tag/v0.4.0) - 2026.01.13

Desktop browser theme variables in `build/desktop-browsers/tokens.css` are now declared on `:root, :host`, so they also apply inside shadow DOM. Token names and values are unchanged ([#3](https://github.com/duckduckgo/design-tokens/pull/3)).

<details>
<summary>🛠️ Dev updates</summary>

- New format `src/formats/css-variables-shadow-dom.js`: outputs CSS variables under both `:root` and `:host`
- `desktop-browsers-dictionary.config.js`: registers the shadow DOM format and uses it for `desktop-browsers/tokens.css` in place of the built-in `css/variables`

</details>

## ✨ [0.3.0](https://github.com/duckduckgo/design-tokens/releases/tag/v0.3.0) - 2026.01.06

Desktop browser theme colors now come from the `theme-variables-i07` Figma export. Every named theme now has the full role set that the default theme already had (accent-alt, destructive, raised control, shadow and tone tokens), and many surface, decoration and text colors have been retuned. The default theme's single `destructive-glow` is split into primary and secondary values.

### Token Updates

#### Desktop Browsers

<details>
<summary>🌱 New values (410)</summary>

- 406 role tokens added to the seven named themes (cool-gray, desert, green, orange, rose, slate-blue, violet), 29 per mode, bringing them in line with the default theme
  - Groups: `accent-alt-*` (11, including `accent-alt-glow-primary`/`-secondary`), `destructive-*` (11, including `destructive-glow-primary`/`-secondary`), `control-raised-backdrop`, `control-raised-fill-primary`, `shadow-primary`/`-secondary`/`-tertiary`, `tone-tint-primary`, `tone-shade-primary`
  - Examples: `--ds-color-theme-cool-gray-dark-accent-alt-content-primary`: `#eeeff7`, `--ds-color-theme-cool-gray-dark-accent-alt-content-secondary`: `rgba(238, 239, 247, 0.7)`
- `--ds-color-theme-default-light-destructive-glow-primary`: `rgba(238, 16, 37, 0.2)`
- `--ds-color-theme-default-light-destructive-glow-secondary`: `rgba(238, 16, 37, 0.2)`
- `--ds-color-theme-default-dark-destructive-glow-primary`: `rgba(255, 84, 90, 0.2)`
- `--ds-color-theme-default-dark-destructive-glow-secondary`: `rgba(255, 84, 90, 0.12)`

</details>

<details>
<summary>♻️ Updated values (112)</summary>

- 76 opacity adjustments to translucent colors from the new Figma export
  - Surface decoration (34): `--ds-color-theme-cool-gray-light-surface-decoration-primary`: `rgba(42, 65, 111, 0.24)` > `rgba(42, 65, 111, 0.09)`, `--ds-color-theme-cool-gray-dark-surface-decoration-secondary`: `rgba(221, 224, 238, 0.32)` > `rgba(221, 224, 238, 0.24)`
  - Container border and fill (18): `--ds-color-theme-orange-light-container-fill-primary`: `rgba(26, 9, 0, 0.01)` > `rgba(41, 14, 0, 0.02)`
  - Text (11): `--ds-color-theme-cool-gray-light-text-secondary`: `rgba(5, 6, 20, 0.66)` > `rgba(5, 6, 20, 0.6)`
  - Control border and fill (8), tone tint and shade (4), `accent-glow-secondary` (1)
- 36 color changes across themes, mostly surface tones
  - default (14): dark accents shift one step lighter (`--ds-color-theme-default-dark-accent-primary`: `#7295f6` > `#8fabf9`), dark destructive brightens (`--ds-color-theme-default-dark-destructive-primary`: `#ee1025` > `#ff5359`), light accent-alt content now uses alpha (`--ds-color-theme-default-light-accent-alt-content-secondary`: `#0b2059` > `rgba(11, 32, 89, 0.7)`)
  - slate-blue (5), orange (5), desert (3), rose (3), violet (3), cool-gray (2), green (1): `--ds-color-theme-slate-blue-dark-surface-canvas`: `#243a50` > `#1e3042`, `--ds-color-theme-orange-light-accent-quaternary`: `#cc4400` > `#ef5300`, `--ds-color-theme-violet-light-surface-tertiary`: `#efeffa` > `#f6f6fc`

</details>

<details>
<summary>✂️ Removed values (2)</summary>

- `--ds-color-theme-default-light-destructive-glow` (was `rgba(238, 16, 37, 0.2)`), replaced by `-primary`/`-secondary`
- `--ds-color-theme-default-dark-destructive-glow` (was `rgba(238, 16, 37, 0.2)`), replaced by `-primary`/`-secondary`

</details>

<details>
<summary>🛠️ Dev updates</summary>

- `scripts/convert-figma-theme-export-to-tokens.ts`: reads the new export layout, where each theme is a flat map with mode-prefixed variable names (`DarkAccentPrimary`) instead of separate `Light`/`Dark` objects
- `src/properties/web/desktop-browsers/theme.ts` regenerated from the new export

</details>

## ✨ [0.2.0](https://github.com/duckduckgo/design-tokens/releases/tag/v0.2.0) - 2025.12.09

Desktop browser theme colors are renamed from `--ds-color-*` to `--ds-color-theme-*`, so they can't be confused with palette colors. Values are unchanged. The repo also gains a LICENSE.

### Token Updates

#### Desktop Browsers

<details>
<summary>♻️ Updated values (696)</summary>

- 696 theme colors renamed from `--ds-color-<theme>-…` to `--ds-color-theme-<theme>-…`, values unchanged. Palette tokens (`--ds-color-palette-*`) keep their names
  - `--ds-color-default-light-surface-primary` > `--ds-color-theme-default-light-surface-primary` (renamed)
  - `--ds-color-default-light-surface-backdrop` > `--ds-color-theme-default-light-surface-backdrop` (renamed)
  - `--ds-color-default-light-surface-secondary` > `--ds-color-theme-default-light-surface-secondary` (renamed)

</details>

<details>
<summary>🛠️ Dev updates</summary>

- `scripts/convert-figma-theme-export-to-tokens.ts`: nests generated tokens under `color-theme` instead of `color`
- `src/properties/web/desktop-browsers/theme.ts` regenerated with the new prefix
- Added `LICENSE.md` and removed the old `CHANGELOG.md`

</details>

## ✨ [0.1.0](https://github.com/duckduckgo/design-tokens/releases/tag/v0.1.0) - 2025.12.01

First release built by the new release workflow, so compiled `build/` outputs ship with the tag from here on. Desktop browsers get their first output: CSS variables for the color palette plus light and dark colors for eight themes, generated from a Figma theme export.

### Token Updates

#### SERP

<details>
<summary>🌱 New values (777)</summary>

- New output `build/serp/tokens.json` (259 tokens)
- New output `build/serp/tokens.scss` (259 tokens)
- New output `build/serp/tokens-themes.json` (518 tokens): light and dark token sets (`dsTokensLight`, `dsTokensDark`)

</details>

#### Static Pages

<details>
<summary>🌱 New values (259)</summary>

- New output `build/static-pages/tokens.json` (259 tokens)
- New output `build/static-pages/tokens.scss` (259 tokens)

</details>

#### Desktop Browsers

<details>
<summary>🌱 New values (829)</summary>

- New output `build/desktop-browsers/tokens.css` (829 tokens): 133 palette colors (`--ds-color-palette-*`) and 696 theme colors for default, cool-gray, desert, green, orange, rose, slate-blue and violet, each in light and dark

</details>

<details>
<summary>🛠️ Dev updates</summary>

- New devDependencies: `@types/node` ^24.10.1, `commander` ^14.0.2, `es-toolkit` ^1.42.0
- New CI workflows: `.github/workflows/release.yml` (builds and tags releases) and `.github/workflows/test.yml` (runs `npm ci` and `npm run build`)
- New script `scripts/convert-figma-theme-export-to-tokens.ts`: converts a Figma theme export into desktop browser theme tokens
- New source properties `src/properties/web/desktop-browsers/theme.ts`
- Renamed config `desktop-browser-dictionary.config.js` > `desktop-browsers-dictionary.config.js`, which now builds from `sds-colors` and the desktop theme only
- `serp-style-dictionary.config.js`, `static-pages-dictionary.config.js`: read from `dist/src/` after `tsconfig.json` started compiling `scripts/` too
- `package.json` scripts: `build:dictionary` uses the renamed desktop config, and `lint`/`lint:fix` now cover `scripts/` and all three configs

</details>

## ✨ [0.0.0](https://github.com/duckduckgo/design-tokens/releases/tag/v0.0.0) - 2025.11.06

Initial release of the design tokens repo, built with Style Dictionary. It defines SERP base tokens for colors, semantic colors, spacing, radius, z-index and typography (font sizes and component fonts), and builds them to SCSS and JSON for SERP, including a light/dark themed JSON, and for static pages ([#5](https://github.com/duckduckgo/design-tokens/pull/5), [#7](https://github.com/duckduckgo/design-tokens/pull/7), [#10](https://github.com/duckduckgo/design-tokens/pull/10), [#12](https://github.com/duckduckgo/design-tokens/pull/12), [#13](https://github.com/duckduckgo/design-tokens/pull/13)). This tag doesn't include compiled `build/` outputs.

<details>
<summary>🛠️ Dev updates</summary>

- Node 22
- devDependencies: `style-dictionary` ^4.3.0, `typescript` ^5.7.3, `eslint` ^9.20.1, `typescript-eslint` ^8.24.1, `prettier` ^3.5.1, `@duckduckgo/eslint-config`
- New format `src/formats/themed-json.js`
- New configs `serp-style-dictionary.config.js`, `static-pages-dictionary.config.js` and `desktop-browser-dictionary.config.js`
- New source properties `src/properties/web/base/sds-colors.ts`, `sds-semantic.ts`, `sds-spacing.ts`, `sds-typography.ts`
- `package.json` scripts: `build` (lint, `tsc`, then `build:dictionary`), `build:dictionary`, `lint`, `lint:fix`
- Added `.github/CODEOWNERS` and a PR template

</details>
