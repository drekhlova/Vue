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
    path: '/page-not-found',
    name: '404',
    component: () => import('../pages/PageNotFound.vue')
  },
  {
    path: '*',
    redirect: '/404'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
