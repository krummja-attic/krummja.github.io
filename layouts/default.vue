<template>
  <div class="container mx-auto bg-transparent">
    <transition
      enter-active-class="transition-opacity ease-linear duration-100"
      enter-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity ease-linear duration-100"
      leave-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <MobileHeader v-show="showMobileMenu" @closeMobileMenu="showMobileMenu = false" />
    </transition>
    <Header @showMobileMenu="showMobileMenu = true" />
    <Nuxt />

    <div class="spacer"></div>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header';
import MobileHeader from '@/components/MobileHeader';
import Footer from '@/components/Footer';

export default {
  name: 'default',
  components: {
    Header,
    MobileHeader,
    Footer
  },
  data () {
    return {
      showMobileMenu: false
    }
  },
  watch: {
    '$route' () {
      this.showMobileMenu = false;
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=PT+Serif&display=swap');
@import url('https://fonts.googleapis.com/css2?family=PT+Serif:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@200;500;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Yellowtail&display=swap');

html {
  height: 100%;

  font-family: 'PT Serif', Georgia, Times, "Times New Roman", serif;
  background-color: $papier;
  color: $nero;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;

  body {
    height: 100%;
  }
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

#__nuxt,
#__layout {
  height: 100%;
}

.container {
  @apply flex flex-col;

  height: 100%;
  text-align: center;
}

.layout-grid {
  @apply flex flex-col;

  flex-shrink: 0;
}

.spacer {
  flex-grow: 1;
}

.nuxt-content {
  position: relative;

  a {
    color: $accent-purple-1;
    text-decoration: none;
    font-weight: 600;
    box-shadow:
      inset 0 -0.225rem 0 0 $papier,
      inset 0 -0.475rem 0 0 $accent-purple-3;

    &:hover {
      text-shadow: 1px 0px 0px $accent-purple-1;
    }
  }

  p {
    margin-top: 20px;
  }

  blockquote {
    padding-left: 40px;
    padding-right: 40px;
  }

  ol {
    margin: 32px 0;
    padding: 0 60px;
    list-style-type: decimal;
  }

  ul {
    margin: 32px 0;
    padding: 0 60px;
    list-style-type: circle;
  }

  li {
    padding-left: 10px;
  }

  pre {
    margin: 40px 0;
    box-shadow: 0 0 10px $shade;

    code {
      font-size: 11pt;
      border-radius: 0;
      padding: 0;
      box-shadow: none;
      background: none;

      span.token.operator {
        background: none;
      }
    }
  }

  code {
    padding: 0 5px;
    // background: $creme;
    border-radius: 8px;
    box-shadow: inset 0 0 10px rgba(115, 90, 140, 0.4);
    font-size: 12pt;
  }
}

@screen xl {
  .layout-grid {
    @apply grid grid-cols-12 gap-6;

    flex-shrink: 0;
  }

  .nuxt-content {
    position: relative;

    h2 {
      color: $accent-purple-2;
      margin-top: 40px;
      font-size: 20pt;
      font-weight: 700;
    }

    h3 {
      color: $accent-purple-2;
      margin-top: 40px;
      font-size: 18pt;
      font-weight: 500;
    }

    h4 {
      color: $accent-purple-2;
      margin-top: 30px;
      font-size: 14pt;
      font-style: italic;
    }

    a {
      color: $accent-purple-1;
      text-decoration: none;
      font-weight: 600;
      box-shadow:
        inset 0 -0.225rem 0 0 $papier,
        inset 0 -0.475rem 0 0 $accent-purple-3;

      &:hover {
        text-shadow: 1px 0px 0px $accent-purple-1;
      }
    }

    p {
      margin-top: 20px;
    }

    blockquote {
      padding-left: 40px;
      padding-right: 40px;
    }

    ol {
      margin: 32px 0;
      padding: 0 60px;
      list-style-type: decimal;
    }

    ul {
      margin: 32px 0;
      padding: 0 60px;
      list-style-type: circle;
    }

    li {
      padding-left: 10px;
    }

    .footnotes {
      margin-top: 150px;

      li {
        margin-top: 8px;
      }

      &::before {
        content: "References";
        color: $accent-purple-2;
        font-weight: bold;
        font-size: 28px;
      }
    }

    .footnote-ref {
      font-size: 12pt;
      color: $accent-purple-1;
    }

    .footnote-backref {
      margin-left: 6px;
      color: $accent-purple-1;
    }
  }
}
</style>
