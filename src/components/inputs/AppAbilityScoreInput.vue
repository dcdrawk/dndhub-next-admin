<template>
  <div class="ability-score-input w-64">
    <AppLabel
      class="mb-4"
    >
      {{ label }}
    </AppLabel>

    <div
      v-for="(item, key, index) in abilityScoreInputs"
      :key="index"
      class="ability-score-input__stat"
    >
      <div class="ability-score-input__name">
        <span>{{ key }}</span>
      </div>

      <AppSelect
        class="ability-score-input__value"
        :items="abilityScoreIncreaseOptions"
        :model-value="item"
        name="ability-score"
        @input="abilityScoreInputs[key] = $event"
      />

      <!-- <AppInput
        class="w-20"
        :model-value="input.value"
        type="number"
        @input="input.value = $event"
      /> -->
    </div>

    <AppSelect
      class="ability-score-input__special"
      label="Special"
      name="ability-score-special"
      :items="specialOptions"
    />

    {{ abilityScoreInputs }}

    <!-- <AppButton @click="addAbilityScoreIncrease">
      Add Ability Score
    </AppButton> -->
  </div>
</template>

<script>
import AppLabel from './AppLabel.vue'
import AppSelect from './AppSelect.vue'
// import AppInput from './AppInput'
// import AppButton from '@/components/buttons/AppButton'
import { ref } from 'vue'
import abilityScores from '@/game-data/ability-scores'

export default {
  // Name
  name: 'AppAbilityScoreInput',

  // Components
  components: {
    AppLabel,
    // AppButton,
    // AppInput,
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
    const defaultAbilityScore = '0'

    const abilityScoreIncreaseOptions = [
      '*',
      '+2',
      '+1',
      '0',
      '-1',
      '-2'
    ]

    const abilityScoreInputs = ref(
      abilityScores.reduce((ac, a) => ({ ...ac, [a]: defaultAbilityScore }), {})
    )

    const specialOptions = [{
      text: 'Two +2\'s',
      value: ''
    }]

    return {
      abilityScores,
      abilityScoreInputs,
      abilityScoreIncreaseOptions,
      specialOptions
    }
  }
}
</script>

<style lang="postcss" scoped>
.ability-score-input {
  &__stat {
    @apply flex capitalize;
  }

  &__name {
    width: 50px;
    @apply flex items-center mb-4;
  }

  &__value {
    width: 100px;
  }
}
</style>
