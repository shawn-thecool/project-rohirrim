import { useState } from 'react'
import { IntlProvider } from 'react-intl'
import { BrowserRouter, Link } from 'react-router-dom'

import en from '@/locale/en.json'
import ko from '@/locale/ko.json'

import { AppErrorBoundary } from './App.manager.errorBoundary'
import { AppSuspense } from './App.manager.suspense'
import { AppRoutes } from './Routes'

export function App() {
  const [locale, setLocale] = useState<string>('ko')
  const messages = locale === 'ko' ? ko : en
  return (
    <IntlProvider locale={locale} messages={messages.login}>
      <AppErrorBoundary>
        <AppSuspense>
          <BrowserRouter>
            <section>
              <button onClick={() => setLocale('ko')}>Korean</button>
              <button onClick={() => setLocale('en')}>English</button>
            </section>
            <section>
              <Link to="/users">move to users</Link>
              <Link to="/lookbooks">move to lookbooks</Link>
            </section>
            <AppRoutes />
          </BrowserRouter>
        </AppSuspense>
      </AppErrorBoundary>
    </IntlProvider>
  )
}
