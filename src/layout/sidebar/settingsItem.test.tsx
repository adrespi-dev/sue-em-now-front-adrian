import React from 'react'
import { render } from '../../setupTests'
import { SidebarSettingsItem } from './settingsItem'

test('renders correctly', () => {
  const { container } = render(
    <SidebarSettingsItem label="test" icon="Coffee" />
  )
  expect(container).toBeInTheDocument()
})
