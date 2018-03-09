import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      showNavbar: false
    },
    mutations: {
      toggleNavbar (state, data) {
        state.showNavbar = data
      }
    }
  })
}

export default createStore
