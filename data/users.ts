export interface IUser {
  id: string;
  name: string;
  email: string;
  login: string;
  password: string;
  isBlocked: boolean;
  createdAt: string;
  updatedAt: string;
  lastLogin: string;
}


export type TUserProps = 'id' | 'name' | 'email' | 'login' | 'password' | 'isBlocked' | 'createdAt' | 'updatedAt' | 'lastLogin'


