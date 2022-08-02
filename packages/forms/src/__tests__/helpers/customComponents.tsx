import React, { ForwardedRef, forwardRef, useEffect } from 'react';
import { formControl } from '../..';
import { Register } from '../../functions/types';

interface RadioProps {
  children: React.ReactNode;
  name: string;
  register?: (
    name: string,
    value?: string | number | boolean | undefined,
  ) => string | number | boolean | undefined;
  value?: string | number | readonly string[] | undefined;
}

interface InputProps {
  name: string;
  register?: Register;
}

type InputRef = { current: HTMLInputElement };

export type RadioButtonRef = { current: HTMLInputElement };

export const RadioButton = forwardRef<RadioButtonRef, RadioProps>(
  ({ children, name, register, value }, ref) => {
    const radioButtonRef = React.useRef<HTMLInputElement>(null);
    useEffect(() => {
      formControl.registerAndSetDefaultValue(
        name,
        radioButtonRef,
        'checked',
        register,
      );
    }, [name, register]);

    const handleChange = () => {
      formControl.handleChange(name, radioButtonRef, 'value', register);
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

export const Input = forwardRef<InputRef, InputProps>(
  ({ name, register, ...props }, ref) => {
    const inputRef = React.useRef<HTMLInputElement>({} as HTMLInputElement);

    useEffect(() => {
      formControl.registerAndSetDefaultValue(name, inputRef, 'value', register);
    }, [name, register]);

    const handleChange = () => {
      formControl.handleChange(name, inputRef, 'value', register);
    };
    return (
      <input
        ref={(ref as unknown as InputRef) || inputRef}
        onChange={handleChange}
        {...props}
      />
    );
  },
);

export const Checkbox = forwardRef<InputRef, InputProps>(
  ({ name, register, ...props }, ref) => {
    const inputRef = React.useRef<HTMLInputElement>({} as HTMLInputElement);

    useEffect(() => {
      formControl.registerAndSetDefaultValue(
        name,
        inputRef,
        'checked',
        register,
      );
    }, [name, register]);

    const handleChange = () => {
      formControl.handleChange(name, inputRef, 'checked', register);
    };
    return (
      <input
        ref={(ref as unknown as InputRef) || inputRef}
        type="checkbox"
        onChange={handleChange}
        {...props}
      />
    );
  },
);
