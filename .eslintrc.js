module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'plugin:vue/recommended',
    "plugin:import/errors",
    "plugin:import/warnings",
    // standard 覆盖上面配置 https://standardjs.com/rules-zhcn.html#javascript-standard-style
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // 全局变量
  globals: {
    Set: true,
    Howl: true,
    window: true,
    Reflect: true,
    Promise: true,
    arguments: true,
    document: true,
    localStorage: true,
    FaceDetector: true,
    requestAnimFrame: true,
  },
  // 规则
  rules: {
    /**
     * vue文件属性顺序
     * vue/recommended 配置https://vuejs.github.io/eslint-plugin-vue/rules/order-in-components.html
     */
    "vue/order-in-components": ["error", {
      "order": [
        "el",
        "name",
        "data",
        "parent",
        "functional",
        ["delimiters", "comments"],
        ["components", "directives", "filters"],
        "extends",
        "mixins",
        "inheritAttrs",
        "model",
        ["props", "propsData"],
        "computed",
        "watch",
        "LIFECYCLE_HOOKS",
        "methods",
        ["template", "render"],
        "renderError"
      ]
    }],

    // vue script 首行2空格缩进, 配合overrides只在.vue中起作用
    'vue/script-indent': [
      'error',
      2,
      {
        'baseIndent': 1
      }
    ],

    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },

  "overrides": [
    {
      "files": ["*.vue"],
      "rules": {
        "indent": "off"
      }
    }
  ]
}
