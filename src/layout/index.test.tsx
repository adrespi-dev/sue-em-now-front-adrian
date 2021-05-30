import React from 'react'
import AppLayout from '.'
import { render } from '../setupTests'

test('renders correctly', () => {
  const { container } = render(<AppLayout />)
  expect(container).toBeInTheDocument()
})
