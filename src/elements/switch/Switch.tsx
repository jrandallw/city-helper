import * as SwitchPrimitive from '@radix-ui/react-switch';

import s from './Switch.module.scss';

interface SwitchProps {
  label: string;
  checked: boolean;
  onChange(): void;
}

export const Switch = ({ label, checked, onChange }: SwitchProps) => {
  return (
    <div className={s.switch}>
      <label htmlFor={label} className={s.switch__label}>
        {label}
      </label>

      <SwitchPrimitive.Root
        className={s.switch__input}
        checked={checked}
        onChange={onChange}
      >
        <SwitchPrimitive.Thumb className={s.switch__thumb} />
      </SwitchPrimitive.Root>
    </div>
  );
};
