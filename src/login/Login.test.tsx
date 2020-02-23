import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Login from './Login'

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: jest.fn()
  })
}))

describe('Login', () => {
  
  it('should render a login form', () => {
    const { baseElement, queryByTestId, queryByText } = render(<Login />)

    expect(queryByText(/admin login/i)).toBeInTheDocument()
    expect(queryByTestId(/tof-test-login-username/i)).toBeInTheDocument()
    expect(queryByTestId(/tof-test-login-password/i)).toBeInTheDocument()
    expect(queryByTestId(/tof-test-login-button/i)).toBeInTheDocument()

    expect(baseElement).toMatchSnapshot()
  })
})