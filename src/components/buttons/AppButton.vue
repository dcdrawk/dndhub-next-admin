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
  'py-2 px-4 mb-2',
  'font-medium',
  'rounded-lg',
  // 'border border-gray rounded-lg',
  'focus:outline-none'
  // 'shadow hover:shadow-md active:shadow-none transition-shadow duration-150'
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
    },

    bgColor: {
      type: String,
      default: 'primary'
    },

    textColor: {
      type: String,
      default: 'white'
    },

    flat: {
      type: Boolean,
      default: false
    },

    outlined: {
      type: Boolean,
      default: false
    },

    borderColor: {
      type: String,
      default: 'gray'
    }
  },

  setup (props) {
    return {
      buttonStyles,
      computedButtonStyles: computed(() => [
        `bg-${props.bgColor} text-${props.textColor}`,
        {
          'w-full': props.block,
          [`border border-${props.borderColor}`]: props.outlined,
          'shadow hover:shadow-md active:shadow-none transition-shadow duration-150': !props.flat
        }
      ])
    }
  }
}
</script>

<style scoped>
</style>
