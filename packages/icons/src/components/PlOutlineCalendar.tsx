import React, { SVGProps } from 'react';

export interface SVGRProps {
  color?: string;
  size?: number;
}

export const PlOutlineCalendar = ({
  color = '#215aff',
  size = 25,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 14.545 16"
    width={size}
    fill={color}
    role="img"
    aria-label="PlOutlineCalendar"
    {...props}
  >
    <path
      data-name="Ret\xE2ngulo 268"
      d="M2.182 1.455h10.182a2.184 2.184 0 0 1 2.182 2.182v10.182a2.184 2.184 0 0 1-2.182 2.182H2.182A2.184 2.184 0 0 1 0 13.819V3.637a2.184 2.184 0 0 1 2.182-2.182zm10.182 13.091a.728.728 0 0 0 .727-.727V3.637a.728.728 0 0 0-.727-.727H2.182a.728.728 0 0 0-.727.727v10.182a.728.728 0 0 0 .727.727z"
    />
    <path
      data-name="Linha 68"
      d="M10.182 4.364a.727.727 0 0 1-.727-.728V.727A.727.727 0 0 1 10.182 0a.727.727 0 0 1 .727.727v2.909a.727.727 0 0 1-.727.728z"
    />
    <path
      data-name="Linha 69"
      d="M4.363 4.364a.727.727 0 0 1-.727-.728V.727A.727.727 0 0 1 4.363 0a.727.727 0 0 1 .727.727v2.909a.727.727 0 0 1-.727.728z"
    />
    <path
      data-name="Linha 70"
      d="M13.818 7.273H.727A.727.727 0 0 1 0 6.545a.727.727 0 0 1 .727-.727h13.091a.727.727 0 0 1 .727.727.727.727 0 0 1-.727.728z"
    />
  </svg>
);
