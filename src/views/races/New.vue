<template>
  <div class="container mx-auto">
    <div>New Race</div>

    <AppForm
      :fields="formFields"
      @input="handleInput"
    />

    <div class="flex">
      <AppButton
        class="mr-2"
        bg-color="gray"
        text-color="black"
        flat
      >
        Create
      </AppButton>
      <AppButton>
        Create
      </AppButton>
    </div>
  </div>
</template>

<script>
import { markRaw, ref } from 'vue'
import AppButton from '@/components/buttons/AppButton'
import AppForm from '@/components/forms/AppForm'
import AppInput from '@/components/inputs/AppInput'
import AppTextArea from '@/components/inputs/AppTextArea'

export default {
  // Name
  name: 'Races',

  components: {
    AppButton,
    AppForm
  },

  setup () {
    const raceData = ref([])
    const rawInput = markRaw(AppInput)
    const rawTextArea = markRaw(AppTextArea)

    const formFields = ref([
      {
        width: 'full',
        placeholder: 'Name',
        component: rawInput,
        value: ''
      },
      {
        width: 'full',
        placeholder: 'Description',
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

    // const firebase = inject('firebase')

    // async function getRaces () {
    //   const raceRef = await firebase.database().ref('/gameData/races')
    //   raceRef.on('value', (snapshot) => {
    //     raceData.value = (snapshot.val()) || []
    //   })
    // }

    // async function addDummyRace () {
    //   await firebase.database().ref('/gameData/races').push({
    //     name: 'Halfling',
    //     speed: '25'
    //   })
    // }

    // getRaces()

    return {
      formFields,
      handleInput,
      raceData
      // addDummyRace
    }
  }
}
</script>

<style scoped>
</style>
