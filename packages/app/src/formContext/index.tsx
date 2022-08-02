import { ForwardRefRenderFunction, forwardRef, useRef } from 'react';
import { FormContext } from './FormContext';
import FormProvider from './FormProvider';
import { FormHandles, FormProps } from './types/contextTypes';

const Form: ForwardRefRenderFunction<FormHandles, FormProps> = ({
  children,
  onSubmit,
  ...rest
}) => {
  const formRef = useRef<FormHandles>({} as FormHandles);
  return (
    <FormProvider ref={formRef} onSubmit={onSubmit}>
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
