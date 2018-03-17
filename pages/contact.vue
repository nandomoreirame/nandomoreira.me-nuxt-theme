<template>
  <div>
    <page-header>
      <div slot="inner">
        <div class="container">
          <h1 class="pageHeader__title" itemprop="headline">Contato</h1>
          <breadcrumb :breadcrumbs="breadcrumbs"/>
          <p itemprop="description" class="pageHeader__description" v-html="pageDescription"/>
        </div>
      </div>
    </page-header>
    <div class="container--small">
      <form name="contact" action="" method="post" class="Form">
        <div class="Form__error-message">
          <p>Please enter a valid email address</p>
        </div>

        <div class="Form__group">
          <label class="Form__label" for="Form__name">Name</label>
          <input class="Form__field" type="text" name="Form__name" id="Form__name" required>
        </div>

        <div class="Form__group">
          <label class="Form__label" for="Form__company">Company</label>
          <input class="Form__field" type="text" name="Form__company" id="Form__company">
        </div>

        <div class="Form__group">
          <label class="Form__label" for="Form__email">Email</label>
          <input class="Form__field Form__field--error" type="email" name="Form__email" id="Form__email" required>
        </div>


        <div class="Form__group">
          <h4>Budget</h4>

          <div class="Form__field--select">
            <select class="Form__field">
              <option value="0">Select Budget</option>
              <option value="1">&lt; $5000</option>
              <option value="2">$5000 - $10000</option>
              <option value="3">&gt; $10000</option>
            </select>
          </div>
        </div>

        <div class="Form__group">
          <h4>Project type</h4>

          <ul class="Form__list">
            <li>
              <input type="radio" class="Form__radio" name="radio-button" id="Form__radio-1" checked>
              <label for="Form__radio-1">Choice 1</label>
            </li>

            <li>
              <input type="radio" class="Form__radio" name="radio-button" id="Form__radio-2">
              <label for="Form__radio-2">Choice 2</label>
            </li>

            <li>
              <input type="radio" class="Form__radio" name="radio-button" id="Form__radio-3">
              <label for="Form__radio-3">Choice 3</label>
            </li>
          </ul>
        </div>

        <div class="Form__group">
          <h4>Features</h4>

          <ul class="Form__list">
            <li>
              <input type="checkbox" class="Form__checkbox" id="Form__checkbox-1">
              <label for="Form__checkbox-1">Option 1</label>
            </li>

            <li>
              <input type="checkbox" class="Form__checkbox" id="Form__checkbox-2">
              <label for="Form__checkbox-2">Option 2</label>
            </li>

            <li>
              <input type="checkbox" class="Form__checkbox" id="Form__checkbox-3">
              <label for="Form__checkbox-3">Option 3</label>
            </li>
          </ul>
        </div>

        <div class="Form__group">
          <label class="Form__label" for="Form__textarea">Project description</label>
          <textarea class="Form__field" name="Form__textarea" id="Form__textarea" required></textarea>
        </div>

        <div class="Form__group">
          <button class="Form__button" role="button" type="submit" v-html="`Send Message`"/>
        </div>
      </form>
    </div>
    <meta-tags :title="pageTitle" :description="pageDescription" :url="pageUrl"/>
  </div>
</template>

<script>
  export default {
    name: 'Contact',
    data () {
      return {
        pageTitle: `Contato - Que tal me enviar um email? | Fernando Moreira | Desenvolvedor front-end e WordPress em Curitiba/PR`,
        pageDescription: `Gostaria de falar comigo? Que tal me enviar um email? Prometo que respondo na hora ;)`,
        pageUrl: `${process.env.baseUrl}/contact`,
        breadcrumbs: [
          {
            active: false,
            url: '/',
            title: 'Home'
          },
          {
            active: true,
            url: '/contact',
            title: 'Contato'
          }
        ]
      }
    },
    components: {
      MetaTags: () => import('~/components/MetaTags'),
      PageHeader: () => import('~/components/PageHeader'),
      Breadcrumb: () => import('~/components/Breadcrumb')
    }
  }
</script>

<style lang="stylus">
.Form
  margin spacingLarge auto
  @extend $clearfix
  &__group
    position relative
    margin 0 0 spacingSmall
  h4,
  &__label
    font-size 1.3rem
    color #94aab0
    margin-bottom 10px
  &__label
    cursor pointer
  &__button
    @extend $buttonDefault

.Form__label,
.Form__field
  font-family inherit
  font-size inherit
  color grayColor
  display block
  width 100%
  appearance none

.Form__field
  padding spacingSmall
  border 1px solid rgba(grayColor, .2)
  background-color #fff
  border-radius .25em
  box-shadow inset 0 1px 1px rgba(0, 0, 0, 0.08)
  &[required]
    background #fff url("/images/required.svg") no-repeat top right
  &:focus
    outline none
    border-color primaryColor
    box-shadow 0 0 5px rgba(primaryColor, 0.2)
  &--error
    border-color #e94b35
  &--select
    position relative
    background-color #fff
    &:after
      content ''
      position absolute
      z-index 1
      right 16px
      top 50%
      margin-top -8px
      display block
      width 16px
      height 16px
      background url("/images/icon-arrow.svg") no-repeat center center
      pointer-events none
    .Form__field
      box-shadow 0 1px 3px rgba(0, 0, 0, 0.08)
      background-color transparent
      cursor pointer
      &:-ms-expand
        display none

textarea.Form__field
  min-height 12.5rem
  resize vertical
  overflow auto

.Form__list
  padding 0
  margin 0
  list-style none
  @extend $clearfix
  li
    display inline-block
    position relative
    user-select none
    margin-right spacingSmall

.Form__radio,
.Form__checkbox
  position absolute
  left 0
  top 50%
  transform translateY(-50%)
  margin 0
  padding 0
  opacity 0
  z-index 2
  & + label
    cursor pointer
    padding-left 24px
    font-size 1rem
    &:before,
    &:after
      content ''
      display block
      position absolute
      left 0
      top 50%
      margin-top -10px
      width 20px
      height 20px
    &:before
      border 1px solid rgba(grayColor, .2)
      background #fff
      box-shadow inset 0 1px 1px rgba(0, 0, 0, 0.08)
    &:after
      background-color primaryColor
      background-position center center
      background-repeat no-repeat
      box-shadow 0 0 5px rgba(44, 151, 222, 0.4)
      display none

.Form__radio + label
  &:before,
  &:after
    border-radius 50%
  &:after
    background-image url("/images/icon-radio.svg")

.Form__checkbox + label
  &:before,
  &:after
    border-radius .25em
  &:after
    background-image url("/images/icon-check.svg")

.Form__radio,
.Form__checkbox
  &:focus + label:before
    box-shadow 0 0 5px rgba(44, 151, 222, 0.6)
  &:checked + label:after
    display block
  &:checked + label:before,
  &:checked + label:after
    animation FormBounce 0.6s

.Form__error-message p
  background #e94b35
  color #fff
  text-align center
  border-radius .25em
  padding 16px

@media only screen and (min-width 600px)
  .Form__group
    /* form element wrapper */
    margin 32px 0
  .Form h4,
  .Form .Form__label
    margin-bottom 10px
  .Form__field
    padding 16px

@keyframes FormBounce
  0%,
  100%
    transform scale(1)
  50%
    transform scale(0.8)

</style>
