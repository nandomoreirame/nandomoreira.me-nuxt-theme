<template>
  <div>
    <site-header></site-header>
    <div id="content">
      <nuxt/>
    </div>
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
