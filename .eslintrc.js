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
    'plugin:vue/recommended'
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
  // add your custom rules here
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
