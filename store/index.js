import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      showNavbar: false,
      article: null,
      posts: [],
      projects: [],
      experiments: [],
      openSources: []
    },
    mutations: {
      TOGGLE_NAVBAR (state, data) {
        state.showNavbar = data
      },
      SET_ARTICLE (state, payload) {
        state.article = payload
      },
      SET_POSTS (state, payload) {
        state.posts = payload
      },
      SET_PROJECTS (state, payload) {
        state.projects = payload
      },
      SET_EXPERIMENTS (state, payload) {
        state.experiments = payload
      },
      SET_OPENSOURCES (state, payload) {
        state.openSources = payload
      }
    }
  })
}

export default createStore
