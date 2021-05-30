import React, { Suspense } from 'react'
import { ModalProvider } from 'react-modal-hook'
import { AppTheme } from '../styles/AppTheme'
import GlobalStyles from '../styles/GlobalStyles'
import { AppThemeProvider } from '../styles/themeProvider'
import { TransitionGroup } from 'react-transition-group'
import AppRouter from './AppRouter'
import { AppLoader } from './AppLoader'
import { ToastContainer } from '../components/toastContainer'

import 'react-toastify/dist/ReactToastify.min.css'

function App() {
  return (
    <AppThemeProvider>
      <AppTheme>
        <GlobalStyles>
          <Suspense fallback={<AppLoader />}>
            <ModalProvider rootComponent={TransitionGroup}>
              <AppRouter />
            </ModalProvider>
          </Suspense>
        </GlobalStyles>
        <ToastContainer />
      </AppTheme>
    </AppThemeProvider>
  )
}

export default App
