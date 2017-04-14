import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      component: resolve => require(['@/pages/login.vue'], resolve)
    },
    {
      path: '/index',
      component: resolve => require(['@/components/home.vue'], resolve),
      children: [
        {
          path: '/',
          component: resolve => require(['@/pages/grid.vue'], resolve)
        },
        {
          path: '/grid',
          component: resolve => require(['@/pages/grid.vue'], resolve)
        },
        {
          path: '/components',
          component: resolve => require(['@/pages/mycomponents.vue'], resolve)
        },
        {
          path: '/vuexTest1',
          component: resolve => require(['@/pages/vuexTest1.vue'], resolve)
        },
        {
          path: '/vuexTest2',
          component: resolve => require(['@/pages/vuexTest2.vue'], resolve)
        }
      ]
    }
  ]
})
