<template>
  <div class="px-4 bg-blue-600 shadow sticky top-0 py-3 text-white">
    <div class="mx-auto flex items-center justify-between">
      <div class="text-xl font-display">
        DNDHub Admin - {{ $route.name }}
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
  name: 'AppToolbar',

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

<style lang="postcss" scoped>
</style>
