import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import VeeValidate from 'vee-validate'
import msg from './pt_BR'
import App from './App.vue'
import { routes } from './routes'
import './directives/Transform'

import 'bootstrap/dist/css/bootstrap.css'
import './assets/css/teste.css'

Vue.use(VueResource)
// adiciona caminho root para as requisições
Vue.http.options.root = 'http://localhost:3000'
// Criação do routes e chamada da rota
Vue.use(VueRouter)
const router = new VueRouter({
  routes,
  // remove a # dos links
  mode: 'history',
})

Vue.use(VeeValidate, {
  locale: 'pt_BR',
  dictionary: {
    pt_BR: {
      messages: msg,
    },
  },
})

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  // passando as rotas para a view instance
  router,
  render: (h) => h(App),
})
