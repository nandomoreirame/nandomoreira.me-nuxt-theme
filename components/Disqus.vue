<template>
  <aside class="comments">
    <div class="comments__inner container--small">
      <h3>Gostou? Comenta ae!</h3>
      <div class="comments__loading" v-if="!disqusReady">
        <spinner/>
        <span>Carregando comentários</span>
      </div>
      <div class="disqus" :class="{ 'disqus--ready': disqusReady }">
        <no-ssr>
          <lazy-component>
            <vue-disqus :shortname="disqusShortname" :title="disqusTitle" :identifier="disqusIdentifier" :url="disqusUrl" @ready="disqusReady = true"/>
          </lazy-component>
        </no-ssr>
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'Disqus',
  data () {
    return {
      disqusReady: false,
    }
  },
  props: {
    'disqusShortname': {
      type: String,
      default: 'fernandomoreira'
    },
    'disqusTitle': {
      type: String
    },
    'disqusIdentifier': {
      type: String
    },
    'disqusUrl': {
      type: String
    }
  },
  components: {
    Spinner: () => import('~/components/Spinner'),
    VueDisqus: () => import('vue-disqus/VueDisqus.vue')
  }
}
</script>

<style lang="stylus" scoped>
.comments
  padding spacingBase 0
  border-top borderBase
  margin-top spacingBase
  background-color #fff
  @extend $clearfix
  h3
    font-size 1.75rem
    margin-top 0
  &__loading
    display block
    text-align center
    padding spacingBase 0
</style>
