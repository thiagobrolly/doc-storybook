import { createContext } from 'react';
import { FormHandles } from './types/contextTypes';

export const FormContext = createContext<FormHandles>({} as FormHandles);
