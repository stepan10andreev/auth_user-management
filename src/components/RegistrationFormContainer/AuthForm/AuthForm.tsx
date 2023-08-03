import { Title } from '@/components/ui-components/Title/Title'
import { UIButton } from '@/components/ui-components/UIButton/UIButton'
import { UIInput } from '@/components/ui-components/UIInput/UIInput'
import React, { Dispatch, FC } from 'react'
import { ERegistrationForm, IRegistrationForm } from '../RegistrationForm/RegistrationForm.interface'
import styles from '../RegistrationForm/RegistrationForm.module.scss'
import { EAuthForm } from './authForm.interface'

interface IAuthForm extends IRegistrationForm {
  setLogIn: Dispatch<React.SetStateAction<boolean>>
}

export const AuthForm: FC<IAuthForm> = ({
  onChange, value, onSubmit, setLogIn
}) => {
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <Title As='h1' text={EAuthForm.title} />

      <UIInput
        name='login'
        type='text'
        heading={EAuthForm.loginHeading}
        onChange={onChange}
        value={value}
      />

      <UIInput
        name='password'
        type='password'
        heading={EAuthForm.passwordHeading}
        onChange={onChange}
        value={value}
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
        onClick={() => setLogIn(false)}
      />

    </form>
  )
}
