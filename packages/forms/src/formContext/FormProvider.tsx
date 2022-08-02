import React, {
  forwardRef,
  ForwardRefRenderFunction,
  useCallback,
  useContext,
  useImperativeHandle,
  useRef,
} from 'react';
import { FormContext } from './FormContext';
import {
  FormHandles,
  FormProps,
  HandleSubmit,
  ObjectOfValues,
} from './types/contextTypes';

// Inicia o contexto e já exporta para ficar disponível para o uso da lib
export const useForm = () => useContext(FormContext);

type Values = string | number | boolean | undefined;

// ForwardRefRenderFunction prepara o componente para receber os tipos da ref e das props respectivamente. Ele é necessário para que o componente possa receber a ref do input e as props do input.
const FormProvider: ForwardRefRenderFunction<FormHandles, FormProps> = (
  { children, onSubmit },
  formRef,
) => {
  // Cria referencia para armazenamento persistente dos dados transitados pelo formulário
  const objectOfValues = useRef<ObjectOfValues>({} as ObjectOfValues);

  // O resgister tem o objetivo de criar a chave do objeto dentro do objectOfValues, iniciando com o valor vazio, caso não exista. O valor é atribuído ao valor do campo e a função retorna o valor atualizado.
  const register = useCallback(
    (name: string, value: Values = objectOfValues.current[name] || '') => {
      objectOfValues.current[name] = value;
      return objectOfValues.current[name] || '';
    },
    [objectOfValues],
  );

  // Preparo da função de submit do formulário. Aqui o formulário é enviado para o componente pai, que é o componente que chamou o FormProvider e passado como props para o OnSubmit. a função que é escrita pela usuário é chamada e os valores atuais enviados por parâmetro.
  const handleSubmit: HandleSubmit = useCallback(
    (e: React.FormEvent | undefined) => {
      if (e !== undefined) e.preventDefault();
      if (onSubmit) onSubmit(objectOfValues.current);
    },
    [onSubmit],
  );

  // Busca valor pelo nome do campo
  const getValueByName = useCallback((name: string) => {
    return objectOfValues.current[name];
  }, []);

  // Atualiza objectOfValues com valor setado como default pelo usuário
  const setDefaultValue = useCallback(
    (defaultValue: ObjectOfValues) => {
      Object.entries(defaultValue).forEach(([name, value]) =>
        register(name, value),
      );
    },
    [register],
  );

  // Aqui vão todas as funções que serão disponibilizadas para o componente pai e contexto
  const contextObject = {
    handleSubmit,
    objectOfValues: objectOfValues.current,
    register,
    getValueByName,
    setDefaultValue,
  };

  // O useImperativeHandle é utilizado para que o componente pai possa acessar funções pré determinadas no contexto.
  useImperativeHandle(formRef, () => contextObject);

  return (
    <FormContext.Provider value={contextObject}>
      {children}
    </FormContext.Provider>
  );
};

// O forwardRef é utilizado para que o componente pai possa acessar a ref do formulário.
export default forwardRef(FormProvider);
