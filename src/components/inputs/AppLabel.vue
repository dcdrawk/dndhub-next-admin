<template>
  <label
    :for="id || name"
    class="font-semibold block"
  >
    <slot />
  </label>
</template>

<script>
export default {
  // Name
  name: 'AppLabel',

  props: {
    id: {
      type: String,
      default: '',
      required: true
    },

    name: {
      type: String,
      default: '',
      required: true
    }
  }
}
</script>

<style scoped>
</style>
