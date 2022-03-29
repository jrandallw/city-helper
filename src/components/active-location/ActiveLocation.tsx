import { Heading } from 'elements/heading/Heading';

import s from './ActiveLocation.module.scss';

export const ActiveLocation = () => {
  return (
    <article className={s.activeLocation}>
      <Heading tag="h1">ActiveLocation</Heading>
    </article>
  );
};
