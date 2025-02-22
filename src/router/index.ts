import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import AboutPage from '../views/AboutPage.vue'
import UserPage from '../views/UserPage.vue'
import DashboardView from '../views/DashboardView.vue'
import LoginPage from '../views/LoginPage.vue'

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
    component: DashboardView,
    meta: { requiresAuth: true } // 認証が必要なページ
  },
  {
    path: '/login',
    component: LoginPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    // 認証が必要なページへのアクセス
    const isAuthenticated = checkAuth()
    if (isAuthenticated) {
      next()
    } else {
      next('/login')
    }
  } else {
    next() // 認証が不要なページはそのまま遷移
  }
})

export default router
