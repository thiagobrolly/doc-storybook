import React, { SVGProps } from 'react';

export interface SVGRProps {
  color?: string;
  size?: number;
}

export const PlOutlineShare = ({
  color = '#215aff',
  size = 25,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 13.125 16.042"
    width={size}
    fill={color}
    role="img"
    aria-label="PlOutlineShare"
    {...props}
  >
    <path
      data-name="Caminho 3809"
      d="M10.938 16.042h-8.75A2.19 2.19 0 0 1 0 13.855V8.021a.729.729 0 0 1 1.458 0v5.833a.73.73 0 0 0 .729.729h8.75a.73.73 0 0 0 .729-.729V8.021a.729.729 0 0 1 1.458 0v5.833a2.19 2.19 0 0 1-2.186 2.188z"
    />
    <path
      data-name="Caminho 3810"
      d="M9.48 4.375a.727.727 0 0 1-.516-.214l-2.4-2.4-2.4 2.4A.73.73 0 0 1 3.131 3.13L6.047.214a.729.729 0 0 1 1.031 0L9.995 3.13a.729.729 0 0 1-.516 1.245z"
    />
    <path
      data-name="Linha 69"
      d="M6.562 10.938a.729.729 0 0 1-.729-.73V.729A.729.729 0 0 1 6.562 0a.729.729 0 0 1 .729.729v9.479a.729.729 0 0 1-.729.73z"
    />
  </svg>
);
