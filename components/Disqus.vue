<template>
  <transition name="comments">
    <aside class="comments">
      <div class="comments__inner container--small">
        <h3>Gostou? Comenta ae!</h3>
        <div class="comments__disqus">
          <div class="comments__loading" v-if="!disqusReady">
            <spinner/>
            <span>Carregando comentários</span>
          </div>
          <no-ssr>
            <lazy-component>
              <vue-disqus :shortname="disqusShortname" :title="disqusTitle" :identifier="disqusIdentifier" :url="disqusUrl" @ready="disqusReady = true"/>
            </lazy-component>
          </no-ssr>
        </div>
      </div>
    </aside>
  </transition>
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
  &__disqus
    position relative
    min-height 10rem
    @extend $clearfix
  &__loading
    display block
    text-align center
    background-color #fff
    padding spacingBase 0
    position absolute
    z-index 10
    top 0
    right 0
    bottom 0
    left 0
  &-enter-active,
  &-leave-active
    transition: opacity .5s, transform .5s
  &-enter,
  &-leave-active
    opacity: 0
    transform translate3d(0, 10px, 0) scale(1.1)
</style>
