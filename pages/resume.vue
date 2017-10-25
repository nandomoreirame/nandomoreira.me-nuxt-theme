<template>
  <main>
    <div class="resume" v-html="resume"></div>
    <blockquote>
      “I have no special talent. I am only passionately curious.” ⏤ Albert Einstein
    </blockquote>
    <meta-tags></meta-tags>
  </main>
</template>

<script>
import resume from '~/content/pages/resume.md'

export default {
  name: 'Resume',
  layout: 'blank',
  computed: {
    resume () {
      return resume
    }
  },
  components: {
    MetaTags: () => import('~/components/MetaTags')
  }
}
</script>

<style lang="sass" scoped>
@import "~sass/settings"
@import "~sass/article"
.resume,
blockquote
  max-width: $tablet
  margin: $spacing-base auto

.resume
  +article

blockquote
  text-align: center
</style>
