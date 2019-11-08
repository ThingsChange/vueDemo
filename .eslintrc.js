// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
  },
  env: {
    browser: true,
  },
  extends: ['plugin:vue/essential', 'standard'],
  plugins: ['vue','html'],
  // check if imports actually resolve
/*  settings: {
    'import/resolver': {
      webpack: {
        config: 'build/webpack.base.conf.js',
      },
    },
  },*/
  // add your custom rules here
  rules: {
    //兼容prettier
    'no-param-reassign': 'off',
    'import/extensions': 'off',
    //end
    'camelcase': 'off',
    "space-before-function-paren":  ["error", {
      "anonymous": "ignore",
      "named": "ignore",
      "asyncArrow": "ignore"
    }],
   "one-var":[0,"always"],
  "no-unused-vars": [1, { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }],
    "vue/no-parsing-error": [2, { "x-invalid-end-tag": false }],
    "vue/html-self-closing": "off",
    'no-console': ["error", { allow: ["warn", "error","log","group","groupEnd"] }],
//Eslint总是推荐用ES6的字符串模板来拼接字符串，而不能用加号，此处关闭了
    'prefer-template': 'off',
    'spaced-comment':[2,"always"],
    "semi": 0,
    'linebreak-style': ['off', 'windows'],
    // disallow reassignment of function parameters
    // disallow parameter object manipulation except for specific exclusions
/*    'no-param-reassign': [
      'error',
      {
        props: false
      },
    ],*/
    // allow optionalDependencies
    'import/no-extraneous-dependencies': [
      'error',
      {
        optionalDependencies: ['test/unit/index.js'],
      },
    ],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
};
