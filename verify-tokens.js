#!/usr/bin/env node

import { readFileSync, writeFileSync, rmSync, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log('🔍 Verifying generated tokens against DDG repository\n');

// Step 1: Clone or update DDG repository
const repoPath = '/tmp/ddg-repo-verify';

try {
    if (existsSync(repoPath)) {
        // Repository exists, fetch and reset to latest (better for shallow clones)
        console.log('📥 Updating DDG repository...');
        execSync('git fetch origin main && git reset --hard origin/main', {
            cwd: repoPath,
            stdio: 'pipe',
            encoding: 'utf8',
        });
        console.log('✅ Repository updated\n');
    } else {
        // Repository doesn't exist, clone it
        console.log('📥 Cloning DDG repository (shallow)...');
        execSync(`git clone --depth 1 git@dub.duckduckgo.com:duckduckgo/ddg.git ${repoPath}`, {
            stdio: 'pipe',
            encoding: 'utf8',
        });
        console.log('✅ Repository cloned\n');
    }
} catch (error) {
    console.error('❌ Error with repository:', error.message);
    process.exit(1);
}

// Step 2: Extract tokens from DDG repository
console.log('📤 Extracting tokens from DDG repository...');
const tokensPath = `${repoPath}/www-release/frontend/react/src/design-system/tokens/tokens.ts`;

let expectedData;
try {
    // Create a temporary extraction script
    const extractScript = `
import { dsTokensLight, dsTokensDark } from '${tokensPath}';

const output = {
    dsTokensLight,
    dsTokensDark
};

console.log(JSON.stringify(output, null, 2));
    `.trim();

    const tempScriptPath = '/tmp/extract-tokens-verify.ts';
    writeFileSync(tempScriptPath, extractScript);

    // Execute with tsx
    const result = execSync(`npx tsx ${tempScriptPath}`, {
        cwd: `${repoPath}/www-release/frontend/react`,
        encoding: 'utf8',
        maxBuffer: 10 * 1024 * 1024, // 10MB buffer
        stdio: 'pipe',
    });

    expectedData = JSON.parse(result);
    console.log(
        `✅ Extracted ${Object.keys(expectedData.dsTokensLight).length} light tokens and ${Object.keys(expectedData.dsTokensDark).length} dark tokens\n`,
    );

    // Clean up temp script
    rmSync(tempScriptPath, { force: true });
} catch (error) {
    console.error('❌ Error extracting tokens:', error.message);
    process.exit(1);
}

// Step 3: Read the generated tokens
const generatedPath = join(__dirname, 'build/serp/tokens-themes.json');
let generatedData;

try {
    generatedData = JSON.parse(readFileSync(generatedPath, 'utf8'));
} catch (error) {
    console.error('❌ Error: Could not read generated tokens file');
    console.error(`   Expected file at: ${generatedPath}`);
    console.error(`   Error: ${error.message}`);
    process.exit(1);
}

// Step 4: Verification function
function verifyTokens(themeName, expectedTokens, generatedTokens) {
    const errors = [];
    const missing = [];
    const mismatched = [];

    // Check each expected token
    for (const [key, expectedValue] of Object.entries(expectedTokens)) {
        if (!(key in generatedTokens)) {
            missing.push(key);
        } else if (generatedTokens[key] !== expectedValue) {
            mismatched.push({
                key,
                expected: expectedValue,
                actual: generatedTokens[key],
            });
        }
    }

    return { missing, mismatched };
}

console.log('🔍 Verifying generated tokens...\n');

// Verify light theme
console.log('Checking dsTokensLight...');
const lightResults = verifyTokens('dsTokensLight', expectedData.dsTokensLight, generatedData.dsTokensLight);

// Verify dark theme
console.log('Checking dsTokensDark...');
const darkResults = verifyTokens('dsTokensDark', expectedData.dsTokensDark, generatedData.dsTokensDark);

// Report results
let hasErrors = false;

if (lightResults.missing.length > 0) {
    hasErrors = true;
    console.error('\n❌ Missing tokens in dsTokensLight:');
    lightResults.missing.forEach((key) => console.error(`   - ${key}`));
}

if (lightResults.mismatched.length > 0) {
    hasErrors = true;
    console.error('\n❌ Mismatched values in dsTokensLight:');
    lightResults.mismatched.forEach(({ key, expected, actual }) => {
        console.error(`   - ${key}`);
        console.error(`     Expected: ${expected}`);
        console.error(`     Actual:   ${actual}`);
    });
}

if (darkResults.missing.length > 0) {
    hasErrors = true;
    console.error('\n❌ Missing tokens in dsTokensDark:');
    darkResults.missing.forEach((key) => console.error(`   - ${key}`));
}

if (darkResults.mismatched.length > 0) {
    hasErrors = true;
    console.error('\n❌ Mismatched values in dsTokensDark:');
    darkResults.mismatched.forEach(({ key, expected, actual }) => {
        console.error(`   - ${key}`);
        console.error(`     Expected: ${expected}`);
        console.error(`     Actual:   ${actual}`);
    });
}

// Count additional tokens (not an error, just informational)
const expectedLightKeys = Object.keys(expectedData.dsTokensLight);
const generatedLightKeys = Object.keys(generatedData.dsTokensLight);
const additionalLightTokens = generatedLightKeys.filter((key) => !expectedLightKeys.includes(key));

const expectedDarkKeys = Object.keys(expectedData.dsTokensDark);
const generatedDarkKeys = Object.keys(generatedData.dsTokensDark);
const additionalDarkTokens = generatedDarkKeys.filter((key) => !expectedDarkKeys.includes(key));

if (additionalLightTokens.length > 0 || additionalDarkTokens.length > 0) {
    console.log('\nℹ️  Additional tokens in generated output (this is OK):');
    if (additionalLightTokens.length > 0) {
        console.log(`   dsTokensLight: ${additionalLightTokens.length} additional tokens`);
    }
    if (additionalDarkTokens.length > 0) {
        console.log(`   dsTokensDark: ${additionalDarkTokens.length} additional tokens`);
    }

    // Display the additional tokens grouped by category
    console.log('\n📝 Additional tokens by category:\n');
    const byCategory = {};
    additionalLightTokens.forEach((token) => {
        // Extract category (e.g., --sds-color-white -> color)
        const parts = token.replace('--sds-', '').split('-');
        const category = parts[0];
        if (!byCategory[category]) {
            byCategory[category] = [];
        }
        byCategory[category].push(token);
    });

    // Display grouped
    Object.keys(byCategory)
        .sort()
        .forEach((category) => {
            console.log(`${category.toUpperCase()} (${byCategory[category].length} tokens):`);
            byCategory[category].forEach((token) => {
                const value = generatedData.dsTokensLight[token];
                const displayValue = typeof value === 'string' && value.length > 50 ? value.substring(0, 47) + '...' : value;
                console.log(`  ${token.replace('--sds-', '')}: ${displayValue}`);
            });
            console.log();
        });
}

// Final result
if (hasErrors) {
    console.error('\n❌ Verification FAILED: Some tokens are missing or have incorrect values\n');
    process.exit(1);
} else {
    console.log('\n✅ Verification PASSED: All required tokens match expected values');
    console.log(`   (Verified against live DDG repository)\n`);
    console.log(`   dsTokensLight: ${expectedLightKeys.length} tokens verified`);
    console.log(`   dsTokensDark: ${expectedDarkKeys.length} tokens verified`);
    console.log(`   Total generated: ${generatedLightKeys.length} light, ${generatedDarkKeys.length} dark\n`);
    process.exit(0);
}
