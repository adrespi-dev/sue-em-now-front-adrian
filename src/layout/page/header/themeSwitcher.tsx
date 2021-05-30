import { useTheme } from '@emotion/react'
import styled from '@emotion/styled'
import React, { FC } from 'react'
import { useSwitchTheme } from '../../../styles/themeProvider'
import { HeaderIconButton } from './button'

const StyledHeaderButton = styled(HeaderIconButton)`
  transition: none;
  color: ${(p) => (p.theme.isDark ? p.theme.colors.ct : 'inherit')};
`

export const ThemeSwitcher: FC = ({ ...props }) => {
  const theme = useTheme()
  const switchTheme = useSwitchTheme()

  return (
    <>
      <StyledHeaderButton
        onClick={() => switchTheme()}
        icon={theme.isDark ? 'Sun' : 'Moon'}
        {...props}
      />
    </>
  )
}
