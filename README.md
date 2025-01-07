# Design Tokens

Design tokens are the codification of Design's decisions. Design assets for multiple platforms

## Getting Started

```bash
npx style-dictionary build
```

or

```bash
npm run build
```

Then take a look in the `build/` directory for your desired outputs. If you're running into errors with the build function, add the `--verbose` flag to get more info.

## Token Understanding

> A key-value pair representing a design decision in code.

Most folks think of colors and typography, but design tokens can cover more than global concerns. There are multiple kinds of tokens in this library:

- **Base Tokens**: Primitive values, or "atoms". These are the colors, typography, sizing units. Other tokens will reference these. Examples: `--color-blue-50`, `$sp-3`, `--motion-duration-fast`
- **Semantic Tokens**: More core information, but communicated with context. In the case of colors, these will need to have light and dark mode values. Examples: `--color-primary`, `--color-disabled-dark`, `$size-ntp-page-width`, `--text-muted-color`
- **Component Tokens**: Focused values that relate to a single component and its various states and versions. `--button-primary-rest-background-color`, `$button-dismiss-height`, `--alert-global-error-indicator-icon-name`

## Token Conventions

- With the exception of base tokens, color tokens should **always** have a light and a dark value. Even if they're the same today, they may not always be, and it's easier to set up components with this information upfront.
- Implementation choices are are not Design's decision. This includes `position`, `display` info, and while a token value may be called `focus-ring`, the developer decides whether this value is set to a `border` or an `outline`
- Components should almost never come with margin info or anything else that'll impact how it sits on the view, therefore there will be no `margin` component tokens
- Dimension values will be set in `px` in this codebase, there are formatters available to switch this to `rem`, `pt`, `dp`, etc
- Each platform has its own needs, we will start with the platform-specific transform groups and modify as each group communicates its preferences re: `px` vs `rem` or whether a combination resource sheet is preferable to multiple specific ones
  - In the future, we can explore outputting files with media queries for dark mode or even screen sizes

## How the project is set up

```shell
config.js
src
├── configs
│   ├── desktop-browsers.js
│   ├── serp.js
│   └── static-pages.js
└── properties
    ├── android
    ├── base
    │   ├── colors.js
    │   └── spacing.js
    ├── ios
    └── web
        ├── base
        │   └── radius.js
        ├── desktop-browsers
        │   ├── base
        │   │   └── sizes.js
        │   └── components
        │       ├── macos
        │       │   └── button.js
        │       └── windows
        │           └── button.js
        ├── serp
        │   └── typography
        └── static-pages
```
