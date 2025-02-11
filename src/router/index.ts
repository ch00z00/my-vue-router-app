import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import AboutPage from '../views/AboutPage.vue'
import UserPage from '../views/UserPage.vue'
import DashboardIndex from '../components/dashboard/DashboardIndex.vue'
import DashboardHome from '../components/dashboard/DashboardHome.vue'
import DashboardProfile from '../components/dashboard/DashboardProfile.vue'

const routes = [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/about',
    component: AboutPage
  },
  {
    path: '/user/:id',
    component: UserPage
  },
  {
    path: '/dashboard',
    component: DashboardIndex,
    children: [
      {
        path: '',
        component: DashboardHome
      },
      {
        path: 'profile',
        component: DashboardProfile
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
