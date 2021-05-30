import { FC } from 'react'
import styled from '@emotion/styled'

const MainDiv: FC = styled.div`
  display: flex;
  align-items: center;

  > * {
    margin-left: 18px;
  }
`

export const FormActions: FC = ({ children, ...props }) => {
  return <MainDiv {...props}>{children}</MainDiv>
}
