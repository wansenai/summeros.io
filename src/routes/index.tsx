import {RouteObject, useRoutes} from 'react-router-dom'

import Home from '../pages/home'
import BaseLayout from '../layout/BaseLayout'
// import MainContentRoutes from '@/modules/Main/routes'


const routes: RouteObject[] = [
  {
    path: '/',
    element: <BaseLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      }
    ]
  },
]

export const RouterElement = () => useRoutes(routes)
