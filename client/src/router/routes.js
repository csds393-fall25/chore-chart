import Chore from '../pages/Chore.vue'
import index from '../pages/index.vue'
import Dashboard from '../pages/Dashboard.vue'
import Profile from '@/components/Profile.vue'
import PrintPage from '../pages/PrintPage.vue'
import Household from '@/components/Household.vue'
import Store from '../pages/Store.vue'
import Random from '../pages/Random.vue'

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
    component: Household, 
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
    component: Random, 
    props: true 
  },
  { 
    path: '/print', 
    name: 'print',
    component: PrintPage, 
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
    component: Store, 
    props: true 
  },
  { 
    path: '/profile', 
    name: 'profile',
    component: Profile, 
    props: true 
  },
]

export default routes;