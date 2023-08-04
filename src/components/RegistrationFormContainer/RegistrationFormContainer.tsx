'use client'
import React, { ChangeEventHandler, FormEventHandler, useState } from 'react'
import { RegistrationForm } from './RegistrationForm/RegistrationForm'
import { AuthForm } from './AuthForm/AuthForm'
import { useSession } from 'next-auth/react'
import { getFormData } from '@/utils/getFormData'

export const RegistrationFormContainer = () => {
  const [logIn, setLogIn] = useState(false)
  const [nameValue, setNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [loginValue, setLoginValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [authLoginValue, setAuthLoginValue] = useState('');
  const [authPasswordValue, setAuthPasswordValue] = useState('');
  // const session = useSession();
  // console.log(session)
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    const FORM = event.currentTarget;
    const data = getFormData(FORM);
    // console.log(FORM.getAttribute('name'));
    switch (FORM.getAttribute('name')) {
      case 'regForm':
        console.log('here')
        console.log(data)
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASIC_URL}/api/users`, {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
            'Authorization': `${process.env.API_ROUTES_SECRET}`,
          },
          body: JSON.stringify(data)
        });
        console.log(await res.json())
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
    </>
  )
}
