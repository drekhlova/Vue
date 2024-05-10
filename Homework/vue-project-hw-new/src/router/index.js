import Vue from 'vue'
import VueRouter from 'vue-router'

import HomePage from '@/pages/HomePage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/project',
    name: 'project',
    component: () => import('../pages/ProjectPage.vue')
  },
  {
    path: '/project/:page',
    name: 'projectArticle',
    component: () => import('../pages/ProjectPage.vue')
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import('../pages/BlogPage.vue')
  },
  {
    path: '/blog/:page',
    name: 'blogArticle',
    component: () => import('../pages/BlogPage.vue')
  },
  {
    path: '/project-details',
    name: 'project-details',
    component: () => import('../pages/ProjectDetailsPage.vue')
  },
  {
    path: '/blog-details',
    name: 'blog-details',
    component: () => import('../pages/BlogDetailsPage.vue')
  },
  {
    path: '/404',
    name: '404',
    component: () => import('../pages/404.vue')
  },
  {
    path: '*',
    redirect: '/404'
  }
]

const router = new VueRouter({
  routes
})

export default router
