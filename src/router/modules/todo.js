/** 待办表模块路由**/

import Layout from '@/layout'

const todoRouter = {
  path: '/todo',
  component: Layout,
  redirect: 'noRedirect',
  name: '待办表',
  meta: {
    title: '待办表',
    icon: 'chart'
  },
  children: [{
    path: 'todo',
    component: () => import('@/views/todo/list'),
    name: '待办列表',
    meta: {
      title: '待办列表',
      noCache: true
    }
  }]
}

export default todoRouter
