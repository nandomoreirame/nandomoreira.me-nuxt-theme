export const toggleModal = ({ commit, state }) => {
  commit('SET_VIDEO', null)
  commit('TOGGLE_MODAL', !state.showModal)
}
