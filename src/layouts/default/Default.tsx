import { Header } from 'components/header/Header';
import { Container } from 'containers/container/Container';
import { ReactNode } from 'react';

import s from './Default.module.scss';

interface LayoutProps {
  children: ReactNode;
}

export const DefaultLayout = ({ children }: LayoutProps) => {
  return (
    <main className={s.layout}>
      <Header />
      <Container>{children}</Container>
    </main>
  );
};
