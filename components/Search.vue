<template>
  <ais-index v-if="showSearch" class="search" :search-store="searchStore">
    <div class="search__inner">
      <button @click="toggleSearch(false)" role="button"  class="search__close">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 12 16" fill="#435466">
          <title id="close-icon">Close icon</title>
          <path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/>
        </svg>
      </button>
      <div class="search__box">
        <svg class="search__icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="#435466">
          <title id="searchicon">Search icon</title>
          <path fill-rule="evenodd" d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0 0 13 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 0 0 0-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"/>
        </svg>
        <ais-input placeholder="Digite algo..." class="search__input"></ais-input>
      </div>
      <ais-stats v-if="searchStore.query.length > 1">
        <template scope="{ totalResults, query }">
          Você está buscando por: <strong>{{ query }}</strong>. Foram encontrados <strong>{{ totalResults }} resultados</strong>.
        </template>
      </ais-stats>
      <ais-results class="search__results" v-if="searchStore.query.length > 1">
        <template scope="{ result, stack }">
          <nuxt-link :to="result.permalink" :title="result.title" class="article">
            <div @click="toggleSearch(false)">
              <h2 class="article__title">{{ result.title }}</h2>
              <span v-if="result.date" class="article__meta">
                <span itemprop="datePublished" :content="result.date">Publicado em {{ result.date | moment("MMMM") }} de {{ result.date | moment("YYYY") }} </span>
              </span>
            </div>
          </nuxt-link>
        </template>
      </ais-results>
    </div>
  </ais-index>
</template>

<script>
import { mapMutations } from 'vuex'
import { createFromAlgoliaCredentials } from 'vue-instantsearch'
const searchStore = createFromAlgoliaCredentials('QVRK6KD8WY', 'c0715b20da3d0c724ae2e4380bf17bed')
searchStore.indexName = 'posts'

export default {
  name: 'Search',
  data () {
    return {
      searchStore
    }
  },
  computed: {
    showSearch () {
      return this.$store.state.showSearch
    }
  },
  methods: {
    ...mapMutations({
      toggleSearch: 'showSearch'
    })
  }
}
</script>

<style lang="sass" scoped>
@import "~assets/sass/settings"
@import "~assets/sass/article"
.search
  position: fixed
  z-index: 99
  top: 0
  left: 0
  width: 100%
  height: 100%
  background-color: $snow-color
  transition: opacity .3s ease
  overflow-y: auto
  .ais-stats
    opacity: .75
    color: $davys-grey-color
    margin-bottom: $spacing-mini
  &__close
    position: fixed
    z-index: 100
    top: $spacing-small
    right: $spacing-small
    cursor: pointer
    font-size: 3rem
    text-decoration: none
    line-height: 36px
    margin: 0
    padding: 0
    vertical-align: middle
    display: block
    border: none
    background: none transparent
  &__box
    position: relative
  &__icon
    position: absolute
    opacity: .8
    left: 25px
    top: 38px
  &__inner
    max-width: $tablet
    width: 100%
    margin: 0 auto
    padding: 4rem
  &__input
    display: block
    line-height: 45px
    width: 100%
    box-sizing: inherit
    padding: $spacing-small $spacing-small $spacing-small $spacing-big
    box-shadow: 0 2px 6px 0 rgba(32, 31, 32, .14)
    margin: 0 0 $spacing-mini
    border: none
    border-radius: 3px
    &:focus
      outline: 3px solid rgba($mint-color,.7)
      outline-offset: 3px
.article
  +article
  min-height: 100%
  text-decoration: none
  margin: 0 0 $spacing-small
</style>
