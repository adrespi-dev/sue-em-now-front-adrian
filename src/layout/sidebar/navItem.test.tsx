import React from 'react'
import { render } from '../../setupTests'
import { SidebarNavItem } from './navItem'

test('renders correctly', () => {
  const { container } = render(<SidebarNavItem label="test" icon="Coffee" />)
  expect(container).toBeInTheDocument()
})
