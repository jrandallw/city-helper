import { ErrorMessage, Field } from 'formik';

import s from './Input.module.scss';

interface InputProps {
  name: string;
  required?: boolean;
  type:
    | 'text'
    | 'textarea'
    | 'email'
    | 'password'
    | 'number'
    | 'tel'
    | 'url'
    | 'search'
    | 'date'
    | 'time'
    | 'datetime-local'
    | 'month'
    | 'week'
    | 'color';
}

export const Input = (props: InputProps) => {
  return (
    <div className={s.input}>
      <Field {...props} />
      {props.required && <ErrorMessage name={props.name} />}
    </div>
  );
};
