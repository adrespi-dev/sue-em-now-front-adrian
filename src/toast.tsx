import styled from '@emotion/styled'
import { FC } from 'react'
import { toast as toastify, ToastContent, ToastOptions } from 'react-toastify'
import { Icon, IconName } from './components/icon'

export function toast(content: ToastContent, options?: ToastOptions) {
  return toastify(<Content {...options}>{content}</Content>, options)
}

const MainDiv = styled.div`
  display: flex;
  align-items: center;

  svg {
    color: #009bb8;
    height: 20px;
    width: 20px;
    margin-right: 10px;
  }
`
const Content: FC<ToastOptions> = ({ children, type }) => (
  <MainDiv>
    {type && type !== 'default' && <Icon name={IconsMap[type]} />}
    {children}
  </MainDiv>
)

const IconsMap: Record<string, IconName> = {
  info: 'Info',
  success: 'CheckCircle',
}
