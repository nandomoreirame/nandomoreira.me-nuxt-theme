import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      showSearch: false
    },
    mutations: {
      showSearch (state, payload) {
        state.showSearch = payload
      }
    }
  })
}

export default createStore
