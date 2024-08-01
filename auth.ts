import db from '@/lib/db';
import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { compareSync } from 'bcrypt-ts'
import GitHub from "next-auth/providers/github"

export const {
  handlers,
  signIn,
  signOut,
  auth,
} = NextAuth({
  providers: [
    Credentials({
    credentials:{
      email: {
        label: 'Email',
        type: 'email',
        placeholder: 'email@exemplo.com.br',
      },
      password: { label: 'Senha', type: 'password' }
    },
     async authorize(credentials){
      const email = credentials.email as string;
      const password = credentials.password as string;

      if(!email || !password) {
        return null;
      }

      const user = await db.user.findUnique({
        where: {
          email: email,
        }
      })

      if(!user) {
        return null;
      }

      const passwordMatch = compareSync(password, user.password ?? '');
      if (!passwordMatch) {
        return null;
      }
      
      return user;
    }
  }),
  GitHub({})
],
});