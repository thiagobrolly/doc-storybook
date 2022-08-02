import React from 'react';
import * as Styled from './styles';

export type HeadingProps = {
  children: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size?:
    | 'small'
    | 'medium'
    | 'large'
    | 'xlarge'
    | 'xxlarge'
    | 'big'
    | 'xbig'
    | 'huge';
  color?: 'white' | 'gray' | 'black' | 'secondary';
  bold?: boolean;
  uppercase?: boolean;
  margin?: string;
  marginTop?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
} & React.HTMLAttributes<HTMLElement>;

export const Heading = ({
  children,
  as = 'h1',
  size = 'medium',
  uppercase = false,
  bold = false,
  color = 'gray',
  margin = '',
  marginTop = '',
  marginBottom = '',
  marginLeft = '',
  marginRight = '',
  ...props
}: HeadingProps) => {
  return (
    <Styled.Title
      as={as}
      size={size}
      uppercase={uppercase}
      bold={bold}
      color={color}
      margin={margin}
      marginTop={marginTop}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      marginRight={marginRight}
      {...props}
    >
      {children}
    </Styled.Title>
  );
};
