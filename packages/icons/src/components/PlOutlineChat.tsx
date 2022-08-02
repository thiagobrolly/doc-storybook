import React, { SVGProps } from 'react';

export interface SVGRProps {
  color?: string;
  size?: number;
}

export const PlOutlineChat = ({
  color = '#215aff',
  size = 25,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16.41 16.41"
    width={size}
    fill={color}
    role="img"
    aria-label="PlOutlineChat"
    {...props}
  >
    <g data-name="Grupo 2558">
      <g data-name="Grupo 2557">
        <path
          data-name="Caminho 2935"
          d="M9.744 3.077H3.59a.513.513 0 1 0 0 1.026h6.154a.513.513 0 1 0 0-1.026z"
        />
      </g>
    </g>
    <g data-name="Grupo 2560">
      <g data-name="Grupo 2559">
        <path
          data-name="Caminho 2936"
          d="M7.692 5.128h-4.1a.513.513 0 1 0 0 1.026h4.1a.513.513 0 1 0 0-1.026z"
        />
      </g>
    </g>
    <g data-name="Grupo 2562">
      <g data-name="Grupo 2561">
        <path
          data-name="Caminho 2937"
          d="M11.282 0H2.051A2.053 2.053 0 0 0 0 2.051v10.257a.512.512 0 0 0 .3.465.52.52 0 0 0 .217.048.513.513 0 0 0 .324-.121l2.934-2.445h7.507a2.053 2.053 0 0 0 2.051-2.051V2.051A2.053 2.053 0 0 0 11.282 0zm1.026 8.205a1.027 1.027 0 0 1-1.026 1.026H3.59a.512.512 0 0 0-.328.119l-2.236 1.863V2.051a1.027 1.027 0 0 1 1.025-1.025h9.231a1.027 1.027 0 0 1 1.026 1.026z"
        />
      </g>
    </g>
    <g data-name="Grupo 2564">
      <g data-name="Grupo 2563">
        <path
          data-name="Caminho 2938"
          d="M14.359 4.103a.513.513 0 0 0 0 1.026 1.027 1.027 0 0 1 1.026 1.026v8.676l-1.731-1.385a.516.516 0 0 0-.32-.112H6.155a1.027 1.027 0 0 1-1.026-1.026v-.513a.513.513 0 1 0-1.026 0v.513a2.053 2.053 0 0 0 2.051 2.051h7l2.424 1.939a.513.513 0 0 0 .834-.4V6.154a2.053 2.053 0 0 0-2.053-2.051z"
        />
      </g>
    </g>
  </svg>
);
