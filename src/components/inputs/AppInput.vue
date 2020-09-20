<template>
  <div class="mb-2">
    <input
      :value="value"
      :placeholder="placeholder"
      :type="type"
      @input="$emit('input')"
    >
  </div>
</template>

<script>
export default {
  // Name
  name: 'AppInput',

  props: {
    value: {
      type: [String, Number],
      default: ''
    },

    placeholder: {
      type: String,
      default: ''
    },

    type: {
      type: String,
      default: 'text',
      required: false
    }
  },

  emits: ['input']
}
</script>

<style scoped>
</style>
