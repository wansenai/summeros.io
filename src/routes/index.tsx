import { RouteObject, useRoutes } from 'react-router-dom'
import Home from '@src/pages/home'
import BaseLayout from '@src/layout/BaseLayout'


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
