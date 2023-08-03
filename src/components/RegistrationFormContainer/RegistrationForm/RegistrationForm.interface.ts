import { ChangeEventHandler, FormEventHandler } from "react";

export enum ERegistrationForm {
  title = 'Registration Form',
  nameHeading = 'Name',
  surnameHeading = 'Surname',
  emailHeading = 'Email',
  passwordHeading = 'Password',
  regBtnName = 'Register',
  loginBtnName = 'Login'
}


export interface IRegistrationForm {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onSubmit: FormEventHandler<HTMLFormElement>;
}
