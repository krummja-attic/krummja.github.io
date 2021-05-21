<template>
  <div class="layout-grid">
    <TitleBlock />
    <ContactBlock />
    <div class="socials">
      <span>Find me on</span>
      <a href="https://github.com/krummja"><img src="github.webp" /></a>
    </div>
    <GardenBlock :articles=articles />
    <ProjectBlock :projects=projects />
  </div>
</template>

<script>
import TitleBlock from '@/components/TitleBlock';
import ContactBlock from '@/components/ContactBlock';
import GardenBlock from '@/components/GardenBlock';
import ProjectBlock from '@/components/ProjectBlock';

export default {
  layout: 'default',
  components: {
    TitleBlock,
    ContactBlock,
    GardenBlock,
    ProjectBlock
  },
  async asyncData ({ $content, params })
  {
    const articleData = await $content('articles', params.slug)
      .only(['title', 'createdAt', 'growth', 'img', 'slug'])
      .sortBy('createdAt', 'desc')
      .fetch()

    const projectData = await $content('notebook', params.slug)
      .where({ tags: { $containsAny: "Project" } })
      .only(['title', 'createdAt', 'description', 'img', 'slug'])
      .sortBy('createdAt')
      .fetch()

    let articles = []
    let projects = []
    if (articleData.length > 3) {
      for (let i = 0; i <= 3; i++) {
        articles.push(articleData[i]);
      }
    } else {
      articles = articleData
    }

    if (projectData.length > 3) {
      for (let i = 0; i <= 3; i++) {
        projects.push(projectData[i]);
      }
    } else {
      projects = projectData
    }

    return {
      articles,
      projects
    }
  }
}
</script>

<style lang="scss" scoped>
.socials {
  @apply flex flex-row;
  @apply col-start-2 col-end-8;

  text-align: left;
  font-family: 'Raleway', sans-serif;
  font-size: 18pt;
  height: 50px;

  img {
    margin-left: 16px;
    max-height: 35px;
  }
}
</style>
