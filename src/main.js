import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '@/App.vue'

import EventBus from '@/plugins/event-bus'

import routes from '@/routes'

import 'vue-awesome/icons'

import Icon from 'vue-awesome/components/Icon'

Vue.use(EventBus)

Vue.use(VueRouter)

Vue.component('icon', Icon)

const router = new VueRouter({ routes, mode: 'history' })

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
