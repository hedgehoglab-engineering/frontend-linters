declare const _default: {
    plugins: {
        vue: any;
        'vuejs-accessibility': any;
    };
    rules: {
        'vue/attribute-hyphenation': (string | number)[];
        'vue/attributes-order': (number | {
            order: string[];
            alphabetical: boolean;
        })[];
        'vue/component-definition-name-casing': (string | number)[];
        'vue/component-name-in-template-casing': (string | number | {
            registeredComponentsOnly: boolean;
        })[];
        'vue/eqeqeq': number[];
        'vue/html-closing-bracket-newline': (number | {
            singleline: string;
            multiline: string;
        })[];
        'vue/html-closing-bracket-spacing': (number | {
            startTag: string;
            endTag: string;
            selfClosingTag: string;
        })[];
        'vue/html-indent': (number | {
            baseIndent: number;
        })[];
        'vue/html-quotes': (string | number)[];
        'vue/key-spacing': (number | {
            beforeColon: boolean;
            afterColon: boolean;
            mode: string;
        })[];
        'vue/match-component-file-name': (number | {
            extensions: string[];
            shouldMatchCase: boolean;
        })[];
        'vue/max-attributes-per-line': (number | {
            singleline: {
                max: number;
            };
            multiline: {
                max: number;
            };
        })[];
        'vue/mustache-interpolation-spacing': (string | number)[];
        'vue/no-dupe-keys': (number | {
            groups: never[];
        })[];
        'vue/no-duplicate-attributes': number[];
        'vue/no-multi-spaces': number[];
        'vue/no-shared-component-data': number[];
        'vue/no-side-effects-in-computed-properties': number[];
        'vue/no-textarea-mustache': number[];
        'vue/no-unused-vars': number[];
        'vue/script-setup-uses-vars': number[];
        'vue/no-v-html': number[];
        'vue/object-curly-spacing': (string | number)[];
        'vue/order-in-components': (number | {
            order: (string | string[])[];
        })[];
        'vue/require-default-prop': number[];
        'vue/require-prop-types': number[];
        'vue/return-in-computed-property': (number | {
            treatUndefinedAsUnspecified: boolean;
        })[];
        'vue/script-indent': (number | {
            baseIndent: number;
            switchCase: number;
        })[];
        'vue/this-in-template': (string | number)[];
        'vue/v-bind-style': (string | number)[];
        'vue/v-on-function-call': (string | number)[];
        'vue/v-on-style': (string | number)[];
        'vue/multi-word-component-names': string[];
        'vue/no-arrow-functions-in-watch': string[];
        'vue/no-async-in-computed-properties': string[];
        'vue/no-child-content': string[];
        'vue/no-computed-properties-in-data': string[];
        'vue/no-deprecated-data-object-declaration': string[];
        'vue/no-deprecated-destroyed-lifecycle': string[];
        'vue/no-deprecated-dollar-listeners-api': string[];
        'vue/no-deprecated-dollar-scopedslots-api': string[];
        'vue/no-deprecated-events-api': string[];
        'vue/no-deprecated-filter': string[];
        'vue/no-deprecated-functional-template': string[];
        'vue/no-deprecated-html-element-is': string[];
        'vue/no-deprecated-inline-template': string[];
        'vue/no-deprecated-props-default-this': string[];
        'vue/no-deprecated-router-link-tag-prop': string[];
        'vue/no-deprecated-scope-attribute': string[];
        'vue/no-deprecated-slot-attribute': string[];
        'vue/no-deprecated-slot-scope-attribute': string[];
        'vue/no-deprecated-v-bind-sync': string[];
        'vue/no-deprecated-v-is': string[];
        'vue/no-deprecated-v-on-native-modifier': string[];
        'vue/no-deprecated-v-on-number-modifiers': string[];
        'vue/no-deprecated-vue-config-keycodes': string[];
        'vue/no-dupe-v-else-if': string[];
        'vue/no-export-in-script-setup': string[];
        'vue/no-expose-after-await': string[];
        'vue/no-lifecycle-after-await': string[];
        'vue/no-mutating-props': string[];
        'vue/no-parsing-error': string[];
        'vue/no-ref-as-operand': string[];
        'vue/no-reserved-component-names': string[];
        'vue/no-reserved-keys': string[];
        'vue/no-reserved-props': string[];
        'vue/no-template-key': string[];
        'vue/no-unused-components': string[];
        'vue/no-use-computed-property-like-method': string[];
        'vue/no-use-v-if-with-v-for': string[];
        'vue/no-useless-template-attributes': string[];
        'vue/no-v-for-template-key-on-child': string[];
        'vue/no-v-text-v-html-on-component': string[];
        'vue/no-watch-after-await': string[];
        'vue/prefer-import-from-vue': string[];
        'vue/require-component-is': string[];
        'vue/require-prop-type-constructor': string[];
        'vue/require-render-return': string[];
        'vue/require-slots-as-functions': string[];
        'vue/require-toggle-inside-transition': string[];
        'vue/require-v-for-key': string[];
        'vue/require-valid-default-prop': string[];
        'vue/return-in-emits-validator': string[];
        'vue/use-v-on-exact': string[];
        'vue/valid-attribute-name': string[];
        'vue/valid-define-emits': string[];
        'vue/valid-define-props': string[];
        'vue/valid-next-tick': string[];
        'vue/valid-template-root': string[];
        'vue/valid-v-bind': string[];
        'vue/valid-v-cloak': string[];
        'vue/valid-v-else-if': string[];
        'vue/valid-v-else': string[];
        'vue/valid-v-for': string[];
        'vue/valid-v-html': string[];
        'vue/valid-v-if': string[];
        'vue/valid-v-is': string[];
        'vue/valid-v-memo': string[];
        'vue/valid-v-model': string[];
        'vue/valid-v-on': string[];
        'vue/valid-v-once': string[];
        'vue/valid-v-pre': string[];
        'vue/valid-v-show': string[];
        'vue/valid-v-slot': string[];
        'vue/valid-v-text': string[];
        'vue/comment-directive': string[];
        'vue/jsx-uses-vars': string[];
        /**
         * Accessibility
         */
        'vuejs-accessibility/alt-text': number[];
        'vuejs-accessibility/anchor-has-content': number[];
        'vuejs-accessibility/aria-props': number[];
        'vuejs-accessibility/aria-role': number[];
        'vuejs-accessibility/aria-unsupported-elements': number[];
        'vuejs-accessibility/click-events-have-key-events': number[];
        'vuejs-accessibility/form-control-has-label': number[];
        'vuejs-accessibility/heading-has-content': number[];
        'vuejs-accessibility/iframe-has-title': number[];
        'vuejs-accessibility/interactive-supports-focus': number[];
        'vuejs-accessibility/mouse-events-have-key-events': number[];
        'vuejs-accessibility/no-access-key': number[];
        'vuejs-accessibility/no-autofocus': number[];
        'vuejs-accessibility/no-distracting-elements': number[];
        'vuejs-accessibility/no-onchange': number[];
        'vuejs-accessibility/no-redundant-roles': number[];
        'vuejs-accessibility/role-has-required-aria-props': number[];
        'vuejs-accessibility/tabindex-no-positive': number[];
    };
};

export { _default as default };
