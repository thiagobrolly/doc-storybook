import React, { SVGProps } from 'react';

export interface SVGRProps {
  color?: string;
  size?: number;
}

export const PlOutlineTrash = ({
  color = '#215aff',
  size = 25,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 15.26 16.786"
    width={size}
    fill={color}
    role="img"
    aria-label="PlOutlineTrash"
    {...props}
  >
    <path
      data-name="Caminho 3804"
      d="M3.815 16.787a2.292 2.292 0 0 1-2.288-2.289V4.58H.763a.764.764 0 0 1 0-1.527h3.052v-.762A2.292 2.292 0 0 1 6.104.001h3.053a2.292 2.292 0 0 1 2.289 2.29v.762h3.052a.764.764 0 0 1 .763.763.764.764 0 0 1-.764.763h-.762v9.918a2.292 2.292 0 0 1-2.289 2.289zm-.762-2.289a.763.763 0 0 0 .762.763h7.63a.763.763 0 0 0 .763-.763V4.58H3.053zM9.919 3.053v-.762a.764.764 0 0 0-.762-.764H6.1a.764.764 0 0 0-.763.764v.762z"
    />
    <path
      data-name="Linha 68"
      d="M6.104 12.968a.763.763 0 0 1-.763-.759V7.631a.763.763 0 0 1 .763-.763.763.763 0 0 1 .763.763v4.578a.763.763 0 0 1-.763.759z"
    />
    <path
      data-name="Linha 69"
      d="M9.156 12.968a.763.763 0 0 1-.763-.759V7.631a.763.763 0 0 1 .763-.763.763.763 0 0 1 .763.763v4.578a.763.763 0 0 1-.763.759z"
    />
  </svg>
);
