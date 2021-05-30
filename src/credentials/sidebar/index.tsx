import React, { FC } from 'react'
import styled from '@emotion/styled'
import { useTranslation } from 'react-i18next'
import { Clave } from '../../components/clave'
import { observer } from 'mobx-react-lite'
import { useCredentialsStore } from '../state/credentialsStore'

const MainDiv = styled('div')`
  padding: 8px 16px;
  padding-top: 40px;
  width: 260px;
  border-right: 1px solid ${(p) => p.theme.colors.border};
`

const H2 = styled('h2')`
  margin: 0;
  margin-right: 22px;
  margin-bottom: 26px;
`

const Item = styled('div')`
  display: flex;
  align-items: center;
  padding: 0 4px;
  height: 40px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  margin-bottom: 10px;
  padding: 0 16px;
  color: ${(p) => p.theme.colors.muted};
  width: fit-content;
  min-width: 200px;

  &:hover,
  &.selected {
    background: ${(p) => (p.theme.isDark ? '#373e47' : '#e9eeff')};
    color: ${(p) =>
      p.theme.isDark ? p.theme.colors.font : p.theme.colors.primary};
    border-radius: 8px;
  }

  &.selected {
    font-weight: 600;
  }
`

const CredentialsSidebar: FC = () => {
  const uiStore = useCredentialsStore()
  const { t } = useTranslation('credentials')

  return (
    <MainDiv>
      <H2>{t('title')}</H2>
      <Item
        onClick={() => uiStore.setTypeFilter('all')}
        className={uiStore.typeFilter === 'all' ? 'selected' : ''}
      >
        {t('filters.all')}
      </Item>
      <Item
        onClick={() => uiStore.setTypeFilter('CLAVE_UNICA')}
        className={uiStore.typeFilter === 'CLAVE_UNICA' ? 'selected' : ''}
      >
        <Clave type="CLAVE_UNICA" />
      </Item>
      <Item
        onClick={() => uiStore.setTypeFilter('SEGUNDA_CLAVE')}
        className={uiStore.typeFilter === 'SEGUNDA_CLAVE' ? 'selected' : ''}
      >
        <Clave type="SEGUNDA_CLAVE" />
      </Item>
    </MainDiv>
  )
}

export default observer(CredentialsSidebar)
