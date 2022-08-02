import { HandleChange, HandleClear } from './types';

export const registerAndSetDefaultValue: HandleChange = (
  name,
  fieldRef,
  pathname,
  register,
) => {
  if (register) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const inputValue: any = fieldRef.current;
    if (inputValue)
      inputValue[pathname] = register(name) as string | number | boolean;
  }
};

export const handleChange: HandleChange = (
  name,
  fieldRef,
  pathname,
  register,
) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const inputValue: any = fieldRef.current;
  if (register) register(name, inputValue[pathname]);
};

export const handleClear: HandleClear = (fieldRef, name, register) => {
  const fieldValue = fieldRef.current;
  if (fieldValue) fieldValue.value = '';
  if (register) register(name, '');
};
