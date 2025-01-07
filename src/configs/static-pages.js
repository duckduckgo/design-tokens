import {
  formats,
  transformGroups,
  logBrokenReferenceLevels,
  logVerbosityLevels,
  logWarningLevels,
} from "style-dictionary/enums";

const staticPagesDictionaryConfig = {
  source: [
    "src/properties/base/*.{js,json}",
    "src/properties/static-pages/*.{js,json}",
  ],
  platforms: {
    web: {
      prefix: "spds",
      transformGroup: transformGroups.web,
      buildPath: "build/static-pages/",
      files: [
        {
          destination: "tokens.scss",
          format: formats.scssVariables,
        },
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

export default staticPagesDictionaryConfig;
