<template>
  <div>
    <site-header></site-header>
    <nuxt/>
    <site-footer></site-footer>
    <site-search></site-search>
  </div>
</template>

<script>
export default {
  name: 'layoutDefault',
  components: {
    SiteHeader: () => import('~/components/Header'),
    SiteSearch: () => import('~/components/Search'),
    SiteFooter: () => import('~/components/Footer')
  }
}
</script>
