<template>
  <main>
    <page-header title="Faísca Mental" :breadcrumbs="breadcrumbs"></page-header>
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
        <p>Aderindo a ideia sensacional do brother <a href="https://danielkossmann.com/category/faisca-mental/" target="_blank">Daniel Kossmann</a> de fazer uma lista semanal de <strong>7 (sete) itens que me geraram uma (ou mais) <nuxt-link to="/mental-spark">faísca mental</nuxt-link></strong>.</p>
        <hr>
        <alert>
          <p>
            <em>Coming soon...</em> Aguarde... <br>
            Essa semana terei algumas <em>Faíscas Mentais</em> e em breve a <strong>Faísca Mental #01</strong> sairá do forno. Aguarde.
          </p>
        </alert>
        <hr>
        <article class="MentalSpark__item" v-for="(spark, i) in mentalSpark" :key="+i">
          <h2><nuxt-link :to="spark.permalink">{{ spark.title }}</nuxt-link></h2>
        </article>
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
      pageDescription: `Lista semanal de Se7e itens que me geraram uma (ou mais) faísca mental`,
      pageUrl: `${siteUrl}/mental-spark`,
      breadcrumbs: [
        {
          active: false,
          url: '/',
          title: 'Home'
        },
        {
          active: true,
          url: '/mental-spark',
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
    PageHeader: () => import('~/components/PageHeader'),
    Alert: () => import('~/components/Alert')
  }
}
</script>

<style lang="stylus" scoped>
.MentalSpark
  &__item
    display none
    visibility hidden
    opacity 0
</style>
