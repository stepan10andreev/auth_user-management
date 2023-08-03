export class User {
  name: string;
  email: string;
  login: string;
  password: string;
  isBlocked = false;

  constructor(name: string, email: string, password: string, login: string) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.login = login;
  }
}
