<template>
  <div class="project-block">
    <h2>My Projects</h2>
    <span class="description">
      Things I'm working on - usually linguistics research or programming projects.
    </span>

    <NuxtLink
    v-for="project of projects"
    :key="project.slug"
    :to="{ name: 'notebook-slug', params: { slug: project.slug } }"
    class="card-wrapper"
    >
      <ProjectCard :project=project />
    </NuxtLink>
  </div>
</template>

<script>
import ProjectCard from '@/components/ProjectCard'

export default {
  components: {
    ProjectCard
  },
  props: {
    projects: Array
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@500&display=swap');

.project-block {
  @apply col-start-7 col-end-12;

  display: flex;
  flex-flow: column;
  margin-top: 50px;
  margin-bottom: 50px;

  .card-wrapper {
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
