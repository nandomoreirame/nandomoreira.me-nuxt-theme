export const showVideo = ({ commit, state }) => {
  commit('SET_VIDEO', null)
  commit('TOGGLE_MODAL', !state.showModal)
}

export const toggleModal = ({ commit, state }) => {
  commit('TOGGLE_MODAL', !state.showModal)
}
