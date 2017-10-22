<template>
  <div class="home">
    <section class="home__hero section">
      <div class="section__inner" itemscope itemtype="http://schema.org/Person">
        <h1>Olá, eu sou o <span itemprop="name">Fernando</span>.</h1>
        <h2 role="presentation">
          Sou <strong itemprop="jobTitle">desenvolvedor front-end</strong> na <strong><a href="https://onedevstudio.github.io/" target="_blank">Onedev Studio</a></strong> em <strong>Curitiba/PR</strong>.
          <small>Se você está em busca de um programador freelancer front-end, WordPress, PHP ou JavaScript entre em contato: <a href="mailto:nandomoreira.me@gmail.com">nandomoreira.me@gmail.com</a> ou através das redes sociais abaixo.</small>
        </h2>
        <div class="home__social-icons">
          <social-icons iconColor="#435466"></social-icons>
        </div>
      </div>
    </section>
    <section class="home__work section">
      <div class="section__inner">
        <header class="section__header">
          <h2>Último <strong>Projeto</strong></h2>
        </header>
        <div class="container">
          <project :project="lastProject" />
          <div class="section__button">
            <nuxt-link-button buttonType="ghost-white" buttonPermalink="/projects">mais projetos</nuxt-link-button>
          </div>
        </div>
      </div>
    </section>
    <section class="home__article section">
      <div class="section__inner">
        <header class="section__header">
          <h2>Último <strong>Artigo</strong></h2>
        </header>
        <div class="container">
          <post-item :count="0" :post="lastArticle"></post-item>
          <div class="section__button">
            <nuxt-link-button buttonType="ghost" buttonPermalink="/blog">mais artigos</nuxt-link-button>
          </div>
        </div>
      </div>
    </section>
    <meta-tags></meta-tags>
  </div>
</template>

<script>
export default {
  name: 'Home',
  async asyncData ({ app, route }) {
    const projects = await app.$content('/projects').getAll()
    const posts = await app.$content('/posts').getAll()
    return {
      lastProject: projects[0],
      lastArticle: posts[0]
    }
  },
  components: {
    MetaTags: () => import('~/components/MetaTags'),
    SocialIcons: () => import('~/components/SocialIcons'),
    NuxtLinkButton: () => import('~/components/NuxtLinkButton'),
    Project: () => import('~/components/Project'),
    PostItem: () => import('~/components/PostItem')
  }
}
</script>

<style lang="sass">
@import "~assets/sass/settings"
.section
  width: 100%
  position: relative
  @extend %clearfix

  +media($tablet)
    height: 80vh
    display: table

  &__inner
    +media($tablet)
      display: table-cell
      vertical-align: middle

  &__button
    text-align: center
    position: absolute
    bottom: $spacing-large
    right: 0
    left: 0

    a
      text-transform: uppercase

  &__header
    text-align: center
    background-color: $feldgrau-color
    padding: $spacing-small
    position: absolute
    top: 0
    left: 0
    right: 0

    h2
      color: #fff
      margin: 0

    &:before
      position: absolute
      content: ''
      top: 100%
      left: 50%
      width: 0
      height: 0
      border-top: 20px $feldgrau-color solid
      border-right: 20px solid transparent
      border-bottom: 20px solid transparent
      border-left: 20px solid transparent
      margin-left: -20px
.home
  &__hero
    text-align: center

    h1,
    h2
      display: block
      max-width: 64rem
      padding-left: $spacing-small
      padding-right: $spacing-small
      margin: $spacing-small auto

    h1
      font-size: 3.2rem

      +media($mobile-large)
        font-size: 4.6rem
      +media($tablet)
        font-size: 5.6rem

      span
        color: $mint-color

      &::after
        content: ''
        overflow: hidden
        background-color: $mint-color
        height: 20px
        width: 100%
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 5%)
        display: block

    h2
      font-family: $font-family-base
      font-weight: 300
      color: $davys-grey-color
      font-size: 1rem

      +media($mobile-large)
        font-size: 1.6rem
      +media($tablet)
        font-size: 2rem

      a
        color: $link-color
        text-decoration: underline

      small
        display: block
        font-size: .9rem
        margin-top:  $spacing-mini

        +media($mobile-large)
          font-size: 1.2rem
        +media($tablet)
          font-size: 1.4rem

  &__social-icons
    padding-top: $spacing-small

  &__work
    background-color: $mint-color

    .project,
    .project a
      color: #fff

    .project.project--invert
      padding-top: $spacing-small
      padding-bottom: $spacing-small
      margin-top: 0
      margin-bottom: 0
      background-color: transparent

    .container
      padding-top: $spacing-base
      padding-bottom: $spacing-base
</style>
