// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom'
import { configure, render, RenderOptions } from '@testing-library/react'

import i18n from 'i18next'
import React, { FC, ReactElement, Suspense } from 'react'
import { I18nextProvider, initReactI18next } from 'react-i18next'
import { AppTheme } from './styles/AppTheme'
import { AppThemeProvider } from './styles/themeProvider'

i18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',

  ns: ['common'],
  defaultNS: 'common',

  interpolation: {
    escapeValue: false,
  },
})

export default i18n

const WithTheme: FC = ({ children }) => {
  return (
    <Suspense fallback="app is loading">
      <I18nextProvider i18n={i18n}>
        <AppThemeProvider>
          <AppTheme>{children}</AppTheme>
        </AppThemeProvider>
      </I18nextProvider>
    </Suspense>
  )
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'queries'>
) => render(ui, { wrapper: WithTheme, ...options })

export * from '@testing-library/react'

export { customRender as render }

configure({ testIdAttribute: 'data-testid' })
