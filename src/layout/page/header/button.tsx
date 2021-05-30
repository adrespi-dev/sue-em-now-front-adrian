import React, { ButtonHTMLAttributes, FC } from 'react'
import styled from '@emotion/styled'
import { Icon, IconName } from '../../../components/icon'

interface HeaderButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: IconName
}

const MainContainer = styled.button`
  height: 36px;
  width: 36px;
  cursor: pointer;
  background: transparent;
  border: 0px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  will-change: background-color;
  transition: background-color 0.2s ease-in;

  &:hover {
    background-color: ${(p) => (p.theme.isDark ? '#373e47' : '#f3f7ff')};
  }

  &:active {
    background-color: ${(p) => (p.theme.isDark ? '#1d2530' : '#e5edfc')};

    svg {
      opacity: 0.8;
    }
  }
`

type HeaderButtonType = ButtonHTMLAttributes<HTMLButtonElement>

export const HeaderButton = React.forwardRef<HTMLDivElement, HeaderButtonType>(
  (props, ref) => {
    const { children, ...rest } = props
    return (
      // @ts-ignore
      <MainContainer ref={ref} {...rest}>
        {children}
      </MainContainer>
    )
  }
)

export const HeaderIconButton: FC<HeaderButtonProps> = ({ icon, ...props }) => {
  return (
    <HeaderButton {...props}>
      <Icon name={icon} />
    </HeaderButton>
  )
}
