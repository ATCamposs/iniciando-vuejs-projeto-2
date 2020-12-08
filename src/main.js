import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './routes'
import './directives/Transform'

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
// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  // passando as rotas para a view instance
  router,
  render: (h) => h(App),
})
