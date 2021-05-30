import React from 'react'
import { render } from '../../../setupTests'
import { UserAvatar } from './userAvatar'

test('renders correctly', () => {
  const { container } = render(<UserAvatar />)
  expect(container).toBeInTheDocument()
})
