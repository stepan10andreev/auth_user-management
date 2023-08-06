import type { AuthOptions, Session } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { USERS } from "../../data/users";
import { JWT } from "next-auth/jwt";

export const AuthConfig: AuthOptions = {
  providers: [
    Credentials({
      credentials: {
        login: { label: 'login', type: 'text', required: true },
        password: { label: 'password', type: 'password', required: true }
      },
      async authorize(credentials) {
        if (!credentials?.login || !credentials.password) throw new Error('Check your login and password');

        const currentUser = USERS.find((user) => user.login === credentials.login);

        if (currentUser && currentUser.password === credentials.password) {
          if (currentUser.isBlocked) {
            throw new Error('You are blocked')
          }
          const { password, ...rest } = currentUser;
          return rest;
        }

        if (!currentUser) {
          throw new Error('There is no such user. Register please');
        }

        throw new Error('Check your login and password');
      }
    })
  ],
  pages: {
    signIn: '/'
  },
  callbacks: {
    async session({ session, token }: { session: Session, token: JWT }) {
      // it need declarations for Session
      session.user.id = token.sub;

      return session
    },
  }

}
