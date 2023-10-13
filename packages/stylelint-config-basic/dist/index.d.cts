declare const _default: {
    rules: {
        'annotation-no-unknown': null;
        'at-rule-no-unknown': null;
        'comment-no-empty': null;
        'function-no-unknown': null;
        'no-invalid-position-at-import-rule': null;
        'selector-pseudo-element-no-unknown': (boolean | {
            ignorePseudoElements: string[];
        })[];
        'selector-pseudo-class-no-unknown': (boolean | {
            ignorePseudoClasses: string[];
        })[];
        'no-descending-specificity': null;
        'media-query-no-invalid': null;
        'block-no-empty': (boolean | {
            severity: string;
        })[];
        'color-no-invalid-hex': (boolean | {
            severity: string;
        })[];
        'custom-property-no-missing-var-function': boolean[];
        'declaration-block-no-duplicate-custom-properties': boolean[];
        'declaration-block-no-duplicate-properties': (boolean | {
            severity: string;
        })[];
        'declaration-block-no-shorthand-property-overrides': (boolean | {
            severity: string;
        })[];
        'font-family-no-duplicate-names': boolean[];
        'font-family-no-missing-generic-family-keyword': boolean[];
        'function-calc-no-unspaced-operator': boolean[];
        'function-linear-gradient-no-nonstandard-direction': boolean[];
        'keyframe-block-no-duplicate-selectors': boolean[];
        'keyframe-declaration-no-important': boolean[];
        'media-feature-name-no-unknown': boolean[];
        'named-grid-areas-no-invalid': boolean[];
        'no-duplicate-at-import-rules': boolean[];
        'no-duplicate-selectors': boolean[];
        'no-empty-source': boolean[];
        'no-invalid-double-slash-comments': boolean[];
        'no-irregular-whitespace': boolean[];
        'property-no-unknown': (boolean | {
            severity: string;
        })[];
        'selector-anb-no-unmatchable': boolean[];
        'selector-type-no-unknown': (boolean | {
            ignore: string[];
        })[];
        'string-no-newline': boolean[];
        'unit-no-unknown': (boolean | {
            severity: string;
        })[];
        'shorthand-property-no-redundant-values': (boolean | {
            severity: string;
        })[];
        'length-zero-no-unit': (boolean | {
            severity: string;
        })[];
        'declaration-no-important': (boolean | {
            severity: string;
        })[];
        'color-named': (string | {
            severity: string;
        })[];
        'color-hex-length': (string | {
            severity: string;
        })[];
    };
};

export { _default as default };
export = _default