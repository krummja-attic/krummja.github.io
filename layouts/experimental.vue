<template>
  <div class="exp-container mx-auto bg-transparent flex flex-col">
    <div class="wrapper">

      <div class="logo-wrapper h-40 flex flex-row">
        <img class="logo md:w-3/5 lg:w-1/2 xl:w-2/5"
             src="/logo_dark.svg">
      </div>

      <Nuxt />
    </div>
  </div>
</template>

<style scoped lang="scss">
// Cormorant
@import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap");

// Cormorant Unicase
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Unicase:wght@300;400;500;600;700&display=swap');

html {
  font-family: "Cormorant Garamond", serif;
  background-color: $blush;
  color: $nero;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.exp-container {
  height: 100%;
  text-align: center;
}

.wrapper {
  width: 100%;
  height: 100%;
}

.title-wrapper {
  font-family: 'Cormorant Unicase', serif;
  font-weight: 700;
  color: $nero;
}

.button {
  font-size: 24pt;
  width: 200px;

  &:hover {
    text-shadow: 5px 5px $accent-purple-1;
  }
}

.logo-wrapper {
  margin: 2rem;
}
</style>
