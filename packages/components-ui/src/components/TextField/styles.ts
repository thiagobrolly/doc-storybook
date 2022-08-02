import { theme } from '@paylivre/styles';
import styled, { css } from 'styled-components';
import { TextFieldProps } from '.';

type IconPositionProps = Pick<
  TextFieldProps,
  'iconPosition' | 'icon' | 'iconDefault' | 'inputType'
>;

type WrapperProps = Pick<
  TextFieldProps,
  | 'disabled'
  | 'outline'
  | 'inputType'
  | 'margin'
  | 'marginTop'
  | 'marginBottom'
  | 'marginLeft'
  | 'marginRight'
> & {
  error?: false | boolean;
};

const colorInput = theme.color.white;

export const InputWrapper = styled.div`
  display: flex;
  background-color: ${colorInput};
  border-radius: 0.8rem;
  border: 0.2rem solid;
  border-color: ${theme.color.gray_700};
  min-width: 280px;
  height: 57px;
  position: relative;

  &:focus-within {
    border: 0.2rem solid ${theme.color.secondary};
  }

  &:focus-within .icon-wrapper {
    color: ${theme.color.secondary};
  }
`;

export const Input = styled.input<IconPositionProps>`
  ${({ iconPosition, icon, iconDefault, inputType }) => css`
    color: ${theme.color.black};
    font-size: ${theme.font.size.medium};
    background: transparent;
    border: 0;
    outline: none;
    width: 100%;
    height: 100%;

    padding: ${((iconDefault &&
      (inputType === 'password' ||
        inputType === 'email' ||
        inputType === 'search')) ||
      !!icon) &&
    iconPosition === 'left'
      ? '0px 45px'
      : '0px 15px'};
    border-radius: 0.8rem;
    padding-right: ${iconPosition === 'right' ? '40px' : '15px'};

    transition: all 0.15s linear;
    position: absolute;
    padding-top: 1.5rem;

    // hide eye password Microsoft Edge
    ::-ms-reveal {
      display: none;
    }

    &:-webkit-autofill {
      -webkit-box-shadow: 0 0 0 30px #e1faff inset;
      transition: background-color 5000s ease-in-out 0s;
      z-index: ${theme.layers.base};
      border-radius: 0.5rem;
    }

    ::placeholder {
      color: transparent;
    }

    &:-webkit-autofill + .label-wrapper,
    &:focus + .label-wrapper,
    &:not(:placeholder-shown) + .label-wrapper {
      top: 8px;
      left: ${(!!iconDefault || !!icon) &&
      iconPosition === 'left' &&
      inputType !== 'search'
        ? '45px'
        : '15px'};
    }

    &:focus + .label-wrapper > label,
    &:not(:placeholder-shown) + .label-wrapper > label {
      font-size: ${theme.font.size.xsmall};
    }

    &:focus + .label-wrapper > label {
      color: ${theme.color.secondary};
      font-weight: 600;
    }
  `}
`;

export const LabelWrapper = styled.span<IconPositionProps>`
  ${({ iconPosition, icon, iconDefault, inputType }) => css`
    pointer-events: none;
    position: absolute;
    height: 1.6rem;
    background-color: transparent;
    top: calc(50% - 7px);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s linear;
    z-index: ${theme.layers.base};

    ${((iconDefault &&
      (inputType === 'password' ||
        inputType === 'email' ||
        inputType === 'search')) ||
      !!icon) &&
    iconPosition === 'left'
      ? 'left: 50px'
      : 'left: 20px'};
  `}
`;

export const Label = styled.label`
  font-size: ${theme.font.size.small};
  color: ${theme.color.title};
`;

export const Icon = styled.div<IconPositionProps>`
  ${({ iconPosition }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.3rem;
    color: ${theme.color.gray_default};
    margin: 0 10px;
    z-index: ${theme.layers.dropdown};

    ${iconPosition === 'left' ? `margin-right: auto;` : `margin-left: auto;`}

    .search-clear {
      cursor: pointer;
    }
  `}
`;

export const Error = styled.p`
  color: ${theme.color.error};
  font-size: ${theme.font.size.xsmall};
  margin-top: 0.5rem;
  margin-left: 0.5rem;
`;

const wrapperModifiers = {
  error: () => css`
    ${InputWrapper} {
      border-color: ${theme.color.error};
    }

    ${Label}, ${Icon} {
      color: ${theme.color.error} !important;
    }
  `,

  disabled: () => css`
    ${Label},
    ${Input},
    ${Icon} {
      cursor: not-allowed;
      color: ${theme.color.gray_default} !important;

      &::placeholder {
        color: currentColor;
      }
    }

    ${InputWrapper} {
      border-color: ${theme.color.gray_default};
    }
  `,

  outline: () => css`
    ${Input} {
      padding-top: 0.1rem;

      &:-webkit-autofill + .label-wrapper {
        background-color: #e1faff !important;
      }

      &:focus + .label-wrapper,
      &:not(:placeholder-shown) + .label-wrapper {
        top: -2px;
        left: 10px;
        background-color: ${colorInput};
        padding: 0 0.5rem;
        height: 2px;
      }
    }
  `,

  searchOutline: () => css`
    ${Icon} {
      margin-right: 10px !important;
      margin-left: auto !important;
    }

    ${LabelWrapper} {
      left: 20px;
    }

    ${Input} {
      padding: 0.1rem 40px 0 15px !important;
    }
  `,

  search: () => css`
    ${Icon} {
      margin-right: 10px !important;
      margin-left: auto !important;
    }

    ${LabelWrapper} {
      left: 20px;
    }

    ${Input} {
      padding: 1.4rem 40px 0 15px !important;
    }
  `,
};

export const Wrapper = styled.div<WrapperProps>`
  ${({
    disabled,
    error,
    outline,
    inputType,
    margin,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
  }) => css`
    margin: ${margin};
    margin-top: ${marginTop};
    margin-bottom: ${marginBottom};
    margin-left: ${marginLeft};
    margin-right: ${marginRight};
    ${!!error && wrapperModifiers.error()}
    ${disabled && wrapperModifiers.disabled()}
    ${outline && wrapperModifiers.outline()}
    ${inputType === 'search' && wrapperModifiers.searchOutline()}
    ${inputType === 'search' && !outline && wrapperModifiers.search()}
  `}

  /* clears the 'X' from Internet Explorer */
  input[type='search']::-ms-clear,
  input[type='search']::-ms-reveal {
    display: none;
    width: 0;
    height: 0;
  }

  /* clears the 'X' from Chrome */
  input[type='search']::-webkit-search-decoration,
  input[type='search']::-webkit-search-cancel-button,
  input[type='search']::-webkit-search-results-button,
  input[type='search']::-webkit-search-results-decoration {
    display: none;
  }
`;
