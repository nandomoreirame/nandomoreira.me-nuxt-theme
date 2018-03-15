<template>
  <main>
    <page-header>
      <div slot="inner">
        <div class="container">
          <h1 class="pageHeader__title" itemprop="headline">Projetos</h1>
          <breadcrumb :breadcrumbs="breadcrumbs"/>
          <p v-if="pageDescription" itemprop="description" class="pageHeader__description" v-html="pageDescription"/>
        </div>
      </div>
    </page-header>
    <div class="project-list">
      <project v-for="(project, i) in projects" :key="i" :count="i" :project="project"></project>
    </div>
    <nuxt-child />
    <meta-tags :title="pageTitle" :description="pageDescription" :url="pageUrl"/>
  </main>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    name: 'Projects',
    data () {
      return {
        pageTitle: `Projetos - Fernando Moreira | Desenvolvedor front-end e WordPress em Curitiba/PR`,
        pageDescription: `Esses são alguns dos projetos que trabalhei, projetos pessoais e freelas para clientes.`,
        pageUrl: `${process.env.baseUrl}/projects`,
        breadcrumbs: [
          {
            active: false,
            url: '/',
            title: 'Home'
          },
          {
            active: true,
            url: '/projects',
            title: 'Projetos'
          }
        ]
      }
    },
    async asyncData ({ app, store }) {
      if (!store.state.projects.length) {
        const projects = await app.$content('/projects').getAll()
        store.commit('SET_PROJECTS', projects)
      }
    },
    computed: {
      ...mapState({
        projects: state => state.projects
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
