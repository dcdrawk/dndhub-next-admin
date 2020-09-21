<template>
  <button :class="[buttonStyles, computedButtonStyles]">
    <slot v-if="!loading" />
    <AppLoadingSpinner v-if="loading" />
  </button>
</template>

<script>
import AppLoadingSpinner from '@/components/spinners/AppLoadingSpinner'
import { computed } from 'vue'

const buttonStyles = [
  'bg-gold',
  'py-2 px-4 mb-2',
  'font-medium',
  'border border-gray rounded-lg',
  'focus:outline-none',
  'shadow hover:shadow-md active:shadow-none transition-shadow duration-150'
]

export default {
  // Name
  name: 'AppButton',

  components: {
    AppLoadingSpinner
  },

  props: {
    loading: {
      type: Boolean,
      default: false
    },

    block: {
      type: Boolean,
      default: false
    }
  },

  setup (props) {
    return {
      buttonStyles,
      computedButtonStyles: computed(() => {
        return {
          'w-full': props.block
        }
      })
    }
  }
}
</script>

<style scoped>
</style>
