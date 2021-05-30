import { FC } from 'react'
import styled from '@emotion/styled/macro'
import { observer } from 'mobx-react-lite'
import { Icon, IconName } from '../../components/icon'
import { NavLink as ThirdPartyLink } from 'react-router-dom'

export interface SidebarNavItemProps {
  label: string
  to?: any
  icon: IconName
  onClick?: () => void
  checked?: boolean
  expanded?: boolean
}

const MainDiv = styled.div<Partial<SidebarNavItemProps>>`
  display: flex;
  width: 100%;
  align-items: center;
  cursor: pointer;
  transition: color 0.2s ease-in;
  color: ${(p) => p.theme.sidebar.color};
  height: ${(p) => p.theme.sidebar.width}px;
  justify-content: ${(p) => (p.expanded ? 'unset' : 'center')};
  padding: ${(p) => (p.expanded ? p.theme.paddings.md : '0')};
  font-weight: 600;
  overflow: hidden;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: white;
  }
`

const NavLink = styled(ThirdPartyLink)`
  text-decoration: none;

  &.active {
    ${MainDiv} {
      background: #1d908a;
      color: white;
    }
  }
`

const Label = styled.div`
  margin-left: ${(p) => p.theme.paddings.md};
  overflow: hidden;
  white-space: nowrap;
`

export const SidebarNavItem: FC<SidebarNavItemProps> = observer(
  ({ expanded, to, label, onClick, icon: iconName, ...props }) => {
    const icon = <Icon name={iconName} />
    const content = (
      <MainDiv expanded={expanded} onClick={onClick} {...props}>
        {icon}
        {expanded && <Label>{label}</Label>}
      </MainDiv>
    )
    return <>{to ? <NavLink to={to}>{content}</NavLink> : content}</>
  }
)
