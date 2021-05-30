import React, { useContext } from 'react'
import { RootContext } from './rootStore'
import { renderHook } from '@testing-library/react-hooks'

describe('rootStore', () => {
  test('init with correct stores', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useContext(RootContext)
    )

    expect(result.current.uiStore).toBeTruthy()
  })
})
