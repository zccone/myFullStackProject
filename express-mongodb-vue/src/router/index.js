//路由页面

import Vue from 'vue'
import Router from 'vue-router'
import List from '@/components/List'
import Detail from '@/components/Detail'
import mock from '@/mock/mock'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'List',
      component: List
    },
    {
      path : '/league/:name',
      name : 'Detail',
      component : Detail
    },
    {
      path : '/mock',
      name : 'mock',
      component : mock
    },

  ]
})
