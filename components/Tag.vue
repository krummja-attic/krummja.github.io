<template>
  <div
    @click="toggleActiveState()"
    :id="uid"
    class="tag-body flex flex-col">
    {{ tagName }}
  </div>
</template>

<script>
import uuid3 from 'uuid';

export default {
  props: {
    tagName: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      uid: uuid3(),
      tagActive: false,
    }
  },
  methods: {
    toggleActiveState() {
      const tag = document.getElementById(this.uid)

      if (this.tagActive === false) {
        this.tagActive = true;
        this.$store.commit('tags/add', this);
        this.refresh();

        tag.style.backgroundColor = 'rgba(115, 90, 140, 0.3)';
        tag.style.color = 'rgba(115, 90, 140, 1)';
        
      } else if (this.tagActive === true) {
        this.tagActive = false;
        this.$store.commit('tags/remove', this);
        this.refresh();

        tag.style.backgroundColor = 'inherit';
        tag.style.color = 'rgba(144, 144, 144, 1)';
      }
    },
    refresh() {
      this.$nuxt.refresh();
    }
  }
}
</script>

<style lang="scss" scoped>
.tag-body {
  margin: 4px 4px;
  padding: 4px 6px;
  height: 34px;
  border: 1px solid rgba(52, 61, 68, 0.05);
  border-radius: 6px;
  box-shadow: rgba(52, 61, 68, 0.1) 0px 1px 2px;

  justify-content: center;
  text-align: center;
  text-transform: uppercase;
  font-family: 'Raleway', sans-serif;
  font-size: 12pt;
  color: $ash;

  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */

  transition: all 200ms ease-in-out 0s;

  &:hover {
    color: rgba(115, 90, 140, 1);
    background-color: rgba(115, 90, 140, 0.3);
  }
}
</style>
