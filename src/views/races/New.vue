<template>
  <div class="container mx-auto pt-10">
    <AppForm
      :fields="formFields"
      @input="handleInput"
    />

    <AppSelect
      v-model="testData"
      :items="['foo', 'bar']"
    />

    <div class="flex">
      <AppButton class="mr-2">
        Create
      </AppButton>
      <AppButton
        bg-color="white"
        outlined
        text-color="black"
        flat
      >
        Cancel
      </AppButton>
    </div>
  </div>
</template>

<script>
import { markRaw, ref } from 'vue'
import AppButton from '@/components/buttons/AppButton'
import AppForm from '@/components/forms/AppForm'
import AppInput from '@/components/inputs/AppInput'
import AppSelect from '@/components/inputs/AppSelect'
import AppTextArea from '@/components/inputs/AppTextArea'

export default {
  // Name
  name: 'NewRace',

  components: {
    AppButton,
    AppSelect,
    AppForm
  },

  setup () {
    const testData = ref('')
    const raceData = ref([])
    const rawInput = markRaw(AppInput)
    const rawTextArea = markRaw(AppTextArea)

    const formFields = ref([
      {
        width: 'full',
        label: 'Name',
        placeholder: 'Name',
        name: 'race-name',
        component: rawInput,
        value: ''
      },
      {
        width: 'full',
        label: 'Alignment',
        placeholder: '',
        name: 'alignment',
        component: rawTextArea,
        value: ''
      },
      {
        width: '1/2',
        placeholder: 'Left',
        component: rawInput,
        value: ''
      },
      {
        width: '1/2',
        placeholder: 'Right',
        component: rawInput,
        value: ''
      }
    ])

    function handleInput ({ field, value }) {
      console.log('handle form input')
      console.log(field, value)
      field.value = value
    }

    return {
      formFields,
      handleInput,
      raceData,
      testData
      // addDummyRace
    }
  }
}
</script>

<style scoped>
</style>
