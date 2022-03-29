import { Search } from 'components/search/Search';

import s from './Sidebar.module.scss';

export const Sidebar = () => {
  return (
    <aside className={s.sidebar}>
      <Search />
    </aside>
  );
};
