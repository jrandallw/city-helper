import { useSession, signIn, signOut } from 'next-auth/react';

import { Container } from 'containers/container/Container';

const Login = () => {
  const { data: session } = useSession();

  return (
    <Container>
      {!session ? (
        <button onClick={() => signIn('github')}>Sign In</button>
      ) : (
        <button onClick={() => signOut()}>Sign out</button>
      )}
    </Container>
  );
};

export default Login;
