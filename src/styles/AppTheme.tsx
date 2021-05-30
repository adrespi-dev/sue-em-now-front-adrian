/** @jsxImportSource @emotion/react */
import React, { FC } from 'react'
import { ThemeProvider } from '@emotion/react'
import { useContextTheme } from './themeProvider'

export const AppTheme: FC = ({ children }) => {
  const appTheme = useContextTheme()
  return <ThemeProvider theme={appTheme}>{children}</ThemeProvider>
}
