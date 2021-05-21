<template>
  <div class="contact-block">
    <div class="counter">
      <div class="rotate">
        <h2>testing!</h2>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@500&display=swap');

.contact-block {
  .counter {
    background-color: rgba(255, 0, 0, 0.1);
    width: 300px;
    height: 300px;
    animation: counter 30s infinite linear;

    .rotate {
      width: 75px;
      height: 75px;
      background-color: $nero;
      color: $papier;
      font-weight: 700;
      display: inline-block;
      border-radius: 50%;
      animation: rotation 30s infinite linear;

      h2 {
        padding-top: 23px;
      }
    }
  }
}

@keyframes counter {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-359deg);
  }
}

@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
</style>
