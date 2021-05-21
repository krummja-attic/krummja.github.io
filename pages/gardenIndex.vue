<template>
  <div class="layout-grid">
    <h1 class="col-start-2 col-end-6">The Digital Garden</h1>
    <span class="description">
      This is a cultivated selection of articles and notes on a variety of topics, including linguistics, programming, writing, design - basically anything I'm currently exploring. Some articles are only Seedlings without much to them, some are Budding thoughts and sketches, and yet others are fully developed Evergreen notes with a clear thesis and discussion.
    </span>

    <TagBlock :tags=tags />

    <div class="garden">
      <NuxtLink
      v-for="article of articles"
      :key="article.slug"
      :to="{ name: 'garden-slug', params: { slug: article.slug } }"
      class="plot-wrapper"
      >
        <GardenPlot :article=article />
      </NuxtLink>
    </div>
  </div>
</template>

<script>
import GardenPlot from '@/components/GardenPlot';
import TagBlock from '@/components/TagBlock';

export default {
  layout: 'default',
  components: {
    GardenPlot,
    TagBlock
  },
  async asyncData({ $content, params, store }) {

    const tags = await $content('tags', params.slug)
      .only(['title'])
      .sortBy('createdAt')
      .fetch()

    if (store.state.tags.activeTags.length > 0) {
      const articles = await $content('articles', params.slug)
        .where({ tags: { $contains: store.state.tags.activeTags } })
        .only(['title', 'createdAt', 'growth', 'slug'])
        .sortBy('createdAt')
        .fetch()

      return { articles, tags }
    } else {
      const articles = await $content('articles', params.slug)
        .only(['title', 'createdAt', 'growth', 'slug'])
        .sortBy('createdAt')
        .fetch()

      return { articles, tags }
    }
  },
  beforeMount () {
    this.$store.commit('tags/reset', []);
  }
}
</script>

<style lang="scss" scoped>
h1 {
  margin-top: 40px;
  text-align: left;
  font-family: 'Raleway', sans-serif;
  font-size: 36pt;
  font-weight: 700;
}

.description {
  @apply col-start-2 col-end-8;

  font-family: 'Raleway', sans-serif;
  font-size: 12pt;
  text-align: justify;

  margin-bottom: 10px;
}

.garden {
  @apply col-start-2 col-end-12;

  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin-top: 2em;

  .plot-wrapper {
    width: 265px;
  }
}
</style>
