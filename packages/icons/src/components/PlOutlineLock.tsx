import React, { SVGProps } from 'react';

export interface SVGRProps {
  color?: string;
  size?: number;
}

export const PlOutlineLock = ({
  color = '#215aff',
  size = 25,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 15.998 17.598"
    width={size}
    fill={color}
    role="img"
    aria-label="PlOutlineLock"
    {...props}
  >
    <path
      data-name="Ret\xE2ngulo 261"
      d="M2.4 7.199h11.2a2.4 2.4 0 0 1 2.4 2.4v5.6a2.4 2.4 0 0 1-2.4 2.4H2.4a2.4 2.4 0 0 1-2.4-2.4v-5.6a2.4 2.4 0 0 1 2.4-2.4zm11.2 8.8a.8.8 0 0 0 .8-.8v-5.6a.8.8 0 0 0-.8-.8H2.4a.8.8 0 0 0-.8.8v5.6a.8.8 0 0 0 .8.8z"
    />
    <path
      data-name="Caminho 3761"
      d="M12 8.8a.8.8 0 0 1-.8-.8V4.8a3.2 3.2 0 1 0-6.4 0V8a.8.8 0 0 1-1.6 0V4.8a4.8 4.8 0 0 1 9.6 0V8a.8.8 0 0 1-.8.8z"
    />
  </svg>
);
