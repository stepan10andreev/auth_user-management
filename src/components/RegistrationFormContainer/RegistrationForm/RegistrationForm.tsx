import React, { FC } from 'react'
import { Title } from '../../ui-components/Title/Title'
import { ERegistrationForm, IRegistrationForm } from './RegistrationForm.interface'
import styles from './RegistrationForm.module.scss'
import { UIInput } from '../../ui-components/UIInput/UIInput'
import { UIButton } from '@/components/ui-components/UIButton/UIButton'

export const RegistrationForm: FC<IRegistrationForm> = ({
  onChange, nameValue, emailValue, passwordValue, loginValue, onSubmit, onClick
}) => {
  return (
    <form className={styles.form} onSubmit={onSubmit} name={ERegistrationForm.formName}>
      <Title As='h1' text={ERegistrationForm.title} />

      <UIInput
        name='name'
        type='text'
        heading={ERegistrationForm.nameHeading}
        onChange={onChange}
        value={nameValue}
      />

      <UIInput
        name='login'
        type='text'
        heading={ERegistrationForm.loginHeading}
        onChange={onChange}
        value={loginValue}
      />

      <UIInput
        name='email'
        type='email'
        heading={ERegistrationForm.emailHeading}
        onChange={onChange}
        value={emailValue}
      />

      <UIInput
        name='password'
        type='password'
        heading={ERegistrationForm.passwordHeading}
        onChange={onChange}
        value={passwordValue}
      />

      <UIButton
        text={ERegistrationForm.regBtnName}
        name='regBtn'
        type='submit'
      />

      <UIButton
        text={ERegistrationForm.loginBtnName}
        name='logBtn'
        type='button'
        onClick={onClick}
      />

    </form>
  )
}
