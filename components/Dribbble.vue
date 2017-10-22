<template>
  <ul class="shots">
    <li v-for="(shot, i) in shots" :key="i" class="shot">
      <a :href="shot.html_url" :title="`link para o shot ${shot.title} - Irá abrir em uma nova aba`" target="_blank">
        <figure class="shot__figure">
          <img :alt="`Imagem do shot ${shot.title}`" :src="shot.images.hidpi">
        </figure>
        <h2 class="shot__title">{{ shot.title }}</h2>
        <!-- <div class="description" v-html="shot.description"></div>
        <div class="likes">{{ shot.likes_count }} likes</div>
        <div class="views">{{ shot.views_count }} views</div> -->
        <!-- <div class="tags">
          <span v-for="(tag, i) in shot.tags" :key="i" class="tag">{{ tag }} </span>
        </div> -->
      </a>
    </li>
  </ul>
</template>

<script>
const axios = require('axios')
export default {
  name: 'Dribbble',
  mounted () {
    this.get()
  },
  data () {
    return {
      shots: [],
      url: ''
    }
  },
  props: {
    'token': {
      required: true
    },
    'user': {
      required: true
    }
  },
  methods: {
    get () {
      const url = `https://api.dribbble.com/v1/users/${this.user}/shots/?access_token=${this.token}`
      axios.get(url).then(response => {
        const { data } = response
        this.shots = data.filter((elem, index, array) => {
          if (index <= 2) {
            return array
          }
        })
        //  response.data
      })
    }
  }
}
</script>

<style lang="sass">
@import "~assets/sass/settings"
.shots
  list-style: none
  display: flex
  position: relative
  flex-flow: row
  flex-wrap: wrap
  margin-left: -($spacing-small)
  margin-right: -($spacing-small)
  padding: 40px 0 0

.shot
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
  text-align: center

  a
    text-decoration: none

  &__title
    font-size: 1.2rem
    padding: $spacing-small 0
    margin: 0

  &__figure
    margin: 0
    img
      display: block
      max-width: 100%
      height: auto

  &:hover,
  &:focus
    box-shadow: 0 0 1px rgba(39, 44, 49, .1), 0 3px 16px rgba(39, 44, 49, .07)
    transform: translate3D(0, -1px, 0)

</style>
