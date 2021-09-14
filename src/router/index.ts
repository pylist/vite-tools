import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'

const routes: RouteRecordRaw[] = [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '',
          name: 'Home',
          component: () => import('@/views/Home/index.vue'),
          meta: {
            title: '首页'
          }
        },
        {
          path: 'timestamp',
          name: 'Timestamp',
          component: () => import('@/views/Timestamp/index.vue'),
          meta: {
            title: '时间戳转换'
          }
        }
      ]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router