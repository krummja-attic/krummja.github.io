<template>
  <div class="mobile-header">
    <div class="wrapper">
      <button @click="closeMobileMenu" class="p-2 pb-10 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <div class="mobile-navbar flex flex-col">
        <NuxtLink class="navitem" to="/">home</NuxtLink>
        <NuxtLink class="navitem" to="/gardenIndex">digital garden</NuxtLink>
        <NuxtLink class="navitem" to="/notebookIndex">notebook</NuxtLink>
        <NuxtLink class="navitem" to="/about">about</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    closeMobileMenu () {
      this.$emit('closeMobileMenu');
    }
  }
}
</script>

<style lang="scss" scoped>
.mobile-header {
  position: fixed;
  right: 0;
  width: 100%;
  height: 100vh;
  z-index: 99;

  .wrapper {
    padding-top: 80px;

    background-color: $creme;
    font-family: 'Raleway', sans-serif;
    font-size: 30pt;
    height: 100vh;

    .navitem {
      height: 25%;
    }

    button {
      position: absolute;
      right: 15px;
      top: 10px;
    }
  }
}
</style>
