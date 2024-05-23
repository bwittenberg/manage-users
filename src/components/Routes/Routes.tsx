import { Home } from 'pages/Home'
import { Users } from 'pages/Users'
import { Routes as ReactRouterRoutes, Route } from 'react-router-dom'

export const Routes = () => {
  return (
    <ReactRouterRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/users/*" element={<Users />} />
    </ReactRouterRoutes>
  )
}
