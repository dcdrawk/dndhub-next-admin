<template>
  <div class="container mx-auto pt-10">
    {{ raceData }}
    <AppForm
      :fields="formFields"
      @input="handleInput"
    />

    <AppAbilityScoreInput />

    <!-- {{ formFields }} -->

    <div class="flex">
      <AppButton
        class="mr-2"
        @click="create"
      >
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
import { computed, inject, markRaw, ref } from 'vue'
import AppButton from '@/components/buttons/AppButton'
import AppForm from '@/components/forms/AppForm'
import AppInput from '@/components/inputs/AppInput'
import AppAbilityScoreInput from '@/components/inputs/AppAbilityScoreInput'
import AppTextArea from '@/components/inputs/AppTextArea'

export default {
  // Name
  name: 'NewRace',

  components: {
    AppButton,
    AppAbilityScoreInput,
    AppForm
  },

  setup () {
    const testData = ref('')
    // const raceData = ref([])
    const rawInput = markRaw(AppInput)
    const rawTextArea = markRaw(AppTextArea)
    const firebase = inject('firebase')

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
      // {
      //   width: '1/2',
      //   placeholder: 'Left',
      //   component: rawInput,
      //   value: ''
      // },
      // {
      //   width: '1/2',
      //   placeholder: 'Right',
      //   component: rawInput,
      //   value: ''
      // }
    ])

    const raceData = computed(() => {
      const value = formFields.value.reduce((acc, item) => {
        console.log(item)
        // console.log(item)
        acc[item.field] = item.value
        return acc
      }, {})
      return value
    })

    function handleInput ({ field, value }) {
      field.value = value
    }

    async function create () {
      // debugger
      // console.log(raceData, firebase)
      await firebase.database().ref('/gameData/races').push(raceData.value)
    }

    return {
      formFields,
      handleInput,
      raceData,
      testData,
      create
      // addDummyRace
    }
  }
}
</script>

<style scoped>
</style>
