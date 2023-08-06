import { Title } from '@/components/ui-components/Title/Title'
import { UIButton } from '@/components/ui-components/UIButton/UIButton'
import { UIInput } from '@/components/ui-components/UIInput/UIInput'
import React, { FC } from 'react'
import styles from '../RegistrationForm/RegistrationForm.module.scss'
import { EAuthForm, IAuthForm } from './authForm.interface'

export const AuthForm: FC<IAuthForm> = ({
  onChange, passwordValue, loginValue, onSubmit, setLogIn, setAuthError
}) => {

  return (
    <form className={styles.form} onSubmit={onSubmit} name={EAuthForm.formName}>
      <Title As='h1' text={EAuthForm.title} />

      <UIInput
        name='authLogin'
        type='text'
        heading={EAuthForm.loginHeading}
        onChange={onChange}
        value={loginValue}
      />

      <UIInput
        name='authPassword'
        type='password'
        heading={EAuthForm.passwordHeading}
        onChange={onChange}
        value={passwordValue}
      />

      <UIButton
        text={EAuthForm.signInBtnName}
        name='signInBtn'
        type='submit'
      />

      <UIButton
        text={EAuthForm.returnBtn}
        name='returnBtn'
        type='button'
        onClick={() => {setLogIn(false), setAuthError('')}}
      />

    </form>
  )
}
