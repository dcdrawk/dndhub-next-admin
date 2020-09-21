<template>
  <div class="border border-red p-2 bg-lightRed mb-2">
    <slot />
  </div>
</template>

<script>
export default {
  // Name
  name: 'AppAlert',

  // Components
  components: {},

  // Mixins
  mixins: [],

  // Props
  props: {},

  // Data
  data () {
    return {}
  },

  // Computed
  computed: {
    computedProperty () {
      return 'something'
    }
  },

  // Watch
  watch: {
    watchProperty (newValue, oldValue) {
      return newValue
    }
  },

  // Methods
  methods: {
    myFunction () {
      return 'something'
    }
  }
}
</script>

<style scoped>
</style>
