<template>
  <div class="project-card flex flex-row">
    <img :src="project.img" >
    <div class="metadata flex flex-col">
      <h4>{{ project.title }}</h4>
      <span class="date">{{ formatDate(project.createdAt) }}</span>
      <span class="description">{{ project.description }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    project: Object
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
.project-card {
  clear: both;
  margin: 0em 0.8em 0.8em auto;
  max-width: 100%;
  padding: 0.8em 1em;
  border: 1px solid rgba(52, 61, 68, 0.05);
  border-radius: 6px;
  box-shadow: rgba(52, 61, 68, 0.1) 0px 1px 2px;
  transition: all 400ms ease-in-out 0s;
  font-family: 'Raleway', sans-serif;

  img {
    height: 200px;
  }

  h4 {
    font-size: 16pt;
    text-align: left;
  }

  .metadata {
    position: relative;
    width: 100%;
    margin-left: 15px;
    padding-left: 5px;
    text-align: left;
    // justify-content: space-between;

    .date {
      font-size: 9pt;
      color: $ash;
    }

    .description {
      margin-top: 10px;
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
