import Api from '@/services/api'

export default {
  fetchItems () {
    return Api().get('/items')
  },
  postItem (item) {
    return Api().post('/items', item,
      { headers: {'Content-type': 'application/json'} })
  }
}
