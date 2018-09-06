import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      redirect: '/account'
    },
    {
      path: '/account',
      name: 'Account',
      redirect: '/accountLogin',
      component: resolve => require(['@/views/account/index'], resolve),
      children: [
        {
          path: '/accountLogin',
          name: 'Login',
          component: resolve => require(['@/views/account/login'], resolve)
        },
        {
          path: '/accountRegister',
          name: 'Register',
          component: resolve => require(['@/views/account/register'], resolve)
        }
      ]
    },
    {
      path: '/list',
      name: 'List',
      component: resolve => require(['@/views/main/list/index'], resolve)
    }
  ]
})
