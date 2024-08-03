import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../components/Home.vue'
import NovoCliente from '../components/NovoCliente.vue'
import ClienteDetalhes from '../components/ClienteDetalhes.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/novo-cliente',
    name: 'NovoCliente',
    component: NovoCliente
  },
  {
    path: '/cliente-detalhes',
    name: 'ClienteDetalhes',
    component: ClienteDetalhes,
    props: route => ({ cliente: route.params.cliente })
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router