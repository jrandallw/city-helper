import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
}

export const Container = ({ children }: ContainerProps) => {
  return <div className="mx-auto px-4 max-w-md">{children}</div>;
};
