import telemetryRoutes from 'src/telemetry/routes'
import homeRoutes from 'src/home/routes'

const routes = [
  {
    path: '/',
    component: () => import('src/shared/layouts/MainLayout.vue'),
    children: [
      ...homeRoutes,
      ...telemetryRoutes
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('src/shared/pages/ErrorNotFound.vue')
  }
]

export default routes
