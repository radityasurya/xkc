export const state = () => ({
  list: [
    'New',
    'Popular',
    'Categories',
  ]
})

export const getters = {
  get(state) {
    console.log('get list')
    return state.list
  }
}

export const mutations = {}
