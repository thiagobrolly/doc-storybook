import styled, { css } from 'styled-components';
import { theme } from '@paylivre/styles';
import { ButtonProps } from './index';

const buttonModifiers = {
  small: () => css`
    height: 3rem;
    font-size: ${theme.font.size.xsmall};
    border-radius: ${theme.border.radius.small};
  `,
  medium: () => css`
    height: 4rem;
    font-size: ${theme.font.size.small};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
  `,
  large: () => css`
    height: 5rem;
    font-size: ${theme.font.size.medium};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
  `,
  fullWidth: () => css`
    width: 100%;
  `,
  disabledLink: () => css`
    pointer-events: none;
    cursor: not-allowed;
    color: ${theme.color.white};
    background: ${theme.color.gray_800};
  `,
};

const buttonTheme = {
  primary: () => css`
    background: transparent;
    color: ${theme.color.secondary};
    border: transparent;

    &:not([disabled]):hover {
      background: ${theme.color.gray_500};
    }
    &:not([disabled]):active {
      background: ${theme.color.gray_700};
    }

    &:disabled {
      cursor: not-allowed;
      color: ${theme.color.gray_800};
    }
  `,

  secondary: () => css`
    background: ${theme.color.secondary};
    color: ${theme.color.white};
    border: none;

    &:not([disabled]):hover {
      filter: brightness(150%);
    }
    &:not([disabled]):active {
      background: ${theme.color.secondary_100};
    }
    &:disabled {
      cursor: not-allowed;
      color: ${theme.color.white};
      background: ${theme.color.gray_800};
    }
  `,

  outline: () => css`
    background: ${theme.color.white};
    color: ${theme.color.secondary};
    border: 0.1rem solid ${theme.color.secondary};
    transition: 0.3s;

    &:not([disabled]):hover {
      //filter: brightness(150%);
      color: ${theme.color.secondary_050};
      border: 0.1rem solid ${theme.color.secondary_050};
    }
    &:not([disabled]):active {
      background: ${theme.color.gray_700};
      border-color: ${theme.color.gray_800};
    }
    &:disabled {
      cursor: not-allowed;
      color: ${theme.color.gray_800};
      border-color: ${theme.color.gray_800};
    }
  `,

  approve: () => css`
    background: ${theme.color.success};
    color: ${theme.color.white};
    border: none;

    &:not([disabled]):hover {
      filter: brightness(110%);
    }
    &:not([disabled]):active {
      filter: brightness(100%);
    }
    &:disabled {
      cursor: not-allowed;
      color: ${theme.color.white};
      background: ${theme.color.gray_800};
    }
  `,

  cancel: () => css`
    background: ${theme.color.error};
    color: ${theme.color.white};
    border: none;

    &:not([disabled]):hover {
      filter: brightness(120%);
    }
    &:not([disabled]):active {
      filter: brightness(100%);
    }
    &:disabled {
      cursor: not-allowed;
      color: ${theme.color.white};
      background: ${theme.color.gray_800};
    }
  `,
};

export const Button = styled.button<ButtonProps>`
  ${({
    variant,
    size,
    fullWidth,
    margin,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    as,
    disabled,
  }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: ${theme.spacings.xsmall};
    font-weight: ${theme.font.weight.semiBold};
    text-align: center;
    transition: background 0.3s, filter 0.3s;
    border-radius: ${theme.border.radius.medium};
    text-decoration: none;
    width: fit-content;
    margin: ${margin};
    margin-top: ${marginTop};
    margin-bottom: ${marginBottom};
    margin-left: ${marginLeft};
    margin-right: ${marginRight};
    cursor: pointer;
    ${buttonTheme[variant!]()}
    ${buttonModifiers[size!]()}
    ${!!fullWidth && buttonModifiers.fullWidth()}
    ${!!as && !!disabled && buttonModifiers.disabledLink()}
    ${!!disabled &&
    css`
      span {
        pointer-events: none;
        cursor: not-allowed;
      }
    `}
  `}
`;
