<template>
  <footer class="footer">
    <div class="container">
      <small-bottom-text></small-bottom-text>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'pageFooter',
  components: {
    SmallBottomText: () => import('~/components/SmallBottomText.vue')
  }
}
</script>

<style lang="sass" scoped>
.footer
  padding: 15px 0
</style>
