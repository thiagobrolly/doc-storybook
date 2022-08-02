import React, { forwardRef, useEffect } from 'react';
import { formControl } from '@paylivre/forms';
import { Register } from '@paylivre/forms/lib/functions/types';

interface InputProps {
  name: string;
  register?: Register;
}

type InputRef = { current: HTMLInputElement };

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
