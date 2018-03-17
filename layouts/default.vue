<template>
  <div>
    <skip-to-content/>
    <site-header/>
    <div id="MainContent" class="MainContent">
      <nuxt/>
    </div>
    <site-footer/>
    <modal v-if="showModal && video">
      <div slot="body">
        <youtube-video v-if="video" :videoID="`${video}`" controls="0" showinfo="0" autoplay="1"/>
      </div>
    </modal>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'LayoutDefault',
    computed: {
      ...mapState({
        video: state => state.video,
        showModal: state => state.showModal
      })
    },
    components: {
      SkipToContent: () => import('~/components/SkipToContent'),
      SiteHeader: () => import('~/components/Header'),
      SiteFooter: () => import('~/components/Footer'),
      YoutubeVideo: () => import('~/components/YoutubeVideo'),
      Modal: () => import('~/components/Modal')
    }
  }
</script>
