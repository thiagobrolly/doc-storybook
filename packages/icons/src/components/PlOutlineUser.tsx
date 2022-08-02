import React, { SVGProps } from 'react';

export interface SVGRProps {
  color?: string;
  size?: number;
}

export const PlOutlineUser = ({
  color = '#215aff',
  size = 25,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 14.4 16"
    width={size}
    fill={color}
    role="img"
    aria-label="PlOutlineUser"
    {...props}
  >
    <path
      data-name="Caminho 3761"
      d="M13.6 16a.8.8 0 0 1-.8-.8v-1.6a2.4 2.4 0 0 0-2.4-2.4H4a2.4 2.4 0 0 0-2.4 2.4v1.6a.8.8 0 1 1-1.6 0v-1.6a4 4 0 0 1 4-4h6.4a4 4 0 0 1 4 4v1.6a.8.8 0 0 1-.8.8z"
    />
    <path
      data-name="Elipse 41"
      d="M7.2 0a4 4 0 1 1-4 4 4 4 0 0 1 4-4zm0 6.4A2.4 2.4 0 1 0 4.8 4a2.4 2.4 0 0 0 2.4 2.4z"
    />
  </svg>
);
