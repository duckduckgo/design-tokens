#!/usr/bin/env node
// Collects everything needed to write a changelog entry for one release.
//
// Release tags live on the orphan `releases` branch, where build/ is committed,
// so token values are diffed straight from the built outputs at each tag.
//
// Usage:
//   node release-diff.mjs                 # latest tag vs the tag before it
//   node release-diff.mjs v0.44.0         # v0.44.0 vs the tag before it
//   node release-diff.mjs v0.44.0 v0.42.0 # explicit range (to, from)
//   node release-diff.mjs WORKTREE        # unreleased: local build/ + working tree vs latest tag
//   node release-diff.mjs --list          # list tags, newest first, with dates
//
// Output is JSON on stdout.

import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const WORKTREE = 'WORKTREE';
const repoRoot = execFileSync('git', ['rev-parse', '--show-toplevel'], { encoding: 'utf8' }).trim();

function git(...args) {
    return execFileSync('git', args, { cwd: repoRoot, encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 });
}

function tryGit(...args) {
    try {
        return git(...args);
    } catch {
        return null;
    }
}

function tagsNewestFirst() {
    return git('tag', '--sort=-v:refname').split('\n').filter(Boolean);
}

function tagDate(ref) {
    if (ref === WORKTREE) return new Date().toISOString().slice(0, 10);
    return git('log', '-1', '--format=%ad', '--date=short', ref).trim();
}

// ---------- file access at a ref ----------

function listFiles(ref, prefix = '') {
    if (!ref) return [];
    if (ref === WORKTREE) {
        const out = [];
        const walk = (dir) => {
            if (!existsSync(dir)) return;
            for (const entry of readdirSync(dir)) {
                const full = join(dir, entry);
                if (statSync(full).isDirectory()) walk(full);
                else out.push(relative(repoRoot, full));
            }
        };
        if (prefix === 'build/') {
            walk(join(repoRoot, 'build'));
            return out;
        }
        // Tracked + untracked (non-ignored) files in the working tree.
        return git('ls-files', '--cached', '--others', '--exclude-standard', '--', prefix || '.')
            .split('\n')
            .filter((f) => f && existsSync(join(repoRoot, f)));
    }
    return git('ls-tree', '-r', '--name-only', ref, '--', prefix || '.')
        .split('\n')
        .filter(Boolean);
}

function readFile(ref, path) {
    if (!ref) return null;
    if (ref === WORKTREE) {
        const full = join(repoRoot, path);
        return existsSync(full) ? readFileSync(full, 'utf8') : null;
    }
    return tryGit('show', `${ref}:${path}`);
}

// ---------- token parsing ----------

// Reads a JS/TS-style value that may be quoted and contain the other quote type.
function readValue(raw) {
    let s = raw.trim();
    const q = s[0];
    if (q === "'" || q === '"' || q === '`') {
        const end = s.indexOf(q, 1);
        return end === -1 ? s : s.slice(1, end);
    }
    s = s.replace(/\s*\/\/.*$/, '').replace(/\s*\/\*.*$/, '');
    return s.replace(/[,;]\s*$/, '').trim();
}

function flattenJson(obj, prefix, out) {
    for (const [key, val] of Object.entries(obj)) {
        const name = prefix ? `${prefix}-${key}` : key;
        if (val && typeof val === 'object' && !Array.isArray(val)) {
            // Style Dictionary nested output: prefer `value`/`$value` leaves.
            if ('value' in val || '$value' in val) out.push({ name, value: String(val.value ?? val.$value), scope: '' });
            else flattenJson(val, name, out);
        } else {
            out.push({ name, value: String(val), scope: '' });
        }
    }
}

