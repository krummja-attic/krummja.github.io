<template>
  <div class="layout-grid">
    <div class="col-start-2 col-end-12 text-4xl">
      Under Construction
    </div>
    <!-- <TitleBlock :desc=false />
    <div class="flavor">
      <div class="first">Theoretical linguist</div>
      <div class="second">Front-end web developer </div>
      <div class="third">Hobbyist game programmer</div>
    </div> -->
  </div>
</template>

<script>
import TitleBlock from '@/components/TitleBlock';

export default {
  layout: 'default',
  components: {
    TitleBlock
  }
}
</script>

<style lang="scss" scoped>
.flavor {
  @apply col-start-2 col-end-3;
  margin-top: -40px;
  text-align: left;
  font-family: 'Raleway', sans-serif;
  font-size: 14pt;
}

.first {
  margin: 30px 0 10px 40px;
  padding: 10px;
}

.second {
  margin: 10px 0 10px 40px;
  padding: 10px;
}

.third {
  margin: 10px 0 10px 40px;
  padding: 10px;
}

@screen md {
  .flavor {
    @apply col-start-2 col-end-8;
    margin-top: -40px;
    padding-left: 50px;
    text-align: left;
    font-family: 'Raleway', sans-serif;
    font-size: 20pt;
  }

  .first {
    margin: 20px 0 20px 50px;
    padding: 10px 0;
  }

  .second {
    margin: 20px 0 20px 100px;
    padding: 10px 0;
  }

  .third {
    margin: 20px 0 20px 150px;
    padding: 10px 0;
  }
}
</style>
