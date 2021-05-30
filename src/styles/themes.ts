import { Theme } from '@emotion/react'

export const LigthTheme: Theme = {
  id: 'light',
  isDark: false,
  paddings: {
    sm: '0.5rem',
    md: '1rem',
    lg: '1rem',
  },
  fonts: {
    size: '14px',
    primary: 'Montserrat',
  },
  colors: {
    primary: '#3a2eff',
    success: '#00d04e',
    danger: '#d32f2f',
    ct: '#ff6a0d',
    muted: '#697895',
    font: '#010347',
    bodyBg: '#fff',
    border: '#e6ecf5',
    hover: 'rgba(248,250,255,0.88)',
  },
  buttons: {
    bg: '#F2F2F2',
    color: '#136bf5',
  },
  appHeader: {
    height: 64,
  },
  sidebar: {
    color: '#9697a6',
    bg: '#242644',
    width: 64,
    widthOpen: 220,
  },
  userAvatar: {
    hoverBorder: '#d2e3fc',
  },
}

export const DarkTheme: Theme = {
  ...LigthTheme,
  id: 'dark',
  isDark: true,
  colors: {
    ...LigthTheme.colors,
    font: '#adbac7',
    bodyBg: '#22272e',
    border: '#373e47',
    hover: '#373e47',
  },
  sidebar: {
    ...LigthTheme.sidebar,
    bg: '#2d333b',
  },
  userAvatar: {
    hoverBorder: '#373e47',
  },
}
