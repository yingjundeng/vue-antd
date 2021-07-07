import Vue from 'vue'
import VueRouter from 'vue-router'
import {ioRouter} from './ioRouter'
import viewIndex from '@/layout/index'
Vue.use(VueRouter)

const routes = [
  {
  path: '/login',
  name: '登录页',
  component: () =>
    import( /* webpackChunkName: "page" */ '@/views/login'),
  meta: {
    requireAuth: false,
  },
},
{
  path: '/',
  name: '首页',
  redirect:'/login',
  component:viewIndex,
  meta: {
    requireAuth: true,
  },
 },
 ...ioRouter,
 {
  path: '*',
  name: '404',
  component: () => import('@/pages/404'),
},
{
  path: '/500',
  name: '500',
  component: () => import('@/pages/500'),
},
{
  path: '/403',
  name: '403',
  component: () => import('@/pages/403'),
},
]

const router = new VueRouter({
  // 页面刷新白屏问题
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router