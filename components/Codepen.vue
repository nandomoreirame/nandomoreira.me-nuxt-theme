<template>
  <div class="Codepen">
    <p data-height="552" data-theme-id="0" :data-slug-hash="penId" data-default-tab="result" :data-user="penUser" data-embed-version="2" class="codepen">
      See the Pen <a :href="`https://codepen.io/${penUser}/pen/${penID}/`">RiCardinho</a>
      by Fernando Moreira (<a :href="`https://codepen.io/${penUser}`">@{{ penUser }}</a>) on <a href="https://codepen.io">CodePen</a>.
    </p>
    <script async src="https://static.codepen.io/assets/embed/ei.js"></script>
  </div>
</template>

<script>
  export default {
    name: 'Codepen',
    props: {
      'penId': {
        type: String,
        require: true
      },
      'penUser': {
        type: String,
        default: 'nandomoreirame'
      }
    }
  }
</script>

<style lang="stylus">
.Codepen
  position: relative
  padding-bottom: 56.25%
  padding-top: 25px
  height: 0
  iframe
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
</style>
