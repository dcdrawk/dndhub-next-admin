<template>
  <div>Races:</div>
  <div>
    {{ raceData }}
  </div>
  <button @click="addDummyRace">
    Add Race
  </button>
</template>

<script>
import { inject, ref } from 'vue'
export default {
  // Name
  name: 'Races',

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
