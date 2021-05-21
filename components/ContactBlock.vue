<template>
  <div class="contact-block">
    <img src="portrait.png">
  </div>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@500&display=swap');

@screen xs {
  .contact-block {
    @apply flex flex-row;

    justify-content: space-around;
    padding: 40px;
    img {
      max-width: 300px;
    }
  }
}

@screen xl {
  .contact-block {
    @apply col-start-8 col-end-12 items-end;
  }
}
</style>
