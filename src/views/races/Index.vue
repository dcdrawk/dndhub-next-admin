<template>
  <div class="container mx-auto">
    <div>Races:</div>
    <AppButton @click="$router.push('/races/new')">
      New Race
    </AppButton>
    <div>
      {{ raceData }}
    </div>
  </div>
</template>

<script>
import { inject, ref } from 'vue'
import AppButton from '@/components/buttons/AppButton'

export default {
  // Name
  name: 'Races',

  components: {
    AppButton
  },

  setup () {
    const raceData = ref([])

    const firebase = inject('firebase')

    async function getRaces () {
      const raceRef = await firebase.database().ref('/gameData/races')
      raceRef.on('value', (snapshot) => {
        raceData.value = (snapshot.val()) || []
      })
    }

    async function addDummyRace () {
      await firebase.database().ref('/gameData/races').push({
        name: 'Halfling',
        speed: '25'
      })
    }

    getRaces()

    return {
      raceData,
      addDummyRace
    }
  }
}
</script>

<style scoped>
</style>
