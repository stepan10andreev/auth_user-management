'use client'
import React, { useState } from 'react'
import { RegistrationForm } from './RegistrationForm/RegistrationForm'

export const RegistrationFormContainer = () => {
  const [value, setValue] = useState('');

  const handleSubmit = () => {
    console.log('Submit')
  }

  const handleChange = () => {
    console.log('Change')
  }

  return (
    <RegistrationForm
      onSubmit={handleSubmit}
      onChange={handleChange}
      value={value}
    />
  )
}
