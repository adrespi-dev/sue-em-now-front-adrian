import React from 'react'
import { PageLayout } from '..'
import { render } from '../../../setupTests'

test('renders correctly', () => {
  const { container } = render(<PageLayout />)
  expect(container).toBeInTheDocument()
})
