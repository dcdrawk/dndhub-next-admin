<template>
  <div class="flex flex-wrap -mx-2">
    <div
      v-for="(field, index) in fields"
      :key="index"
      class="px-2 py-1"
      :class="`w-${field.width}`"
    >
      <component
        :is="field.component"
        :placeholder="field.placeholder"
        :model-value="field.value"
        @input="handleFormInput(field, $event)"
      />
    </div>
  </div>
</template>

<script>
import AppInput from '@/components/inputs/AppInput'
import AppTextArea from '@/components/inputs/AppTextArea'

export default {
  // Name
  name: 'AppForm',

  components: {
    AppInput,
    AppTextArea
  },

  props: {
    fields: {
      type: Array,
      default: () => [],
      required: true
    }
  },

  emits: ['input'],

  setup (props, context) {
    function handleFormInput (field, value) {
      context.emit('input', { field, value })
    }

    return {
      handleFormInput
    }
  }
}
</script>

<style scoped>
</style>
