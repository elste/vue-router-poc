import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue' // La Home può restare statica per aprirsi istantaneamente
import { authState } from '../auth.js'

// LAZY LOADING: I componenti vengono scaricati e caricati solo quando l'utente visita la rotta
const AboutView = () => import('../views/AboutView.vue')
const LoginView = () => import('../views/LoginView.vue')
const DashboardView = () => import('../views/DashboardView.vue')
const UserDetailView = () => import('../views/UserDetailView.vue')
const CatalogView = () => import('../views/CatalogView.vue')
const NotFoundView = () => import('../views/NotFoundView.vue')

// Lazy loading anche per le sotto-viste della dashboard
const DashboardHomeTab = () => import('../views/dashboard/DashboardHomeTab.vue')
const DashboardStatsTab = () => import('../views/dashboard/DashboardStatsTab.vue')
const DashboardSettingsTab = () => import('../views/dashboard/DashboardSettingsTab.vue')

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/about', name: 'about', component: AboutView },
  { path: '/login', name: 'login', component: LoginView },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardView,
    meta: { requiresAuth: true },
    children: [
      { path: '', name: 'dashboard-home', component: DashboardHomeTab },
      { path: 'stats', name: 'dashboard-stats', component: DashboardStatsTab },
      { path: 'settings', name: 'dashboard-settings', component: DashboardSettingsTab }
    ]
  },
  { path: '/users/:id', name: 'user-detail', component: UserDetailView, props: true },
  { path: '/catalog', name: 'catalog', component: CatalogView },

  // ROTTA CATCH-ALL (404 Not Found)
  // NOTA: Deve essere SEMPRE inserita come ultima rotta dell'array!
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: NotFoundView
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  // SCROLL BEHAVIOR: Gestisce la posizione dello scroll ad ogni cambio pagina
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      // Se l'utente usa i tasti Indietro/Avanti del browser, ripristina la posizione precedente
      return savedPosition
    } else {
      // Altrimenti, scorre la pagina in cima con un effetto fluido
      return { top: 0, behavior: 'smooth' }
    }
  }
})

// Global Before Guard per l'autenticazione
router.beforeEach((to, from) => {
  if (to.meta.requiresAuth && !authState.isAuthenticated) {
    return { name: 'login', query: { redirect: to.fullPath } }
  }
})

export default router
