<template>
  <main>
    <article class="experiment">
      <page-header :title="experiment.title" :breadcrumbs="breadcrumbs" :image="experimentImage"></page-header>
      <div class="container">
        <nuxtent-body :body="experiment.body" />
        <p data-height="650" :data-slug-hash="experiment.pen" data-default-tab="result" data-user="nandomoreirame" data-embed-version="2" :data-pen-title="experiment.pen" data-preview="true" class="codepen">See the Pen <a :href="`https://codepen.io/nandomoreirame/pen/${experiment.pen}/`">{{ experiment.pen }}</a> by Fernando Moreira (<a href="https://codepen.io/nandomoreirame">@nandomoreirame</a>) on <a href="https://codepen.io">CodePen</a>.</p>
        <script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
      </div>
    </article>
    <meta-tags :title="experimentTitle" :description="experimentDesc"></meta-tags>
  </main>
</template>

<script>
export default {
  name: 'experiment',
  async asyncData ({ app, route }) {
    const data = await app.$content('/lab').get(route.path)
    return {
      experiment: data,
      experimentTitle: `${data.title} - Fernando Moreira | Front-end / UX Designer`,
      experimentDesc: data.description ? `${data.description}` : `${data.title} - Fernando Moreira | Desenvolvedor front-end e entusiasta da experiência do usuário | Curitiba/PR`,
      experimentImage: `https://codepen.io/oknoblich/pen/${data.pen}/image/large.png`,
      breadcrumbs: [
        {
          active: false,
          url: '/',
          title: 'Home'
        },
        {
          active: false,
          url: '/experiments',
          title: 'Meus experimentos'
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
    PageHeader: () => import('~/components/PageHeader')
  }
}
</script>
