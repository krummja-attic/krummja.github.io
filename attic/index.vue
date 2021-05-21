<template>
  <div class="layout-grid">
    <TitleBlock />
    <ContactBlock />
    <GardenBlock :articles=articles />
  </div>
</template>

<script>
import TitleBlock from '@/components/TitleBlock';
import ContactBlock from '@/components/ContactBlock';
import GardenBlock from '@/components/GardenBlock';

export default {
  layout: 'default',
  components: {
    TitleBlock,
    ContactBlock,
    GardenBlock
  },
  async fetch() {
    // const articles = await $content('articles', params.slug)
    //   .only(['title', 'createdAt', 'growth', 'img', 'slug'])
    //   .where({ createdAt: { $between: [startDate.valueOf(), endDate.valueOf()] }})
    //   .sortBy('createdAt')
    //   .fetch()

    let query = await this.$content("articles").sortBy("createdAt");
    if (this.startDate !== "" || this.endDate !== "") {
      const filterStartDate = new Date(this.startDate).valueOf();
      const filterEndDate = new Date(this.endDate).valueOf();
      query.where({
        createdAt: {
          $and: [{ $gte: filterStartDate }, { $lte: filterEndDate }]
        }
      });
    }

    const articles = await query.fetch();
    this.articles = articles;
  },
  data () {
    let now = new Date.now()
    let startDate = new Date.now()

    return {
      startDate: "2021-03-25",
      endDate: "2021-03-29",
      articles: []
    }
  }
}
</script>
