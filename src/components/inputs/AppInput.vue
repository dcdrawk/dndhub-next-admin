<template>
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
      <input
        :id="id || name"
        v-bind="field"
        :placeholder="placeholder"
        :value="modelValue"
        :type="type"
        :name="name"
        :autocomplete="autocomplete"
        :class="inputStyles"
        @input="handleInput"
      >
    </AppInputWrapper>
  </Field>
</template>

<script>
import { Field } from 'vee-validate'
import { inputStyles } from './input-styles'
import AppInputWrapper from './AppInputWrapper'

export default {
  // Name
  name: 'AppInput',

  components: {
    Field,
    AppInputWrapper
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
      required: true
    },

    name: {
      type: String,
      default: '',
      required: true
    },

    rules: {
      type: String,
      default: '',
      required: true
    },

    type: {
      type: String,
      default: 'text',
      required: false
    },

    autocomplete: {
      type: String,
      default: 'text',
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
      inputStyles,
      handleInput
    }
  }
}
</script>

<style scoped>
</style>
