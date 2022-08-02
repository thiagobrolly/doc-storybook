import React, { SVGProps } from 'react';

export interface SVGRProps {
  color?: string;
  size?: number;
}
export const PlOutlineLocation = ({
  color = '#215aff',
  size = 25,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 10.473 16.102"
    width={size}
    fill={color}
    role="img"
    aria-label="PlOutlineLocation"
    {...props}
  >
    <path
      data-name="Caminho 3849"
      d="M0 5.156a5.237 5.237 0 0 1 10.473 0c0 4.351-4.946 10.946-5.254 10.946S0 9.45 0 5.156zm2.444-2.728a3.808 3.808 0 0 0-1.155 2.728 14.018 14.018 0 0 0 2.088 6.026 30.672 30.672 0 0 0 1.848 2.93A30.173 30.173 0 0 0 7.082 11.2a13.9 13.9 0 0 0 2.1-6.044 3.781 3.781 0 0 0-1.169-2.722 3.991 3.991 0 0 0-2.8-1.145 3.933 3.933 0 0 0-2.769 1.139zm.418 2.524a2.375 2.375 0 1 1 2.374 2.375 2.378 2.378 0 0 1-2.375-2.374zm.95 0a1.425 1.425 0 1 0 1.424-1.424 1.426 1.426 0 0 0-1.424 1.425z"
    />
  </svg>
);
