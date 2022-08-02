import React, { ForwardedRef, forwardRef, useEffect } from 'react';
import { formControl } from '@paylivre/forms';

interface RadioProps {
  children: React.ReactNode;
  name: string;
  register?: (
    name: string,
    value?: string | number | boolean | undefined,
  ) => string | number | boolean | undefined;
  value?: string | number | readonly string[] | undefined;
  pathname?: 'value' | 'checked';
}

export type RadioButtonRef = { current: HTMLInputElement };

const RadioButton = forwardRef<RadioButtonRef, RadioProps>(
  ({ children, name, register, value, pathname = 'value' }, ref) => {
    const radioButtonRef = React.useRef<HTMLInputElement>(null);
    useEffect(() => {
      formControl.registerAndSetDefaultValue(
        name,
        radioButtonRef,
        'checked',
        register,
      );
    }, [name, pathname, register]);

    const handleChange = () => {
      formControl.handleChange(name, radioButtonRef, pathname, register);
    };

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <label htmlFor="Radio Test">{children}</label>
        <input
          ref={
            (ref as unknown as ForwardedRef<HTMLInputElement>) || radioButtonRef
          }
          id="Radio Test"
          type="radio"
          value={value}
          name={name}
          onChange={() => {
            handleChange();
          }}
        />
      </div>
    );
  },
);

export default RadioButton;
