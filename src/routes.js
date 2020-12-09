// import Cadastro from './components/cadastro/Cadastro.vue'
import Home from './components/home/Home.vue'
// ao passar para uma funcao, o vue irá chamar esse componente sob demanda criando um lazy load
const Cadastro = () => System.import('./components/cadastro/Cadastro.vue')
export const routes = [
  { path: '', name: 'home', component: Home, titulo: 'Home', menu: true },
  {
    path: '/cadastro',
    name: 'cadastro',
    component: Cadastro,
    titulo: 'Cadastro',
    menu: true,
  },
  {
    path: '/cadastro/:id',
    name: 'altera',
    component: Cadastro,
    titulo: 'Cadastro',
    menu: false,
  },
  { path: '*', component: Home, menu: false },
]
