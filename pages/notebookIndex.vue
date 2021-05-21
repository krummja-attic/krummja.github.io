<template>
  <div class="layout-grid">

    <h1 class="col-start-2 col-end-8">Jonathan's Notebook</h1>
    <span class="description">
      An assortment of notes in various states of refinement.
    </span>

    <TagBlock :tags=tags />

    <div class="notebook">
      <ul class="note-list">
        <li
          class="note-project-wrapper"
          v-for="note of notebook"
          :key="note.slug">
          <NuxtLink
            class="note-page"
            :to="{ name: 'notebook-slug', params: { slug: note.slug } }">
            <h4>{{ note.title }}</h4>
            <div class="metadata flex flex-row">
              <span class="date">{{ formatDate(note.createdAt) }}</span>
              <span class="project">{{ note.project }}</span>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
import TagBlock from '@/components/TagBlock';

export default {
  components: {
    TagBlock
  },
  layout: 'default',
  async asyncData({ $content, params, store }) {
    
    const tags = await $content('tags', params.slug)
      .only(['title'])
      .sortBy('createdAt')
      .fetch()

    if (store.state.tags.activeTags.length > 0) {
      const notebook = await $content('notebook', params.slug)
        .where({ tags: { $contains: store.state.tags.activeTags } })
        .only(['title', 'createdAt', 'project', 'repo', 'slug'])
        .sortBy('createdAt')
        .fetch()
      return { notebook, tags }
    } else {
      const notebook = await $content('notebook', params.slug)
        .only(['title', 'createdAt', 'project', 'repo', 'slug'])
        .sortBy('createdAt')
        .fetch()
      return { notebook, tags }
    }

  },
  methods: {
    formatDate(date)
    {
      const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
      return new Date(date).toLocaleDateString('en', options);
    }
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

h4 {
  font-size: 16pt;
  text-align: left;
}

.description {
  @apply col-start-2 col-end-8;

  font-family: 'Raleway', sans-serif;
  font-size: 12pt;
  text-align: justify;

  margin-bottom: 10px;
}

.notebook {
  @apply col-start-2 col-end-8;
  @apply flex flex-col;
  justify-content: left;
  margin-top: 2em;

  .note-project-wrapper {
    @apply flex flex-row;

    .note-page {
      @apply flex flex-row;

      flex-grow: 3;
      font-family: 'Raleway', sans-serif;
      clear: both;
      padding: 0.5em 1em;
      border: 1px solid rgba(52, 61, 68, 0.05);
      border-radius: 6px;
      transition: all 400ms ease-in-out 0s;
      box-shadow: rgba(52, 61, 68, 0.1) 0px 1px 2px;
      justify-content: space-between;

      h4 {
        flex-grow: 1;
      }

      .metadata {
        flex-shrink: 1;
        position: relative;
        margin-top: 5px;
        padding-top: 5px;
        text-align: left;
        justify-content: space-between;

        .date {
          font-size: 10pt;
          color: $ash;
        }

        .project {
          font-size: 11pt;
          font-weight: 700;
          color: $accent-purple-4;
        }
      }

      &:hover {
        transform: scale(1.05) rotate(-1deg);
        backface-visibility: hidden;
        -webkit-font-smoothing: subpixel-antialiased;
        border-radius: 0px 0px 6px 6px;
        box-shadow: rgba(0, 0, 0, 0.15) 0px 10px 30px -10px;
      }
    }
  }
}
</style>
