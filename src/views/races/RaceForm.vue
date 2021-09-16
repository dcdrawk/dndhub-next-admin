<template>
  <div class="container mx-auto pt-10">
    <AppForm
      :fields="formFields"
      @input="handleInput"
    />
  </div>
</template>

<script>
import { markRaw, ref } from 'vue'
// import AppButton from '@/components/buttons/AppButton'
import AppForm from '@/components/forms/AppForm.vue'
import AppInput from '@/components/inputs/AppInput.vue'
// import AppAbilityScoreInput from '@/components/inputs/AppAbilityScoreInput'
import AppTextArea from '@/components/inputs/AppTextArea.vue'
// import RaceSchema from '@/game-data/race-schema'

export default {
  // Name
  name: 'RaceForm',

  components: {
    AppForm
  },

  setup () {
    const rawInput = markRaw(AppInput)
    const rawTextArea = markRaw(AppTextArea)

    const formFields = ref([
      {
        width: 'full',
        label: 'Name',
        placeholder: 'Name',
        name: 'race-name',
        field: 'name',
        component: rawInput,
        value: ''
      },

      {
        width: '1/2',
        label: 'Age',
        placeholder: '',
        name: 'age',
        field: 'age',
        component: rawTextArea,
        value: ''
      },

      {
        width: '1/2',
        label: 'Speed',
        placeholder: '',
        name: 'Speed',
        field: 'Speed',
        component: rawTextArea,
        value: ''
      },

      {
        width: 'full',
        label: 'Alignment',
        placeholder: '',
        name: 'alignment',
        field: 'alignment',
        component: rawTextArea,
        value: ''
      },

      {
        width: 'full',
        label: 'Size',
        placeholder: '',
        name: 'size',
        field: 'size',
        component: rawInput,
        value: ''
      },

      {
        width: 'full',
        label: 'Weight',
        placeholder: '',
        name: 'weight',
        field: 'weight',
        component: rawInput,
        value: ''
      }
    ])

    function handleInput ({ field, value }) {
      field.value = value
    }

    return {
      formFields,
      handleInput
      // raceData,
      // testData
      // create
      // addDummyRace
    }
  }
}
</script>

<style scoped>
</style>
