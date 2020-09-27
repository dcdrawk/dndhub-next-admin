<template>
  <div class="w-64">
    <AppLabel class="reeeeeeee">
      {{ label }}
    </AppLabel>

    <div
      v-for="(input, index) in abilityScoreInputs"
      :key="index"
      class="flex"
    >
      <AppButton
        class="w-12 mr-2"
        @click="removeAbilityScoreIncrease(index)"
      >
        X
      </AppButton>

      <AppSelect
        class="mr-2"
        :model-value="input.abilityScoreName"
        :items="abilityScores"
        @input="input.abilityScoreName = $event"
      />

      <AppInput
        class="w-20"
        :model-value="input.value"
        type="number"
        @input="input.value = $event"
      />
    </div>

    <AppButton @click="addAbilityScoreIncrease">
      Add Ability Score
    </AppButton>
  </div>
</template>

<script>
import AppLabel from './AppLabel'
import AppSelect from './AppSelect'
import AppInput from './AppInput'
import AppButton from '@/components/buttons/AppButton'
import { ref } from 'vue'
import abilityScores from '@/game-data/ability-scores'

export default {
  // Name
  name: 'AppAbilityScoreInput',

  // Components
  components: {
    AppLabel,
    AppButton,
    AppInput,
    AppSelect
  },

  // Mixins
  mixins: [],

  // Props
  props: {
    label: {
      type: String,
      default: 'Ability Score Increase'
    },

    /**
     * e.g. { strength: 1 }
     */
    value: {
      type: Object,
      default: () => {}
    }
  },

  setup (props) {
    const defaultAbilityScore = { abilityScoreName: '', value: 0 }
    const abilityScoreInputs = ref(Array(1).fill(defaultAbilityScore))

    function addAbilityScoreIncrease () {
      abilityScoreInputs.value.push({ ...defaultAbilityScore })
    }

    function removeAbilityScoreIncrease (index) {
      abilityScoreInputs.value.splice(index, 1)
    }

    return {
      abilityScores,
      abilityScoreInputs,
      addAbilityScoreIncrease,
      removeAbilityScoreIncrease
    }
  }
}
</script>

<style scoped>
</style>
