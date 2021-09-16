<template>
  <component
    :is="listItemComponent"
    class="app-list-item"
    :to="to"
  >
    <slot />
  </component>
</template>

<script>
import { computed } from 'vue'
export default {
  // Name
  name: 'AppListItem',

  // Components
  components: {},

  // Mixins
  mixins: [],

  // Props
  props: {
    to: {
      type: String,
      default: ''
    }
  },

  // Setup
  setup (props, context) {
    const listItemComponent = computed(() => {
      if (props.to) return 'router-link'
      return 'div'
    })
    return {
      listItemComponent
    }
  }
}
</script>

<style lang="postcss" scoped>
.app-list-item {
  @apply w-full p-4 block no-underline cursor-pointer;
  @apply border-b;
  @apply bg-gray-100 hover:bg-gray-200;

  border-color: rgba(0, 0, 0, 0.12);

  /* &:hover {
  } */
}
</style>
