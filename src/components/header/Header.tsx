import { Container } from 'containers/container/Container';
import { Heading } from 'elements/heading/Heading';

import s from './Header.module.scss';

export const Header = () => {
  return (
    <div className={s.header}>
      <Container>
        <Heading tag="h6">City Helper</Heading>
      </Container>
    </div>
  );
};
