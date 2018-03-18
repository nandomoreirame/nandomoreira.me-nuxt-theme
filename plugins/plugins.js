import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'
import VTooltip from 'v-tooltip'
import VueLazyload from 'vue-lazyload'
import WebFont from 'webfontloader'

Vue.use(VTooltip)
Vue.use(VueScrollTo)
Vue.use(VueLazyload, {
  preLoad: 1.3,
  lazyComponent: true
})

WebFont.load({
  google: {
    families: ['Ubuntu:300,400,500,700', 'Suez+One']
  }
})
