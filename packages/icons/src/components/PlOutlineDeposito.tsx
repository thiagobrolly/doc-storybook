import React, { SVGProps } from 'react';

export interface SVGRProps {
  color?: string;
  size?: number;
}
export const PlOutlineDeposito = ({
  color = '#215aff',
  size = 25,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 15.785 16.124"
    width={size}
    fill={color}
    role="img"
    aria-label="PlOutlineDeposito"
    {...props}
  >
    <path
      data-name="Caminho 2306"
      d="M10.077 3.176a.561.561 0 0 0 .735-.848L8.282.142a.715.715 0 0 0-.11-.078L8.146.052a.573.573 0 0 0-.233-.053.573.573 0 0 0-.233.053l-.026.012a.651.651 0 0 0-.112.08l-2.56 2.223a.56.56 0 0 0 .732.848l1.652-1.434v5.205a.562.562 0 1 0 1.124 0V1.8z"
    />
    <path
      data-name="Caminho 2307"
      d="M10834.355 14932.48a.617.617 0 0 1-.617-.615 1.234 1.234 0 0 0-1.234-1.234h-2.957a.616.616 0 1 1 0-1.232h2.957a2.469 2.469 0 0 1 2.468 2.467.619.619 0 0 1-.617.614z"
      transform="translate(-10819.187 -14924.866)"
      style={{
        fillRule: 'evenodd',
      }}
    />
    <path
      data-name="Caminho 2308"
      d="M9951.063 13848.767a.621.621 0 0 1 .854.186 3.468 3.468 0 0 1 .561 1.879 3.121 3.121 0 1 1-6.228 0 3.4 3.4 0 0 1 .53-1.881.617.617 0 0 1 1.035.672 2.165 2.165 0 0 0-.332 1.209 1.891 1.891 0 1 0 3.759 0 2.231 2.231 0 0 0-.364-1.213.617.617 0 0 1 .185-.852z"
      transform="translate(-9941.471 -13840.468)"
      style={{
        fillRule: 'evenodd',
      }}
    />
    <circle
      data-name="Elipse 4"
      cx={0.617}
      cy={0.617}
      r={0.617}
      transform="translate(12.177 9.742)"
    />
    <circle
      data-name="Elipse 5"
      cx={0.617}
      cy={0.617}
      r={0.617}
      transform="translate(2.373 9.742)"
    />
    <path
      data-name="Caminho 2309"
      d="M9109.776 13427.789h-10.852a2.468 2.468 0 0 1-2.464-2.469v-6.654a2.466 2.466 0 0 1 2.464-2.467h2.962a.616.616 0 0 1 0 1.232h-2.962a1.233 1.233 0 0 0-1.231 1.234v6.654a1.235 1.235 0 0 0 1.231 1.236h10.852a1.236 1.236 0 0 0 1.233-1.236v-3.57a.617.617 0 1 1 1.233 0v3.57a2.472 2.472 0 0 1-2.466 2.47z"
      transform="translate(-9096.461 -13411.665)"
      style={{
        fillRule: 'evenodd',
      }}
    />
  </svg>
);
