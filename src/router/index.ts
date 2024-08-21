import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../components/Home.vue'
import NovoCliente from '../components/NovoCliente.vue'
import ClienteDetalhes from '../components/ClienteDetalhes.vue'
import NovaLavagem from '../components/NovaLavagem.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    props: true
  },
  {
    path: '/novo-cliente',
    name: 'NovoCliente',
    component: NovoCliente,
    props: true
  },
  {
    path: '/clientes/:cpf',
    name: 'ClienteDetalhes',
    component: ClienteDetalhes,
    props: true
  },
  {
    path: '/nova-lavagem',
    name: 'NovaLavagem',
    component: NovaLavagem,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router