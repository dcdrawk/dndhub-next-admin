<template>
  <div class="app">
    <router-view/>
  </div>
</template>

<style>
@tailwind base;

@tailwind components;

@tailwind utilities;

#app {
  @apply bg-gray;
  @apply min-h-screen;
}
</style>
