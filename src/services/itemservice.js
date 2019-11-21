import Api from '@/services/api'

export default {
  fetchItems () {
    return Api().get('/items')
  }
}
