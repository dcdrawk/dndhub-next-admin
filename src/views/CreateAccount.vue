<template>
  <div class="home container mx-auto">
    <h1 class="text-3xl">
      Create Account
    </h1>

    <AppInput
      placeholder="Email"
    />

    <AppInput
      placeholder="Password"
      type="password"
    />

    <AppButton>
      Create Account
    </AppButton>
  </div>
</template>

<script>
// @ is an alias to /src
import AppInput from '@/components/inputs/AppInput'
import AppButton from '@/components/buttons/AppButton'

export default {
  name: 'Home',
  components: {
    AppInput,
    AppButton
    // HelloWorld
  }
}
</script>
