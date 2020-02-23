import React, { ChangeEvent } from 'react'

import './TextInput.styles.scss'

export type textInputProps = {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  className?: string;
  handleChange: (evt: ChangeEvent) => void,
}

const TextInput = ({
  id,
  type = 'text',
  label,
  placeholder,
  className,
  handleChange,
}: textInputProps) => (
  <div className={`tof-form-control${className ? ' ' + className : ''}`}>
    <label htmlFor={id}>{label}</label>
    <input
      type={type}
      onChange={(event: ChangeEvent) => handleChange(event)}
      id={id}
      placeholder={placeholder}
      data-testid={id}
    />
  </div>
)

export default TextInput