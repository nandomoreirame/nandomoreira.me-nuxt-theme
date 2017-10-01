<template>
  <article class="article container" itemscope itemtype="http://schema.org/NewsArticle">
    <header class="article__header">
      <h1 class="article__title" itemprop="headline">{{ post.title }}</h1>
      <div class="article__meta">
        <span v-if="post.date" itemprop="datePublished" :content="post.date">{{ post.date }}</span><br>
        <span v-if="post.description" itemprop="description">{{ post.description }}</span><br>
        <span>Author: <span itemprop="author">Fernando Moreira</span></span>
      </div>
      <figure v-if="post.image" class="article__image" itemprop="image" itemscope itemtype="http://schema.org/ImageObject">
          <meta itemprop="url" :content="post.image">
          <img :src="post.image" :alt="post.title">
      </figure>
    </header>
    <main itemprop="articleBody" role="main">
      <nuxtent-body :body="post.body"/>
    </main>
    <comments></comments>
  </article>
</template>

<script>
export default {
  name: 'article',
  async asyncData ({ app, route }) {
    const data = await app.$content('/posts').get(route.path)
    return {
      post: data,
      postTitle: `${data.title} - Fernando Moreira | Front-end / UX Designer`,
      postDesc: data.description ? `${data.description}` : `${data.title} Fernando Moreira | Desenvolvedor Front-end e UX Designer em Curitiba/PR`,
      postImage: (data.image) ? `${data.image}` : 'https://nandomoreira.me/images/social.jpg'
    }
  },
  head () {
    return {
      title: `${this.postTitle}`,
      meta: [
        { property: 'og:type', content: 'article' },
        { property: 'og:title', content: `${this.postTitle}` },
        { property: 'og:site_name', content: 'nandomoreira.me' },
        { property: 'og:url', content: `${this.post.permalink}` },
        { property: 'og:image', content: `${this.postImage}` },
        { property: 'article:author', content: 'Fernando Moreira' },
        { name: 'twitter:title', content: `${this.postTitle}` },
        { name: 'twitter:description', content: `${this.postDesc}` },
        { name: 'twitter:image', content: `${this.postImage}` },
        { name: 'twitter:image:alt', content: `${this.postTitle}` }
      ]
    }
  },
  components: {
    Comments: () => import('~/components/Comments')
  }
}
</script>

<style lang="sass">
.article
  .image
    display: block
    margin: 15px 0
    img
      width: 100%
      display: block
</style>
