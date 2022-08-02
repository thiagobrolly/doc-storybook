import styled, { css } from 'styled-components';
import { theme } from '@paylivre/styles';
import { CheckboxProps } from '.';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  appearance: none;
  width: 1.8rem;
  height: 1.8rem;
  border: 0.2rem solid ${theme.color.title};
  border-radius: ${theme.border.radius.xsmall};
  transition: background border ${theme.transition.fast};
  position: relative;
  outline: none;
  cursor: pointer;

  &::before {
    content: '';
    width: 5px;
    height: 14px;
    border-radius: 1px;
    background: ${theme.color.white};
    transform: rotate(45deg);
    position: absolute;
    top: -5px;
    left: 12px;
    opacity: ${theme.opacity.zero};
    transition: ${theme.transition.fast};
  }

  &::after {
    content: '';
    width: 6px;
    height: 14px;
    border: 3px solid ${theme.color.primary};
    border-top: 0;
    border-left: 0;
    transform: rotate(45deg);
    position: absolute;
    top: -7px;
    left: 6px;
    opacity: ${theme.opacity.zero};
    transition: ${theme.transition.fast};
  }

  &:focus {
    box-shadow: 0 0 0.5rem ${theme.color.black_500};
  }

  &:disabled,
  &:disabled + label {
    cursor: not-allowed;
    border-color: ${theme.color.gray_700};
    color: ${theme.color.gray_800};
  }

  &:checked {
    border-color: ${theme.color.primary};
    background: ${theme.color.white};

    &:focus {
      box-shadow: 0 0 0.5rem ${theme.color.primary};
    }

    &:before {
      opacity: ${theme.opacity.normal};
    }
    &:after {
      opacity: ${theme.opacity.normal};
    }
  }

  &:checked + label {
    color: ${theme.color.primary};
  }
`;

export const Label = styled.label<Pick<CheckboxProps, 'labelColor'>>`
  ${({ labelColor }) => css`
    color: ${labelColor || theme.color.title};
    padding-left: ${theme.spacings.xxsmall};
    line-height: 1.8rem;
    cursor: pointer;
  `}
`;
