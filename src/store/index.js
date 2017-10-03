import Vuex from 'vuex'
import mutations from './mutations'

const createStore = () => {
  return new Vuex.Store({
    state: {
    },
    mutations
  })
}

export default createStore
