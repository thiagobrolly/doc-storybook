import React, {
  ForwardedRef,
  forwardRef,
  InputHTMLAttributes,
  useEffect,
  useRef,
} from 'react';
import { formControl } from '@paylivre/forms';
import * as S from './styles';

type CheckBox = { current: HTMLInputElement };

export type CheckboxProps = {
  label?: string;
  labelFor?: string;
  labelColor?: string;
  name: string;
  register?: (
    name: string,
    value?: string | number | boolean | undefined,
  ) => string | number | boolean | undefined;
} & InputHTMLAttributes<HTMLInputElement>;

export const Checkbox = forwardRef<CheckBox, CheckboxProps>(
  ({ label, labelFor = '', labelColor, name, register, ...props }, ref) => {
    const checkboxRef = useRef<HTMLInputElement>({} as HTMLInputElement);

    useEffect(() => {
      formControl.registerAndSetDefaultValue(
        name,
        checkboxRef,
        'checked',
        register,
      );
    }, [name, register]);

    const handleChange = () => {
      formControl.handleChange(name, checkboxRef, 'checked', register);
    };

    return (
      <S.Wrapper>
        <S.Input
          ref={
            (ref as unknown as ForwardedRef<HTMLInputElement>) || checkboxRef
          }
          onChange={handleChange}
          id={labelFor}
          type="checkbox"
          {...props}
        />

        {label && (
          <S.Label htmlFor={labelFor} labelColor={labelColor}>
            {label}
          </S.Label>
        )}
      </S.Wrapper>
    );
  },
);
