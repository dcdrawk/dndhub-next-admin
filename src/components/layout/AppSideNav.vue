<template>
  <div class="app-side-nav">
    <AppList class="app-side-nav__list">
      <AppListItem
        v-for="(item, index) in navItems"
        :key="index"
        :to="item.path"
      >
        {{ item.text }}
      </AppListItem>
    </AppList>
  </div>
</template>

<script>
import AppList from '@/components/lists/AppList.vue'
import AppListItem from '@/components/lists/AppListItem.vue'

export default {
  // Name
  name: 'AppSideNav',

  // Components
  components: {
    AppList,
    AppListItem
  },

  // Mixins
  mixins: [],

  // Props
  props: {
    myProp: {
      type: String,
      default: ''
    }
  },

  // Setup
  setup (props, context) {
    return {
      navItems: [{
        text: 'Races',
        path: '/races'
      }]
    }
  }
}
</script>

<style lang="postcss" scoped>
.app-side-nav {
  @apply fixed shadow-md bg-white;

  left: 0;
  top: 52px;
  width: 320px;
  min-height: calc(100vh - 55px);
  max-height: calc(100vh - 55px);
  overflow-y: auto;

  &__list {
    /* height: 100%; */
  }
}

</style>
