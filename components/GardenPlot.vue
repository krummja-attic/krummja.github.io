<template>
  <div class="garden-plot">
    <h4>{{ article.title }}</h4>
    <div class="metadata flex flex-row">
      <span class="date">{{ formatDate(article.createdAt) }}</span>
      <span class="growth">{{ formatGrowth(article.growth) }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    article: Object
  },
  methods: {
    formatDate(date)
    {
      const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
      return new Date(date).toLocaleDateString('en', options);
    },

    formatGrowth(growth)
    {
      if (growth === "evergreen") {
        return growth = "🌳 evergreen"
      } else if (growth === "budding") {
        return growth = "🌿 budding"
      } else {
        return growth = "🌱 seedling"
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.garden-plot {
  clear: both;
  margin: 0em 0.8em 0.8em auto;
  max-width: 100%;
  padding: 0.8em 1em;
  border: 1px solid rgba(52, 61, 68, 0.05);
  border-radius: 6px;
  box-shadow: rgba(52, 61, 68, 0.1) 0px 1px 2px;
  transition: all 400ms ease-in-out 0s;
  font-family: 'Raleway', sans-serif;

  h4 {
    font-size: 16pt;
    text-align: left;
  }

  .metadata {
    position: relative;
    width: 100%;
    margin-top: 15px;
    padding-top: 5px;
    border-top: 1px solid $ash;
    text-align: left;
    justify-content: space-between;

    .date {
      font-size: 9pt;
      color: $ash;
    }

    .growth {
      font-size: 9pt;
      font-weight: 700;
      color: rgba(100, 155, 100, 1.0);
    }
  }

  &:hover {
    // transform: scale(1.05);
    transform: scale(1.05) rotate(-2deg);
    backface-visibility: hidden;
    -webkit-font-smoothing: subpixel-antialiased;
    border-radius: 0px 0px 6px 6px;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 10px 30px -10px;
  }
}
</style>
