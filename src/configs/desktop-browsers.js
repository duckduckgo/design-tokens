import {
  formats,
  transformGroups,
  logBrokenReferenceLevels,
  logVerbosityLevels,
  logWarningLevels,
} from "style-dictionary/enums";

const browserDictionaryConfig = {
  source: [
    "src/properties/base/*.{js,json}",
    "src/properties/desktop-browsers/*.{js,json}",
  ],
  platforms: {
    web: {
      prefix: "bds",
      transformGroup: transformGroups.web,
      buildPath: "build/desktop-browsers/",
      files: [
        {
          destination: "tokens.css",
          format: formats.cssVariables,
        },
        {
          destination: "tokens.json",
          format: formats.jsonFlat,
        },
      ],
    },
  },
  log: {
    warnings: logWarningLevels.warn, // 'warn' | 'error' | 'disabled'
    verbosity: logVerbosityLevels.default, // 'default' | 'silent' | 'verbose'
    errors: {
      brokenReferences: logBrokenReferenceLevels.throw, // 'throw' | 'console'
    },
  },
};

export default browserDictionaryConfig;
