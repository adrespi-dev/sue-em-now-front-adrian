import { makeAutoObservable } from 'mobx'
import { createContext, useContext } from 'react'
import { Credential } from '../types'
import debounce from 'lodash/debounce'

type TypeFilter = 'all' | 'CLAVE_UNICA' | 'SEGUNDA_CLAVE'

export class CredentialsStore {
  isLoading = true
  reloadCount = 0

  typeFilter: TypeFilter = 'all'
  searchTerm: string = ''
  confirmedSearchTerm = this.searchTerm

  records: Credential[] = []

  showCredentialModal = false
  updatingCredential: Credential | undefined = undefined

  constructor() {
    makeAutoObservable(this)
  }

  get isUpdate() {
    return !!this.updatingCredential?.id
  }

  setTypeFilter = (val: TypeFilter) => {
    this.typeFilter = val
  }

  setSearchTerm = (val: string) => {
    this.searchTerm = val
    this.isLoading = true
    this.confirmSearchTerm(val)
  }

  confirmSearchTerm = debounce((val: string) => {
    this.confirmedSearchTerm = val
  }, 800)

  setLoading = (val: boolean) => {
    this.isLoading = val
  }

  setRecords = (newRecords: Credential[]) => {
    this.records = newRecords
  }

  showModal = (cred: Credential | undefined = undefined) => {
    this.showCredentialModal = true
    this.updatingCredential = cred
  }

  hideModal = () => {
    this.showCredentialModal = false
    this.updatingCredential = undefined
  }

  deleteCredential = (credId: string) => {
    this.setRecords(this.records.filter((r) => r.id !== credId))
  }

  reload = () => {
    this.reloadCount += 1
  }
}

export const credentialsContext = createContext<CredentialsStore>(
  new CredentialsStore()
)

export const useCredentialsStore = () => useContext(credentialsContext)
