export interface IUser {
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
  { "isBlocked": false, "name": "Lionel", "email": "test@gmail.com", "password": "1", "login": "Lionel", "createdAt": "2023-08-06 18:56:55", "lastLogin": "2023-08-06 18:56:55", "id": "Xf5LIcnOu01kp5yPvzRwn" },
  { "isBlocked": false, "name": "Harry", "email": "test@harry.com", "password": "12", "login": "Harry", "createdAt": "2023-08-06 19:19:33", "lastLogin": "2023-08-06 19:19:33", "id": "o-IoZ1Gnt71qE_OsoUbEf" },
  { "isBlocked": false, "name": "Alice", "email": "test@alice.com", "password": "123", "login": "Alice", "createdAt": "2023-08-04 12:40:14", "lastLogin": "2023-08-04 13:32:14", "id": "0D_DDaxvRg2dS9MX4OT0t" },
  { "isBlocked": false, "name": "Vasya", "email": "test@vasya.com", "password": "any", "login": "Vasya", "createdAt": "2023-08-05 14:45:34", "lastLogin": "2023-08-04 13:32:14", "id": "Vasya" },
]


