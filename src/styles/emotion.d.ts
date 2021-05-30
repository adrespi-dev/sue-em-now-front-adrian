import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
    id: 'light' | 'dark'
    isDark: boolean
    paddings: {
      sm: string
      md: string
      lg: string
    }
    colors: {
      primary: string
      success: string
      danger: string
      ct: string
      font: string
      muted: string
      bodyBg: string
      border: string
      hover: string
    }
    buttons: {
      bg: string
      color: StringMap
    }
    appHeader: {
      height: number
    }
    userAvatar: {
      hoverBorder: string
    }
    fonts: {
      size: string
      primary: 'Montserrat'
    }
    sidebar: {
      color: string
      bg: string
      width: number
      widthOpen: number
    }
  }
}
