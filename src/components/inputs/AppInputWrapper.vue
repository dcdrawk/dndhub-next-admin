<template>
  <div class="mb-2">
    <AppLabel
      v-if="label"
    >
      {{ label }}
    </AppLabel>

    <slot />

    <p
      v-if="errorMessage"
      class="text-red"
    >
      <small>{{ errorMessage }}</small>
    </p>
  </div>
</template>

<script>
import AppLabel from './AppLabel'

export default {
  // Name
  name: 'AppInputWrapper',

  components: {
    AppLabel
  },

  props: {
    label: {
      type: String,
      default: ''
    },

    id: {
      type: String,
      default: '',
      required: true
    },

    name: {
      type: String,
      default: '',
      required: true
    },

    errorMessage: {
      type: String,
      default: '',
      required: false
    }
  }
}
</script>

<style scoped>
</style>
