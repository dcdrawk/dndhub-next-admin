<template>
  <div class="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',

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
@tailwind base;

@tailwind components;

@tailwind utilities;

#app {
  @apply bg-lightGray;
  @apply min-h-screen;
  @apply shadow;
}
</style>
