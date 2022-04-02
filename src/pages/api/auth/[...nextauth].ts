import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';

import { prisma } from 'lib/prisma';

const auth = async (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, {
    adapter: PrismaAdapter(prisma),
    providers: [
      GitHubProvider({
        clientId: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
      }),
    ],
    pages: {
      signIn: '/login',
      newUser: '/welcome',
    },
    secret: process.env.AUTH_SECRET,
    debug: process.env.NODE_ENV === 'development',
    callbacks: {
      session: async ({ session, user }) => {
        return Promise.resolve({
          ...session,
          user: { ...session.user, id: user.id },
        });
      },
    },
  });

export default auth;
