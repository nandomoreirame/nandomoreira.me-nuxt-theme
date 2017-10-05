<template>
  <ais-index v-if="showSearch" class="search" :search-store="searchStore">
    <div class="search__inner">
      <button @click="toggleSearch(false)" role="button"  class="search__close">&times;</button>
      <ais-input placeholder="Digite algo..." class="search__input"></ais-input>
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
.search
  position: fixed
  z-index: 99
  top: 0
  left: 0
  width: 100%
  height: 100%
  background-color: $bg-base-color
  transition: opacity .3s ease
  overflow-y: auto
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
  &__inner
    max-width: $desktop
    width: 100%
    margin: 0 auto
    padding: 4rem
  &__input
    display: block
    line-height: 45px
    width: 100%
    box-sizing: inherit
    padding: $spacing-small
    border: none
    border-radius: 3px
.article
  padding-bottom: $spacing-small
  text-decoration: none
  display: block
  &:not(:last-child)
    border-bottom: $border-base
  &__title
    margin-bottom: 0
</style>
