import { createWebHistory, createRouter } from 'vue-router'
import Chore from '../pages/Chore.vue'
import index from '../pages/index.vue'
import Dashboard from '../pages/Dashboard.vue'
import Profile from '@/components/Profile.vue'

const routes = [
  { 
    path: '/', 
    name: 'home',
    component: Dashboard,
  },
  { 
    path: '/chores', 
    name: 'dashboard',
    component: Dashboard, 
    props: true 
  },
  { 
    path: '/house', 
    name: 'household',
    component: index, 
    props: true },
  { 
    path: '/chore/create', 
    name: 'create',
    component: Chore, 
    props: { viewMode: 'create', choreId: 0 },
  },
  {
    path: '/chore/:id',
    name: 'viewChore',
    component: Chore,
    props: route => ({
      viewMode: 'view',
      choreId: parseInt(route.params.id)
    }),
  },
  {
    path: '/chore/:id/edit',
    name: 'editChore',
    component: Chore,
    props: route => ({
      viewMode: 'edit',
      choreId: parseInt(route.params.id)
    }),
  },
  { 
    path: '/random', 
    name: 'random',
    component: index, 
    props: true 
  },
  { 
    path: '/print', 
    name: 'print',
    component: index, 
    props: true 
  },
  { 
    path: '/help', 
    name: 'help',
    component: index, 
    props: true 
  },
  { 
    path: '/leaderboard', 
    name: 'leaderboard',
    component: index, 
    props: true 
  },
  { 
    path: '/store', 
    name: 'store',
    component: index, 
    props: true 
  },
  { 
    path: '/profile', 
    name: 'profile',
    component: Profile, 
    props: true 
  },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
  })

export default router