<template>
  <div class="tag-block flex flex-row flex-wrap">
    <div 
      v-for="tag of tags"
      :key="tag.slug"
    >
      <Tag :tag-name=tag.title />
    </div>
  </div>
</template>

<script>
import Tag from '@/components/Tag'
export default {
  components: {
    Tag
  },
  props: {
    tags: {
      type: Array,
      default: []
    }
  }
}
</script>

<style lang="scss" scoped>
.tag-block {
  @apply col-start-2 col-end-8;

  height: auto;
}
</style>
