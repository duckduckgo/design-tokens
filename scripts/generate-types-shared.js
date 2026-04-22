const TOKEN_KEY_PATTERN = /^\s*['"](--[^'"]+)['"]\s*:/gm;
const TOKEN_VALUE_PATTERN =
    /^\s*['"]--[^'"]+['"]:\s*((?:'[^'\\]*(?:\\.[^'\\]*)*'|"[^"\\]*(?:\\.[^"\\]*)*"|`[^`\\]*(?:\\.[^`\\]*)*`|-?(?:\d+|\d+\.\d+|\.\d+)))\s*,(?:\s*\/\/.*)?\s*$/gm;

export function getExportName(fileContents) {
    const constMatch = fileContents.match(/const\s+([A-Za-z_$][\w$]*)\s*=\s*\{/);
    if (constMatch) {
        return constMatch[1];
    }

    const defaultExportMatch = fileContents.match(/export\s+default\s+([A-Za-z_$][\w$]*)\s*;?/);
    if (defaultExportMatch) {
        return defaultExportMatch[1];
    }

    return null;
}

export function getTokenKeys(fileContents) {
    return [...new Set([...fileContents.matchAll(TOKEN_KEY_PATTERN)].map((match) => match[1]))];
}

export function getTokenValues(fileContents) {
    return [...new Set([...fileContents.matchAll(TOKEN_VALUE_PATTERN)].map((match) => match[1].trim()))];
}

export function toPascalCase(value) {
    const normalizedValue = value.replace(/([a-z0-9])([A-Z])/g, '$1 $2');
    const segments = normalizedValue.match(/[A-Za-z0-9]+/g) ?? [];
    const pascalCaseValue = segments.map((segment) => segment[0].toUpperCase() + segment.slice(1)).join('');
    return pascalCaseValue || 'DesignToken';
}

export function getKeyTypeName(exportName) {
    const pascalCaseName = toPascalCase(exportName);
    const normalizedName = exportName.startsWith('ds') ? pascalCaseName.replace(/^Ds/, 'DS') : pascalCaseName;
    return `${normalizedName}Keys`;
}

export function getValueTypeName(exportName) {
    const pascalCaseName = toPascalCase(exportName);
    const normalizedName = exportName.startsWith('ds') ? pascalCaseName.replace(/^Ds/, 'DS') : pascalCaseName;
    return `${normalizedName}Values`;
}

export function escapeTypeLiteral(value) {
    return value.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

export function isNumberLiteral(value) {
    return /^-?(?:\d+|\d+\.\d+|\.\d+)$/.test(value);
}

export function isStringLiteral(value) {
    const quote = value[0];
    return (quote === "'" || quote === '"' || quote === '`') && value[value.length - 1] === quote;
}

export function toValueTypeLiteral(value) {
    if (isNumberLiteral(value)) {
        return value;
    }

    if (!isStringLiteral(value)) {
        return null;
    }

    const unquotedValue = value.slice(1, -1);
    return `'${escapeTypeLiteral(unquotedValue)}'`;
}

export function inferValueType(tokenValues) {
    if (tokenValues.length === 0) {
        return { kind: 'simple', expression: 'string' };
    }

    const literalValues = [];

    for (const tokenValue of tokenValues) {
        const valueTypeLiteral = toValueTypeLiteral(tokenValue);
        if (!valueTypeLiteral) {
            const hasNumberValue = tokenValues.some((value) => isNumberLiteral(value));
            const hasStringValue = tokenValues.some((value) => isStringLiteral(value));

            if (hasNumberValue && hasStringValue) {
                return { kind: 'simple', expression: 'string | number' };
            }

            if (hasNumberValue) {
                return { kind: 'simple', expression: 'number' };
            }

            return { kind: 'simple', expression: 'string' };
        }

        if (!literalValues.includes(valueTypeLiteral)) {
            literalValues.push(valueTypeLiteral);
        }
    }

    return { kind: 'union', members: literalValues };
}

export function buildKeyTypeDeclaration(typeName, tokenKeys) {
    if (tokenKeys.length === 0) {
        return `    export type ${typeName} = \`--\${string}\`;`;
    }

    const unionLines = tokenKeys.map((tokenKey) => `        | '${escapeTypeLiteral(tokenKey)}'`);
    unionLines[unionLines.length - 1] = `${unionLines[unionLines.length - 1]};`;

    return [`    export type ${typeName} =`, ...unionLines].join('\n');
}

export function buildValueTypeDeclaration(typeName, valueType) {
    if (valueType.kind === 'simple' || valueType.members.length <= 1) {
        const typeExpression = valueType.kind === 'simple' ? valueType.expression : valueType.members[0];
        return `    export type ${typeName} = ${typeExpression};`;
    }

    const unionLines = valueType.members.map((member) => `        | ${member}`);
    unionLines[unionLines.length - 1] = `${unionLines[unionLines.length - 1]};`;

    return [`    export type ${typeName} =`, ...unionLines].join('\n');
}

export function buildModuleDeclaration(moduleName, exportName, tokenKeys, valueType) {
    const keyTypeName = getKeyTypeName(exportName);
    const valueTypeName = getValueTypeName(exportName);

    return [
        `declare module '${moduleName}' {`,
        buildKeyTypeDeclaration(keyTypeName, tokenKeys),
        buildValueTypeDeclaration(valueTypeName, valueType),
        `    const ${exportName}: Record<${keyTypeName}, ${valueTypeName}>;`,
        `    export default ${exportName};`,
        '}',
    ].join('\n');
}
