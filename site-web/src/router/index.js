import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/repositor',
    name: 'repositor',
    component: () => import(/* webpackChunkName: "about" */ '../views/RepositorView.vue')
  },
  {
    path: '/operadordecaixa',
    name: 'operadordecaixa',
    component: () => import(/* webpackChunkName: "about" */ '../views/OperadorDeCaixaView.vue')
  },

  {
    path: '/padaria',
    name: 'padaria',
    component: () => import(/* webpackChunkName: "about" */ '../views/PadariaView.vue')
  },

  {
    path: '/açougue',
    name: 'açougue',
    component: () => import(/* webpackChunkName: "about" */ '../views/AçougueView.vue')
  },

  {
    path: '/hortfruti',
    name: 'hortfruti',
    component: () => import(/* webpackChunkName: "about" */ '../views/HortFrutiView.vue')
  },

  {
    path: '/embalador',
    name: 'embalador',
    component: () => import(/* webpackChunkName: "about" */ '../views/EmbaladorView.vue')
  },

  {
    path: '/laticinios',
    name: 'laticinios',
    component: () => import(/* webpackChunkName: "about" */ '../views/LaticiniosView.vue')
  },


  {
    path: '/SuperShowVilaNova',
    name: 'SuperShowVila Nova',
  
    component: () => import(/* webpackChunkName: "about" */ '../views/viewsLojas/VilaView.vue')
  },

  {
    path: '/SuperShowCentro',
    name: 'SuperShow Centro',
    component: () => import(/* webpackChunkName: "about" */ '../views/viewsLojas/CentroView.vue')
  },


  {
    path: '/SuperShowGarrafao',
    name: 'SuperShow Garrafão',
    component: () => import(/* webpackChunkName: "about" */ '../views/viewsLojas/GarrafaoView.vue')
  },

  {
    path: '/SuperShowSaoLuiz',
    name: 'SuperShow São Luiz',
    component: () => import(/* webpackChunkName: "about" */ '../views/viewsLojas/SaoLuizView.vue')
  },

  {
    path: '/SuperShowRioPosmoser',
    name: 'SuperShow Rio Posmoser',
    component: () => import(/* webpackChunkName: "about" */ '../views/viewsLojas/RioPosmoserView.vue')
  },





  


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
