# DuckDuckGo Design Tokens

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

## Release Process

NOTE: Do these steps _after_ you've commited the last of the changes for your release.

- `npm run lint:js && npm run lint:styles && npm test` Address any errors before proceeding
- Search project for current version number `0.0.x`
- Update `README.md` badge links
- Update `package.json` version
- Update `CHANGELOG.md` with overview of new material in the version (copy previous entry, update date, and Announcement and Changes fields)
- `npm i` to update the `package-lock.json`
- `git add -A`
- `git commit -m "chore: Release v0.0.x"`
- `git tag -a v0.0.x -m "Release v0.0.x"`
- `git push --follow-tags`
