import { ReactNode } from 'react';

import css from 'classnames';
import { default as NextLink } from 'next/link';

import s from './Link.module.scss';

interface LinkProps {
  children: ReactNode;
  to?: string | any;
  as?: string;
  target?: '_self' | '_blank' | '_parent' | '_top';
  className?: string;
  activeClassName?: string;
  [key: string]: ReactNode;
}

export const Link = ({
  children,
  to,
  className,
  activeClassName,

  as,
  target,
  params,
  ...props
}: LinkProps) => {
  const isLink = typeof to !== 'undefined';
  const isExternal = isLink && /^((https?:)?\/\/|[0-9a-zA-Z]+:)/.test(to || '');

  return (
    <NextLink href={to} as={as}>
      <a
        className={css(s.link, className)}
        target={isExternal ? '_blank' : target}
        {...props}
      >
        {children}
      </a>
    </NextLink>
  );
};
