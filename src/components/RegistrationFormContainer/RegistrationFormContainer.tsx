'use client'
import React, { ChangeEventHandler, FormEventHandler, useState } from 'react'
import { RegistrationForm } from './RegistrationForm/RegistrationForm'
import { AuthForm } from './AuthForm/AuthForm'
import { signIn, useSession } from 'next-auth/react'
import { getFormData } from '@/utils/getFormData'
import { useRouter } from 'next/navigation'
import { USER_SERVICE } from '@/services/user.service'
import { ErrorText } from '../ui-components/ErrorText/ErrorText'
import { foundEmptyValue } from '@/utils/foundEmptyValue.ts'
import { IUser } from '../../../data/users'
import { ERegistrationForm } from './RegistrationForm/RegistrationForm.interface'
import { EAuthForm } from './AuthForm/authForm.interface'

export const RegistrationFormContainer = () => {
  const [logIn, setLogIn] = useState(false)
  const [nameValue, setNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [loginValue, setLoginValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [authLoginValue, setAuthLoginValue] = useState('');
  const [authPasswordValue, setAuthPasswordValue] = useState('');
  const [notRegisteredError, setNotRegisteredError] = useState('');
  const [emptyValue, setEmptyValue] = useState(false);
  const [authError, setAuthError] = useState(false);

  const router = useRouter()

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    const FORM = event.currentTarget;
    const data = getFormData(FORM);

    const emptyData = foundEmptyValue(getFormData(FORM) as object);

    if (emptyData) {
      setEmptyValue(true);
      return;
    } else {
      setEmptyValue(false);
    }

    switch (FORM.getAttribute('name')) {
      case 'regForm':
        const regData = getFormData<Pick<IUser, 'name' | 'email' | 'password' | 'login'>>(FORM);

        const response = await USER_SERVICE.register(regData)

        if (response.error) {
          setNotRegisteredError(response.message)
        } else {
          setNotRegisteredError('')
          router.push(`/user-table?name=${response.username}`)
        }
      case 'authForm':
        const authData = getFormData<Record<"authPassword" | "authLogin", string> >(FORM);
        const result = await signIn('credentials', {
          login: authData.authLogin,
          password: authData.authPassword,
          redirect: false,
        })

        if(result && !result.error) {
          router.push('/user-table')
        } else {
          setAuthError(true)
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
    setEmptyValue(false)
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
          setAuthError={setAuthError}
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

      {notRegisteredError && <ErrorText errorText={notRegisteredError} />}

      {emptyValue && <ErrorText errorText={ERegistrationForm.errorEmptyValue} />}

      {authError && <ErrorText errorText={EAuthForm.authError} />}
    </>
  )
}
