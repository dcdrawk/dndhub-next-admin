<template>
  <button :class="buttonStyles">
    <slot v-if="!loading" />
    <AppLoadingSpinner v-if="loading" />
  </button>
</template>

<script>
import AppLoadingSpinner from '@/components/spinners/AppLoadingSpinner'

const buttonStyles = [
  'w-full',
  'bg-gold',
  'p-2 mb-2',
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
    }
  },

  setup () {
    return {
      buttonStyles
    }
  }
}
</script>

<style scoped>
</style>
