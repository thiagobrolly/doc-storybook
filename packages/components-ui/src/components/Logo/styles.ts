import styled, { css } from 'styled-components';
import { theme } from '@paylivre/styles';

import { LogoProps } from '.';

const wrapperModifiers = {
  small: () => css`
    .paylivre {
      width: 16rem;
    }
    .slogan {
      width: 19.7rem;
    }
  `,

  medium: () => css`
    .paylivre {
      width: 24rem;
    }
    .slogan {
      width: 29.5rem;
    }
  `,

  large: () => css`
    .paylivre {
      width: 32rem;
    }
    .slogan {
      width: 39.2rem;
    }
  `,
};

export const Wrapper = styled.div<LogoProps>`
  ${({
    color,
    size,
    margin,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
  }) => css`
    color: ${theme.color[color!]};
    margin: ${margin};
    margin-top: ${marginTop};
    margin-bottom: ${marginBottom};
    margin-left: ${marginLeft};
    margin-right: ${marginRight};
    ${!!size && wrapperModifiers[size]}
  `}
`;
