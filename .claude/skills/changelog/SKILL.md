---
name: changelog
description: Write or update CHANGELOG.md entries for this design-tokens repo from its tagged releases. It diffs real token values in the built outputs between tags, then summarises new, updated and removed tokens per platform along with dependency and dev changes. Use when asked to write release notes, a changelog, "what changed in vX", to backfill the changelog for past tags, to draft notes for unreleased changes, or (`update`) to write the next version's entry as the last step before cutting a release.
---

# Changelog

Writes entries in `CHANGELOG.md` at the repo root, newest version first, one entry per release tag.

## How releases work here (why the script looks where it does)

- `.github/workflows/release.yml` commits `Bump version to X` on `main`, then builds that snapshot onto the orphan **`releases`** branch, commits it as `vX` with `build/` force-added, and tags that commit.
- So **every tag contains the compiled `build/` outputs**. Token changes are diffed straight from those files, without rebuilding.
- A release's commits are the `main` commits after the previous `Bump version to …` commit, up to and including this release's bump. The early tags (≤ v0.1.0) have no bump commits, so the script falls back to tag dates.
- `build/<dir>` is the **platform**: `serp`, `static-pages`, `embedded-fe`, `duckai`, `apple-browsers` (and later `android`/`windows` under native apps).

## Step 1: Decide which versions to write

