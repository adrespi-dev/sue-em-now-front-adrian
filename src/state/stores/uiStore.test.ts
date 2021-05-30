import { isObservable } from 'mobx'
import React from 'react'
import UiStore from './uiStore'

describe('UiStore', () => {
  let instance: UiStore

  beforeEach(() => {
    instance = new UiStore()
  })

  test('default values', () => {
    expect(instance.sideExpanded).toEqual(false)
  })

  test('invokes makeAutoObservable()', () => {
    isObservable(instance)
  })

  test('switches sidebarExpanded', () => {
    instance.switchSideExpanded()
    expect(instance.sideExpanded).toBe(true)

    instance.switchSideExpanded()
    expect(instance.sideExpanded).toBe(false)
  })
})
