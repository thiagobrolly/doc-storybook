import styled, { css } from 'styled-components';
import { theme } from '@paylivre/styles';
import { HeadingProps } from '.';

const mediaFont = () => css`
  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.font.size.xxlarge};
  }
`;

const titleSize = {
  small: () => css`
    font-size: ${theme.font.size.small};
  `,
  medium: () => css`
    font-size: ${theme.font.size.medium};
  `,
  large: () => css`
    font-size: ${theme.font.size.large};
  `,
  xlarge: () => css`
    font-size: ${theme.font.size.xlarge};
  `,
  xxlarge: () => css`
    font-size: ${theme.font.size.xxlarge};
    ${mediaFont()};
  `,
  big: () => css`
    font-size: ${theme.font.size.big};
    ${mediaFont()};
  `,
  xbig: () => css`
    font-size: ${theme.font.size.xbig};
    ${mediaFont()};
  `,
  huge: () => css`
    font-size: ${theme.font.size.huge};
    ${mediaFont()};
  `,
};

const titleColor = {
  white: () => css`
    color: ${theme.color.white};
  `,
  gray: () => css`
    color: ${theme.color.title};
  `,
  black: () => css`
    color: ${theme.color.black_700};
  `,
  secondary: () => css`
    color: ${theme.color.secondary};
  `,
};

const titleCase = (uppercase: boolean) => css`
  text-transform: ${uppercase ? 'uppercase' : 'none'};
`;

export const Title = styled.h1<HeadingProps>`
  ${({
    color,
    size,
    uppercase,
    bold,
    margin,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
  }) => css`
    ${titleColor[color!]()};
    ${titleSize[size!]()};
    ${titleCase(uppercase!)};
    font-weight: ${bold ? '800' : '400'};
    margin: ${margin};
    margin-top: ${marginTop};
    margin-bottom: ${marginBottom};
    margin-left: ${marginLeft};
    margin-right: ${marginRight};
  `}
`;
