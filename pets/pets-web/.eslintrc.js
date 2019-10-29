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
      'error', 2, {
        'baseIndent': 1
      }
    ],

    // vue props 中横线命名
    'vue/attribute-hyphenation': 'off',

    // HTML单一节点换行
    'vue/singleline-html-element-content-newline': 'off',

    // 标签括号前后空格
    'vue/html-closing-bracket-spacing': 'off',

    // HTML多节点换行
    'vue/multiline-html-element-content-newline': 'off',

    // 可以使用v-html
    'vue/no-v-html': 'off',

    // html常规标签自动关闭不限制
    'vue/html-self-closing': ["error", {
      'html': {
        'void': 'never',
        'normal': 'any',
        'component': 'always'
      },
      'svg': 'always',
      'math': 'always'
    }],

    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    // 不要留超过规定数目的空白行
    "no-multiple-empty-lines": [2, { "max": 3 }],

    // 不能使用__dirname或__filename做路径拼接
    "no-path-concat": 0,

    // 禁止行末加空格关闭
    "no-trailing-spaces": "off",

    // 规定了参数是否需要圆括号包围
    'arrow-parens': 0,

    // 规定generator函数中星号前后的空白
    'generator-star-spacing': 0,

    'import/no-named-as-default': 0,
    'vue/no-use-v-if-with-v-for': 0
  },

  "overrides": [
    {
      "files": ["*.vue"],
      "rules": {
        "indent": "off"
      }
    }
  ],

  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', './']
        ],
      }
    }
  }
}
