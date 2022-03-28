import { ReactNode } from 'react';

import s from './Default.module.scss';

interface LayoutProps {
  children: ReactNode;
}

export const DefaultLayout = ({ children }: LayoutProps) => {
  return <main className={s.layout}>{children}</main>;
};
