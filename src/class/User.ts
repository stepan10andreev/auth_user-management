import { getDateString } from "@/utils/getDateString";
import { IUser } from "../../data/users";
import { nanoid } from "nanoid";



export class User {
  id: string;
  name: string;
  email: string;
  login: string;
  password: string;
  isBlocked = false;
  createdAt: string;
  lastLogin: string;

  constructor(user: Omit<IUser, 'id' | 'createdAt'>) {
    this.name = user.name;
    this.email = user.email;
    this.password = user.password;
    this.login = user.login;
    this.createdAt = getDateString();
    this.lastLogin = user.lastLogin;
    this.id = nanoid();
  }
}
