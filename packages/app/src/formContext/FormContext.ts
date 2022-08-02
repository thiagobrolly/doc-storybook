import { createContext } from 'react';
import { FormProviderProps } from './types/contextTypes';

export const FormContext = createContext<FormProviderProps>(
  {} as FormProviderProps,
);
