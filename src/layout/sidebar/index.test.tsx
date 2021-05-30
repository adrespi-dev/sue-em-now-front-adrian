import React from 'react'
import { SidebarNavigation } from '.'
import { render } from '../../setupTests'

test('renders correctly', () => {
  const { container } = render(<SidebarNavigation />)
  expect(container).toBeInTheDocument()
})
