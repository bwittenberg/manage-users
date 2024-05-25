import { Suspense, lazy } from 'react'
import { Routes as ReactRouterRoutes, Route } from 'react-router-dom'

const Home = lazy(() => import('pages/Home'))
const Users = lazy(() => import('pages/Users'))

export const Routes = () => {
  return (
    <ReactRouterRoutes>
      <Route
        path="/"
        element={
          <Suspense>
            <Home />
          </Suspense>
        }
      />
      <Route
        path="/users/*"
        element={
          <Suspense>
            <Users />
          </Suspense>
        }
      />
    </ReactRouterRoutes>
  )
}
