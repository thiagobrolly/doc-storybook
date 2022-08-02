import { DetailedHTMLProps, FormHTMLAttributes, ReactNode } from 'react';

type HTMLFormProps = DetailedHTMLProps<
  FormHTMLAttributes<HTMLFormElement>,
  HTMLFormElement
>;

export type All = string | number | boolean | undefined;

export interface FormHandles {
  handleSubmit(): void;
  objectOfValues: ObjectOfValues;
  setDefaultValue(defaultValue: ObjectOfValues): void;
  register: (
    name: string,
    value?: string | number | boolean | undefined,
  ) => All;
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

export type HandleSubmit = (e?: React.FormEvent | undefined) => void;
