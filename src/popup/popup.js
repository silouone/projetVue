import Vue from 'vue'
import App from './App.vue'
import store from './../store'
import router from './router'

import FooterMenu from './router/pages/FooterMenu'
import HeaderInfo from './router/pages/HeaderInfo'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.component('v-footer-menu', FooterMenu)
Vue.component('v-header-info', HeaderInfo)

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})

chrome.tabs.query({ //
  'active': true,
  'currentWindow': true,
  'windowId': chrome.windows.WINDOW_ID_CURRENT
}, function (tabs) {
  var tab = tabs[0]
  // RegExperssion recupérer seulement url de base :
  console.log(tab.url) // api des occurance addidas.fr ==> addidas.fr/macif
  // chrome.tabs.update({url: 'https://www.google.fr'})
  // window.close() // Note: window.close(), not this.close()
})
