import React, { SVGProps } from 'react';

export interface SVGRProps {
  color?: string;
  size?: number;
}

export const PlOutlineArrowSwap = ({
  color = '#215aff',
  size = 25,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 15.775 16.794"
    width={size}
    fill={color}
    role="img"
    aria-label="PlOutlineArrowSwap"
    {...props}
  >
    <g data-name="Grupo 3986">
      <path
        data-name="Caminho 3765"
        d="M13.373 3.066a.364.364 0 0 0-.156-.038h-10.3l1.408-1.607A.921.921 0 0 0 4.251.253a.9.9 0 0 0-1.335.1L.155 3.51a.581.581 0 0 0-.085.121l-.016.027a.628.628 0 0 0-.053.256.614.614 0 0 0 .055.252l.015.034a.614.614 0 0 0 .08.12l2.7 3.079a.876.876 0 0 0 1.4-1.054L2.917 4.8h10.284a.391.391 0 0 0 .144-.03.887.887 0 0 0 .028-1.704z"
      />
      <path
        data-name="Caminho 3766"
        d="M2.402 12.14a.364.364 0 0 1 .156-.038h10.3l-1.408-1.606a.921.921 0 0 1 .074-1.168.9.9 0 0 1 1.335.1l2.76 3.158a.58.58 0 0 1 .085.121l.016.027a.628.628 0 0 1 .055.255.614.614 0 0 1-.055.252l-.016.034a.614.614 0 0 1-.08.12l-2.705 3.08a.876.876 0 0 1-1.4-1.054l1.339-1.546H2.575a.391.391 0 0 1-.144-.03.887.887 0 0 1-.031-1.706z"
      />
    </g>
  </svg>
);
