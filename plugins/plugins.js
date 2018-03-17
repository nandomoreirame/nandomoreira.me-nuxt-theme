import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'
import VTooltip from 'v-tooltip'
import VueLazyload from 'vue-lazyload'

Vue.use(VTooltip)
Vue.use(VueScrollTo)
Vue.use(VueLazyload, {
  preLoad: 1.3,
  lazyComponent: true
})
