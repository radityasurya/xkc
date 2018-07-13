import trendingService from "~/services/TrendingService";

export const state = () => ({
  repos: [],
})

export const getters = {
  get: (state) => {
    return state.repos
  },
}

export const mutations = {
  SET_REPOS_LIST(state, {
    list
  }) {
    state.repos = list
  },
}
export const actions = {
  loadRepos({
    commit
  }, topic) {
    console.log('calling action loadRepos')
    commit('setLoading', true, {
      root: true
    })
    trendingService.loadRepos(topic).then(
      response => {
        commit('setLoading', false, {
          root: true
        })

        commit('SET_REPOS_LIST', {
          list: response.data
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
