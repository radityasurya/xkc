import trendingService from "~/services/TrendingService";

export const state = () => ({
  list: [{
      name: 'All'
    },
    {
      name: 'HTML'
    },
    {
      name: 'C#'
    },
    {
      name: 'Java'
    },
    {
      name: 'JavaScript'
    },
    {
      name: 'PHP'
    },
    {
      name: 'Python'
    },
    {
      name: 'Ruby'
    },
  ],
  selected: 'All'
})

export const getters = {
  get: (state) => {
    return state.list
  },
  getSelectedTopic: (state) => {
    return state.selected
  }
}

export const mutations = {
  SET_TOPICS_LIST(state, payload) {
    state.list = payload
  },
  SET_SELECTED_TOPIC(state, payload) {
    state.selected = payload
  }
}

export const actions = {}
