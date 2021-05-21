<template>
  <div class="garden-block">
    <h2>The Digital Garden</h2>
    <span class="description">
      Cultivated articles on a variety of topics, usually oriented around a clear thesis.
    </span>

    <NuxtLink
    v-for="article of articles"
    :key="article.slug"
    :to="{ name: 'garden-slug', params: { slug: article.slug } }"
    class="plot-wrapper"
    >
      <GardenPlot :article=article />
    </NuxtLink>
  </div>
</template>

<script>
import GardenPlot from '@/components/GardenPlot'

export default {
  components: {
    GardenPlot
  },
  props: {
    articles: Array
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@500&display=swap');

.garden-block {
  @apply col-start-2 col-end-6;

  display: flex;
  flex-flow: column;
  margin-top: 50px;
  margin-bottom: 50px;

  .plot-wrapper {
    width: 100%;
  }

  h2 {
    text-align: left;
    font-family: 'Raleway', sans-serif;
    font-size: 24pt;
    margin-bottom: 20px;
  }

  .description {
    text-align: left;
    font-family: 'Raleway', sans-serif;
    font-size: 14pt;
    margin-bottom: 50px;
  }
}
</style>
