import React from 'react';
import * as S from './styles';

export type SeparatorProps = {
  color?: string;
  margin?: string;
  marginTop?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
} & React.HTMLAttributes<HTMLElement>;

export const Separator = ({
  color,
  margin = '',
  marginTop = '0.8rem',
  marginBottom = '0.8rem',
  marginLeft = '',
  marginRight = '',
  ...props
}: SeparatorProps) => (
  <S.Wrapper
    aria-orientation="horizontal"
    role="separator"
    color={color}
    margin={margin}
    marginTop={marginTop}
    marginBottom={marginBottom}
    marginLeft={marginLeft}
    marginRight={marginRight}
    {...props}
  />
);
