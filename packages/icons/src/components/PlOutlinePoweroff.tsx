import React, { SVGProps } from 'react';

export interface SVGRProps {
  color?: string;
  size?: number;
}

export const PlOutlinePoweroff = ({
  color = '#215aff',
  size = 25,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 14.5 16.2"
    width={size}
    fill={color}
    role="img"
    aria-label="PlOutlinePoweroff"
    {...props}
  >
    <path
      data-name="Caminho 3851"
      d="M7.211 16.2a7.134 7.134 0 0 1-5.232-2.263A7.293 7.293 0 0 1 0 9.267a7.489 7.489 0 0 1 2.838-6.108 1.102 1.102 0 1 1 1.327 1.76 5.307 5.307 0 0 0-1.958 4.273 5.053 5.053 0 0 0 5.017 4.8h.036a4.94 4.94 0 0 0 5.035-4.789 5.325 5.325 0 0 0-1.923-4.352 1.102 1.102 0 1 1 1.483-1.631 8.215 8.215 0 0 1 1.867 2.39 7.611 7.611 0 0 1 .778 3.648A7.146 7.146 0 0 1 7.258 16.2zM6.264 5.9V1.1a1.1 1.1 0 1 1 2.2 0v4.8a1.1 1.1 0 1 1-2.2 0z"
    />
  </svg>
);
