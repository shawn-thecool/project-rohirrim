import React from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { QueryErrorResetBoundary } from '@tanstack/react-query'

interface IAppErrorBoundary {
  children: React.ReactNode
  fallback?: React.ReactNode
}

export function AppErrorBoundary({ children, fallback }: IAppErrorBoundary) {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary
          onReset={reset}
          onError={(error, { componentStack }) => {
            console.log(error, componentStack)
          }}
          fallbackRender={({ error, resetErrorBoundary }) => (
            <>
              {fallback ? (
                fallback
              ) : (
                <div className="g_panel">
                  <p>[Error...] : AppErrorBoundary</p>
                  <pre>{JSON.stringify(error)}</pre>
                  <button onClick={resetErrorBoundary}>reset</button>
                </div>
              )}
            </>
          )}
        >
          {children}
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  )
}
