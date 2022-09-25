import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider, QueryFunctionContext } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ThemeProvider as GlobalThemeProvider } from 'styled-components'

import { App, makeRequest } from './core'
import { GlobalStyle, THEME_LIGHT } from './lib'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      useErrorBoundary: true,
      suspense: true,
      queryFn: ({ queryKey: [url, data] }: QueryFunctionContext) =>
        makeRequest({ method: 'get', url: url as string, data }).then(({ data }) => data),
    },
    mutations: {
      useErrorBoundary: true,
    },
  },
})

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <GlobalThemeProvider theme={THEME_LIGHT}>
        <GlobalStyle />
        <App />
      </GlobalThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>
)
