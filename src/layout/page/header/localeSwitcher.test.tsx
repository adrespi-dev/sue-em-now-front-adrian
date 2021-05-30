import React from 'react'
import { render } from '../../../setupTests'
import { LocaleSwitcher } from './localeSwitcher'

test('renders correctly', () => {
  const { container } = render(<LocaleSwitcher />)
  expect(container).toBeInTheDocument()
})
