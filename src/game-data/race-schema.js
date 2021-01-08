export default {
  name: String,

  age: String,

  abilityScores: {
    type: Object,
    default: {
      str: 0,
      dex: 0,
      con: 0,
      int: 0,
      wis: 0,
      cha: 0,
      special: ''
    }
  },

  size: {
    type: 'Select',
    options: [
      'Small',
      'Medium',
      'Large',
      'Huge'
    ]
  },

  sizeDescription: String,

  alignment: String,

  languages: {
    type: Array,
    multiple: true,
    default: {
      name: '',
      speak: false,
      read: false,
      write: false
    }
  },

  traits: {
    type: Array,
    multiple: true,
    default: {
      name: '',
      description: ''
    }
  }
}
