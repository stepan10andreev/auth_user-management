import React, { FC } from 'react'
import { Title } from '../../ui-components/Title/Title'
import { ERegistrationForm, IRegistrationForm } from './RegistrationForm.interface'
import styles from './RegistrationForm.module.scss'
import { UIInput } from '../../ui-components/UIInput/UIInput'
import { UIButton } from '@/components/ui-components/UIButton/UIButton'

export const RegistrationForm: FC<IRegistrationForm> = ({
  onChange, value, onSubmit
}) => {
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <Title As='h1' text={ERegistrationForm.title} />

      <UIInput
        name='name'
        type='text'
        heading={ERegistrationForm.nameHeading}
        onChange={onChange}
        value={value}
      />

      <UIInput
        name='surname'
        type='text'
        heading={ERegistrationForm.surnameHeading}
        onChange={onChange}
        value={value}
      />

      <UIInput
        name='email'
        type='email'
        heading={ERegistrationForm.emailHeading}
        onChange={onChange}
        value={value}
      />

      <UIInput
        name='password'
        type='password'
        heading={ERegistrationForm.passwordHeading}
        onChange={onChange}
        value={value}
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
      />


    </form>
  )
}
