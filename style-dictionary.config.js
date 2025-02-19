import {
  formats,
  transformGroups,
  logBrokenReferenceLevels,
  logVerbosityLevels,
  logWarningLevels,
} from "style-dictionary/enums";

export default {
  source: ["dist/properties/**/*.{js,json}"],
  log: {
    warnings: logWarningLevels.warn, // 'warn' | 'error' | 'disabled'
    verbosity: logVerbosityLevels.default, // 'default' | 'silent' | 'verbose'
    errors: {
      brokenReferences: logBrokenReferenceLevels.throw, // 'throw' | 'console'
    },
  },
  // include: ["src/properties/base/*.js"],
  platforms: {
    scss: {
      prefix: "spds",
      transformGroup: transformGroups.scss,
      buildPath: "build/",
      files: [
        {
          destination: "static-pages/tokens.scss",
          format: formats.scssVariables,
        },
      ],
    },
    css: {
      prefix: "bds",
      transformGroup: transformGroups.css,
      buildPath: "build/",
      files: [
        {
          destination: "desktop-browsers/tokens.css",
          format: formats.cssVariables,
        },
      ],
    },
    web: {
      prefix: "sds",
      transformGroup: transformGroups.css,
      buildPath: "build/",
      files: [
        {
          destination: "serp/tokens.scss",
          format: formats.cssVariables,
        },
        {
          destination: "serp/tokens.json",
          format: formats.jsonFlat,
        },
      ],
    },
  },
};
