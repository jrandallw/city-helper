import { Container } from 'containers/container/Container';

import { useSession, signIn, signOut } from 'next-auth/react';

const Login = () => {
  const { data: session } = useSession();

  return (
    <Container>
      {!session ? (
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => signIn('github')}
        >
          Sign In
        </button>
      ) : (
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => signOut()}
        >
          Sign out
        </button>
      )}
    </Container>
  );
};

export default Login;
