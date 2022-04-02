import { useSession, signIn, signOut } from 'next-auth/react';

import { Head } from 'components/head/Head';
import { Container } from 'containers/container/Container';

const Login = () => {
  const { data: session } = useSession();

  return (
    <>
      <Head title="Login" />
      <Container>
        {!session ? (
          <button onClick={() => signIn('github')}>Sign In</button>
        ) : (
          <button onClick={() => signOut()}>Sign out</button>
        )}
      </Container>
    </>
  );
};

export default Login;
