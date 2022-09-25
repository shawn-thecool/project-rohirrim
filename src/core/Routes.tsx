import { lazy } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'

import { APP_ROUTER_MAP, useScrollBehavior } from '@/core'

const Users = lazy(() => import('@/view/Users'))
const Lookbooks = lazy(() => import('@/view/Lookbooks'))

export function AppRoutes() {
  useScrollBehavior()
  return (
    <Routes>
      <Route path="/" element={<Lookbooks />} />
      <Route path="/users" element={<Users />} />
      <Route path="/lookbooks" element={<Lookbooks />} />
      <Route path={APP_ROUTER_MAP.ALL} element={<RedirectRoute to={'/'} replace />} />
    </Routes>
  )
}

function RedirectRoute({ ...rest }: any) {
  const location = useLocation()
  return <Navigate {...rest} state={location} />
}
