<template>
  <div class="mb-2">
    <label
      v-if="label"
      :for="id || name"
      class="font-semibold block"
    >
      {{ label }}
    </label>

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
export default {
  // Name
  name: 'AppInputWrapper',

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
