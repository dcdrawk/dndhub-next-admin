module.exports = {
  extends: 'stylelint-config-recommended',

  rules: {
    'selector-nested-pattern': '^&',
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'apply',
          'variants',
          'responsive',
          'screen'
        ]
      }
    ],
    'declaration-block-trailing-semicolon': null,
    'no-descending-specificity': null,
    'no-empty-source': null
  },

  'files.associations': {
    '*.css': 'postcss',
    '*.vue': 'css'
  }
}
