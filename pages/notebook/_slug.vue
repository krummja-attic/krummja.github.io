<template>
  <div class="layout-grid">
    <NuxtLink class="return" to="/notebookIndex">Back to the Notebook</NuxtLink>

    <div class="note flex flex-col">
      <div class="header-wrapper flex flex-col">
        <h1>{{ note.title }}</h1>
        <TagList :article=note />
      </div>
      <p class="abstract">
        {{ note.description }}
      </p>

      <div class="note-body">
        <nuxt-content :document="note" />
      </div>
    </div>
  </div>
</template>

<script>
import TagList from '@/components/TagList';
export default {
  layout: 'default',
  components: {
    TagList
  },
  async asyncData({ $content, params }) {
    const note = await $content('notebook', params.slug).fetch();

    return { note }
  }
}
</script>

<style lang="scss" scoped>
.return {
  @apply col-start-2 col-end-4;
  margin-top: 20px;
  width: 168px;
  text-align: left;
  font-family: 'Raleway', sans-serif;
  font-weight: 500;

  color: $accent-purple-1;
  text-decoration: none;
  box-shadow:
    inset 0 -0.225rem 0 0 $papier,
    inset 0 -0.475rem 0 0 $accent-purple-3;

  &:hover {
    text-shadow: 1px 0px 0px $accent-purple-1;
  }
}

.note {
  font-family: 'Raleway', sans-serif;

  h1 {
    margin-top: 40px;
    margin-bottom: 20px;
    text-align: left;
    font-size: 20pt;
    font-weight: 700;
  }

  .abstract {
    text-align: justify;
    font-size: 14pt;
  }

  .note-body {
    margin-top: 140px;
    text-align: justify;
  }
}

@screen md {
  .note {
    @apply col-start-2 col-end-12;

    font-family: 'Raleway', sans-serif;

    h1 {
      margin-top: 40px;
      margin-bottom: 20px;
      text-align: left;
      font-size: 36pt;
      font-weight: 700;
    }

    .abstract {
      margin-right: 25%;
      text-align: justify;
      font-size: 14pt;
    }

    .note-body {
      margin-top: 80px;
      margin-right: 35%;
      text-align: justify;
    }
  }
}
</style>
