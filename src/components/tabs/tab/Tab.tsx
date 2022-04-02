import { ReactElement } from 'react';

interface TabProps {
  children: ReactElement;
  label: string;
  tabName: string;
}

export const Tab = ({ children }: TabProps) => {
  return <>{children}</>;
};
