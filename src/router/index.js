import { createRouter, createWebHistory } from 'vue-router'
import AppLayout from '@/layout/AppLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: AppLayout,
      children: [
        {
          path: '/',
          name: 'dashboard',
          component: () => import('../views/DashBoard.vue'),
        },
        {
          path: '/pages-starter',
          component: () => import('../views/pages/PagesStarter.vue'),
        },
        {
          path: '/form-elements',
          component: () => import('../views/forms/BasicElements.vue'),
        },
        {
          path: '/ui-breadcrumb',
          component: () => import('../views/ui/BreadCrumb.vue'),
        },
        {
          path: '/ui-buttons',
          component: () => import('../views/ui/ButtonS.vue'),
        },
        {
          path: '/ui-cards',
          component: () => import('../views/ui/CardS.vue'),
        },
        {
          path: '/ui-tabs',
          component: () => import('../views/ui/TabS.vue'),
        },
      ],
    },
    {
      path: '/pages-register',
      component: () => import('../views/pages/authentication/PagesRegister.vue'),
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
