import { ChangeEventHandler, FormEventHandler, MouseEventHandler } from "react";

export enum ERegistrationForm {
  title = 'Registration Form',
  formName = 'regForm',
  nameHeading = 'Name',
  loginHeading = 'Login',
  emailHeading = 'Email',
  passwordHeading = 'Password',
  regBtnName = 'Register',
  loginBtnName = 'Login',
  errorEmptyValue = 'There are empty fields'
}

export interface IRegistrationForm {
  nameValue: string;
  loginValue: string;
  emailValue: string;
  passwordValue: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onSubmit: FormEventHandler<HTMLFormElement>;
  onClick?: MouseEventHandler<HTMLButtonElement>
}
