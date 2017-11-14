<template>
  <article class="MentalSpark">
    <page-header :title="spark.title" :description="spark.description" :image="spark.image" :shareImage="sparkImage" :breadcrumbs="breadcrumbs" :author="true"></page-header>
    <main role="main">
      <div class="MentalSpark__body container--small">
        <nuxtent-body :body="spark.body"></nuxtent-body>
      </div>
      <disqus :disqusTitle="spark.title" :disqusIdentifier="splitIdentifier(spark.permalink)" :disqusUrl="disqusUrl(spark.permalink)"></disqus>
    </main>
    <meta-tags :title="sparkTitle" :url="sparkUrl" ogType="article" :description="sparkDesc"></meta-tags>
  </article>
</template>

<script>
const { siteUrl } = require('~/utilities/Helpers')

export default {
  name: 'Spark',
  async asyncData ({ app, route }) {
    const data = await app.$content('/mental-spark').get(route.path)
    return {
      spark: data,
      sparkTitle: `${data.title} - Fernando Moreira | Desenvolvedor front-end e WordPress em Curitiba/PR`,
      sparkDesc: data.description ? `${data.description}` : `${data.title} Fernando Moreira | Desenvolvedor front-end e WordPress na Onedev Studio em Curitiba/PR`,
      sparkImage: (data.image) ? `${siteUrl}${data.image}` : `${siteUrl}/images/social.jpg`,
      sparkUrl: `${siteUrl}${data.permalink}`,
      breadcrumbs: [
        {
          active: false,
          url: '/',
          title: 'Home'
        },
        {
          active: false,
          url: '/faisca-mental',
          title: 'Faísca Mental'
        },
        {
          active: true,
          url: `${data.permalink}`,
          title: `${data.title}`
        }
      ]
    }
  },
  components: {
    MetaTags: () => import('~/components/MetaTags'),
    PageHeader: () => import('~/components/PageHeader'),
    Disqus: () => import('~/components/Disqus')
  },
  methods: {
    splitIdentifier: identifier =>
      identifier.slice(-1) !== '/' ? `${identifier}/` : `${identifier}`,
    disqusUrl: permalink => `${siteUrl}${permalink}`
  }
}
</script>

<style lang="stylus" scoped>
</style>
