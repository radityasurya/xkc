export const state = () => ({
  topics: [
    'Languages',
    'Tools',
    'Platforms',
    'Frameworks'
  ],
  selectedTopic: 'Languages'
})

export const getters = {
  get: (state) => {
    return state.topics
  },
  getSelectedTopic: (state) => {
    return state.selectedTopic
  }
}

export const mutations = {
  SET_SELECTED_TOPICS(state, payload) {
    state.selectedTopic = payload
  }
}

export const actions = {}
