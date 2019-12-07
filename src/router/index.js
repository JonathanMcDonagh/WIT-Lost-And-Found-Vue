import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Items from '@/components/Items'
import LostItem from '@/components/LostItem'
import About from '@/components/About'
import Map from '../components/Map'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/items',
      name: 'Items',
      component: Items
    },
    {
      path: '/lostitem',
      name: 'LostItem',
      component: LostItem
    },
    {
      path: '/map',
      name: 'Map',
      component: Map
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
