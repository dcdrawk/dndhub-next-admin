module.exports = {
  extends: 'stylelint-config-recommended',

  rules: {
    'selector-nested-pattern': '^&'
  },
  'files.associations': {
    '*.css': 'postcss',
    '*.vue': 'css'
  }
}
