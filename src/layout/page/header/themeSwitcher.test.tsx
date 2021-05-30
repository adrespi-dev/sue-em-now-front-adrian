import React from 'react'
import { render } from '../../../setupTests'
import { ThemeSwitcher } from './themeSwitcher'

test('renders correctly', () => {
  const { container } = render(<ThemeSwitcher />)
  expect(container).toBeInTheDocument()
})
