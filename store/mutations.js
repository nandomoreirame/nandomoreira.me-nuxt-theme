export default {
  TOGGLE_NAVBAR (state, data) {
    state.showNavbar = data
  },
  SET_HEADER_UP (state, data) {
    state.headerUp = data
  },
  SET_ARTICLE (state, payload) {
    state.article = payload
  },
  SET_POSTS (state, payload) {
    state.posts = payload
  },
  SET_FEATURED_POSTS (state, payload) {
    state.featuredPosts = payload
  },
  SET_PROJECTS (state, payload) {
    state.projects = payload
  },
  SET_LAST_PROJECT (state, payload) {
    state.lastProject = payload
  },
  SET_EXPERIMENTS (state, payload) {
    state.experiments = payload
  },
  SET_OPENSOURCES (state, payload) {
    state.openSources = payload
  },
  SET_SHOTS (state, payload) {
    state.shots = payload
  },
  TOGGLE_MODAL (state, payload) {
    state.showModal = payload
  },
  SET_VIDEO (state, payload) {
    state.video = payload
  }
}
