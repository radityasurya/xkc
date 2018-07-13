export const state = () => ({
  loading: true
})

export const getters = {
  isLoading: (state) => {
    return state.loading
  }
}

export const mutations = {
  setLoading(state, value) {
    state.loading = value
  }
}
