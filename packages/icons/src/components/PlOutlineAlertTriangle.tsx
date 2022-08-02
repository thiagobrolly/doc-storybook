import React, { SVGProps } from 'react';

export interface SVGRProps {
  color?: string;
  size?: number;
}

export const PlOutlineAlertTriangle = ({
  color = '#215aff',
  size = 25,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 18.337 16.102"
    width={size}
    fill={color}
    role="img"
    aria-label="PlOutlineAlertTriangle"
    {...props}
  >
    <path
      data-name="Caminho 3848"
      d="M9.168.003a2.417 2.417 0 0 1 2.055 1.157l6.784 11.326.007.011a2.4 2.4 0 0 1-2.053 3.606H2.375a2.4 2.4 0 0 1-2.055-3.6l.007-.011L7.111 1.161A2.417 2.417 0 0 1 9.168.003zm.684 1.986a.8.8 0 0 0-1.368 0L1.705 13.303a.8.8 0 0 0 .684 1.2h13.557a.8.8 0 0 0 .684-1.2z"
    />
    <path
      data-name="Linha 122"
      d="M9.167 9.695a.8.8 0 0 1-.8-.806v-3.2a.8.8 0 0 1 .8-.8.8.8 0 0 1 .8.8v3.2a.8.8 0 0 1-.8.806z"
    />
    <path
      data-name="Linha 123"
      d="M9.176 12.896h-.009a.8.8 0 0 1-.8-.8.8.8 0 0 1 .8-.8h.008a.8.8 0 0 1 .8.8.8.8 0 0 1-.799.8z"
    />
  </svg>
);
