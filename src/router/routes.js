import telemetryRoutes from 'src/telemetry/routes'
import homeRoutes from 'src/home/routes'
import mappingRoutes from 'src/mapping/routes'
import modeRoutes from 'src/botonMode/routes'

const routes = [
  {
    path: '/',
    component: () => import('src/shared/layouts/MainLayout.vue'),
    children: [
      ...homeRoutes,
      ...telemetryRoutes,
      ...mappingRoutes,
      ...modeRoutes
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
