module.exports = {
  purge: [],
  theme: {
    // boxShadow: {
    //   inner: 'inset 0 4px 10px 3px rgba(0, 0, 0, 0.25)'
    // },
    extend: {
      colors: {
        // primary: '#8f0000',
        primary: '#c73030',
        beige: '#fbedbf',
        green: '#dbe5c3',
        gold: '#e8d065',
        lightGray: '#dcdcdc',
        darkGray: '#666666',
        gray: '#a5a5a5',
        black: 'rgba(0, 0, 0, 0.87)',
        red: {
          400: '#e38d80',
          500: '#ab2020',
          600: '#8f0000'
        }
        // red: '#9b2a1a',
        // lightRed: '#e38d80'
      },
      spacing: {
        72: '18rem',
        84: '21rem',
        96: '24rem'
      },
      maxWidth: {
        72: '18rem',
        84: '21rem',
        96: '24rem'
      }
    }
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
    border: ['responsive', 'hover', 'focus', 'active'],
    borderColor: ['responsive', 'hover', 'focus', 'active'],
    boxShadow: ['responsive', 'hover', 'focus', 'active']
  },
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  }
}
