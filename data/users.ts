export interface IUser  {
  id: string;
  name: string;
  email: string;
  login: string;
  password: string;
  isBlocked: boolean;
  createdAt: string;
  lastLogin: string;
}


export const USERS: IUser[] = [
  {"isBlocked":false,"name":"Stepan","email":"stepan10andreev@gmail.com","password":"test","login":"Stepan","createdAt":"2023-08-04 12:32:14","lastLogin":"2023-08-04 12:32:14","id":"0D_SehxvRg2dS9VV4OT0t"},
  {"isBlocked":false,"name":"Mike","email":"test10test@gmail.com","password":"any","login":"Mike","createdAt":"2023-08-04 12:34:14","lastLogin":"2023-08-04 14:32:14","id":"0D_SedxvRg2dS9IP4OT0t"},
  {"isBlocked":false,"name":"ALice","email":"test@gmail.com","password":"other","login":"Alice","createdAt":"2023-08-04 12:40:14","lastLogin":"2023-08-04 13:32:14","id":"0D_SeaxvRg2dS9MX4OT0t"},
]
