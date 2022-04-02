import Gravatar from 'react-gravatar';

import { Link } from 'elements/link/Link';

import s from './Avatar.module.scss';

interface AvatarProps {
  email: string;
  alt: string;
  manage?: boolean;
  width: number;
  height: number;
}

export const Avatar = ({
  email,
  alt,
  manage,
  width = 50,
  height = 50,
}: AvatarProps) => {
  return (
    <div className={s.avatar}>
      <Gravatar
        className={s.avatar__image}
        email={email}
        alt={alt}
        width={width}
        height={height}
      />
      {manage && (
        <Link to="https://gravatar.com" className={s.avatar__manage}>
          Manage Avatar
        </Link>
      )}
    </div>
  );
};
