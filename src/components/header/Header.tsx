import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';

import { UserActions } from 'components/user-actions/UserActions';
import { Container } from 'containers/container/Container';
import { Avatar } from 'elements/avatar/Avatar';
import { Heading } from 'elements/heading/Heading';

import s from './Header.module.scss';

export const Header = () => {
  const { data: session } = useSession();

  return (
    <div className={s.header}>
      <Container>
        <div className={s.header__container}>
          <Heading tag="h6">City Helper</Heading>
          <UserActions />
        </div>
      </Container>
    </div>
  );
};
