<template>
  <div class="home">

    <section class="home__hero section">
      <div class="section__inner" itemscope itemtype="http://schema.org/Person">
        <h1>Oi, eu sou o <span itemprop="name"><nuxt-link title="Meu nome é Fernando Moreira Costa (muito prazer)" to="/about">Fernando</nuxt-link></span>!</h1>
        <h2 role="presentation">
          Sou <strong itemprop="jobTitle">desenvolvedor front-end</strong> na <strong><a href="https://onedevstudio.github.io/" target="_blank">Onedev Studio</a></strong> em <strong>Curitiba/PR</strong>.
          <small>Se você está em busca de um programador freelancer front-end, WordPress, PHP ou JavaScript entre em contato: <a href="mailto:nandomoreira.me@gmail.com">nandomoreira.me[arroba]gmail.com</a> ou através das redes sociais abaixo.</small>
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
          <h2>Últimos Artigos</h2>
        </header>
        <div class="container">
          <div class="last-articles">
            <post-item v-for="(post, i) in lastArticles" :key="i" :count="i" :post="post"></post-item>
          </div>
          <div class="section__button">
            <link-button buttonType="ghost" buttonPermalink="/blog">mais artigos →</link-button>
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
            <link-button buttonType="ghost-white" buttonPermalink="/projects">mais projetos →</link-button>
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
            <link-button buttonType="ghost" buttonPermalink="https://dribbble.com/umdevux" :nuxtLink="false" linkTarget="_blank">
              <svg aria-labelledby="dribbble-icon" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor">
                <title id="dribbble-icon">Dribbble icon</title>
                <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.814zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z"/>
              </svg>
              Mais shots no Dribbble →
            </link-button>
          </div>
        </div>
      </div>
    </section>

    <section class="home__skills section">
      <div class="section__inner">
        <header class="section__header">
          <h2>Minhas habilidades</h2>
        </header>
        <div class="container">
          <skills></skills>
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
    Skills: () => import('~/components/Skills'),
    Dribbble: () => import('~/components/Dribbble')
  }
}
</script>

<style lang="stylus">
.section
  width 100%
  position relative
  overflow hidden
  @extend $clearfix
  &__inner
    padding 0
    margin-bottom spacingLarge
    +above($tablet)
      padding 8rem 0
      margin-bottom 0
  &__button
    text-align center
    +above($tablet)
      position absolute
      bottom spacingBase
      left 0
      right 0
    a
      text-transform uppercase
  &__header
    text-align center
    background-color feldgrauColor
    padding spacingSmall
    margin-bottom spacingBase
    position relative
    +above($tablet)
      position absolute
      top 0
      left 0
      right 0
    h2
      color #fff
      margin 0
    &:before
      position absolute
      content ''
      top 100%
      left 50%
      width 0
      height 0
      border-top 20px feldgrauColor solid
      border-right 20px solid transparent
      border-bottom 20px solid transparent
      border-left 20px solid transparent
      margin-left -20px

.home
  &__scrollto
    display none
    +above($tablet)
      display block
      position absolute
      bottom spacingSmall
      left 50%
      margin-left -30px
      animation scrollDown .8s timingFunction infinite both
      &:hover,
      &:active,
      &:focus
        animation-play-state paused
        transform translate3d(0, 0, 0)
        opacity 1
      svg
        line-height 1
        display block
        margin 0
  &__hero
    text-align center
    padding-top spacingBig
    &:before
      transform translate3d(0, 0, 0)
      content ''
      position absolute
      top 0
      left 0
      right 0
      bottom 0
      opacity .3
      background-image url("/images/hero-cover.jpg")
      background-repeat no-repeat
      background-size cover
      background-attachment fixed
      z-index 1
      transform scale(1.15)
    +above($tablet)
      height 100vh
      display table
      .section__inner
        display table-cell
        vertical-align middle
    .section__inner
      position relative
      z-index 2
    h1,
    h2
      display block
      max-width 64rem
      padding-left spacingSmall
      padding-right spacingSmall
      margin spacingSmall auto
    h1
      font-size 3.2rem
      +above($mobile-large)
        font-size 4.6rem
      +above($tablet)
        font-size 5.6rem
      span
        color mintColor
      &::after
        content ''
        overflow hidden
        background-color mintColor
        height 20px
        width 100%
        clip-path polygon(0 0, 100% 0, 100% 100%, 0 5%)
        display block
    h2
      font-family fontFamilyBase
      font-weight fontWeightLight
      color davysGreyColor
      font-size 1rem
      +above($mobile-large)
        font-size 1.6rem
      +above($tablet)
        font-size 2rem
      a
        color linkColor
        text-decoration underline
      small
        display block
        font-size .9rem
        margin-top  spacingMini
        +above($mobile-large)
          font-size 1.2rem
        +above($tablet)
          font-size 1.4rem
  &__social-icons
    padding-top spacingSmall
  &__work
    background-color mintColor
    .project
      figure
        margin-bottom spacingSmall
        +above($tablet)
          margin-bottom 0
    .project,
    .project a
      color #fff
    .project.project--invert
      padding-top spacingSmall
      padding-bottom spacingSmall
      margin-top 0
      margin-bottom 0
      background-color transparent
    .container
      padding-top spacingBase
      padding-bottom spacingBase
  &__skills
    .section__inner
      padding-bottom 0
      .skills__item:not(:last-child)
        flex: 1 0 percentage(1/9)
.last-articles
  display flex
  position relative
  flex-flow row
  flex-wrap wrap
  margin-left -(spacingSmall)
  margin-right -(spacingSmall)
  padding 40px 0 0

@keyframes scrollDown
  0%
    transform translate3d(0, -20px, 0)
    opacity .2
  100%
    transform translate3d(0, 0, 0)
    opacity 1
</style>
