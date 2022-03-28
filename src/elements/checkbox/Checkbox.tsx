import { CheckIcon } from '@radix-ui/react-icons';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';

import s from './Checkbox.module.scss';

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange(): void;
}

export const Checkbox = ({ label, checked, onChange }: CheckboxProps) => {
  return (
    <div className={s.checkbox}>
      <CheckboxPrimitive.Root
        aria-label={label}
        checked={checked}
        onCheckedChange={onChange}
        className={s.checkbox__input}
      >
        <CheckboxPrimitive.Indicator>
          {checked === true && <CheckIcon className={s.checkbox__indicator} />}
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
      <label htmlFor={label} className={s.checkbox__label}>
        {label}
      </label>
    </div>
  );
};
