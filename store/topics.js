export const state = () => ({
  topics: [
    'Algorithms',
    'Languages',
    'Tools',
    'Platforms',
    'Frameworks'
  ]
})

export const getters = {
  get: (state) => {
    return state.topics
  }
}

export const mutations = {
  SET_TOPICS(state, payload) {
    state.topics = payload
  },
  ADD_TOPICS(state, title) {
    state.topics.push(title)
  },
  REMOVE_TOPICS(state, title) {
    state.topics.splice(state.topics.indexOf(title), 1)
  },
}

export const actions = {}
