import React, { SVGProps } from 'react';

export interface SVGRProps {
  color?: string;
  size?: number;
}
export const PlOutlineEdit = ({
  color = '#215aff',
  size = 25,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16.422 15.7"
    width={size}
    fill={color}
    role="img"
    aria-label="PlOutlineEdit"
    {...props}
  >
    <path
      data-name="Caminho 3809"
      d="M15.601 15.7h-7.39a.821.821 0 0 1 0-1.642h7.39a.821.821 0 0 1 0 1.642z"
    />
    <path
      data-name="Caminho 3810"
      d="M13.138 0a2.563 2.563 0 0 1 1.812 4.375L4.686 14.638a.821.821 0 0 1-.381.216l-3.284.821a.821.821 0 0 1-1-1l.821-3.284a.821.821 0 0 1 .216-.381L11.325.75A2.546 2.546 0 0 1 13.138 0zM3.686 13.321l10.1-10.1a.921.921 0 1 0-1.3-1.3l-10.1 10.1-.436 1.729z"
    />
  </svg>
);
