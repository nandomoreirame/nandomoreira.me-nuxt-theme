<template>
  <main>
    <article class="project">
      <page-header :title="project.name" :breadcrumbs="breadcrumbs"></page-header>
      <div class="container">
        <nuxtent-body :body="project.body" />
      </div>
    </article>
    <meta-tags :title="projectTitle" :description="projectDesc" :image="projectImage"></meta-tags>
  </main>
</template>

<script>
export default {
  name: 'project',
  async asyncData ({ app, route }) {
    const data = await app.$content('/projects').get(route.path)
    return {
      project: data,
      projectTitle: `Projeto: ${data.name} - Fernando Moreira | Front-end / UX Designer`,
      projectDesc: data.description ? `${data.description}` : `${data.name} Fernando Moreira | Desenvolvedor Front-end e UX Designer em Curitiba/PR`,
      projectImage: (data.image) ? `${data.image}` : 'https://nandomoreira.me/images/social.jpg',
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
          url: `${data.permalink}`,
          title: `${data.name}`
        }
      ]
    }
  },
  components: {
    MetaTags: () => import('~/components/MetaTags'),
    PageHeader: () => import('~/components/PageHeader')
  }
}
</script>
