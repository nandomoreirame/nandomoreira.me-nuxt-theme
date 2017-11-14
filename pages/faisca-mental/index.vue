<template>
  <main>
    <page-header title="Faísca Mental" :breadcrumbs="breadcrumbs" :description="pageDescription"></page-header>
    <section class="MentalSpark-list">
      <div class="container--small">
        <!-- <p><strong>faísca mental</strong></p>
        <p><em>substantivo feminino</em></p>
        <ol>
          <li>experiência que desperta uma nova ideia;</li>
          <li>descarga elétrica invisível de muito curta duração entre dois ou mais neurônios.</li>
        </ol>
        <hr> -->
        <h2>Que página é essa?</h2>
        <p>Aderindo a ideia sensacional do brother <a href="https://danielkossmann.com/category/faisca-mental/" target="_blank">Daniel Kossmann</a> de fazer uma lista semanal de <strong>7 (sete) itens que me geraram uma (ou mais) <nuxt-link to="/faisca-mental">faísca mental</nuxt-link></strong>.</p>
        <nuxt-link :to="spark.permalink" class="MentalSpark__item" v-for="(spark, i) in mentalSpark" :key="+i" :title="spark.title">
          <h2 class="MentalSpark__title">{{ spark.title }}</h2>
          <p class="MentalSpark__description">{{ spark.description }}</p>
        </nuxt-link>
      </div>
    </section>
    <nuxt-child />
    <meta-tags :title="pageTitle" :description="pageDescription" :url="pageUrl"></meta-tags>
  </main>
</template>

<script>
import { siteUrl } from '~/utilities/Helpers'

export default {
  name: 'mentalSpark',
  data () {
    return {
      pageTitle: `Faísca Mental - Fernando Moreira | Desenvolvedor front-end e WordPress em Curitiba/PR`,
      pageDescription: `Lista semanal de 7 (sete) itens que me geraram uma (ou mais) faísca mental.`,
      pageUrl: `${siteUrl}/faisca-mental`,
      breadcrumbs: [
        {
          active: false,
          url: '/',
          title: 'Home'
        },
        {
          active: true,
          url: '/faisca-mental',
          title: 'Faísca Mental'
        }
      ]
    }
  },
  async asyncData ({ app }) {
    return {
      mentalSpark: await app.$content('/mental-spark').getAll()
    }
  },
  components: {
    MetaTags: () => import('~/components/MetaTags'),
    PageHeader: () => import('~/components/PageHeader')
  }
}
</script>

<style lang="stylus" scoped>
.MentalSpark
  &__item
    @extend $article
    min-height 180px
    text-decoration none
    color feldgrauColor
    margin-bottom spacingBase
    &:last-child
      margin-bottom spacingLarge
  &__title
    margin 0 0 spacingMini
  &__description
    margin 0
</style>
