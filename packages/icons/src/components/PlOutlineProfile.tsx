import React, { SVGProps } from 'react';

export interface SVGRProps {
  color?: string;
  size?: number;
}

export const PlOutlineProfile = ({
  color = '#215aff',
  size = 25,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16.096 10.06"
    width={size}
    fill={color}
    role="img"
    aria-label="PlOutlineProfile"
    {...props}
  >
    <g data-name="Grupo 3985">
      <path
        data-name="Caminho 3761"
        d="M7.312 8.249A.312.312 0 0 1 7 7.937v-.624a.937.937 0 0 0-.935-.935H3.571a.937.937 0 0 0-.935.935v.624a.312.312 0 1 1-.624 0v-.624a1.561 1.561 0 0 1 1.559-1.559h2.495a1.561 1.561 0 0 1 1.559 1.559v.624a.312.312 0 0 1-.313.312z"
      />
      <path
        data-name="Elipse 41"
        d="M4.818 2.012a1.559 1.559 0 1 1-1.559 1.559 1.561 1.561 0 0 1 1.559-1.559zm0 2.495a.935.935 0 1 0-.935-.936.937.937 0 0 0 .935.936z"
      />
      <path
        data-name="Caminho 3800"
        d="M1.509 1.006a.5.5 0 0 0-.5.5v7.045a.5.5 0 0 0 .5.5h13.078a.5.5 0 0 0 .5-.5V1.509a.5.5 0 0 0-.5-.5H1.509m0-1.009h13.078A1.509 1.509 0 0 1 16.1 1.509v7.042a1.509 1.509 0 0 1-1.509 1.509H1.509A1.509 1.509 0 0 1 0 8.551V1.509A1.509 1.509 0 0 1 1.509 0z"
      />
      <path
        data-name="Caminho 3803"
        d="M13.859 5.03h-4.05a.335.335 0 0 1-.335-.335.335.335 0 0 1 .335-.336h4.05a.335.335 0 0 1 .335.335.335.335 0 0 1-.335.336z"
      />
      <path
        data-name="Caminho 3804"
        d="M13.859 6.372h-4.05a.335.335 0 0 1-.335-.335.335.335 0 0 1 .335-.336h4.05a.335.335 0 0 1 .335.335.335.335 0 0 1-.335.336z"
      />
    </g>
  </svg>
);
