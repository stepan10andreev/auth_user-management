'use client'
import React, { useState } from 'react'
import { RegistrationForm } from './RegistrationForm/RegistrationForm'
import { AuthForm } from './AuthForm/AuthForm'

export const RegistrationFormContainer = () => {
  const [logIn, setLogIn] = useState(false)
  const [value, setValue] = useState('');

  const handleSubmit = () => {
    console.log('Submit')
  }

  const handleChange = () => {
    console.log('Change')
  }

  const handleLogin = () => {
    setLogIn(true);
  }

  return (
    <>
      {logIn ? (
        <AuthForm
          onSubmit={handleSubmit}
          onChange={handleChange}
          value={value}
          setLogIn={setLogIn}
        />
      ) : (
        <RegistrationForm
          onSubmit={handleSubmit}
          onChange={handleChange}
          onClick={handleLogin}
          value={value}
        />
      )}
    </>
  )
}
