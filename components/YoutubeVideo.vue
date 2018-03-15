<template>
  <div class="YoutubeVideo">
    <div class="YoutubeVideo__wrapper">
      <iframe
        :width="width"
        :height="height"
        :src="'https://www.youtube.com/embed/' +
          videoID + '?rel=0&controls=' + controls +
          '&showinfo=' + showinfo + '&autoplay=' + autoplay"
          frameborder="0" allow="autoplay;encrypted-media"
          class="YoutubeVideo__iframe" allowfullscreen/>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'YoutubeVideo',
    props: {
      'videoID': {
        type: String,
        require: true
      },
      'width': {
        type: String,
        default: '900'
      },
      'height': {
        type: String,
        default: '500'
      },
      'controls': {
        type: String,
        default: '1'
      },
      'showinfo': {
        type: String,
        default: '1'
      },
      'autoplay': {
        type: String,
        default: '0'
      }
    }
  }
</script>

<style lang="stylus" scoped>
.YoutubeVideo
  &__wrapper
    position: relative
    padding-bottom: 56.25%
    padding-top: 25px
    height: 0
  &__iframe
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
</style>
