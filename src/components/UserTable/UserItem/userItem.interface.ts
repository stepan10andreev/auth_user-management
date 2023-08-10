import { IUser } from "../../../../data/users";

export interface IUserItem extends Omit<IUser, 'password' | 'login' | 'updatedAt'> {}
