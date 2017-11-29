// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import jQuery from 'jquery'
import {store} from './components/store/index'
// import Foundation from 'foundation-sites'
//
// window.jQuery = jQuery
// window.$ = jQuery
// window.Foundation = Foundation
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
