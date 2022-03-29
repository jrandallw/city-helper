import { ReactNode } from 'react';

import css from 'classnames';

import s from './Container.module.scss';

interface ContainerProps {
  children: ReactNode;
  contain?: boolean;
}

export const Container = ({ children, contain }: ContainerProps) => {
  return (
    <div className={css(s.container, contain && s.contain)}>{children}</div>
  );
};
