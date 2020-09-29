<template>
  <div class="app">
    <TheToolbar />
    <router-view />
  </div>
</template>

<script>
import TheToolbar from '@/components/layout/TheToolbar'

export default {
  name: 'App',

  components: {
    TheToolbar
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
@import "tailwindcss/base";
/* @import "./custom-base-styles.css"; */

@import "tailwindcss/components";
/* @import "./custom-components.css"; */

@import "tailwindcss/utilities";
@import './assets/css/main.css';
/* @import "./custom-utilities.css"; */

/* @import './assets/css/tailwind.css';
@tailwind base;

@tailwind components;

@tailwind utilities; */
#app {
  @apply bg-lightGray;
  @apply min-h-screen;
  @apply shadow;
}

</style>
