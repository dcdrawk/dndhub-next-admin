<template>
  <AppShell>
    <router-view />
  </AppShell>
</template>

<script>
import AppShell from '@/components/layout/AppShell.vue'

export default {
  name: 'App',

  components: {
    AppShell
  },

  computed: {
    user () {
      return this.$store.state.user
    }
  },

  // Mounted
  mounted () {
    this.initFirebase()
  },

  // Methods
  methods: {
    /**
     * @function initFirebase
     * @desc initialize firebase, watch auth state for changes
     * if there is a user, store that in Vuex
     */
    initFirebase () {
      this.$firebase.auth().onAuthStateChanged(user => {
        if (user) {
          console.log('a user has signed in!')
          this.$store.commit('setUser', user)
          // if (this.characterId) CharacterCRUD.select(this.characterId)
        } else {
          console.log('no user is signed in...')
          this.$store.commit('setUser', null)
        }
      })
    }
  }
}
</script>

<style>
/**
 * Tailwind
 */
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";

/**
 * Custom CSS
 */
@import './assets/css/main.css';

#app {
  @apply bg-gray-100;
  @apply min-h-screen;
  @apply shadow;
}
</style>
