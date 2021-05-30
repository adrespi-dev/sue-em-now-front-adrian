import React, { FC } from 'react'
import styled from '@emotion/styled'
import { HeaderLayout } from './header'
import PageRouter from '../router'

const MainContainer = styled.div`
  flex: auto;
  overflow: hidden;
`

const PageContent = styled.div`
  overflow: auto;
  height: calc(100vh - 70px);
  /* padding: ${(p) => p.theme.paddings.lg} ${(p) => p.theme.paddings.md}; */
`

export const PageLayout: FC = () => {
  return (
    <MainContainer>
      <HeaderLayout />
      <PageContent>
        <PageRouter />
      </PageContent>
    </MainContainer>
  )
}
