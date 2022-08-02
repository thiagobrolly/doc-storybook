import React, { SVGProps } from 'react';

export interface SVGRProps {
  color?: string;
  size?: number;
}
export const PlOutlineInvoice = ({
  color = '#215aff',
  size = 25,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16.075 15.976"
    width={size}
    fill={color}
    role="img"
    aria-label="PlOutlineInvoice"
    {...props}
  >
    <g data-name="Grupo 3227">
      <g data-name="Grupo 3226">
        <path
          data-name="Ret\xE2ngulo 194"
          d="M2.719 14.794h10.402v1.182H2.719z"
        />
      </g>
    </g>
    <g data-name="Grupo 3229">
      <g data-name="Grupo 3228">
        <path
          data-name="Caminho 3325"
          d="M9.791 5.28H6.147a.591.591 0 1 0 0 1.182h3.644a.591.591 0 1 0 0-1.182z"
        />
      </g>
    </g>
    <g data-name="Grupo 3231">
      <g data-name="Grupo 3230">
        <path
          data-name="Caminho 3326"
          d="M12.548 8.037h-6.4a.591.591 0 1 0 0 1.182h6.4a.591.591 0 0 0 0-1.182z"
        />
      </g>
    </g>
    <g data-name="Grupo 3233">
      <g data-name="Grupo 3232">
        <path
          data-name="Caminho 3327"
          d="M15.727.071a.592.592 0 0 0-.634.1l-1.655 1.461L11.781.15a.591.591 0 0 0-.788 0L9.338 1.632 7.683.15a.591.591 0 0 0-.788 0L5.238 1.632 3.583.168A.591.591 0 0 0 2.6.611v10.521H.591a.591.591 0 0 0-.591.589v1.438a2.82 2.82 0 0 0 2.817 2.817v-1.182a1.637 1.637 0 0 1-1.635-1.635v-.847h9.259v.847a2.817 2.817 0 0 0 5.634 0V.61a.591.591 0 0 0-.348-.539zm-.834 13.087a1.635 1.635 0 0 1-3.27 0v-1.437a.591.591 0 0 0-.591-.591h-7.25V1.922l1.066.943a.591.591 0 0 0 .785 0l1.655-1.48 1.655 1.48a.591.591 0 0 0 .788 0l1.655-1.48 1.655 1.48a.591.591 0 0 0 .785 0l1.066-.943z"
        />
      </g>
    </g>
  </svg>
);
