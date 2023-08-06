import type { AuthOptions, Session } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { IUser, USERS } from "../../data/users";
import { JWT } from "next-auth/jwt";

type IID = {
  id?: string;

};

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
  },
  callbacks: {
    async session({ session, token }: { session: Session, token: JWT}) {

      session.user.id = token.sub

      return session
    },
  }

}
