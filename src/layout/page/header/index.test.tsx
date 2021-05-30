import React from 'react'
import { HeaderLayout } from '.'
import { render } from '../../../setupTests'

test('renders correctly', () => {
  const { container } = render(<HeaderLayout />)
  expect(container).toBeInTheDocument()
})
