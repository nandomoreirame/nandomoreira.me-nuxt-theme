<template>
  <div>
    <skip-to-content/>
    <site-header/>
    <div id="MainContent" class="MainContent">
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
    name: 'LayoutDefault',
    components: {
      SkipToContent: () => import('~/components/SkipToContent'),
      SiteHeader: () => import('~/components/Header'),
      SiteFooter: () => import('~/components/Footer'),
      YoutubeVideo: () => import('~/components/YoutubeVideo'),
      Modal: () => import('~/components/Modal')
    }
  }
</script>
