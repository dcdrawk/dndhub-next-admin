<template>
  <div class="mb-2">
    <Field
      v-slot="{ field, errorMessage }"
      :name="name"
      :rules="rules"
    >
      <label
        v-if="label"
        :for="name"
        class="font-semibold block"
      >
        {{ label }}
      </label>

      <textarea
        :id="id || name"
        v-bind="field"
        :placeholder="placeholder"
        :value="modelValue"
        :type="type"
        :name="name"
        :autocomplete="autocomplete"
        rows="5"
        class="p-2 rounded border-gray border w-full h-full block"
        @input="handleInput"
      />

      <p
        v-if="errorMessage"
        class="text-red"
      >
        <small>{{ errorMessage }}</small>
      </p>
    </Field>
  </div>
</template>

<script>
import { Field } from 'vee-validate'

export default {
  // Name
  name: 'AppInput',

  components: {
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
      handleInput
    }
  }
}
</script>

<style scoped>
</style>
