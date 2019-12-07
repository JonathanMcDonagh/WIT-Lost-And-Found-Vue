// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueSweetalert2 from 'vue-sweetalert2'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(BootstrapVue)
Vue.use(VueSweetalert2)

Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBVY2P4Ozdla2V4bhwo2CQbuTxTFkufsdE',
    libraries: 'places' // necessary for places input
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
