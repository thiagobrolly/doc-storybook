/* eslint-disable react/jsx-no-bind */
import React, { forwardRef, useEffect } from 'react';
// import React, { forwardRef } from 'react';
import { Button, Checkbox, TextField } from '@paylivre/components';
import Form, { FormHandles } from '@paylivre/forms';
// import Form from '@paylivre/forms';
import { Input } from '../../components/Input';
import RadioButton from '../../components/RadioButton';

export interface InputRef {
  current: HTMLInputElement;
  value: string;
  checked: boolean;
}

// type InputRefNova = { current: HTMLInputElement };

const Dashboard = () => {
  const formRef = React.useRef<FormHandles>(null);

  // const [inputValue, setValue] = React.useState(false);
  // const inputRef = React.useRef<InputRef>(null);
  const inputRef1 = React.useRef<InputRef>(null);
  const inputRef2 = React.useRef<InputRef>(null);

  useEffect(() => {
    if (formRef.current) {
      formRef.current.setDefaultValue({
        email: 'deu bom',
        password: 'senha ruim',
        checkbox: true,
        Antonio: 'oieeeeee',
      });
    }
  }, []);

  function register(
    name: string,
    value?: string | number | boolean | undefined,
  ) {
    if (formRef.current) {
      return formRef.current.register(name, value);
    }
    return '';
  }

  // const handleSubmit = (value: object) => {
  //   console.log(value);
  // };

  return (
    // <Form ref={formRef} onSubmit={handleSubmit}>
    <Form>
      <Input name="name" />
      <TextField
        // ref={inputRef}
        // eslint-disable-next-line react/jsx-no-bind
        register={register}
        name="test"
        initialValue="testevalue"
        label="Teste"
        // value={inputValue}
        iconDefault
        inputType="tel"
        errorValidation={(value: string) => value?.length > 0}
        errorMessage="Erro"
        // onChange={(e: any) => setValue(e.target.value as string)}
      />
      <Checkbox
        // ref={inputRef}
        label="Teste"
        name="checkbox"
        // checked={inputValue}
        // onChange={(e: any) => setValue(e.target.checked as boolean)}
        // register={register}
      />
      <RadioButton
        ref={inputRef1}
        name="Antonio"
        // register={register}
        value="Radio Test 1"
      >
        Radio Test 1
      </RadioButton>
      <RadioButton
        ref={inputRef2}
        name="Antonio"
        // register={register}
        value="Deu bom"
      >
        Test Radio 2
      </RadioButton>
      <Button variant="secondary" type="submit">
        Submit
      </Button>
      {/* <Button
        onClick={() => {
          if (inputRef.current?.checked) {
            console.log(inputRef.current.value);
          }
        }}
      >
        Button
      </Button> */}
    </Form>
  );
};

export default forwardRef(Dashboard);
