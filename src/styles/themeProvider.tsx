import React, { createContext, FC, useContext, useState } from 'react'
import { Theme } from '@emotion/react'
import { DarkTheme, LigthTheme } from './themes'

type ContextType = [Theme, (theme: Theme) => void]

// Singletons
export const AppThemeContext = createContext<ContextType | unknown>(null)

export const AppThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(LigthTheme)
  return (
    <AppThemeContext.Provider value={[theme, setTheme]}>
      {children}
    </AppThemeContext.Provider>
  )
}

//@ts-ignore
export const useContextTheme = () => useContext<ContextType>(AppThemeContext)[0]

export const useSwitchTheme = () => {
  //@ts-ignore
  const [theme, setTheme] = useContext<ContextType>(AppThemeContext)
  return () => setTheme(theme.id === 'light' ? DarkTheme : LigthTheme)
}
