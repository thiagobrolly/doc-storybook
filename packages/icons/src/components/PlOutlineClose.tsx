import React, { SVGProps } from 'react';

export interface SVGRProps {
  color?: string;
  size?: number;
}
export const PlOutlineClose = ({
  color = '#215aff',
  size = 25,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    width={size}
    fill={color}
    role="img"
    aria-label="PlOutlineClose"
    {...props}
  >
    <path
      data-name="Linha 115"
      d="M1.143 16a1.139 1.139 0 0 1-.808-.335 1.143 1.143 0 0 1 0-1.616L14.049.335a1.143 1.143 0 0 1 1.616 1.616L1.951 15.665a1.139 1.139 0 0 1-.808.335z"
    />
    <path
      data-name="Linha 116"
      d="M14.857 16a1.139 1.139 0 0 1-.808-.335L.335 1.951A1.143 1.143 0 0 1 1.951.335l13.714 13.714A1.143 1.143 0 0 1 14.857 16z"
    />
  </svg>
);
