import React from 'react'
import { render } from '../setupTests'
import AppRouter from './AppRouter'

test('renders correctly', () => {
  const { container } = render(<AppRouter />)
  expect(container).toBeInTheDocument()
})

test('renders AppLayout by default', () => {
  const { getByText } = render(<AppRouter />)
  expect(getByText(/SUE'EM NOW/)).toBeInTheDocument()
})
