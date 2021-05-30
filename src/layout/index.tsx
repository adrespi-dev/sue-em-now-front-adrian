import React, { FC } from 'react'
import { SidebarNavigation } from './sidebar'
import styled from '@emotion/styled'
import { PageLayout } from './page'

const MainDiv = styled('div')`
  display: flex;
  background: ${(props) => props.theme.colors.bodyBg};
  min-height: 100vh;
`

const AppLayout: FC = ({ ...props }) => {
  return (
    <MainDiv>
      <SidebarNavigation />
      <PageLayout />
    </MainDiv>
  )
}

export default AppLayout
