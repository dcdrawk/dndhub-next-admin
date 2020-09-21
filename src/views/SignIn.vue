<template>
  <div class="pt-20 container max-w-96 px-4 sm:px-0 mx-auto">
    <h1 class="text-2xl text-center mb-4">
      Sign In
    </h1>

    <VeeForm
      ref="veeForm"
      autocomplte="off"
      @submit="signIn"
    >
      <AppInput
        v-model="userState.email"
        name="email"
        placeholder="Email"
        rules="required|email"
      />

      <AppInput
        v-model="userState.password"
        name="password"
        placeholder="Password"
        type="password"
        rules="required"
      />

      <AppButton
        :loading="loading"
      >
        Sign In
      </AppButton>

      <AppAlert v-if="errorMessage">
        {{ errorMessage }}
      </AppAlert>
    </VeeForm>
  </div>
</template>

<script>
import { reactive, ref, inject } from 'vue'
import { Form as VeeForm } from 'vee-validate'
import AppInput from '@/components/inputs/AppInput'
import AppButton from '@/components/buttons/AppButton'
import AppAlert from '@/components/notifications/AppAlert'

export default {
  name: 'SignIn',

  components: {
    AppAlert,
    AppInput,
    AppButton,
    VeeForm
  },

  inject: ['firebase'],

  setup (props, context) {
    const errorMessage = ref('')
    const loading = ref(false)
    const firebase = inject('firebase')

    const userState = reactive({
      email: '',
      password: ''
    })

    async function signIn () {
      try {
        console.dir(context)
        loading.value = true
        errorMessage.value = null
        const data = await firebase
          .auth()
          .signInWithEmailAndPassword(
            userState.email,
            userState.password
          )
        await data.user.updateProfile({
          displayName: userState.displayName
        })

        console.log('Sign In Successfull!')
        console.log(data.user)
      } catch (error) {
        console.error(error)
        errorMessage.value = error.message
      } finally {
        loading.value = false
      }
    }

    return {
      userState,
      signIn,
      errorMessage,
      loading
    }
  }
}
</script>
