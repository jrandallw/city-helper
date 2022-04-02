import { ReactElement, useCallback, useState } from 'react';

import css from 'classnames';

import s from './Tabs.module.scss';

interface TabsProps {
  children: ReactElement[];
}

export const Tabs = ({ children }: TabsProps) => {
  const initialTab = children[0].props.label;
  const [activeTab, setActiveTab] = useState(initialTab);
  const handleActiveTab = useCallback((label: string) => setActiveTab(label), []);

  const tabs = children.map((child) => (
    <button
      onClick={() => {
        handleActiveTab(child.props.label);
      }}
      className={css(s.tabs__button, child.props.label === activeTab && s.active)}
      key={child.props.label}
    >
      {child.props.tabName}
    </button>
  ));

  const tabContent = children.filter((child) => child.props.label === activeTab);

  return (
    <div className={s.tabs}>
      <div className={s.tabs__box}>{tabs}</div>
      <div className={s.tabs__content}>{tabContent}</div>
    </div>
  );
};
