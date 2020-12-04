module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    'vue/html-closing-bracket-spacing': 0,
    'vue/this-in-template': 0,
    'vue/name-property-casing': 0,
    quotes: 0
  }
}
