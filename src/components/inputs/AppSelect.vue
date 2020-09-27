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
      :class="$attrs.class"
      :name="name"
    >
      <select
        :id="id || name"
        v-bind="field"
        :value="modelValue"
        :name="name"
        :class="inputStyles"
        class="h-12"
        @change="handleInput($event)"
      >
        <option
          v-for="(item, index) in items"
          :key="index"
          :value="itemValue ? item[itemValue] : item"
        >
          {{ itemText ? item[itemText] : item }}
        </option>
      </select>
    </AppInputWrapper>
  </Field>
</template>

<script>
import { Field } from 'vee-validate'
import { inputStyles } from './input-styles'
import AppInputWrapper from './AppInputWrapper'

export default {
  // Name
  name: 'AppSelect',

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

    items: {
      type: Array,
      default: () => [],
      required: false
    },

    itemText: {
      type: String,
      default: ''
    },

    itemValue: {
      type: String,
      default: ''
    }
  },

  emits: ['input', 'update:modelValue'],

  setup (props, context) {
    function handleInput (event) {
      console.log(event)
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
