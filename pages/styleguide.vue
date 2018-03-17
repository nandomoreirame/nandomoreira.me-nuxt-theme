<template>
  <main>
    <div class="styleguide container">
      <section class="styleguide__section">
        <h2>Primary colors</h2>
        <span class="styleguide__color" v-for="color in colors.primary" :key="color" v-bind:class="`bgcolor--${color} styleguide__color--${color}`"/>
        <h2>Gray colors</h2>
        <span class="styleguide__color" v-for="color in colors.grays" :key="color" v-bind:class="`bgcolor--${color} styleguide__color--${color}`"/>
      </section>
      <section class="styleguide__section">
        <h2>Typography</h2>
        <div class="typography">
          <div class="typography__fonts typography__fonts--suez">
            <h2>AaBb</h2>
            <span>
              <span>Suez One</span>
              <span> - </span>
              <span>Regular</span>
            </span>
          </div>
          <div class="typography__fonts typography__fonts--ubuntu">
            <h2>AaBb</h2>
            <span>
              <span>Ubuntu</span>
              <span> - </span>
              <span class="r">Regular</span>
              <span class="l">Light</span>
              <span class="n">Medium</span>
              <span class="b">Bold</span>
            </span>
          </div>
          <h1>Heading 1</h1>
          <h2>Heading 2</h2>
          <h3>Heading 3</h3>
          <h4>Heading 4</h4>
          <h5>Heading 5</h5>
          <h6>Heading 6</h6>
          <p>Paragraph</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam accusantium quis eos asperiores, voluptas provident reiciendis veritatis neque velit est, maxime similique autem repellat rerum ad sunt perspiciatis ipsum omnis?</p>
          <p>Ea cillum qui consectetur aliquip sunt id reprehenderit. Ipsum exercitation nostrud aute cupidatat est adipisicing aute enim sint anim. Pariatur voluptate aute laboris esse proident. Labore do dolor Lorem reprehenderit. Aute est anim occaecat aliquip est eu velit consequat. </p>
          <ul>
            <li>Ex commodo id minim occaecat</li>
            <li>Minim laboris aliqua elit commodo
              <ul>
                <li>reprehenderit</li>
                <li>labore</li>
                <li>nostrud
                  <ul>
                    <li>reprehenderit</li>
                    <li>labore</li>
                    <li>nostrud</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>ullamco culpa Lorem ullamco</li>
            <li>Lorem Lorem aliqua pariatur anim non</li>
          </ul>
          <ol>
            <li>In ad Lorem non anim nostrud</li>
            <li>labore irure Lorem occaecat
              <ol>
                <li>reprehenderit</li>
                <li>labore</li>
                <li>nostrud
                  <ol>
                    <li>reprehenderit</li>
                    <li>labore</li>
                    <li>nostrud</li>
                  </ol>
                </li>
              </ol>
            </li>
            <li>eiusmod pariatur irure laboris</li>
            <li>Labore dolore anim nisi velit ad</li>
          </ol>
        </div>
      </section>
      <section class="styleguide__section">
        <h2>Buttons</h2>
        <link-button buttonSize="small" buttonPermalink="#">default small</link-button>
        <link-button buttonPermalink="#">default</link-button>
        <link-button buttonSize="large" buttonPermalink="#">default large</link-button>
        <link-button buttonType="ghost" buttonSize="small" buttonPermalink="#">ghost small</link-button>
        <link-button buttonType="ghost" buttonPermalink="#">ghost</link-button>
        <link-button buttonType="ghost" buttonSize="large" buttonPermalink="#">ghost large</link-button>
        <div class="buttons__ghost-white bgcolor--primary">
          <link-button buttonType="ghost-white" buttonSize="small" buttonPermalink="#">ghost white small</link-button>
          <link-button buttonType="ghost-white" buttonPermalink="#">ghost white</link-button>
          <link-button buttonType="ghost-white" buttonSize="large" buttonPermalink="#">ghost white large</link-button>
        </div>
      </section>
    </div>
    <meta-tags :title="pageTitle" :url="pageUrl"/>
  </main>
</template>

<script>
  export default {
    name: 'Styleguide',
    data () {
      return {
        pageTitle: `Styleguide - Fernando Moreira | Desenvolvedor front-end e WordPress em Curitiba/PR`,
        pageUrl: `${process.env.baseUrl}/styleguide`,
        colors: {
          primary: [
            'primary',
            'secondary',
            'tertiary'
          ],
          grays: [
            'gray',
            'base',
            'border',
            'silver',
            'background'
          ]
        },
        breadcrumbs: [
          {
            active: false,
            url: '/',
            title: 'Home'
          },
          {
            active: true,
            url: '/styleguide',
            title: 'Styleguide'
          }
        ]
      }
    },
    components: {
      MetaTags: () => import('~/components/MetaTags'),
      LinkButton: () => import('~/components/LinkButton'),
      PageHeader: () => import('~/components/PageHeader')
    }
  }
</script>

<style lang="stylus">
.styleguide
  padding-top 6.25rem
  &__section
    padding-bottom spacingLarge
    margin-bottom spacingLarge
    border-bottom borderBase
  &__color
    width 220px
    height 160px
    border-radius 10px
    position relative
    box-shadow boxShadowBase
    display inline-block
    overflow hidden
    &:not(:last-child)
      margin-right 15px
    &:after
      content ''
      display block
      position absolute
      bottom 0
      right 0
      left 0
      background-color #fff
      width 100%
      padding 15px
      font-size .7rem
      font-weight fontWeightRegular
      line-height 1.23
      text-align left
      color #4c484c
    &--primary:after
      content ''+primaryColor+' - primaryColor'
    &--secondary:after
      content ''+secondaryColor+' - secondaryColor'
    &--tertiary:after
      content ''+tertiaryColor+' - tertiaryColor'
    &--silver:after
      content ''+silverColor+' - silverColor'
    &--gray:after
      content ''+grayColor+' - grayColor'
    &--border:after
      content ''+borderColor+' - borderColor'
    &--base:after
      content ''+baseColor+' - baseColor'
    &--background:after
      content ''+backgroundColor+' - backgroundColor'

  .bgcolor
    &--primary
      background-color primaryColor
    &--secondary
      background-color secondaryColor
    &--tertiary
      background-color tertiaryColor
    &--silver
      background-color silverColor
    &--gray
      background-color grayColor
    &--border
      background-color borderColor
    &--base
      background-color baseColor
    &--background
      background-color backgroundColor

.buttons__ghost-white
  padding spacingBase
  margin spacingSmall 0

.typography
  &__fonts
    min-height 146px
    border-radius 10px
    text-align center
    background-color #fff
    padding spacingSmall spacingBase
    display inline-block
    margin-right spacingSmall
    box-shadow boxShadowBase
    &--suez
      &, h2
        font-family fontFamilyHeading
    &--ubuntu
      &, h2
        font-family fontFamilyBase
    h2
      font-size 90px
      line-height 0.78
      color baseColor
      margin 0 0 15px
    span
      span
        display inline-block
        &:not(:last-child)
          margin-right 5px
      &.l
        font-weight fontWeightLight
      &.n
        font-weight fontWeightNormal
      &.r
        font-weight fontWeightRegular
      &.b
        font-weight fontWeightBold
</style>
