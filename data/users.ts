export interface IUser {
  id: string;
  email: string;
  login: string;
  password: string;
  name: string;
  isBlocked: boolean;
  createdAt: Date;
  updatedAt: Date;
  lastLogin: Date;
}


export type TUserProps = 'id' | 'name' | 'email' | 'login' | 'password' | 'isBlocked' | 'createdAt' | 'updatedAt' | 'lastLogin'


