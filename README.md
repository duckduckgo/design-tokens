# DuckDuckGo Design Tokens

[![version-v0.0.0](https://img.shields.io/badge/version-v0.0.0-8a2be2.svg)](https://dub.duckduckgo.com/duckduckgo/design-tokens)

A repo to generate style variables for all the things. But we're starting with static-pages. Tokens act as our single source of truth. They can be transformed and formatted to meet the needs of any platform (Web, Android, iOS, etc). A single change to a property file can be transformed and compiled for consumption by any platform using our tokens.

[Style Dictionary Docs](https://styledictionary.com/reference/api/)

## Table of Contents

- [DuckDuckGo Design Tokens](#duckduckgo-design-tokens)
  - [Table of Contents](#table-of-contents)
  - [Getting started](#getting-started)
  - [What is a Design Token?](#what-is-a-design-token)
  - [Token Types](#token-types)
    - [Option Tokens](#option-tokens)
    - [Semantic Tokens](#semantic-tokens)
    - [Component Tokens](#component-tokens)
  - [Naming Approach](#naming-approach)
    - [Option \& Semantic Tokens](#option--semantic-tokens)
    - [Component Tokens](#component-tokens-1)
      - [Prefixes](#prefixes)
  - [Creating Tokens](#creating-tokens)
  - [Release Process](#release-process)

## Getting started

Recommended node version: v22

```bash
npm i

npm run build
```

Then check out what is output to `build` folder

## What is a Design Token?

**Top level answer:** A key-value pair representing a design decision in code.

## Token Types

We have 3 types of tokens that have varying levels of specificity. This increased specificity creates a visible path from design decisions to implementation.

### Option Tokens

These are primitive values represented by context-agnostic names. This token type generally consist of global styles like color, typography and spacing, elevation. These tokens are commonly referenced and inherited by the other 3 token types.

### Semantic Tokens

Semantic tokens have a contextual name that communicates their intended purpose. These types of tokens often inherit option tokens.

Examples

- `sds-color-primary`
- `spds-color-disabled-text-color`
- `bds-color-page-background`

### Component Tokens

These are hyper-specific tokens relating to a single component and its various variants and states. They can inherit option or semantic tokens and have a very specific name to ensure correct usage during component development.

## Naming Approach

### Option & Semantic Tokens

`prefix-property-variant` or `prefix-property-variant-modifier`

### Component Tokens

`prefix-component-variant-state-property`

#### Prefixes

These values are set in the configs. Each platform/repo has its own prefix.

- SERP: sds
- Static-pages: spds
- Desktop browsers: bds

## Creating Tokens

<incoming>

### Desktop Browsers

The Desktop Browsers' theme colors (`src/properties/desktop-browsers/theme.ts`) are automatically generated from an export of the Global Colors & Styles theme in Figma.

To re-generate this file, obtain a Figma JSON export (e.g. `theme-variables.json`) and then run:

```
node scripts/convert-figma-theme-export-to-tokens.ts --input theme-variables.json --output src/properties/web/desktop-browsers/theme.ts
```

## Release Process

1. Navigate to https://github.com/duckduckgo/design-tokens/actions/workflows/release.yml
2. Click _Run workflow_ and type in the version number to release. For example, `1.0.0`
