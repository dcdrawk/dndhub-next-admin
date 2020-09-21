<template>
  <div class="home container mx-auto">
    <h1 class="text-3xl">
      Create Account
    </h1>

    <VeeForm
      ref="veeForm"
      v-slot="{ handleSubmit }"
      autocomplte="off"
      @submit="onSubmit"
    >
      <!-- <form @submit="handleSubmit(onSubmit)"> -->
      <AppInput
        name="email-new"
        autocomplete="new-password"
        placeholder="Email"
        rules="required|email"
      />

      <AppInput
        name="password"
        placeholder="Password"
        type="password"
        autocomplete="new-password"
        rules="required"
      />

      <AppInput
        name="confirmPassword"
        placeholder="Confirm Password"
        type="password"
        autocomplete="new-password"
        rules="required|confirmed:password"
      />
      <p @click="handleSubmit()">
        Test
      </p>
      <!-- <input
        type="Submit"
        value="Submit"
      > -->

      <!-- <button>Subdsadasdmit</button> -->
      <AppButton>
        Create Account
      </AppButton>
      <!-- </form> -->
    </VeeForm>
  </div>
</template>

<script>
// @ is an alias to /src
import { Form as VeeForm } from 'vee-validate'
import AppInput from '@/components/inputs/AppInput'
import AppButton from '@/components/buttons/AppButton'
import * as yup from 'yup'

export default {
  name: 'CreateAccount',

  components: {
    AppInput,
    AppButton,
    VeeForm
  },

  setup () {
    return {
      formSchema: yup.object().shape({
        // Email: yup.string().required(' This field is required').email('Must be a valid email'),
        Password: yup.string().required('This field is required')
      })
    }
  },

  methods: {
    onSubmit (values) {
      console.log('SUBMITT??!?!?!?!?!?!?!??!!?!')
      // Submit values to API...
      console.log(values)
      console.log(this.$refs)
    }
  }
}
</script>
