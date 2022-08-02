import React, { SVGProps } from 'react';

export interface SVGRProps {
  color?: string;
  size?: number;
}

export const PlOutlineSearch = ({
  color = '#215aff',
  size = 25,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 15.361 15.911"
    width={size}
    fill={color}
    role="img"
    aria-label="PlOutlineSearch"
    {...props}
  >
    <path d="m15.127 14.492-3.787-3.938a6.421 6.421 0 1 0-4.917 2.294 6.355 6.355 0 0 0 3.68-1.162l3.813 3.968a.838.838 0 1 0 1.208-1.162zM6.424 1.676a4.748 4.748 0 1 1-4.748 4.748 4.753 4.753 0 0 1 4.748-4.748z" />
  </svg>
);
