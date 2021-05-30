import React, { FC } from 'react'
import styled from '@emotion/styled'
import { FlexSpacer } from '../../components/flexSpacer'
import { SidebarSettingsItem } from './settingsItem'
import { SidebarNavItem } from './navItem'
import { useStores } from '../../hooks/useStores'
import { useTranslation } from 'react-i18next'
import { observer } from 'mobx-react-lite'
import UiStore from '../../state/stores/uiStore'

interface StyleProps {
  isOpen: boolean
}

const MainDiv = styled('div')<StyleProps>`
  display: flex;
  flex-direction: column;
  position: relative;
  background: ${(p) => p.theme.sidebar.bg};
  width: ${(p) =>
    p.isOpen ? p.theme.sidebar.widthOpen : p.theme.sidebar.width}px;
  color: ${(p) => p.theme.sidebar.color};
  transition: all 0.15s ease-in;

  &::before {
    content: '';
    top: 0;
    right: 0;
    bottom: 0;
    width: 1px;
    position: absolute;
    z-index: 99;
    background: ${(p) =>
      p.theme.isDark ? p.theme.colors.border : 'transparent'};
  }
`

interface SidebarNavigationProps {
  uiStore: UiStore
}

const InternalSidebarNavigation: FC<SidebarNavigationProps> = observer(
  ({ uiStore }) => {
    const { t } = useTranslation()
    const sideExpanded = uiStore.sideExpanded

    return (
      <MainDiv data-testid="sidebar" isOpen={uiStore.sideExpanded}>
        <SidebarSettingsItem
          label={t('sidenav.collapse')}
          icon="Grid"
          expanded={sideExpanded}
          onClick={() => uiStore.switchSideExpanded()}
        />
        <FlexSpacer />
        <SidebarNavItem
          expanded={sideExpanded}
          label={t('menu.docs')}
          icon="Inbox"
          to="/docs"
        />
        <SidebarNavItem
          expanded={sideExpanded}
          label={t('menu.credentials')}
          icon="Key"
          to="/credentials"
        />
        <FlexSpacer />
        <SidebarSettingsItem
          expanded={sideExpanded}
          label={t('menu.options')}
          icon="Settings"
        />
      </MainDiv>
    )
  }
)

export const SidebarNavigation: FC = () => {
  const { uiStore } = useStores()

  return <InternalSidebarNavigation uiStore={uiStore} />
}
