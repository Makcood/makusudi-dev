import { propertyGroups } from "stylelint-config-clean-order";

// Same grouping as the preset, without the blank line between groups
const propertiesOrder = propertyGroups.map((properties) => ({
  properties,
  emptyLineBefore: "never",
  noEmptyLineBetween: true,
}));

/** @type {import('stylelint').Config} */
const config = {
  extends: ["stylelint-config-standard", "stylelint-config-clean-order"],

  rules: {
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: [
          "theme",
          "source",
          "utility",
          "variant",
          "custom-variant",
          "reference",
          "apply",
          "layer",
          "plugin",
          "config",
        ],
      },
    ],

    // Tailwind v4 requires the string form; the standard config rewrites it to url()
    "import-notation": "string",

    // Preset grouping, without the enforced blank lines
    "order/properties-order": [propertiesOrder, { unspecified: "bottomAlphabetical" }],

    // Theme tokens and Tailwind utilities do not follow conventional patterns
    "custom-property-pattern": null,
    "selector-class-pattern": null,
    "function-no-unknown": [true, { ignoreFunctions: ["theme"] }],

    // Utility-first CSS produces specificity ordering Stylelint cannot reason about
    "no-descending-specificity": null,
    "comment-empty-line-before": null,
  },

  // Ignore generated and external assets
  ignoreFiles: ["**/*.min.css", "node_modules/**", ".next/**", "out/**", "coverage/**"],
};

export default config;
