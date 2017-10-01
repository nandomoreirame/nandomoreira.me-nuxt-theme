<template>
  <div>
    <site-header></site-header>
    <nuxt/>
    <site-footer></site-footer>
  </div>
</template>

<script>
export default {
  name: 'layoutDefault',
  components: {
    SiteHeader: () => import('~/components/Header'),
    SiteFooter: () => import('~/components/Footer')
  }
}
</script>

<style lang="sass" scoped>
</style>
