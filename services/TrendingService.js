import axios from 'axios'

const Api = axios.create({
  baseURL: 'https://github-trending-api.now.sh',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
  }
})

const timeline = 'monthly'

export default {
  loadCategories() {
    console.log('getting the popular languages')
    return Api.get('/languages')
  },
  loadRepos(topic) {
    console.log('loading all repos related with ' + topic)
    return Api.get('/repositories?language=' + topic + '&since=' + timeline)
  }
}
