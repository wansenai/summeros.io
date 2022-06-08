import BaseLayout from '../layout/BaseLayout'
// import MainContentRoutes from '@/modules/Main/routes'


export const routesConfig: RouteConfigDeclaration[] = [
  {
    path: '/',
    component: BaseLayout,
    routes: [
      {
        path: '/',
        name: '首页',
        component: () => import(/* webpackChunkName: "Project"*/ '../pages/home'),
      }
    ],
  },
]
