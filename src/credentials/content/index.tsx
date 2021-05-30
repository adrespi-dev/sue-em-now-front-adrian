import { FC } from 'react'
import styled from '@emotion/styled'
import CredentialsTable from '../table'
import { useTranslation } from 'react-i18next'
import { Button } from '../../components/button'
import { FlexSpacer } from '../../components/flexSpacer'
import { Paginator } from '../../components/paginator'
import { SearchBar } from '../../components/expandableSearchbar'
import { observer } from 'mobx-react-lite'
import { useCredentialsStore } from '../state/credentialsStore'

const MainDiv = styled('div')`
  flex: 1 auto;
`

const Header = styled('div')`
  display: flex;
  align-items: center;
  padding: 0 16px;
  height: 64px;
  border-bottom: 1px solid ${(p) => p.theme.colors.border};
`

const CredentialsContent: FC = () => {
  const { t } = useTranslation('credentials')
  const {
    showModal,
    searchTerm,
    setSearchTerm,
    records,
  } = useCredentialsStore()

  return (
    <MainDiv>
      <Header>
        <Button
          icon={'PlusCircle'}
          onClick={() => showModal()}
          primary
          style={{ marginRight: 16 }}
        >
          {t('newCredential')}
        </Button>
        <SearchBar
          placeholder={t('common:search')}
          value={searchTerm}
          onChange={(newValue) => setSearchTerm(newValue)}
        />
        <FlexSpacer />
        <Paginator
          page={1}
          pageSize={records.length}
          currentRecordsSize={records.length}
          totalRecords={records.length}
        />
      </Header>
      <CredentialsTable />
    </MainDiv>
  )
}

export default observer(CredentialsContent)
