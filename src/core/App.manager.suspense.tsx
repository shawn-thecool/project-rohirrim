import { Suspense } from 'react'

interface IAppSuspense {
  children: React.ReactNode
  fallback?: React.ReactNode
}

export function AppSuspense({ children, fallback }: IAppSuspense) {
  return (
    <Suspense
      fallback={
        <>
          {fallback ? (
            fallback
          ) : (
            <div className="g_panel">
              <p>[Loading...] : AppSuspense</p>
            </div>
          )}
        </>
      }
    >
      {children}
    </Suspense>
  )
}
