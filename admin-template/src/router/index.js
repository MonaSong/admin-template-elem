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
        }
      ]
    }
  ]
})
