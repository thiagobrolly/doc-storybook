import { RefObject } from 'react';

export type Register = (
  name: string,
  value?: string | number,
) => string | number | boolean | undefined;

export type HandleChange = (
  name: string,
  fieldRef: RefObject<HTMLInputElement>,
  pathname: 'value' | 'checked',
  register?: Register,
) => void;

export type HandleClear = (
  fieldRef: RefObject<HTMLInputElement>,
  name: string,
  register?: Register,
) => void;
