<template>
  <div class="pt-20 container max-w-96 px-4 sm:px-0 mx-auto">
    <h1 class="text-2xl text-center mb-4">
      Create Account
    </h1>

    <VeeForm
      ref="veeForm"
      autocomplte="off"
      @submit="createAccount"
    >
      <!-- <form @submit="handleSubmit(onSubmit)"> -->
      <AppInput
        v-model="userState.displayName"
        name="display-name"
        autocomplete="new-password"
        placeholder="Display Name"
        rules="required"
      />

      <AppInput
        v-model="userState.email"
        name="email-new"
        autocomplete="new-password"
        placeholder="Email"
        rules="required|email"
      />

      <AppInput
        v-model="userState.password"
        name="password"
        placeholder="Password"
        type="password"
        autocomplete="new-password"
        rules="required"
      />

      <AppInput
        v-model="userState.confirmPassword"
        name="confirmPassword"
        placeholder="Confirm Password"
        type="password"
        autocomplete="new-password"
        rules="required|confirmed:password"
      />

      <AppButton
        :loading="loading"
      >
        Create Account
      </AppButton>

      <AppAlert v-if="errorMessage">
        {{ errorMessage }}
      </AppAlert>
    </VeeForm>
  </div>
</template>

<script>
// @ is an alias to /src
import { Form as VeeForm } from 'vee-validate'
import AppInput from '@/components/inputs/AppInput'
import AppButton from '@/components/buttons/AppButton'
import AppAlert from '@/components/notifications/AppAlert'
// import * as yup from 'yup'
import { reactive, ref, inject } from 'vue'

export default {
  name: 'CreateAccount',

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
    // console.log(context)
    const userState = reactive({
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    })

    async function createAccount () {
      try {
        console.dir(context)
        loading.value = true
        errorMessage.value = null
        const data = await firebase
          .auth()
          .createUserWithEmailAndPassword(
            userState.email,
            userState.password
          )
        await data.user.updateProfile({
          displayName: userState.displayName
        })

        console.log('Sign In Successfull!')
      } catch (error) {
        console.error(error)
        errorMessage.value = error.message
      } finally {
        loading.value = false
      }
    }

    return {
      userState,
      createAccount,
      errorMessage,
      loading
      // formSchema: yup.object().shape({
      //   // Email: yup.string().required(' This field is required').email('Must be a valid email'),
      //   Password: yup.string().required('This field is required')
      // })
    }
  },

  methods: {
    // async createAccount (values) {
    //   try {
    //     await this.$nextTick()
    //     console.dir(this.$firebase)
    //     console.dir('create...')
    //     const data = await this.$firebase
    //       .auth()
    //       .createUserWithEmailAndPassword(
    //         this.userState.email,
    //         this.userState.password
    //       )
    //     await data.user.updateProfile({
    //       displayName: this.displayName
    //     })
    //     console.dir(data)
    //   } catch (error) {
    //     console.error(error)
    //   }
    // console.log('SUBMITT??!?!?!?!?!?!?!??!!?!')
    // // Submit values to API...
    // console.log(values)
    // console.log(this.$refs)
    // }
  }
}
</script>
