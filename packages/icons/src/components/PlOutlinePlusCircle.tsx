import React, { SVGProps } from 'react';

export interface SVGRProps {
  color?: string;
  size?: number;
}

export const PlOutlinePlusCircle = ({
  color = '#215aff',
  size = 25,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16.01 16.01"
    width={size}
    fill={color}
    role="img"
    aria-label="PlOutlinePlusCircle"
    {...props}
  >
    <path
      data-name="Elipse 47"
      d="M8 0a8 8 0 0 1 8 8 8 8 0 0 1-8 8 8 8 0 0 1-8-8 8 8 0 0 1 8-8zm0 14.554A6.549 6.549 0 1 0 1.455 8 6.557 6.557 0 0 0 8 14.554z"
    />
    <path
      data-name="Linha 119"
      d="M8.005 11.643a.728.728 0 0 1-.728-.728V5.094a.728.728 0 0 1 .728-.728.728.728 0 0 1 .728.728v5.821a.728.728 0 0 1-.728.728z"
    />
    <path
      data-name="Linha 120"
      d="M10.915 8.732H5.094a.728.728 0 0 1-.728-.727.728.728 0 0 1 .728-.728h5.821a.728.728 0 0 1 .728.728.728.728 0 0 1-.728.727z"
    />
  </svg>
);
