import React, { FC } from 'react'
import styled from '@emotion/styled'
import { Icon, IconName } from '../icon'
import { FlexSpacer } from '../flexSpacer'

const Styled = styled.div<MenuItemProps>`
  display: flex;
  align-items: center;
  padding-left: ${(p) => p.theme.paddings.sm};
  padding-right: ${(p) => p.theme.paddings.sm};
  padding-top: ${(p) => p.theme.paddings.sm};
  padding-bottom: ${(p) => p.theme.paddings.sm};
  cursor: pointer;
  will-change: background;
  transition: background 0.15s ease-out;

  ${(p) => p.selected && `font-weight: 600;`}

  &:hover {
    background-color: ${(p) => p.theme.colors.hover};
  }
`

export interface MenuItemProps {
  selected?: boolean
  icon?: IconName
  onClick?: () => void
}

export const MenuItem: FC<MenuItemProps> = ({ icon, children, ...props }) => {
  return (
    <Styled {...props}>
      {children}
      {icon && <FlexSpacer />}
      {icon && <Icon name={icon} />}
    </Styled>
  )
}
