<template>
  <div class="mb-2">
    <Field
      v-slot="{ field, errorMessage }"
      :name="name"
      :rules="rules"
    >
      <AppInputWrapper
        :id="id"
        :label="label"
        :error-message="errorMessage"
        :name="name"
      >
        <textarea
          :id="id || name"
          v-bind="field"
          :class="inputStyles"
          :placeholder="placeholder"
          :value="modelValue"
          :name="name"
          :rows="rows"
          class="block"
          @input="handleInput"
        />
      </AppInputWrapper>
    </Field>
  </div>
</template>

<script>
import { Field } from 'vee-validate'
import { inputStyles } from './input-styles'
import AppInputWrapper from './AppInputWrapper.vue'

export default {
  // Name
  name: 'AppInput',

  components: {
    AppInputWrapper,
    Field
  },

  props: {
    modelValue: {
      type: [String, Number],
      default: ''
    },

    placeholder: {
      type: String,
      default: ''
    },

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

    rules: {
      type: String,
      default: '',
      required: false
    },

    type: {
      type: String,
      default: 'text',
      required: false
    },

    autocomplete: {
      type: String,
      default: '',
      required: false
    },

    rows: {
      type: [String, Number],
      default: '4',
      required: false
    }
  },

  emits: ['input', 'update:modelValue'],

  setup (props, context) {
    function handleInput (event) {
      context.emit('update:modelValue', event.target.value)
      context.emit('input', event.target.value)
    }

    return {
      handleInput,
      inputStyles
    }
  }
}
</script>

<style lang="postcss" scoped>
</style>
