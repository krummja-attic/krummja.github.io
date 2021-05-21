<template>
  <div class="title-block">
    <h1>Jonathan Crum</h1>
    <p id="description">
      is writing, researching, and programming.
    </p>
  </div>
</template>

<script>
export default {
  props: {
    desc: {
      type: Boolean,
      default: true
    }
  },
  mounted () {
    const description = document.getElementById('description');
    if (this.desc === true) {
      description.style.visibility = 'visible';
    } else {
      description.style.visibility = 'hidden';
    }
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Yellowtail&display=swap');

.title-block {
  @apply flex flex-col;

  .description {
    text-align: center;
    font-family: 'Raleway', sans-serif;
    font-size: 10pt;
  }

  .emph {
    font-weight: bold;
  }

  h1 {
    text-align: center;
    font-family: 'Yellowtail', cursive;
    font-size: 30pt;
    font-weight: 700;
  }
}

@screen xl {
  .title-block {
    @apply col-start-2 col-end-8;

    margin-top: 40px;

    #description {
      margin: -30px 0 0 80px;

      text-align: left;
      font-family: 'Raleway', sans-serif;
      font-size: 18pt;
    }

    .emph {
      font-weight: bold;
    }

    h1 {
      margin-left: 10px;

      text-align: left;
      font-family: 'Yellowtail', cursive;
      font-size: 72pt;
      font-weight: 700;
    }

    .contacts {
      @apply flex flex-row;

      height: 60px;
      width: 100%;
      margin-top: 100px;
      justify-content: space-evenly;

      span {
        margin-left: 20px;
      }
    }
  }
}
</style>
