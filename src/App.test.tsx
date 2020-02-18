import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

it('renders site name', () => {
  const { getByText } = render(<App />)
  const headingText = getByText(/typeof_fungus/i)
  expect(headingText).toBeTruthy()
})
