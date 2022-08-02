import React, { SVGProps } from 'react';

export interface SVGRProps {
  color?: string;
  size?: number;
}

export const PlOutlineArrowDown = ({
  color = '#215aff',
  size = 25,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16.102 9.929"
    width={size}
    fill={color}
    role="img"
    aria-label="PlOutlineArrowDown"
    {...props}
  >
    <path
      data-name="\u21B3Color"
      d="M14.21 0 8.051 6.137 1.892 0 0 1.889l8.051 8.04 8.049-8.04z"
    />
  </svg>
);
