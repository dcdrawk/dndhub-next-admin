<template>
  <button
    :class="[buttonStyles, computedButtonStyles]"
    :type="type"
    @click="handleClick"
  >
    <slot v-if="!loading" />
    <AppLoadingSpinner v-if="loading" />
  </button>
</template>

<script>
import AppLoadingSpinner from '@/components/spinners/AppLoadingSpinner.vue'
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const buttonStyles = [
  'py-2 px-4 mb-2',
  'font-medium',
  'rounded-lg',
  'h-12',
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
      default: 'bg-blue-500 hover:bg-blue-600'
    },

    textColor: {
      type: String,
      default: 'text-white'
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
      default: 'border-gray-400'
    },

    type: {
      type: String,
      default: 'button'
    },

    to: {
      type: String,
      default: ''
    }
  },

  emits: ['click'],

  setup (props, context) {
    const router = useRouter()

    function handleClick () {
      context.emit('click')
      if (!props.to) return
      router.push(props.to)
    }

    // const hasDefaultBgColor = computed(() => props.bgColor === 'bg-blue-500 hover:bg-blue-600')

    return {
      buttonStyles,
      computedButtonStyles: computed(() => [
        // props.bgColor,
        props.textColor,
        {
          [props.bgColor]: !props.flat,
          'w-full': props.block,
          [`border ${props.borderColor}`]: props.outlined,
          'shadow hover:shadow-md active:shadow-none transition-shadow duration-200 ease-out': !props.flat,
          'bg-gray-200 hover:bg-gray-300': props.flat
        }
      ]),
      handleClick
    }
  }
}
</script>

<style lang="postcss" scoped>
</style>
