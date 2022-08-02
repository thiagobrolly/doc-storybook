import React, { SVGProps } from 'react';

export interface SVGRProps {
  color?: string;
  size?: number;
}

export const PlOutlinePlusInfo = ({
  color = '#215aff',
  size = 25,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16.125 16.125"
    width={size}
    fill={color}
    role="img"
    aria-label="PlOutlinePlusInfo"
    {...props}
  >
    <path
      data-name="Elipse 47"
      d="M8.063 0a8.062 8.062 0 0 1 8.063 8.063 8.062 8.062 0 0 1-8.063 8.063A8.062 8.062 0 0 1 0 8.063 8.062 8.062 0 0 1 8.063 0zm0 14.659a6.6 6.6 0 1 0-6.6-6.6 6.6 6.6 0 0 0 6.6 6.6z"
    />
    <g data-name="Grupo 3794">
      <path
        data-name="Linha 147"
        d="M8.063 11.73a.733.733 0 0 1-.733-.735V8.063a.733.733 0 0 1 .733-.733.733.733 0 0 1 .733.733v2.932a.733.733 0 0 1-.733.735z"
      />
      <path
        data-name="Linha 148"
        d="M8.07 5.864h-.007a.733.733 0 0 1-.733-.733.733.733 0 0 1 .733-.733h.007a.733.733 0 0 1 .733.733.733.733 0 0 1-.733.733z"
      />
    </g>
  </svg>
);
