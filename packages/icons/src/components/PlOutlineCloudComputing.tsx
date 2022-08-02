import React, { SVGProps } from 'react';

export interface SVGRProps {
  color?: string;
  size?: number;
}
export const PlOutlineCloudComputing = ({
  color = '#215aff',
  size = 25,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 18.966 14.889"
    width={size}
    fill={color}
    role="img"
    aria-label="PlOutlineCloudComputing"
    {...props}
  >
    <g data-name="Grupo 3154">
      <g data-name="Grupo 3153">
        <path
          data-name="Caminho 3322"
          d="M15.8 4.933A6.519 6.519 0 0 0 2.978 6.047a3.556 3.556 0 0 0 .593 7.064h2.962v-1.185H3.57a2.37 2.37 0 0 1 0-4.741.593.593 0 0 0 .593-.593 5.334 5.334 0 0 1 10.566-1.037.593.593 0 0 0 .5.474 2.963 2.963 0 0 1-.4 5.9h-2.37v1.185h2.37a4.148 4.148 0 0 0 .972-8.178z"
        />
        <path
          data-name="Caminho 3323"
          d="m9.075 7.357-2.37 2.37.836.836 1.363-1.357v5.683h1.185V9.206l1.357 1.357.836-.836-2.37-2.37a.593.593 0 0 0-.837 0z"
        />
      </g>
    </g>
  </svg>
);
