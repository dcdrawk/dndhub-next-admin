<template>
  <div class="app">
    <router-view />
  </div>
</template>

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
