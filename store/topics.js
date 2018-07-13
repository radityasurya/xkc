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
  categoriesList: [],
  selected: 'All'
})

export const getters = {
  get: (state) => {
    return state.list
  },
  getSelectedTopic: (state) => {
    return state.selected
  },
  getCategories: (state) => {
    return state.categoriesList
  }
}

export const mutations = {
  SET_TOPICS_LIST(state, payload) {
    state.list = payload
  },
  SET_SELECTED_TOPIC(state, payload) {
    state.selected = payload
  },
  SET_CATEGORIES_LIST(state, payload) {
    state.allCategories = payload
  }
}

export const actions = {
  loadCategories({
    commit
  }) {
    console.log('calling action loadCategories')
    commit('setLoading', true, {
      root: true
    })
    trendingService.loadCategories().then(
      response => {
        commit('setLoading', false, {
          root: true
        })

        console.log(response.data)

        commit('SET_CATEGORIES_LIST', {
          list: response.data.popular
        })

      },
      err => {
        commit('setLoading', false, {
          root: true
        })

        console.log(err);
      }
    );
  }
}
