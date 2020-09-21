<template>
  <div class="mb-2">
    <Field
      v-slot="{ field, errorMessage }"
      :name="name"
      :value="value"
      :rules="rules"
    >
      <input
        v-bind="field"
        :placeholder="placeholder"
        :type="type"
        rules="required"
        :autocomplete="autocomplete"
        @input="$emit('input')"
      >

      <p class="text-red">
        {{ errorMessage }}
      </p>
      <!-- <p v-if="errors.length"> -->
      <!-- {{ errors }}! -->
      <!-- </p> -->
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
    value: {
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
  emits: ['input']
}
</script>

<style scoped>
</style>
