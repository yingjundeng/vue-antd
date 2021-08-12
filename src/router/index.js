import Vue from 'vue'
import VueRouter from 'vue-router'
import {ioRouter} from './ioRouter'
import viewIndex from '@/layout/index'
//导入
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
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
  redirect:'/home',
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

// // 路由拦截器
router.beforeEach((to, from, next) => {
    NProgress.start()
    next();
})
// router.beforeEach((to, from, next) => {
//     NProgress.start()
//     if (to.matched.length != 0) {
//         if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
//             if (Boolean(localStorage.getItem("token"))) { // 通过vuex state获取当前的user是否存在
//                 if (to.path == '/' && from.path == '/') {
//                     next({
//                         path: '/index'
//                     })
//                 } else {
//                     next();
//                 }
//             } else {
//                 next({
//                     path: '/login',
//                     query: {
//                         redirect: to.fullPath
//                     } // 将跳转的路由path作为参数，登录成功后跳转到该路由
//                 })
//             }
//         } else {
//             if (Boolean(localStorage.getItem("token"))) { // 判断是否登录
//                 if (to.path != "/" && to.path != "/login") { //判断是否要跳到登录界面
//                     next();
//                 } else {
//                     /**
//                      * 防刷新，如果登录，修改路由跳转到登录页面，修改路由为登录后的首页 
//                      */
//                     next({
//                         path: '/index'
//                     })
//                 }
//             } else {
//                 next();
//             }
//         }
//     } else {
//         next({
//             path: '/login',
//             query: {
//                 redirect: to.fullPath
//             } // 将跳转的路由path作为参数，登录成功后跳转到该路由
//         })
//     }
// })

router.afterEach(() => {
    NProgress.done()
})

export default router