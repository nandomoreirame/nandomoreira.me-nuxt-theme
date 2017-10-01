<template>
  <main>
    <article class="container">
      <h1>Projeto: {{ project.name }}</h1>
      <nuxtent-body :body="project.body" />
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
    MetaTags: () => import('~/components/MetaTags')
  }
}
</script>
