import React, { FC } from 'react'
import styled from '@emotion/styled'
import { UserAvatar } from './userAvatar'
import { FlexSpacer } from '../../../components/flexSpacer'
import { ThemeSwitcher } from './themeSwitcher'
import { LocaleSwitcher } from './localeSwitcher'

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  padding: ${(p) => p.theme.paddings.sm} ${(p) => p.theme.paddings.md};
  height: ${(p) => p.theme.appHeader.height}px;
  border-bottom: 1px solid;
  border-color: ${(p) => p.theme.colors.border};
`

const Logo = styled.div`
  font-size: 20px;
  font-weight: 700;
`

const Separator = styled.div`
  align-self: stretch;
  width: 1px;
  background: ${(p) => p.theme.colors.border};
  margin: -${(p) => p.theme.paddings.sm} ${(p) => p.theme.paddings.md};
`

const StyledLocaleSwitcher = styled(LocaleSwitcher)`
  margin-right: ${(p) => p.theme.paddings.sm};
`

export const HeaderLayout: FC = () => {
  return (
    <MainContainer>
      <Logo>SUE'EM NOW</Logo>
      <FlexSpacer />
      <UserAvatar />
      <Separator />
      <StyledLocaleSwitcher />
      <ThemeSwitcher />
    </MainContainer>
  )
}
