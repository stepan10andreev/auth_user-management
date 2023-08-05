import type { AuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { USERS } from "../../data/users";

export const AuthConfig: AuthOptions = {
  providers: [
    Credentials({
      credentials: {
        login: { label: 'login', type: 'text', required: true},
        password: { label: 'password', type: 'password', required: true}
      },
      async authorize(credentials) {
        // реквезитов нет - возвращаем null
        if (!credentials?.login || !credentials.password) return null;
        // если не прошла авторизация
        const currentUser = USERS.find((user) => user.login === credentials.login);

        if(currentUser && currentUser.password === credentials.password) {
          const {password, ...rest} = currentUser;
          return rest;
        }

        return null;
      }
    })
  ],
  pages: {
    signIn: '/'
  }

}
