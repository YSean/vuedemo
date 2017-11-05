// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // 
    "key-spacing":["off",{"beforeColon":"false","afterColon":"false"}],
    "space-before-blocks":"off",
    // 不允许函数括号之间存在空格
    "space-before-function-paren":"off",
    // 关闭规则：不允许双引号
    "quotes":["off","double"],
    // 关闭规则：不允许空格跟tab混合
    "no-mixed-spaces-and-tabs":"off",
    // 关闭规则：不允许在语句后有多余的空格,
    "no-trailing-spaces":"off",
    // 关闭规则：不允许有tabspace
    "no-tabs":"off",
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
