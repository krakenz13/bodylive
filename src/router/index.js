import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EstudianteNew from '../views/EstudianteNew.vue'
import EstudianteEdit from '../views/EstudianteEdit.vue'
import EstudianteView from '../views/EstudianteView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/loginE',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../components/login.vue')
    },
    {
      path: '/registerE',
      name: 'register',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../components/register.vue')
    },
    {
      path: '/fechaE',
      name: 'fecha',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../components/fecha.vue')
    },
    {
      path: '/createE',
      name: 'Estudiante',
      component: EstudianteNew
    },
    {
      path: '/editE/:id',
      name: 'editE',
      component: EstudianteEdit
    },
    {
      path: '/viewE/:id',
      name: 'viewE',
      component: EstudianteView
    }
    
  ]
})


export default router
