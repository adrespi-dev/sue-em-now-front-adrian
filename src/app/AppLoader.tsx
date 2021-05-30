import { FC } from 'react'
import styled from '@emotion/styled'
import { Spinner } from '../components/spinner'

const MainDiv = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const AppLoader: FC = () => {
  return (
    <MainDiv>
      <Spinner height={32} width={32} />
    </MainDiv>
  )
}