- No argument: the latest tag. If `CHANGELOG.md` already has it, find the newest tags that are missing and write those.
- A version (`v0.44.0` or `0.44.0`): just that one. If it already exists in the file, replace that entry.
- "all" / "backfill": every tag missing from the file. List the tags with `node .claude/skills/changelog/scripts/release-diff.mjs --list`. For many tags, spread the work across subagents (one per few tags, each returning its entry's markdown), then assemble them in order yourself.
- "unreleased": run `npm run build` first, then use `WORKTREE` as the version. This compares the local `build/` and working tree against the latest tag. Write it under `## ✨ Unreleased`.
- "update" (optionally followed by `patch`, `minor`, `major` or an exact `x.y.z`): pre-release mode. See [Pre-release: `update`](#pre-release-update) below.

## Pre-release: `update`

Run this as the last step before cutting a release. It writes the entry for the version that's about to be tagged, so the changelog ships in that release.

1. Work out the version.
    - An exact `x.y.z` argument is used as given.
    - Otherwise run `node .claude/skills/changelog/scripts/release-diff.mjs --next <patch|minor|major>`. The default is `minor`, which is how almost every release here has been bumped.
    - Check that the version is newer than the latest tag (`--list`). If `package.json`'s `version` doesn't match the latest tag, say so, because the release workflow bumps it from there.
2. Check where you are. The release workflow builds from `main`, so the changelog needs to be committed and merged to `main` before the workflow runs.
    - Say which branch you're on (`git branch --show-current`).
    - Say whether there are uncommitted changes (`git status --short`), since `WORKTREE` includes them.
    - If `HEAD` isn't up to date with `origin/main`, warn that the entry may miss or include changes that differ from what gets released.
3. Run `npm run build`, so `build/` matches the source, then collect the data with `node .claude/skills/changelog/scripts/release-diff.mjs WORKTREE`. This compares against the latest tag.
4. Write the entry exactly as in Step 3, with the new version and **today's date** in the heading. The release link won't resolve until the tag exists. If there's a `## ✨ Unreleased` entry, replace it with this one. If an entry for this version already exists (a second run), regenerate it in place.
5. Finish with the version written and these next steps:
    - Commit `CHANGELOG.md` and get it onto `main`. Only commit if asked.
    - Run the **Release** workflow with version `x.y.z`, and use exactly that number. Running it with a different version would leave a mismatched heading.

## Step 2: Collect the data

```bash
node .claude/skills/changelog/scripts/release-diff.mjs <tag>          # vs. the previous tag
node .claude/skills/changelog/scripts/release-diff.mjs <to> <from>    # explicit range
node .claude/skills/changelog/scripts/release-diff.mjs WORKTREE       # unreleased / update
node .claude/skills/changelog/scripts/release-diff.mjs --next minor   # next version after the latest tag
```

The output can be large, so redirect it to a file in the scratchpad and query it with `node -e`/`jq` rather than reading the whole thing. Fields:

| Field                                                                                                                  | Use for                                                                                                           |
| ---------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `date`, `commits.list[]` (`subject`, `pr`)                                                                             | Heading and short summary                                                                                         |
| `packageJson` (`node`, `engines`, `dependencies`, `devDependencies`)                                                   | Dev updates                                                                                                       |
| `buildOutputs.added/removed[]` (`file`, `tokens` count)                                                                | New or removed build outputs                                                                                      |
| `tokens.added/changed/removed[platform][]`                                                                             | Token sections. Each entry has `name`, `value` or `old`/`new`, and `outputs` (the files and scopes it appears in) |
| `onlyInNewOutput` / `onlyInRemovedOutput` flags                                                                        | The token only appears or disappears because a whole file was added or removed                                    |
| `changePatterns[platform][]` (`pattern`, `count`, `examples`)                                                          | Spotting mechanical mass changes                                                                                  |
| `sourceFiles.added/removed/modified` (`formats`, `transforms`, `properties`, `configs`, `scripts`, `tooling`, `other`) | Dev updates                                                                                                       |

For more context on the summary, read the PRs (`gh pr view <n> --repo duckduckgo/design-tokens`) or the commit diffs (`git show <hash> --stat`).

## Step 3: Write the entry

Use this exact structure. GitHub only renders markdown inside `<details>` when there is **a blank line after `</summary>`** and before `</details>`.

```markdown
## ✨ [0.44.0](https://github.com/duckduckgo/design-tokens/releases/tag/v0.44.0) - 2026.09.11

Short summary: one or two sentences on what this release means for consumers, in plain language. Link PRs as ([#46](https://github.com/duckduckgo/design-tokens/pull/46)).

### Token Updates

#### SERP

<details>
<summary>🌱 New values (70)</summary>

- New output `build/serp/font-in-px.js` (70 tokens): px font values for documentation sites
- `--ds-new-token`: `#ffffff`

</details>

<details>
<summary>♻️ Updated values (85)</summary>

- `--ds-font-title-05-size`: `1.66667rem` > `24px`
- `--ds-icon-button-xs-icon-size`: `1.11111rem` > `16px`

</details>

#### Desktop Browsers

<details>
<summary>✂️ Removed values (1)</summary>

- `--ds-old-token` (was `#000000`)

</details>

<details>
<summary>🛠️ Dev updates</summary>

- Node 22 > 24
- `style-dictionary` ^4.3.0 > ^5.5.3
- New format `src/formats/apple-shared-color-palette-swift.js`
- Renamed transform `serp-size-rem.js` > `serp-font-rem.js`
- `serp-style-dictionary.config.js`: registers the font rem transform

</details>
```

Rules:

- **Heading**: `## ✨ ` + the version linked to its GitHub release + `-` + the tag date from `date` with dots instead of dashes (`YYYY.MM.DD`). Use `## ✨ Unreleased` for `WORKTREE`.
- **Short summary**: write it from the commits/PRs plus what the diff shows. Lead with consumer impact ("SERP font sizes now ship in rem").
- **Token Updates**: the `### Token Updates` header goes after the summary. Under it, add one `#### <Platform>` heading per platform that has token changes in this release, in this order: SERP, Static Pages, Embedded FE / Desktop Browsers, Duck.ai, Apple Browsers (any new platform goes last, title-cased). Leave out platforms with no changes. If no platform changed, leave out `### Token Updates` entirely. Use the literal emoji (🌱 ♻️ ✂️ 🛠️), not `:shortcodes:`.
- **Expandable sections**: under each platform heading, add the 🌱 New, ♻️ Updated and ✂️ Removed `<details>` sections in that order, each with that platform's count in its `<summary>` (use the `tokens.added/changed/removed[platform]` lengths, adjusted for renames). Leave out a section the platform has nothing in. Never leave an empty `<details>`. Each list item is `` `token-name`: `old` > `new` ``, with the value in code spans and `>` between old and new values.
- **Platform headings**: the platform is `build/<dir>`. Display names: `serp` = SERP, `static-pages` = Static Pages, `embedded-fe` = Embedded FE, `desktop-browsers` = Desktop Browsers (its name in releases up to v0.44.0; it was briefly `content-scope-scripts` before any release), `duckai` = Duck.ai, `apple-browsers` = Apple Browsers.
- **Scope**: when the same token changes differently across outputs (e.g. `.theme-light` vs `.theme-dark`, a motif, or `colors-light.js` vs `colors-dark.js`), add the scope after the name: `` `--ds-surface-primary` (.theme-dark): … ``. Leave it out when every output agrees.
- **New or removed outputs**: list each one in its section by path with its token count. Don't also list the tokens it carries one by one (`onlyInNewOutput` / `onlyInRemovedOutput`). Skip `.d.ts` files unless one is the only new file.
- **Mechanical mass changes**: when one `changePatterns` entry on a platform covers more than about 15 changes (a px > rem switch, float-precision drift after a tool upgrade, hex casing), write one bullet that names the pattern, the count and its cause, with 2–3 examples nested under it, instead of listing them all. List everything that doesn't fit a pattern individually.
- **Renames**: a removed token and an added token on the same platform with the same value is probably a rename. Show it once under ♻️ as `` `old-name` > `new-name` (renamed) `` rather than in both 🌱 and ✂️.
- **Renamed platforms**: one platform can lose all its outputs while a new one gains the same tokens (e.g. `desktop-browsers` > `embedded-fe`). When that happens, report it as a rename, not as thousands of removals and additions:
    - In the summary, say so plainly, including the new import paths.
    - Under the new platform's heading, add one ♻️ bullet: `Moved from build/desktop-browsers/ (N tokens, values unchanged)`.
    - List only the tokens whose names or values actually differ.
    - Leave out the old platform's heading.
- **Dev updates**: one 🛠️ `<details>` after all the platforms, not split by platform. List these first: Node (`node` / `engines`), dependency and devDependency additions, removals and version changes, and CI workflow changes. Skip the `version` bump itself. Then list new, removed or renamed files under `src/formats/` and `src/transforms/`, new or changed `*-dictionary.config.js` (say what changed in one clause), new build scripts in `scripts/` or `package.json` scripts, and source-property file moves (`src/properties/`). An added path paired with a removed path that has similar contents is a move or rename, so say so. If there are none, omit the section.
- Values are copied exactly as built. Don't round or reformat them.

## Step 4: Put it in the file

- If `CHANGELOG.md` is missing, create it with a `# DuckDuckGo Design Tokens Changelog` title and one line: `Generated from release tags. Each section expands to show token-level changes.`
- Insert entries below the title in descending version order. Keep `## ✨ Unreleased` at the top when present, and drop it once its changes have shipped in a tagged entry.
- Leave existing entries unchanged unless the user asked to regenerate them.
- Show the user the new entry, or for a backfill the list of versions written. Don't commit unless asked.
