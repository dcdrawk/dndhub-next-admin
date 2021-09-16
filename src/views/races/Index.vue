<template>
  <div class="container mx-auto py-4">
    <div>Races:</div>
    <AppButton to="/races/new">
      New Race
    </AppButton>
    <div class="border-t border-l border-r border-gray shadow">
      <div
        v-for="(race, index) in races"
        :key="index"
        class="bg-beige border-b border-gray p-2 cursor-pointer"
      >
        <div class="font-semibold ">
          {{ race.name }}
        </div>
      </div>
      <!-- {{ raceData }} -->
    </div>
  </div>
</template>

<script>
import { inject, ref } from 'vue'
import AppButton from '@/components/buttons/AppButton.vue'

export default {
  // Name
  name: 'Races',

  components: {
    AppButton
  },

  setup () {
    const races = ref([])

    const firebase = inject('firebase')

    async function getRaces () {
      const raceRef = await firebase.database().ref('/gameData/races')
      raceRef.on('value', (snapshot) => {
        races.value = (snapshot.val()) || []
      })
    }

    // async function addDummyRace () {
    //   await firebase.database().ref('/gameData/races').push({
    //     name: 'Halfling',
    //     speed: '25'
    //   })
    // }

    getRaces()

    return {
      races
      // addDummyRace
    }
  }
}
</script>

<style scoped>
</style>
