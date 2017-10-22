<template>
  <article class="postItem" :class="`${count === 0 ? 'postItem--featured' : ''}`">
    <nuxt-link :to="post.permalink" class="postItem__image-link" v-if="post.image">
      <div class="postItem__image" :style="`background-image: url(${post.image})`"></div>
      <img :src="post.image" :alt="`imagem de ${post.title}`">
    </nuxt-link>
    <div class="postItem__content">
      <header class="postItem__header">
        <h2 class="postItem__title">
          <nuxt-link :to="post.permalink" :title="post.title">{{ post.title }}</nuxt-link>
        </h2>
      </header>
      <p v-if="post.description" itemprop="description" class="postItem__description">
        <nuxt-link :title="post.title" :to="post.permalink">{{ post.description }}</nuxt-link>
      </p>
      <footer class="postItem__footer">
        <small class="postItem__meta">
          <span v-if="post.date" itemprop="datePublished" :content="post.date">Publicado em {{ post.date | moment("MMMM") }} de {{ post.date | moment("YYYY") }} </span>
          <span>por <strong itemprop="author">Fernando Moreira</strong></span>
        </small>
        <!-- <nuxt-link-button :title="post.title" buttonType="ghost" :buttonPermalink="post.permalink">Continue lendo</nuxt-link-button> -->
      </footer>
    </div>
  </article>
</template>

<script>
  export default {
    name: 'PostItem',
    props: {
      'post': {
        required: true
      },
      'count': {
        type: Number
      }
    }
  }
</script>

<style lang="sass">
@import "~assets/sass/settings"
.postItem
  display: flex
  flex: 1 1 300px
  flex-direction: column
  overflow: hidden
  margin: 0 $spacing-small $spacing-base
  min-height: 300px
  background: #fff 50%
  background-size: cover
  border-radius: 5px
  box-shadow: 8px 14px 38px rgba(39,44,49,.06), 1px 3px 8px rgba(39,44,49,.03)
  transition: box-shadow .2s ease, transform .2s ease

  &:hover,
  &:focus
    box-shadow: 0 0 1px rgba(39, 44, 49, .1), 0 3px 16px rgba(39, 44, 49, .07)
    transform: translate3D(0, -1px, 0)

  a
    color: $feldgrau-color
    text-decoration: none

  &__content
    -ms-flex-positive: 1
    flex-grow: 1
    display: -ms-flexbox
    display: flex
    -ms-flex-direction: column
    flex-direction: column
    -ms-flex-pack: justify
    justify-content: space-between

  &__header,
  &__description,
  &__footer
    position: relative
    display: block
    padding: 0 $spacing-small

  &__footer
    margin: 0
    padding-bottom: $spacing-small

  &__meta
    display: block
    opacity: .6
    font-size: .65rem
    line-height: 1.2em
    text-transform: uppercase
    margin: 0
    span
      display: block

  &__title
    font-size: 1.4rem
    margin-bottom: .5rem

  &__description
    font-size: 1rem
    line-height: 1.4em

  &__image-link
    position: relative
    img
      display: none
  &__image
    width: 100%
    height: 250px
    background: #c5d2d9 no-repeat 50%
    background-size: cover

  +media($tablet-large)
    &--featured
      flex: 1 1 100%
      flex-direction: row
      .postItem__image-link
        flex: 1 1 auto
      .postItem__image
        position: absolute
        width: 100%
        height: 100%
      .postItem__content
        flex: 0 1 357px
</style>
