import React, { SVGProps } from 'react';

export interface SVGRProps {
  color?: string;
  size?: number;
}

export const PlOutlineBank = ({
  color = '#215aff',
  size = 25,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16.065 15.691"
    width={size}
    fill={color}
    role="img"
    aria-label="PlOutlineBank"
    {...props}
  >
    <g data-name="Grupo 3984">
      <path
        data-name="Caminho 3796"
        d="m7.994 1.193-5.8 4.164h11.603l-5.8-4.164m0-1.194a.6.6 0 0 1 .346.11l7.394 5.248a.6.6 0 0 1-.346 1.086H.599a.6.6 0 0 1-.346-1.086L7.648.11a.6.6 0 0 1 .346-.111zm4.677 15.692H.538a.538.538 0 0 1 0-1.077h14.989a.538.538 0 0 1 0 1.077z"
      />
      <g data-name="Grupo 3339">
        <path
          data-name="Caminho 3797"
          d="M2.871 10.737v2.436a.538.538 0 1 1-1.077 0V7.884a.538.538 0 0 1 1.077 0z"
        />
        <path
          data-name="Caminho 3798"
          d="M8.654 10.737v2.436a.538.538 0 1 1-1.077 0V7.884a.538.538 0 0 1 1.077 0z"
        />
        <path
          data-name="Caminho 3799"
          d="M14.378 10.737v2.436a.538.538 0 1 1-1.077 0V7.884a.538.538 0 0 1 1.077 0z"
        />
      </g>
    </g>
  </svg>
);
