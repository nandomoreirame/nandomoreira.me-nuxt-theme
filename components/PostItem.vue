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
          <span v-if="post.date" itemprop="datePublished" :content="post.date">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-calendar"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            Publicado em {{ post.date | moment("MMMM") }} de {{ post.date | moment("YYYY") }}
          </span>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            por <strong itemprop="author">Fernando Moreira</strong>
          </span>
          <!-- <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-message-circle"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
            <strong><a :href="`${post.permalink}/#disqus_thread`" :data-disqus-identifier="`${post.permalink}/`">0</a></strong> comentários
          </span> -->
        </small>
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

<style lang="stylus">
.postItem
  display flex
  flex 1 1 300px
  flex-direction column
  overflow hidden
  margin 0 $spacing-small $spacing-base
  min-height 300px
  background #fff 50%
  background-size cover
  border-radius 5px
  box-shadow 8px 14px 38px rgba(39,44,49,.06), 1px 3px 8px rgba(39,44,49,.03)
  transition box-shadow .2s ease, transform .2s ease
  &:hover,
  &:focus
    box-shadow 0 0 1px rgba(39, 44, 49, .1), 0 3px 16px rgba(39, 44, 49, .07)
    transform translate3D(0, -1px, 0)
  a
    color $feldgrau-color
    text-decoration none
  &__content
    -ms-flex-positive 1
    flex-grow 1
    display -ms-flexbox
    display flex
    -ms-flex-direction column
    flex-direction column
    -ms-flex-pack justify
    justify-content space-between
  &__header,
  &__description,
  &__footer
    position relative
    display block
    padding 0 $spacing-small
  &__footer
    margin 0
    padding-bottom $spacing-small
  &__meta
    display block
    opacity .6
    font-size .65rem
    line-height 1.2em
    text-transform uppercase
    margin 0
    span
      display block
      margin-bottom 5px
    svg
      display inline-block
      vertical-align middle
      margin-right 4px
      line-height 1
      top -2px
      position relative
  &__title
    font-size 1.4rem
    margin-bottom .5rem
  &__description
    font-size 1rem
    line-height 1.4em
  &__image-link
    position relative
    img
      display none
  &__image
    width 100%
    height 250px
    background #c5d2d9 no-repeat 50%
    background-size cover
  +above($tablet-large)
    &--featured
      flex 1 1 100%
      flex-direction row
      .postItem__image-link
        flex 1 1 auto
      .postItem__image
        position absolute
        width 100%
        height 100%
      .postItem__content
        flex 0 1 357px
</style>
