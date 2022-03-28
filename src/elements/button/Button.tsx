import { ReactNode } from 'react';

import css from 'classnames';

import { Link } from 'elements/link/Link';

import s from './Button.module.scss';

export interface ButtonProps {
  children: ReactNode;
  href?: any;
  as?: string;
  type?: 'submit' | 'button' | 'reset';
  disabled?: boolean;
  className?: string;
  target?: '_blank' | '_parent' | '_self' | '_top';
  onClick?(): void;
}

export const Button = ({
  href,
  as,
  onClick,
  className,
  children,
  type,
  disabled,
  target,
}: ButtonProps) => {
  const isLink = typeof href !== 'undefined';
  const isExternal =
    isLink && /^((https?:)?\/\/|[0-9a-zA-Z]+:)/.test(href || '');

  if (isExternal) {
    return (
      <a
        className={css(s.button, className)}
        rel="noopener noreferrer"
        href={href}
        onClick={onClick}
        target={target}
      >
        {children}
      </a>
    );
  }

  if (isLink) {
    return (
      <Link
        className={css(s.button, className)}
        to={href}
        onClick={onClick}
        target={target}
        as={as}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={css(s.button, className)}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
};
