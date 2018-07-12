import axios from 'axios'
import githubService from "~/services/GithubService";

export const state = () => ({
  repos: [],
})

export const getters = {
  get: (state) => {
    return state.repos
  },
}

export const mutations = {
  SET_REPOS_LIST(state, payload) {
    state.repos = payload
  },
}
export const actions = {
  getRepos({
    commit
  }, category) {
    console.log('calling action getRepos for', category)
    githubService.getTopics(category).then(
      response => {
        console.log(response.data)
        commit('SET_REPOS_LIST',
          response.data.items
        )
      },
      err => {
        console.log(err);
      }
    );
  }
}
