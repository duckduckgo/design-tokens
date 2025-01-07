import {
  formats,
  transformGroups,
  logBrokenReferenceLevels,
  logVerbosityLevels,
  logWarningLevels,
} from "style-dictionary/enums";

const serpDictionaryConfig = {
  source: [
    "src/properties/base/*.{js,json}",
    "src/properties/serp/*.{js,json}",
  ],
  platforms: {
    web: {
      prefix: "sds",
      transformGroup: transformGroups.web,
      buildPath: "build/serp/",
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

export default serpDictionaryConfig;
