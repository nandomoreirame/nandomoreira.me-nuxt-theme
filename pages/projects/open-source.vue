<template>
  <main>
    <page-header>
      <div slot="inner">
        <div class="container">
          <h1 class="pageHeader__title" itemprop="headline">I ❤️ Open Source</h1>
          <breadcrumb :breadcrumbs="breadcrumbs"/>
          <p v-if="pageDescription" itemprop="description" class="pageHeader__description" v-html="pageDescription"/>
        </div>
      </div>
    </page-header>
    <div class="project-list">
      <project v-for="(project, i) in openSources" :key="i" :count="i" :project="project"></project>
    </div>
    <nuxt-child />
    <meta-tags :title="pageTitle" :description="pageDescription" :url="pageUrl"/>
  </main>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    name: 'OpenSource',
    data () {
      return {
        pageTitle: `I ❤️ Open Source - Fernando Moreira | Desenvolvedor front-end e WordPress em Curitiba/PR`,
        pageDescription: `Esses são alguns dos projetos open sources em que trabalhei.`,
        pageUrl: `${process.env.baseUrl}/projects/open-source`,
        breadcrumbs: [
          {
            active: false,
            url: '/',
            title: 'Home'
          },
          {
            active: false,
            url: '/projects',
            title: 'Projetos'
          },
          {
            active: true,
            url: '/projects/open-source',
            title: 'Open Source'
          }
        ]
      }
    },
    async asyncData ({ app, store }) {
      if (!store.state.openSources.length) {
        const openSources = await app.$content('/open-source').getAll()
        store.commit('SET_OPENSOURCES', openSources)
      }
    },
    computed: {
      ...mapState({
        openSources: state => state.openSources
      })
    },
    components: {
      Project: () => import('~/components/Project'),
      MetaTags: () => import('~/components/MetaTags'),
      PageHeader: () => import('~/components/PageHeader'),
      Breadcrumb: () => import('~/components/Breadcrumb')
    }
  }
</script>

<style lang="stylus">
</style>
