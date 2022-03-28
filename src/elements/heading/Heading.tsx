import { createElement, ReactNode } from 'react';

import css from 'classnames';

import s from './Heading.module.scss';

interface HeadingProps {
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: ReactNode;
  className?: string;
}

export const Heading = ({ tag, children, className }: HeadingProps) => {
  const Tag = ({ ...props }: React.HTMLAttributes<HTMLHeadingElement>) =>
    createElement(tag, props, children);

  return <Tag className={css(s.heading, className)}>{children}</Tag>;
};
