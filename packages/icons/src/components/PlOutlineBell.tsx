import React, { SVGProps } from 'react';

export interface SVGRProps {
  color?: string;
  size?: number;
}

export const PlOutlineBell = ({
  color = '#215aff',
  size = 25,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 13.849 15.209"
    width={size}
    fill={color}
    role="img"
    aria-label="PlOutlineBell"
    {...props}
  >
    <path
      data-name="Caminho 3844"
      d="M13.147 11.754H.702a.7.7 0 0 1-.674-.5.678.678 0 0 1 .287-.764 3.508 3.508 0 0 0 .873-1.157 9.71 9.71 0 0 0 .9-4.493 4.84 4.84 0 1 1 9.68 0 9.71 9.71 0 0 0 .9 4.493 3.508 3.508 0 0 0 .873 1.157.678.678 0 0 1 .286.768.7.7 0 0 1-.68.496zM2.188 10.371h9.473q-.079-.129-.158-.274a10.963 10.963 0 0 1-1.122-5.257 3.457 3.457 0 1 0-6.914 0 10.963 10.963 0 0 1-1.121 5.26q-.079.142-.158.271z"
    />
    <path
      data-name="Caminho 3845"
      d="M6.924 15.209a2.081 2.081 0 0 1-1.794-1.033.693.693 0 0 1 1.2-.694.691.691 0 0 0 1.2 0 .693.693 0 0 1 1.2.694 2.081 2.081 0 0 1-1.806 1.033z"
    />
  </svg>
);
