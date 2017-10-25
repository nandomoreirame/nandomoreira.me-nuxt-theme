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
        <a class="home__scrollto" href="#" v-scroll-to="{
            el: '#lastArticle',
            duration: 800,
            offset: -80
        }">
          <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down">
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </a>
      </div>
    </section>

    <section id="lastArticle" class="home__article section">
      <div class="section__inner">
        <header class="section__header">
          <h2>Últimos Artigo</h2>
        </header>
        <div class="container">
          <div class="last-articles">
            <post-item v-for="(post, i) in lastArticles" :key="i" :count="i" :post="post"></post-item>
          </div>
          <div class="section__button">
            <link-button buttonType="ghost" buttonPermalink="/blog">mais artigos</link-button>
          </div>
        </div>
      </div>
    </section>

    <section class="home__work section">
      <div class="section__inner">
        <header class="section__header">
          <h2>Último Projeto</h2>
        </header>
        <div class="container">
          <project :project="lastProject" />
          <div class="section__button">
            <link-button buttonType="ghost-white" buttonPermalink="/projects">mais projetos</link-button>
          </div>
        </div>
      </div>
    </section>

    <section class="home__dribbble section">
      <div class="section__inner">
        <header class="section__header">
          <h2>Últimos Shots</h2>
        </header>
        <div class="container">
          <dribbble token="8661a00cbdef6d7bcb5b4d5dd9cb9afa12551ed044ad0c3340da70e46057cf4e" user="umdevux"></dribbble>
          <div class="section__button">
            <link-button buttonType="ghost" buttonPermalink="https://dribbble.com/umdevux" :nuxtLink="false" linkTarget="_blank">mais shots</link-button>
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
      lastArticles: [
        posts[0],
        posts[1],
        posts[2]
      ]
    }
  },
  components: {
    MetaTags: () => import('~/components/MetaTags'),
    SocialIcons: () => import('~/components/SocialIcons'),
    LinkButton: () => import('~/components/LinkButton'),
    Project: () => import('~/components/Project'),
    PostItem: () => import('~/components/PostItem'),
    Dribbble: () => import('~/components/Dribbble')
  }
}
</script>

<style lang="sass">
@import "~sass/settings"
.section
  width: 100%
  position: relative
  overflow: hidden
  @extend %clearfix

  &__inner
    padding: 0
    margin-bottom: $spacing-large
    +media($tablet)
      padding: 8rem 0
      margin-bottom: 0

  &__button
    text-align: center

    +media($tablet)
      position: absolute
      bottom: $spacing-base
      left: 0
      right: 0

    a
      text-transform: uppercase

  &__header
    text-align: center
    background-color: $feldgrau-color
    padding: $spacing-small
    margin-bottom: $spacing-base
    position: relative

    +media($tablet)
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
  &__scrollto
    display: none
    +media($tablet)
      display: block
      position: absolute
      bottom: $spacing-small
      left: 50%
      margin-left: -30px
      animation: scrollDown .8s ease-in-out infinite both
      &:hover,
      &:active,
      &:focus
        animation-play-state: paused
        transform: translate3d(0, 0, 0)
        opacity: 1
      svg
        line-height: 1
        display: block
        margin: 0

  &__hero
    text-align: center
    padding-top: ($spacing-large * 2)

    &:before
      transform: translate3d(0, 0, 0)
      content: ''
      position: absolute
      top: 0
      left: 0
      right: 0
      bottom: 0
      opacity: .03
      background-image: url("/images/hero-icons.svg")
      background-position: center
      background-repeat: no-repeat
      background-size: cover
      background-attachment: fixed
      z-index: 1
      transform: scale(1.1)

    +media($tablet)
      height: 100vh
      display: table
      .section__inner
        display: table-cell
        vertical-align: middle

    .section__inner
      position: relative
      z-index: 2

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

    .project
      figure
        margin-bottom: $spacing-small
        +media($tablet)
          margin-bottom: 0

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

.last-articles
  display: flex
  position: relative
  flex-flow: row
  flex-wrap: wrap
  margin-left: -($spacing-small)
  margin-right: -($spacing-small)
  padding: 40px 0 0

@keyframes scrollDown
  0%
    transform: translate3d(0, -20px, 0)
    opacity: .2
  100%
    transform: translate3d(0, 0, 0)
    opacity: 1

</style>