function parseTokens(path, text) {
    if (text == null || path.endsWith('.d.ts')) return [];
    if (path.endsWith('.json')) {
        const out = [];
        try {
            flattenJson(JSON.parse(text), '', out);
        } catch {
            /* not token JSON */
        }
        return out;
    }

    const out = [];
    const scopes = [];
    let inBlockComment = false;
    for (const line of text.split('\n')) {
        const trimmed = line.trim();
        if (inBlockComment) {
            if (trimmed.includes('*/')) inBlockComment = false;
            continue;
        }
        if (trimmed.startsWith('/*') && !trimmed.includes('*/')) {
            inBlockComment = true;
            continue;
        }
        if (!trimmed || trimmed.startsWith('//') || trimmed.startsWith('/*') || trimmed.startsWith('*')) continue;

        const open = trimmed.match(/^(.*?)\s*\{$/);
        if (open && !open[1].includes(':')) {
            const label = open[1]
                .replace(/^(export\s+)?(default\s+)?(public\s+)?(const|let|var|enum|struct|extension)\s+/, '')
                .replace(/\s*[=:].*$/, '')
                .trim();
            scopes.push(label);
            continue;
        }
        if (/^\}/.test(trimmed)) {
            scopes.pop();
            continue;
        }

        let m;
        let name;
        let value;
        if ((m = trimmed.match(/^(--[\w-]+|\$[\w-]+)\s*:\s*(.*?);/))) {
            // CSS custom property or SCSS variable
            [, name, value] = m;
        } else if ((m = trimmed.match(/^(['"])(.+?)\1\s*:\s*(.+)$/))) {
            // JS object entry with a quoted key
            name = m[2];
            value = readValue(m[3]);
        } else if ((m = trimmed.match(/^(?:public\s+)?static\s+(?:let|var)\s+(\w+)\s*(?::[^=]+)?=\s*(.+)$/))) {
            // Swift
            name = m[1];
            value = m[2].trim();
        } else if ((m = trimmed.match(/^(?:export\s+)?const\s+(\w+)\s*=\s*(['"`\d-].*)$/))) {
            // JS top-level scalar export
            name = m[1];
            value = readValue(m[2]);
        } else if (scopes.length && (m = trimmed.match(/^([A-Za-z_$][\w$-]*)\s*:\s*(['"`\d-].*)$/))) {
            // JS object entry with a bare key
            name = m[1];
            value = readValue(m[2]);
        } else {
            continue;
        }
        out.push({ name, value: value.trim(), scope: scopes.join(' ') });
    }
    return out;
}

function tokenMap(ref, files) {
    // key: `${file}\u0000${scope}\u0000${name}`
    const map = new Map();
    for (const file of files) {
        for (const t of parseTokens(file, readFile(ref, file))) {
            map.set(`${file}\u0000${t.scope}\u0000${t.name}`, t.value);
        }
    }
    return map;
}

const platformOf = (file) => file.split('/')[1] ?? '(root)';
const context = (file, scope) => (scope ? `${file} (${scope})` : file);

// Identical changes across several outputs of a platform (e.g. a color in
// tokens.json, tokens.scss and color-palette.js) collapse into one entry.
// JSON keys lack the `--`/`$` prefix, so names are compared without it and the
// CSS custom-property spelling is preferred for display.
function groupInto(target, platform, key, base, file, scope) {
    target[platform] ??= new Map();
    const bucket = target[platform];
    const normalizedKey = key.replace(/^(--|\$)/, '');
    if (!bucket.has(normalizedKey)) bucket.set(normalizedKey, { ...base, outputs: [] });
    const entry = bucket.get(normalizedKey);
    if (base.name.startsWith('--')) entry.name = base.name;
    entry.outputs.push(context(file, scope));
}

function diffTokens(fromRef, toRef) {
    const fromFiles = listFiles(fromRef, 'build/');
    const toFiles = listFiles(toRef, 'build/');
    const before = tokenMap(fromRef, fromFiles);
    const after = tokenMap(toRef, toFiles);

    const added = {};
    const removed = {};
    const changed = {};
    for (const [key, value] of after) {
        const [file, scope, name] = key.split('\u0000');
        const platform = platformOf(file);
        if (!before.has(key)) {
            groupInto(added, platform, `${name}\u0000${value}`, { name, value }, file, scope);
        } else if (before.get(key) !== value) {
            const old = before.get(key);
            groupInto(changed, platform, `${name}\u0000${old}\u0000${value}`, { name, old, new: value }, file, scope);
        }
    }
    for (const [key, value] of before) {
        if (after.has(key)) continue;
        const [file, scope, name] = key.split('\u0000');
        groupInto(removed, platformOf(file), `${name}\u0000${value}`, { name, value }, file, scope);
    }

    const finalize = (obj) => Object.fromEntries(Object.entries(obj).map(([p, m]) => [p, [...m.values()]]));
    const fromSet = new Set(fromFiles);
    const toSet = new Set(toFiles);
    const newOutputs = toFiles.filter((f) => !fromSet.has(f));
    const goneOutputs = fromFiles.filter((f) => !toSet.has(f));
    const tokens = { added: finalize(added), changed: finalize(changed), removed: finalize(removed) };

    // Tokens that appear only because a whole output file was added/removed are
    // better described by the file than listed one by one.
    const onlyIn = (files) => (entry) => entry.outputs.every((o) => files.some((f) => o === f || o.startsWith(`${f} (`)));
    for (const list of Object.values(tokens.added)) for (const e of list) if (onlyIn(newOutputs)(e)) e.onlyInNewOutput = true;
    for (const list of Object.values(tokens.removed)) for (const e of list) if (onlyIn(goneOutputs)(e)) e.onlyInRemovedOutput = true;

    const countIn = (map, file) => [...map.keys()].filter((k) => k.startsWith(`${file}\u0000`)).length;
    return {
        tokens,
        changePatterns: changePatterns(tokens.changed),
        buildOutputs: {
            added: newOutputs.map((file) => ({ file, tokens: countIn(after, file) })),
            removed: goneOutputs.map((file) => ({ file, tokens: countIn(before, file) })),
        },
    };
}

// Groups value changes by shape (digits replaced with #), so mechanical changes
// like "#px > #rem" or float-precision shifts can be summarised in one line.
function changePatterns(changed) {
    const shape = (v) => v.replace(/\d+(\.\d+)?/g, '#');
    const out = {};
    for (const [platform, list] of Object.entries(changed)) {
        const groups = new Map();
        for (const c of list) {
            const key = `${shape(c.old)} > ${shape(c.new)}`;
            if (!groups.has(key)) groups.set(key, { pattern: key, count: 0, examples: [] });
            const g = groups.get(key);
            g.count++;
            if (g.examples.length < 3) g.examples.push(`${c.name}: ${c.old} > ${c.new}`);
        }
        out[platform] = [...groups.values()].sort((a, b) => b.count - a.count);
    }
    return out;
}

// ---------- package.json / general ----------

function diffObject(a = {}, b = {}) {
    const added = {};
    const removed = {};
    const changed = {};
    for (const [k, v] of Object.entries(b)) {
        if (!(k in a)) added[k] = v;
        else if (JSON.stringify(a[k]) !== JSON.stringify(v)) changed[k] = { old: a[k], new: v };
    }
    for (const [k, v] of Object.entries(a)) if (!(k in b)) removed[k] = v;
    return { added, removed, changed };
}

function diffPackage(fromRef, toRef) {
    const parse = (ref) => {
        try {
            return JSON.parse(readFile(ref, 'package.json') ?? '{}');
        } catch {
            return {};
        }
    };
    const a = parse(fromRef);
    const b = parse(toRef);
    const field = (k) => (JSON.stringify(a[k]) === JSON.stringify(b[k]) ? undefined : { old: a[k], new: b[k] });
    return {
        version: field('version'),
        node: field('node'),
        engines: field('engines'),
        dependencies: diffObject(a.dependencies, b.dependencies),
        devDependencies: diffObject(a.devDependencies, b.devDependencies),
        scripts: diffObject(a.scripts, b.scripts),
    };
}

// ---------- non-build file changes ----------

const IGNORED = [/^build\//, /^dist\//, /^package-lock\.json$/, /^package\.json$/, /^node_modules\//, /^\.claude\//];

function diffSourceFiles(fromRef, toRef) {
    const keep = (f) => !IGNORED.some((re) => re.test(f));
    const fromFiles = new Set(listFiles(fromRef).filter(keep));
    const toFiles = new Set(listFiles(toRef).filter(keep));
    const added = [...toFiles].filter((f) => !fromFiles.has(f));
    const removed = [...fromFiles].filter((f) => !toFiles.has(f));
    const modified = [...toFiles].filter((f) => fromFiles.has(f) && readFile(fromRef, f) !== readFile(toRef, f));

    const categorize = (files) => {
        const groups = {};
        for (const f of files) {
            const cat = f.startsWith('src/formats/')
                ? 'formats'
                : f.startsWith('src/transforms/')
                  ? 'transforms'
                  : f.startsWith('src/properties/')
                    ? 'properties'
                    : f.startsWith('scripts/')
                      ? 'scripts'
                      : /dictionary\.config\.js$/.test(f)
                        ? 'configs'
                        : f.startsWith('.github/') || /^\.nvmrc$|^\.node-version$/.test(f)
                          ? 'tooling'
                          : 'other';
            (groups[cat] ??= []).push(f);
        }
        return groups;
    };
    return { added: categorize(added), removed: categorize(removed), modified: categorize(modified) };
}

// ---------- commits on main ----------

// The release workflow bumps the version on main ("Bump version to X") and then
// builds that snapshot onto the releases branch, so a release's changes are the
// main commits after the previous bump, up to and including this one.
function bumpCommit(version) {
    const v = version.replace(/^v/, '');
    const hash = tryGit('log', 'main', '--format=%H', '-1', '--fixed-strings', `--grep=Bump version to ${v}`);
    return hash?.trim() || null;
}

function commits(fromRef, toRef) {
    const end = toRef === WORKTREE ? 'HEAD' : bumpCommit(toRef);
    const start = fromRef ? bumpCommit(fromRef) : null;
    // Early releases predate the bump commits: fall back to tag dates, as release.yml does.
    const since = fromRef && !start ? git('log', '-1', '--format=%cI', fromRef).trim() : null;
    const until = end ? null : git('log', '-1', '--format=%cI', toRef).trim();
    const rev = end ? (start ? `${start}..${end}` : end) : 'main';
    const logArgs = [rev, ...(since ? [`--since=${since}`] : []), ...(until ? [`--until=${until}`] : [])];
    const range = logArgs.join(' ');
    const list = git('log', '--no-merges', '--format=%h%x00%s', ...logArgs)
        .split('\n')
        .filter(Boolean)
        .map((l) => {
            const [hash, subject] = l.split('\u0000');
            const pr = subject.match(/\(#(\d+)\)\s*$/)?.[1];
            return { hash, subject, ...(pr ? { pr: Number(pr) } : {}) };
        })
        .filter((c) => !/^(Bump version to |v\d+\.\d+\.\d+$)/.test(c.subject));
    return { range, list };
}

// ---------- main ----------

const args = process.argv.slice(2);
const tags = tagsNewestFirst();

if (args[0] === '--list') {
    for (const t of tags) console.log(`${t}\t${tagDate(t)}`);
    process.exit(0);
}

const toRef = args[0] ?? tags[0];
let fromRef = args[1];
if (!fromRef) {
    if (toRef === WORKTREE) fromRef = tags[0];
    else {
        const i = tags.indexOf(toRef);
        if (i === -1) {
            console.error(`Unknown tag: ${toRef}`);
            process.exit(1);
        }
        fromRef = tags[i + 1] ?? null; // null for the very first release
    }
}

const { tokens, changePatterns: patterns, buildOutputs } = diffTokens(fromRef, toRef);
const count = (o) => Object.values(o).reduce((n, list) => n + list.length, 0);

console.log(
    JSON.stringify(
        {
            to: toRef,
            from: fromRef,
            date: tagDate(toRef),
            counts: { added: count(tokens.added), changed: count(tokens.changed), removed: count(tokens.removed) },
            commits: commits(fromRef, toRef),
            packageJson: diffPackage(fromRef, toRef),
            buildOutputs,
            sourceFiles: diffSourceFiles(fromRef, toRef),
            changePatterns: patterns,
            tokens,
        },
        null,
        2,
    ),
);
