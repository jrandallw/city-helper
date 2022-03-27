import { ReactNode } from 'react';

interface GridProps {
  children: ReactNode;
}

export const Grid = ({ children }: GridProps) => {
  return (
    <div className="grid grid-cols-12 container mx-auto px-4 max-w-lg">
      {children}
    </div>
  );
};
