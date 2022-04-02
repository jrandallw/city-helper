import { ReactNode } from 'react';

import { Header } from 'components/header/Header';

import s from './Default.module.scss';

interface LayoutProps {
  children: ReactNode;
}

export const DefaultLayout = ({ children }: LayoutProps) => {
  return (
    <main className={s.layout}>
      <Header />
      {children}
    </main>
  );
};
