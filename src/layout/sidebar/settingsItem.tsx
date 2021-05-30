import styled from '@emotion/styled'
import React, { FC } from 'react'
import { SidebarNavItem, SidebarNavItemProps } from './navItem'

const Item = styled(SidebarNavItem)`
  background-color: rgba(0, 0, 0, 0.57);
`

export const SidebarSettingsItem: FC<SidebarNavItemProps> = ({ ...props }) => {
  return <Item {...props}></Item>
}
