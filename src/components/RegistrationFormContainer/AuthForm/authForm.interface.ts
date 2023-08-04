import { Dispatch } from "react";
import { IRegistrationForm } from "../RegistrationForm/RegistrationForm.interface";

export enum EAuthForm {
  title = 'Authorization Form',
  formName = 'authForm',
  loginHeading = 'Your Login',
  passwordHeading = 'Your Password',
  signInBtnName = 'Sign In',
  returnBtn = 'Return to Registration Form'
}


export interface IAuthForm extends Omit<IRegistrationForm, 'emailValue' | 'nameValue'> {
  setLogIn: Dispatch<React.SetStateAction<boolean>>
}

