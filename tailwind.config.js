module.exports = {
  purge: [],
  theme: {
    // boxShadow: {
    //   inner: 'inset 0 4px 10px 3px rgba(0, 0, 0, 0.25)'
    // },
    extend: {
      colors: {
        primary: '#8f0000',
        beige: '#fbedbf',
        green: '#dbe5c3',
        gold: '#e8d065',
        lightGray: '#e3e0db',
        gray: '#bbb8ac',
        red: '#9b2a1a',
        lightRed: '#e38d80'
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
