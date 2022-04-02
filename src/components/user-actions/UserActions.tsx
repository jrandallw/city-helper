import * as Dropdown from '@radix-ui/react-dropdown-menu';
import { useSession, signIn } from 'next-auth/react';

import { Avatar } from 'elements/avatar/Avatar';
import { Link } from 'elements/link/Link';

import s from './UserActions.module.scss';

export const UserActions = () => {
  const { data: session } = useSession();

  return (
    <nav className={s.userActions}>
      {session ? (
        <Dropdown.Root>
          <Dropdown.Trigger className={s.userActions__trigger}>
            <Avatar
              email={session.user.email}
              alt={session.user.name}
              width={60}
              height={60}
            />
          </Dropdown.Trigger>

          <Dropdown.Content>
            {session.user.name}
            <Link to={`/profile`}>Profile</Link>
          </Dropdown.Content>
        </Dropdown.Root>
      ) : (
        <>
          <button onClick={() => signIn('github')}>Sign in with GitHub</button>
        </>
      )}
    </nav>
  );
};
