import React from 'react'
import { render } from '../setupTests'
import App from './App'

test('renders correctly', () => {
  const { container } = render(<App />)
  expect(container).toBeInTheDocument()
})

test('loading fallback', () => {
  const { getByText } = render(<App />)
  expect(getByText('app is loading')).toBeInTheDocument()
})
