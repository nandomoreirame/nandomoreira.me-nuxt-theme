<template>
  <div class="Quote">
    <div class="container">
      <blockquote>
         <p>“Eu não tenho nenhum talento especial. Sou apenas apaixonadamente curioso.” <small>⏤ Albert Einstein</small></p>
      </blockquote>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Quote'
  }
</script>

<style lang="stylus">
.Quote
  background-color rgba(#f1f8f7, .95)
  padding spacingBase 0
  p
    opacity 0.75
  .container
    max-width 47.5rem
</style>
