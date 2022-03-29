import { ReactNode } from 'react';

import css from 'classnames';

import s from './Grid.module.scss';

interface GridProps {
  children: ReactNode;
  contain?: boolean;
}

export const Grid = ({ children, contain }: GridProps) => {
  return <div className={css(s.grid, contain && s.contain)}>{children}</div>;
};
