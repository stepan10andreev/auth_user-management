'use client'
import React, { ChangeEventHandler, FormEventHandler, useState } from 'react'
import { RegistrationForm } from './RegistrationForm/RegistrationForm'
import { AuthForm } from './AuthForm/AuthForm'
import { useSession } from 'next-auth/react'
import { getFormData } from '@/utils/getFormData'
import { useRouter } from 'next/navigation'
import { USER_SERVICE } from '@/services/user.service'
import { ErrorText } from '../ui-components/ErrorText/ErrorText'

export const RegistrationFormContainer = () => {
  const [logIn, setLogIn] = useState(false)
  const [nameValue, setNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [loginValue, setLoginValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [authLoginValue, setAuthLoginValue] = useState('');
  const [authPasswordValue, setAuthPasswordValue] = useState('');
  const [notRegisteredError, setNotRegisteredError] = useState('');

  const router = useRouter()

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    const FORM = event.currentTarget;
    const data = getFormData(FORM);

    switch (FORM.getAttribute('name')) {
      case 'regForm':
        const response = await USER_SERVICE.register(data)

        if (response.error) {
          setNotRegisteredError(response.message)
        } else {
          setNotRegisteredError('')
          router.push(`/user-table?name=${response.username}`)
        }
    }

  }

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const INPUT = event.currentTarget;

    switch (INPUT.name) {
      case 'name':
        setNameValue(INPUT.value)
        break;
      case 'email':
        setEmailValue(INPUT.value)
        break;
      case 'login':
        setLoginValue(INPUT.value)
        break;
      case 'password':
        setPasswordValue(INPUT.value)
        break;
      case 'authLogin':
        setAuthLoginValue(INPUT.value)
        break;
      case 'authPassword':
        setAuthPasswordValue(INPUT.value)
        break;
    }
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
          loginValue={authLoginValue}
          passwordValue={authPasswordValue}
          setLogIn={setLogIn}
        />
      ) : (
        <RegistrationForm
          onSubmit={handleSubmit}
          onChange={handleChange}
          onClick={handleLogin}
          nameValue={nameValue}
          emailValue={emailValue}
          loginValue={loginValue}
          passwordValue={passwordValue}
        />
      )}

      {notRegisteredError && <ErrorText errorText={notRegisteredError}/>}
    </>
  )
}
