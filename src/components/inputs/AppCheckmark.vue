<template>
  <div class="app-checkmark">
    <input
      id="scales"
      type="checkbox"
      name="scales"
      checked
    >
  </div>
</template>

<script>
export default {
  // Name
  name: 'AppCheckmark',

  // Components
  components: {},

  // Mixins
  mixins: [],

  // Props
  props: {
    modelValue: {
      type: [Boolean, Number, String],
      default: false
    }
  },

  // Setup
  setup (props, context) {
    return {}
  }
}
</script>

<style scoped>
.app-checkmark {

}
</style>
