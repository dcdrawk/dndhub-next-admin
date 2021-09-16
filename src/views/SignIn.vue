<template>
  <div class="pt-20 container max-w-96 px-4 sm:px-0 mx-auto">
    <!-- <h3 class="text-center mb-4">
      Sign In
    </h3> -->

    <VeeForm
      ref="veeForm"
      autocomplte="off"
      @submit="signIn"
    >
      <AppInput
        id="email"
        v-model="userState.email"
        label="Email"
        name="email"
        placeholder="Email"
        rules="required|email"
      />

      <AppInput
        id="password"
        v-model="userState.password"
        label="Password"
        name="password"
        placeholder="Password"
        type="password"
        rules="required"
      />

      <AppAlert v-if="errorMessage">
        {{ errorMessage }}
      </AppAlert>

      <AppButton
        :loading="loading"
        type="submit"
        class="mr-2 w-full"
      >
        Sign In
      </AppButton>
    </VeeForm>

    <p>
      Don't have an account?
      <router-link
        to="/create-account"
      >
        Create one.
      </router-link>
    </p>
  </div>
</template>

<script>
import { reactive, ref, inject } from 'vue'
import { Form as VeeForm } from 'vee-validate'
import AppInput from '@/components/inputs/AppInput.vue'
import AppButton from '@/components/buttons/AppButton.vue'
import AppAlert from '@/components/notifications/AppAlert.vue'

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
    // const router = inject('router')

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
