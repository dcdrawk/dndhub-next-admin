<template>
  <AppToolbar />
  <div class="app-shell">
    <AppSideNav />
    <div class="app-content flex-grow">
      <router-view />
    </div>
  </div>
</template>

<script>
import AppToolbar from '@/components/layout/AppToolbar.vue'
import AppSideNav from '@/components/layout/AppSideNav.vue'
// import { computed } from 'vue'

export default {
  name: 'App',

  components: {
    AppToolbar,
    AppSideNav
  }

  // setup () {
  //   return {
  //     customer: computed(() => this.$store.state.user)
  //   }
  // }

  // computed: {
  //   user () {
  //     return this.$store.state.user
  //   }
  // }
}
</script>

<style>
.app-shell {
  @apply flex w-full;
  padding-left: 320px;
}
</style>
