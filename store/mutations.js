export default {
  TOGGLE_NAVBAR (state, payload) {
    state.showNavbar = payload
  },
  SET_HEADER_UP (state, payload) {
    state.headerUp = payload
  },
  SET_DRIBBLE_READY (state, payload) {
    state.dribbleReady = payload
  },
  SET_POST (state, payload) {
    state.post = payload
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
