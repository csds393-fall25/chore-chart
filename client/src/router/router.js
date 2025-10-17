import { createWebHistory, createRouter } from 'vue-router'

import index from '../pages/index.vue'
import Profile from '@/components/Profile.vue'

const routes = [
  { path: '/', component: index },
  { path: '/chores', component: index, props: true },
  { path: '/house', component: index, props: true },
  { path: '/create', component: index, props: true },
  { path: '/random', component: index, props: true },
  { path: '/print', component: index, props: true },
  { path: '/help', component: index, props: true },
  { path: '/leaderboard', component: index, props: true },
  { path: '/store', component: index, props: true },
  { path: '/profile', component: Profile, props: true },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
  })

export default router