<template>
  <div class="skills">
    <ul class="skills__list">
      <li class="skills__item" v-for="(skill, id) in skills" :key="skill.id">
        <span :style="`background-image: url(/images/skills/${id}.svg)`">{{ skill }}</span>
        <small>{{ skill }}</small>
      </li>
    </ul>
    <p>E o que eu não sei, aprendo rápido! Entre em contato: <a href="mailto:nandomoreira.me@gmail.com">nandomoreira.me[arroba]gmail.com</a></p>
    <social-icons iconColor="#435466"></social-icons>
    <link-button buttonType="ghost" buttonSize="large" buttonPermalink="https://api.whatsapp.com/send?1=pt_BR&amp;phone=5541984401163" :nuxtLink="false" linkTarget="_blank">
      <svg aria-labelledby="whatsapp-icon" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor">
        <title id="whatsapp-icon">WhatsApp icon</title>
        <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.136-.135.301-.345.451-.523.146-.181.194-.301.297-.496.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.195 2.105 3.195 5.1 4.485.714.3 1.27.48 1.704.629.714.227 1.365.195 1.88.121.574-.091 1.767-.721 2.016-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.57-.345m-5.446 7.443h-.016c-1.77 0-3.524-.48-5.055-1.38l-.36-.214-3.75.975 1.005-3.645-.239-.375c-.99-1.576-1.516-3.391-1.516-5.26 0-5.445 4.455-9.885 9.942-9.885 2.654 0 5.145 1.035 7.021 2.91 1.875 1.859 2.909 4.35 2.909 6.99-.004 5.444-4.46 9.885-9.935 9.885M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.893c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652c1.746.943 3.71 1.444 5.71 1.447h.006c6.585 0 11.946-5.336 11.949-11.896 0-3.176-1.24-6.165-3.495-8.411"/>
      </svg>
      Fale comigo pelo WhatsApp
    </link-button>
  </div>
</template>

<script>
export default {
  name: 'Skills',
  components: {
    LinkButton: () => import('~/components/LinkButton'),
    SocialIcons: () => import('~/components/SocialIcons')
  },
  data () {
    return {
      skills: {
        html5: 'HTML5',
        css3: 'CSS3',
        javascript: 'JavaScript',
        wordpress: 'WordPress',
        php: 'PHP',
        apache: 'Apache',
        gulp: 'GulpJS',
        git: 'Git',
        github: 'GitHub',
        gitlab: 'Gitlab',
        jquery: 'jQuery',
        vuejs: 'VueJS',
        react: 'React',
        angularjs: 'AngularJS',
        nodejs: 'NodeJS',
        babel: 'Babel',
        mocha: 'Mocha',
        chai: 'Chai',
        bootstrap: 'Bootstrap',
        sass: 'SASS',
        bower: 'Bower',
        jekyll: 'Jekyll',
        codeigniter: 'CodeIgniter',
        laravel: 'Laravel',
        symfony: 'Symfony',
        docker: 'Docker',
        heroku: 'Heroku',
        sketchapp: 'SketchApp',
        photoshop: 'Photoshop',
        ruby: 'Ruby',
        rails: 'Ruby on Rails',
        amazonwebservices: 'Amazon Webservices',
        digitalocean: 'DigitalOcean',
        linux: 'Linux',
        travis: 'TravisCI',
        responsive: 'Responsive Web design, PWA, Mobile First, Progressive Enhancement, e mais...'
      }
    }
  }
}
</script>

<style lang="stylus">
.skills
  text-align center
  .social
    margin-bottom spacingSmall
  &__list
    list-style none
    padding 0
    margin 0
    display flex
    position relative
    align-items center
    flex-flow row
    flex-wrap wrap
  &__item
    display inline-block
    padding spacingMini
    margin-bottom spacingMini
    flex: 1 0 percentage(1/6)
    small
      display block
      line-height 1.4
    span
      display block
      opacity .3
      width 60px
      height 60px
      margin 0 auto spacingMini
      background-repeat no-repeat
      background-position center
      background-size 100% 60px
      text-indent -99999px
      transition transform .12s timingFunction, opacity .12s timingFunction
    &:last-child
      flex: 1 0 100%
      small
        font-size 1rem
      span
        opacity 1
        width 160px
        height 160px
        background-size 100% 160px
    &:not(:last-child):hover,
    &:not(:last-child):focus
      span
        opacity 1
        transform scale(1.1) rotate(5deg)
</style>
