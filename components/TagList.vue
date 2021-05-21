<template>
  <div class="tag-list flex flex-row">
      <div v-for="tag of this.formatTagNames()" :key="tag" class="tag-wrapper">
        <TagLink :tagName="tag" />
      </div>
  </div>
</template>

<script>
import TagLink from '@/components/TagLink'
export default {
  components: {
    TagLink
  },
  props: {
    article: {
      type: Object,
      default: {}
    }
  },
  methods: {
    formatTagNames() {
      const tags = []
      for (let tag of this.article.tags.split(",")) {
        tag = tag.trim()
        tags.push(tag)
      }
      return tags;
    }
  }
}
</script>

<style lang="scss" scoped>
.tag-list {
  margin-top: -10px;
  margin-bottom: 40px;
}
</style>
