import { ForwardRefRenderFunction, forwardRef } from 'react';
import { FormContext } from './FormContext';
import FormProvider from './FormProvider';
import { FormHandles, FormProps } from './types/contextTypes';

// A estratégia aqui é utilizar a tag form como container para o componente, recebendo a função de submit do contexto.

// A ref passada para o FormProvider é utilizada para o acesso do pai a informações do formulário.
const Form: ForwardRefRenderFunction<FormHandles, FormProps> = (
  { children, onSubmit, ...rest },
  ref,
) => {
  return (
    <FormProvider ref={ref} onSubmit={onSubmit}>
      <FormContext.Consumer>
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit} {...rest}>
            {children}
          </form>
        )}
      </FormContext.Consumer>
    </FormProvider>
  );
};

export default forwardRef(Form);
