export const state = () => ({
  list: [{
      name: 'trending',
      url: '/'
    },
    {
      name: 'categories',
      url: 'categories'
    }
  ]
})

export const getters = {
  get(state) {
    console.log('get list')
    return state.list
  }
}

export const mutations = {}
