<template>
  <div>
    <site-header/>
    <div id="content" class="MainContent">
      <nuxt/>
    </div>
    <site-footer/>
    <modal v-if="$store.state.video">
      <div slot="body">
        <youtube-video :videoID="`${$store.state.video}`" controls="0" showinfo="0" autoplay="1"/>
      </div>
    </modal>
  </div>
</template>

<script>
  export default {
    name: 'layoutDefault',
    components: {
      SiteHeader: () => import('~/components/Header'),
      SiteFooter: () => import('~/components/Footer'),
      YoutubeVideo: () => import('~/components/YoutubeVideo'),
      Modal: () => import('~/components/Modal')
    }
  }
</script>

<style lang="stylus">
.page-enter-active,
.page-leave-active
  .container,
  .container--small
    transition: opacity .5s, transform .5s
.page-enter,
.page-leave-active
  .container,
  .container--small
    opacity: 0
    transform translate3d(-10px, 0, 0)
</style>
