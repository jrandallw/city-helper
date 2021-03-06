import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      email: string;
      name: string;
      image: string;
      id: string;
    };
  }
}

declare module 'next-auth/jwt/types' {
  interface JWT {
    id: string;
  }
}
