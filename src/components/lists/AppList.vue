<template>
  <div class="app-list w-full">
    <slot />
  </div>
</template>

<script>
export default {
  // Name
  name: 'AppList',

  // Components
  components: {},

  // Mixins
  mixins: [],

  // Props
  props: {
    items: {
      type: String,
      default: ''
    }
  },

  // Setup
  setup (props, context) {
    return {}
  }
}
</script>

<style lang="postcss" scoped>
.app-list {
  @apply bg-white h-full;
}
</style>
