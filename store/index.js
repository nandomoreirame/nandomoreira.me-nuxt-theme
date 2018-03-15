import Vuex from 'vuex'
import * as actions from './actions'
import state from './state'
import mutations from './mutations'

const Store = () =>
  new Vuex.Store({
    actions,
    state,
    mutations
  })

export default Store
