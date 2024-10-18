const telemetryRoutes = [
  {
    path: '/telemetry',
    name: 'telemetry',
    component: () => import('src/telemetry/pages/TelemetryPage.vue'),
    redirect: {name: 'rpm'},
    children: [
      {path: 'rpm', name: 'rpm', component: () => import('src/telemetry/pages/RpmPage.vue')},
      {path: 'time', name: 'time', component: () => import('src/telemetry/pages/TimePage.vue')},
      {path: 'sensors', name: 'sensors', component: () => import('src/telemetry/pages/SensorsPage.vue')},
      {path: 'autonomy', name: 'autonomy', component: () => import('src/telemetry/pages/AutonomyPage.vue')},
    ]
  }
]

export default telemetryRoutes;
