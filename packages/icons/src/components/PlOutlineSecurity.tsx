import React, { SVGProps } from 'react';

export interface SVGRProps {
  color?: string;
  size?: number;
}

export const PlOutlineSecurity = ({
  color = '#215aff',
  size = 25,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 13.062 15.965"
    width={size}
    fill={color}
    role="img"
    aria-label="PlOutlineSecurity"
    {...props}
  >
    <path
      data-name="Caminho 3850"
      d="M6.207 15.888a16.076 16.076 0 0 1-3.056-2.1 10.925 10.925 0 0 1-2.136-2.456A6.356 6.356 0 0 1 0 7.982V2.9a.725.725 0 0 1 .471-.679L6.276.046a.72.72 0 0 1 .509 0l5.806 2.177a.725.725 0 0 1 .471.679v5.08a6.356 6.356 0 0 1-1.015 3.351 10.925 10.925 0 0 1-2.135 2.457 16.076 16.076 0 0 1-3.056 2.1.728.728 0 0 1-.649 0zM1.451 3.405v4.577c0 3.3 3.912 5.768 5.079 6.431 1.167-.665 5.081-3.139 5.081-6.431V3.405L6.531 1.5zM5.98 9.668a.709.709 0 0 1-.708-.707V7.812a1.99 1.99 0 1 1 2.519 0v1.149a.709.709 0 0 1-.708.707zm-.522-3.706a1.117 1.117 0 0 0 .485 1.255.436.436 0 0 1 .2.37v1.208h.772V7.587a.436.436 0 0 1 .2-.37 1.117 1.117 0 1 0-1.657-1.255z"
    />
  </svg>
);
