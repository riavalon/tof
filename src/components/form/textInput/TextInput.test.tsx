import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import TextInput, { textInputProps } from './TextInput'

describe('Form => Text Input', () => {
  let mockProps: textInputProps;

  beforeEach(() => {
    mockProps = {
      label: 'test label',
      type: 'text',
      handleChange: jest.fn(),
      id: 'test-id',
    }
  })

  it('should render with test id', () => {
    const { queryByTestId, baseElement } = render(<TextInput {...mockProps} />)
    expect(queryByTestId(/test-id/i)).toBeInTheDocument()
    expect(baseElement).toMatchSnapshot()
  })

  it('should call provided function in props on change', () => {
    const { getByTestId } = render(<TextInput {...mockProps} />)
    const input = getByTestId(/test-id/i)
    fireEvent.change(input, { target: { value: 'testing' } })
    expect(mockProps.handleChange).toHaveBeenCalled()
  })
})