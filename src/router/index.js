import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import addtask from '../views/addtask.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/add',
    name: 'add',
    component: addtask
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
