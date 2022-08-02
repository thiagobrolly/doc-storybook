import React, { SVGProps } from 'react';

export interface SVGRProps {
  color?: string;
  size?: number;
}

export const PlOutlineRotate = ({
  color = '#215aff',
  size = 25,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 15.396 13.999"
    width={size}
    fill={color}
    role="img"
    aria-label="PlOutlineRotate"
    {...props}
  >
    <path
      data-name="Caminho 3860"
      d="M14.696 6.3h-4.2a.7.7 0 0 1 0-1.4h3.5V1.4a.7.7 0 1 1 1.4 0v4.2a.7.7 0 0 1-.7.7z"
    />
    <path
      data-name="Caminho 3861"
      d="M7.01 14q-.209 0-.418-.012A7 7 0 0 1 3.621.871a7 7 0 0 1 8.322 1.174l3.233 3.044a.7.7 0 0 1-.96 1.019l-3.24-3.051-.015-.015a5.6 5.6 0 1 0 1.319 5.823.7.7 0 1 1 1.32.466A7 7 0 0 1 7.01 14z"
    />
  </svg>
);
