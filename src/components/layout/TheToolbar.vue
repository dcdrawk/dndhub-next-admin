<template>
  <div class="px-4 bg-primary shadow sticky top-0 border-b border-gray py-3 text-white">
    <div class="container mx-auto flex items-center justify-between">
      <div class="text-xl font-semibold">
        {{ $route.name }}
      </div>

      <div v-if="user">
        <span class="font-semibold mr-4">
          Welcome, {{ userDisplayName }}
        </span>
        <a
          class="underline cursor-pointer inline-block"
          @click="signOut"
        >
          Sign Out
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, inject } from 'vue'
import { useStore } from 'vuex'

export default {
  // Name
  name: 'TheToolbar',

  setup () {
    const store = useStore()
    const user = computed(() => store.state.user)
    const userDisplayName = computed(() => user.value?.displayName)
    const firebase = inject('firebase')

    async function signOut () {
      try {
        await firebase.auth().signOut()
        console.log('signed out')
      } catch (error) {
        console.error(error)
      }
    }

    return {
      signOut,
      user,
      userDisplayName
    }
  }
}
</script>

<style scoped>
</style>
