import { DetailedHTMLProps, FormHTMLAttributes, ReactNode } from 'react';

type HTMLFormProps = DetailedHTMLProps<
  FormHTMLAttributes<HTMLFormElement>,
  HTMLFormElement
>;

export type All = string | number | boolean | undefined;

export interface FormHandles {
  submitForm(): void;
}

export interface ChildrenProp {
  children: ReactNode;
}

export interface ObjectOfValues {
  [key: string]: All;
}

export interface FormProps extends Omit<HTMLFormProps, 'onSubmit'> {
  children: ReactNode;
  onSubmit?: (data: object) => void;
}

export type ImperativeHandleSubmit = (e?: React.FormEvent | undefined) => void;

export interface FormProviderProps {
  handleSubmit: ImperativeHandleSubmit;
  getFieldByName: (name: string) => All;
  register?: (name: string) => void;
  objectOfValues: ObjectOfValues;
  setValue: (
    name: string,
    value: string | number | boolean | undefined,
  ) => void;
  getValueByName: (name: string) => All;
}
