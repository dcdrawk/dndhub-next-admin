<template>
  <div class="mb-2">
    <Field
      v-slot="{ field, errorMessage }"
      :name="name"
      :rules="rules"
    >
      <input
        v-bind="field"
        :placeholder="placeholder"
        :value="modelValue"
        :type="type"
        :name="name"
        :autocomplete="autocomplete"
        class="p-2 rounded border-gray border w-full"
        @input="$emit('update:modelValue', $event.target.value)"
      >

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

  emits: ['input', 'update:modelValue']
}
</script>

<style scoped>
</style>
