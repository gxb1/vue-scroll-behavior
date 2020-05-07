// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// process.env.NODE_ENV === 'development'
// import vueScrollBehavior from '../src/vue-scroll-behavior.js'

// process.env.NODE_ENV === 'production'
import vueScrollBehavior from '../dist/vue-scroll-behavior.js'

Vue.config.productionTip = false

// Using vueScrollBehavior
Vue.use(vueScrollBehavior, {
  router: router,
  // el: '#app',
  // maxLength: 3,
  // ignore: [/\/b/, /\/m/],
  // delay: 0
})

// console.log(Vue.vsbHstoryList)

// Directive v-elem, getting elem offsetTop
Vue.directive('elem', {
  inserted: function (el) {
    el.innerHTML =
      'Distance top height: <b>' + el.offsetTop + '</b>px'
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
