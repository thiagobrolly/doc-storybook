/* eslint-disable react-hooks/exhaustive-deps */
import React, {
  forwardRef,
  ForwardRefRenderFunction,
  useCallback,
  useContext,
  useImperativeHandle,
} from 'react';
import { FormContext } from './FormContext';
import {
  FormHandles,
  FormProps,
  ImperativeHandleSubmit,
  ObjectOfValues,
} from './types/contextTypes';

export const useFormContext = () => useContext(FormContext);

const FormProvider: ForwardRefRenderFunction<FormHandles, FormProps> = (
  { children, onSubmit },
  formRef,
) => {
  const objectOfValues: ObjectOfValues = {} as ObjectOfValues;

  const register = useCallback(
    (name: string) => {
      if (objectOfValues) objectOfValues[name] = '';
    },
    [objectOfValues],
  );

  const setValue = useCallback(
    (name: string, value: string | number | boolean | undefined) => {
      objectOfValues[name] = value;
    },
    [objectOfValues],
  );

  const getFieldByName = useCallback(
    (fieldName: string) => objectOfValues[fieldName],
    [objectOfValues],
  );

  const handleSubmit: ImperativeHandleSubmit = useCallback(
    (e: React.FormEvent | undefined) => {
      if (e !== undefined) e.preventDefault();
      if (onSubmit) onSubmit(objectOfValues);
    },
    [onSubmit],
  );

  const getValueByName = useCallback((name: string) => {
    return objectOfValues[name];
  }, []);

  useImperativeHandle(formRef, () => ({
    submitForm() {
      handleSubmit();
    },
  }));

  return (
    <FormContext.Provider
      value={{
        handleSubmit,
        getFieldByName,
        register,
        objectOfValues,
        setValue,
        getValueByName,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default forwardRef(FormProvider);
