import Vue from 'vue';
import Router from 'vue-router';
import checkboxTable from '@/components/page/checkboxTable/index.vue';
import main from '@/components/page/index.vue';
import login from '@/components/page/Login.vue';
import error from '@/components/page/404.vue';
import mock from '@/components/page/mock/mock'

Vue.use(Router);
//去缓存里面拿一个菜单
let ms_lujin = localStorage.getItem('ms_lujin');
//如果没有拿到就去登陆页面
ms_lujin === null ? ms_lujin = '/checkboxTable' : ms_lujin;


export default new Router(
  {

    routes: [
      {
        path: '/',
        name: 'main', component: main,
        children: [
          {
            path: '/inputDisabled',
            component: resolve => require(['../components/page/input/index.vue'], resolve),
            meta: {title: '禁止输入'},
          },
          {
            path: '/indexSelect',
            component: resolve => require(['../components/page/input/indexSelect.vue'], resolve),
            meta: {title: 'select联动'},
          },
          {
            path: '/loadMoreUp',
            component: resolve => require(['../components/page/loadMore/loadMoreUp.vue'], resolve),
            meta: {title: '下拉刷新'},
          },
          {
            path: '/checkboxTable',
            component: resolve => require(['../components/page/checkboxTable/index.vue'], resolve),
            meta: {title: '多选表格'},
          },
          {
            path : '/mock',
            name : 'mock',
            component : mock
          },
        ],
      },
      {
        path: '/login',
        name: 'login', component: login,
      },
      {
        path: '/404',
        name: 'error', component: error,
      },

    ]
  })
