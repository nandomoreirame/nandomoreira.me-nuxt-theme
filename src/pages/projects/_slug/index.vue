<template>
  <main>
    <article class="project">
      <page-header :title="`Projeto: ${project.name}`"></page-header>
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
      projectImage: (data.image) ? `${data.image}` : 'https://nandomoreira.me/images/social.jpg'
    }
  },
  components: {
    MetaTags: () => import('~/components/MetaTags'),
    PageHeader: () => import('~/components/PageHeader')
  }
}
</script>
