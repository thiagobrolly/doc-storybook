import {
  PlOutlineEye,
  PlOutlineEyeInvisible,
  PlOutlineUser,
} from '@paylivre/icons';
import React, {
  forwardRef,
  InputHTMLAttributes,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { formControl } from '@paylivre/forms';
import SearchIcon, { SearchIconRef } from './SearchIcon';
import * as S from './styles';

export type TextFieldProps = {
  handleClear?: () => void;
  label?: string;
  initialValue?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  outline?: boolean;
  iconDefault?: boolean;
  inputType?: 'email' | 'number' | 'password' | 'search' | 'tel' | 'text';
  disabled?: boolean;
  errorMessage?: string;
  errorValidation?: (value: string) => boolean;
  margin?: string;
  marginTop?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
  name: string;
  register?: (
    name: string,
    value?: string | number,
  ) => string | number | boolean | undefined;
} & InputHTMLAttributes<HTMLInputElement>;

export type InputRef = { current: HTMLInputElement };

// Exportamos o componente como um forwardRef para que o storybook possa utilizar a tipagem para disponibilização das props nos stories do documento.
export const TextField = forwardRef<InputRef, TextFieldProps>(
  (
    {
      icon,
      iconPosition = 'left',
      inputType = 'text',
      label,
      name,
      initialValue = '',
      autoComplete = 'on',
      errorMessage,
      errorValidation,
      disabled = false,
      iconDefault = false,
      outline = true,
      handleClear,
      margin = '',
      marginTop = '',
      marginBottom = '',
      marginLeft = '',
      marginRight = '',
      register,
      ...props
    },
    ref,
  ) => {
    const [showPassword, setShowPassword] = useState(false);
    const [showError, setShowError] = useState(false);
    const textFieldRef = useRef<HTMLInputElement>({} as HTMLInputElement);
    const searchIconRef = useRef<SearchIconRef>(null);
    const inputRef = ref as unknown as InputRef;

    // Ao iniciar o componente, registramos o input no registrador e atribuimos o valor inicial, caso haja. Também,
    useEffect(() => {
      formControl.registerAndSetDefaultValue(
        name,
        textFieldRef,
        'value',
        register,
      );
    }, [name, register]);

    const togglePasswordVisibility = () => {
      if (!disabled) {
        setShowPassword(!showPassword);
      }
    };

    // função para mostrar ou esconder mensagem de erro. Ela é disparada quando o input é alterado.
    const handleRenderError = () => {
      if (handleError()) {
        setShowError(true);
      } else setShowError(false);
    };

    const handleChange = () => {
      // registra o input no registrador.
      formControl.handleChange(name, textFieldRef, 'value', register);
      handleSearchIcon();
      // verifica se é pra mostrar ou esconder a mensagem de erro.
      handleRenderError();
    };

    function handleDefaultValue() {
      let inputValue;
      if (register) inputValue = register(name);
      if (inputValue && inputValue !== '') {
        return inputValue;
      }
      return initialValue;
    }

    const zeroLengthShowIcon = (isZeroLength: boolean) => {
      if (isZeroLength) {
        searchIconRef.current?.setRenderSearch();
      } else {
        searchIconRef.current?.setRenderCross();
      }
    };

    const getValueLength = () => {
      if (ref) {
        return inputRef.current?.value.length === 0;
      }
      if (textFieldRef.current) {
        return textFieldRef.current?.value.length === 0;
      }
      return false;
    };

    const handleSearchIcon = () => {
      if (searchIconRef.current && inputType === 'search') {
        zeroLengthShowIcon(getValueLength());
      }
    };

    const handleDelete = () => {
      if (errorValidation) {
        setShowError(false);
      }
      !!handleClear && handleClear();
      if (ref) {
        const inputValue = inputRef.current;
        if (inputValue) inputValue.value = '';
      }
      if (inputType === 'search') {
        searchIconRef?.current?.setRenderSearch();
      }

      formControl.handleClear(textFieldRef, name, register);
    };

    // função que trata os valores antes de usar a função passada por prop pelo usuário.
    const handleError = () => {
      if (ref) {
        // garante que a variável vai receber um valor mesmo que a referência seja nula.
        const inputValue: string =
          inputRef.current?.value !== null ? inputRef.current?.value : '';
        if (errorValidation) {
          // verifica o valor com a função passada pelo usuário.
          return errorValidation(inputValue);
        }
        return false;
      }
      const { value: inputValue } = textFieldRef.current;
      if (errorValidation && inputValue) {
        // verifica o valor com a função passada pelo usuário.
        return errorValidation(inputValue);
      }
      return false;
    };

    const renderLabel = useMemo(() => {
      return (
        <S.LabelWrapper
          className="label-wrapper"
          iconPosition={iconPosition}
          iconDefault={iconDefault}
          icon={icon}
          inputType={inputType}
        >
          <S.Label htmlFor={name}>{label}</S.Label>
        </S.LabelWrapper>
      );
    }, [icon, iconDefault, iconPosition, inputType, label, name]);

    const renderInputWrapper = useMemo(() => {
      return (
        <S.InputWrapper>
          {!iconDefault && !!icon && (
            <S.Icon iconPosition={iconPosition}>{icon}</S.Icon>
          )}

          {iconDefault && (
            <S.Icon
              iconPosition={iconPosition}
              icon={!!icon}
              className="icon-wrapper"
            >
              {inputType === 'email' ? (
                <PlOutlineUser size={20} color="currentColor" />
              ) : inputType === 'search' ? (
                <SearchIcon ref={searchIconRef} handleDelete={handleDelete} />
              ) : inputType === 'password' ? (
                showPassword ? (
                  <PlOutlineEye
                    size={20}
                    onClick={togglePasswordVisibility}
                    style={{ cursor: 'pointer' }}
                    color="currentColor"
                  />
                ) : (
                  <PlOutlineEyeInvisible
                    size={20}
                    style={{ cursor: 'pointer' }}
                    onClick={togglePasswordVisibility}
                    color="currentColor"
                  />
                )
              ) : (
                !iconDefault
              )}
            </S.Icon>
          )}

          <S.Input
            ref={(ref as unknown as InputRef) || textFieldRef}
            type={
              inputType === 'password'
                ? showPassword
                  ? 'text'
                  : 'password'
                : inputType
            }
            onChange={handleChange}
            defaultValue={handleDefaultValue() as string | number}
            iconPosition={iconPosition}
            disabled={disabled}
            name={name}
            autoComplete={autoComplete}
            placeholder=" "
            className="input"
            iconDefault={iconDefault}
            icon={icon}
            inputType={inputType}
            {...(label ? { id: name } : {})}
          />
          {!!label && renderLabel}
        </S.InputWrapper>
      );
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
      <S.Wrapper
        className="wrapper-input"
        disabled={disabled}
        error={!!errorValidation && handleError()}
        outline={outline}
        inputType={inputType}
        margin={margin}
        marginTop={marginTop}
        marginBottom={marginBottom}
        marginLeft={marginLeft}
        marginRight={marginRight}
        {...props}
      >
        {renderInputWrapper}
        {!!errorValidation && showError && <S.Error>{errorMessage}</S.Error>}
      </S.Wrapper>
    );
  },
);
