import axios from 'axios'

const Api = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    'Accept': 'application/vnd.github.mercy-preview+json',
    'Content-Type': 'application/json'
  }
})

export default {
  getTopics(category) {
    console.log('getting topics of', category)
    return Api.get('search/topics?q=' + category + '&per_page=10')
  },
  findUser(name) {
    console.log('get username of', name)
    return Api.get('/users/' + name)
  },
  getRepo(owner, name) {
    console.log('get ' + name + ' information')
    return Api.get('/repos/' + owner + '/' + name)
  }
}
