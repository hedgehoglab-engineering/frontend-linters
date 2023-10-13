// src/index.ts
var src_default = {
  rules: {
    "annotation-no-unknown": null,
    "at-rule-no-unknown": null,
    "comment-no-empty": null,
    "function-no-unknown": null,
    "no-invalid-position-at-import-rule": null,
    "selector-pseudo-element-no-unknown": [
      true,
      {
        ignorePseudoElements: [
          "deep",
          "v-deep",
          "global"
        ]
      }
    ],
    "selector-pseudo-class-no-unknown": [
      true,
      {
        ignorePseudoClasses: [
          "deep"
        ]
      }
    ],
    "no-descending-specificity": null,
    "media-query-no-invalid": null,
    "block-no-empty": [
      true,
      {
        severity: "warning"
      }
    ],
    "color-no-invalid-hex": [
      true,
      {
        severity: "warning"
      }
    ],
    "custom-property-no-missing-var-function": [
      true
    ],
    "declaration-block-no-duplicate-custom-properties": [
      true
    ],
    "declaration-block-no-duplicate-properties": [
      true,
      {
        severity: "warning"
      }
    ],
    "declaration-block-no-shorthand-property-overrides": [
      true,
      {
        severity: "warning"
      }
    ],
    "font-family-no-duplicate-names": [
      true
    ],
    "font-family-no-missing-generic-family-keyword": [
      true
    ],
    "function-calc-no-unspaced-operator": [
      true
    ],
    "function-linear-gradient-no-nonstandard-direction": [
      true
    ],
    "keyframe-block-no-duplicate-selectors": [
      true
    ],
    "keyframe-declaration-no-important": [
      true
    ],
    "media-feature-name-no-unknown": [
      true
    ],
    "named-grid-areas-no-invalid": [
      true
    ],
    "no-duplicate-at-import-rules": [
      true
    ],
    "no-duplicate-selectors": [
      true
    ],
    "no-empty-source": [
      true
    ],
    "no-invalid-double-slash-comments": [
      true
    ],
    "no-irregular-whitespace": [
      true
    ],
    "property-no-unknown": [
      true,
      {
        severity: "warning"
      }
    ],
    "selector-anb-no-unmatchable": [
      true
    ],
    "selector-type-no-unknown": [
      true,
      {
        ignore: [
          "custom-elements"
        ]
      }
    ],
    "string-no-newline": [
      true
    ],
    "unit-no-unknown": [
      true,
      {
        severity: "warning"
      }
    ],
    "shorthand-property-no-redundant-values": [
      true,
      {
        severity: "warning"
      }
    ],
    "length-zero-no-unit": [
      true,
      {
        severity: "warning"
      }
    ],
    "declaration-no-important": [
      true,
      {
        severity: "warning"
      }
    ],
    "color-named": [
      "never",
      {
        severity: "warning"
      }
    ],
    "color-hex-length": [
      "long",
      {
        severity: "warning"
      }
    ]
  }
};
export {
  src_default as default
};
