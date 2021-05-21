<template>
  <div class="layout-grid header-wrapper">
    <div class="header flex flex-row">
      <NuxtLink to="/">
        <div class="logo-wrapper">
          <img class="logo" src="/logo.svg">
          <img class="logo-alt" src="/logo_purple.svg">
        </div>
      </NuxtLink>

      <div class="navbar flex flex-row">
        <NuxtLink
          class="navitem"
          active-class="navitem-active"
          :class="{'navitem-secondary': this.$route.path != '/'}"
          to="/">
            home
        </NuxtLink>

        <NuxtLink
          class="navitem"
          active-class="navitem-active"
          :class="{'navitem-secondary': this.$route.path != '/gardenIndex'}"
          to="/gardenIndex">
            digital garden
        </NuxtLink>

        <NuxtLink
          class="navitem"
          active-class="navitem-active"
          :class="{'navitem-secondary': this.$route.path != '/notebookIndex'}"
          to="/notebookIndex">
            notebook
        </NuxtLink>

        <NuxtLink
          class="navitem"
          active-class="navitem-active"
          :class="{'navitem-secondary': this.$route.path != '/about'}"
          to="/about">
            about
        </NuxtLink>
      </div>
    </div>

    <div class="mobile-menu">
      <NuxtLink to="/">
        <div class="logo-wrapper">
          <img class="logo" src="/logo_purple.svg">
        </div>
      </NuxtLink>

      <div class="mobile-nav">
        <button @click="showMobileMenu" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
          <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    showMobileMenu () {
      this.$emit('showMobileMenu');
    }
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@200;500;700&display=swap');

.header {
  position: absolute;
  float: left;
  left: 0;
  bottom: 0;
  width: 0;
  height: 0;
  opacity: 0;
}

.mobile-menu {
  @apply flex flex-row;
  margin-top: 16px;
  margin-bottom: 20px;
  position: relative;
  opacity: 1;
  justify-content: space-between;

  .logo-wrapper {
    @apply flex flex-row;
    width: 60px;
  }

  .mobile-nav {
    position: absolute;
    top: 0;
    right: 0;
  }
}

@screen xl {
  .mobile-menu {
    position: absolute;
    float: left;
    left: 0;
    bottom: 10;
    width: 0;
    height: 0;
    opacity: 0;
  }

  .header {
    @apply col-start-2 col-end-12;
    @apply mt-3 mb-10;

    position: relative;
    float: unset;
    left: unset;
    bottom: unset;
    width: unset;
    height: unset;
    opacity: 1;

    height: 68px;
    justify-content: space-between;
    border-bottom: 2px solid rgba(42, 42, 42, 0.5);

    .logo-wrapper {
      position: relative;
      height: auto;
      width: 100px;
    }

    .logo-alt {
      opacity: 0;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 99;

      transition: opacity 0.2s;
    }

    .logo-wrapper:hover .logo-alt {
      opacity: 1;
    }

    .navbar {
      position: relative;
      margin-top: 20px;
      height: 24px;
      width: 550px;
      justify-content: space-between;

      font-family: 'Raleway', sans-serif;
      font-size: 20pt;

      .navitem {
        @apply transition duration-200 ease-in-out;

        &:hover {
          text-shadow: 1px 0px 0px black;
        }
      }

      .navitem-active {
        font-weight: 700;
        box-shadow:
          0 4px 0 0 $papier,
          0 10px 0 0 $accent-purple-3;
      }

      .navitem-secondary {
        font-weight: 500;
        box-shadow: none;
      }
    }
  }
}
</style>
