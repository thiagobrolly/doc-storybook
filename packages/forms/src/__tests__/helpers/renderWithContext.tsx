import { render, RenderOptions } from '@testing-library/react';
import React, { ReactElement } from 'react';
import FormProvider from '../../formContext';

const Provider = ({ children }: { children: ReactElement }): JSX.Element => {
  return <FormProvider>{children}</FormProvider>;
};

const renderWithContext = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: Provider, ...options });

export * from '@testing-library/react';
export { renderWithContext as render };
