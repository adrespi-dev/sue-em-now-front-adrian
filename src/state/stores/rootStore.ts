import { createContext } from 'react'
import UiStore from './uiStore'

export interface RootStoreType {
  uiStore: UiStore
}

const rootStore: RootStoreType = {
  uiStore: new UiStore(),
}

// Singleton
export const RootContext = createContext<RootStoreType>(rootStore)
