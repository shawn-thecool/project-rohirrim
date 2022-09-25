import { useEffect } from 'react'
import { NavigateOptions, To, useLocation, useNavigate } from 'react-router-dom'

export const useScrollBehavior = (x: number = 0, y: number = 0) => {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(x, y)
  }, [location.state, x, y])
}

export const useRedirect = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const redirectTo: (to: To, options?: NavigateOptions) => void = (
    to,
    options
  ) => navigate(to, { ...options, state: location })
  return { redirectTo }
}
