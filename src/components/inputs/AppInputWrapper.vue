<template>
  <div class="mb-4">
    <AppLabel
      v-if="label"
      :id="id"
      :name="name"
    >
      {{ label }}
    </AppLabel>

    <slot />

    <p
      v-if="errorMessage"
      class="text-primary"
    >
      <small>{{ errorMessage }}</small>
    </p>
  </div>
</template>

<script>
import AppLabel from './AppLabel.vue'

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
      required: false
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

<style lang="postcss" scoped>
</style>
