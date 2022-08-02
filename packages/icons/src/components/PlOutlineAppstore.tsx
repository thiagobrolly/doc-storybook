import React, { SVGProps } from 'react';

export interface SVGRProps {
  color?: string;
  size?: number;
}

export const PlOutlineAppstore = ({
  color = '#215aff',
  size = 25,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 15.996"
    width={size}
    fill={color}
    role="img"
    aria-label="PlOutlineAppstore"
    {...props}
  >
    <path
      data-name="Caminho 3853"
      d="M9.602 15.998a.8.8 0 0 1-.8-.8v-5.6a.8.8 0 0 1 .8-.8h5.6a.8.8 0 0 1 .8.8v5.6a.8.8 0 0 1-.8.8zm.8-1.6h4v-4h-4zm-9.6 1.6a.8.8 0 0 1-.8-.8v-5.6a.8.8 0 0 1 .8-.8h5.6a.8.8 0 0 1 .8.8v5.6a.8.8 0 0 1-.8.8zm.8-1.6h4v-4h-4zm8-7.2a.8.8 0 0 1-.8-.8v-5.6a.8.8 0 0 1 .8-.8h5.6a.8.8 0 0 1 .8.8v5.6a.8.8 0 0 1-.8.8zm.8-1.6h4v-4h-4zm-9.6 1.6a.8.8 0 0 1-.8-.8v-5.6a.8.8 0 0 1 .8-.8h5.6a.8.8 0 0 1 .8.8v5.6a.8.8 0 0 1-.8.8zm.8-1.6h4v-4h-4z"
    />
  </svg>
);
