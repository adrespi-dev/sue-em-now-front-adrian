import { FC, useEffect } from 'react'
import styled from '@emotion/styled'
import CredentialsSidebar from './sidebar'
import CredentialsContent from './content'
import { observer } from 'mobx-react-lite'
import { useCredentialsStore } from './state/credentialsStore'
import { CredentialsModalContainer } from './modal/container'

const MainDiv = styled('div')`
  display: flex;
  justify-content: stretch;
  width: 100%;
  height: 100%;
`

const CredentialsPage: FC = () => {
  const store = useCredentialsStore()
  const {
    confirmedSearchTerm,
    typeFilter,
    setRecords,
    setLoading,
    reloadCount,
  } = store

  useEffect(() => {
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
    }, 400)
  }, [confirmedSearchTerm, typeFilter, setRecords, setLoading, reloadCount])

  return (
    <MainDiv>
      <CredentialsSidebar />
      <CredentialsContent />
      <CredentialsModalContainer />
    </MainDiv>
  )
}

export default observer(CredentialsPage)
