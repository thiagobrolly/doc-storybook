import React, { SVGProps } from 'react';

export interface SVGRProps {
  color?: string;
  size?: number;
}

export const PlOutlineClone = ({
  color = '#215aff',
  size = 25,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 13.554 16.002"
    width={size}
    fill={color}
    role="img"
    aria-label="PlOutlineClone"
    {...props}
  >
    <path
      data-name="Caminho 3855"
      d="M2.1 16A2.1 2.1 0 0 1 0 13.9v-9a2.1 2.1 0 0 1 2.1-2.1h6.553a2.1 2.1 0 0 1 2.1 2.1v9a2.1 2.1 0 0 1-2.1 2.1zM1.4 4.9v9a.7.7 0 0 0 .7.7h6.553a.7.7 0 0 0 .7-.7v-9a.7.7 0 0 0-.7-.7H2.1a.7.7 0 0 0-.7.7zm10.75 6.772V2.618A1.224 1.224 0 0 0 10.928 1.4h-6.6a.7.7 0 0 1-.619-.7.693.693 0 0 1 .617-.7h6.784a2.447 2.447 0 0 1 2.445 2.445v9.228a.619.619 0 0 1-.649.58c-.338-.001-.756-.243-.756-.58z"
    />
  </svg>
);
