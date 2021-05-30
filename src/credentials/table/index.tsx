import React, { FC } from 'react'
import styled from '@emotion/styled'
import { useTranslation } from 'react-i18next'
import { useColumns } from './columns'
import { Table } from '../../components/table'
import { Credential } from '../types'
import { observer } from 'mobx-react-lite'
import { useCredentialsStore } from '../state/credentialsStore'
import { ReactComponent as SearchIllustration } from '../../assets/svg/search-il1.svg'

const MainDiv = styled('div')`
  flex: 1 auto;
`

const CredentialsTable: FC = () => {
  const { t } = useTranslation('credentials')

  const columns = useColumns(t)
  const store = useCredentialsStore()

  return (
    <MainDiv>
      <Table<Credential>
        columns={columns}
        data={store.records}
        isLoading={store.isLoading}
        emptyScreen={<Empty />}
      />
    </MainDiv>
  )
}

const EmptyDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 54px 0px;

  .icon {
    margin-bottom: 26px;

    svg {
      width: 100%;
      max-width: 240px;
      height: auto;
    }
  }

  .msg {
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 12px;
  }
`

const Empty: FC = () => {
  const { t } = useTranslation('credentials')

  return (
    <EmptyDiv>
      <div className="icon">
        <SearchIllustration />
      </div>
      <div className="msg">{t('noRecords')}</div>
    </EmptyDiv>
  )
}

export default observer(CredentialsTable)
