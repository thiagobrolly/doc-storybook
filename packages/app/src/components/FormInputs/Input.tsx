/* eslint-disable react/jsx-no-bind */
import { TextField } from '@paylivre/components';
import React from 'react';
import { useForm } from '@paylivre/forms';

const Input: React.FC = () => {
  const { register } = useForm();

  function validateEmailInput(value: string) {
    return !value.includes('.com');
  }
  const emailErrorMessage = 'Email inválido';

  const email = 'email';

  return (
    <>
      <h1>Form Inputs</h1>
      <TextField
        name={email}
        id="refund-form.form.input-email"
        // label={email}
        inputType="search"
        iconDefault
        iconPosition="right"
        errorMessage={emailErrorMessage}
        errorValidation={validateEmailInput}
        register={register}
      />
      <TextField
        iconDefault
        name="password"
        register={register}
        inputType="number"
      />
    </>
  );
};

export default Input;
