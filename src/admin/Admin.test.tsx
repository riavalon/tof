import React from 'react'
import { render } from '@testing-library/react'

import Admin from './Admin'

describe('Admin Page', () => {
  const mockUser = {}

  it('should render without issue', () => {
    const { baseElement } = render(<Admin user={mockUser} />)
    expect(baseElement).toMatchSnapshot()
  })
})