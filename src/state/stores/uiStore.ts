import { makeAutoObservable } from 'mobx'
import { createContext } from 'react'

export default class UiStore {
  sideExpanded = false

  constructor() {
    makeAutoObservable(this)
  }

  switchSideExpanded() {
    this.sideExpanded = !this.sideExpanded
  }
}

// Singleton
export const UiContext = createContext<UiStore>(new UiStore())
