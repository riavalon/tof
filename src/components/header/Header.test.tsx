import React from 'react'
import { render } from '@testing-library/react'
import Header from './Header'

test('renders heading content', () => {
  const { getByText } = render(<Header />)
  const siteName = getByText(/typeof_fungus/i)
  expect(siteName).toBeTruthy()
})