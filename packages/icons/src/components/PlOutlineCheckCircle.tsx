import React, { SVGProps } from 'react';

export interface SVGRProps {
  color?: string;
  size?: number;
}
export const PlOutlineCheckCircle = ({
  color = '#215aff',
  size = 25,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16.018 16.023"
    width={size}
    fill={color}
    role="img"
    aria-label="PlOutlineCheckCircle"
    {...props}
  >
    <path
      data-name="Caminho 3802"
      d="M8.001 16.023A8.011 8.011 0 0 1 6.245.199a7.951 7.951 0 0 1 5.025.5.728.728 0 0 1-.593 1.33 6.553 6.553 0 0 0-8.164 9.552 6.553 6.553 0 0 0 12.05-3.563v-.672a.728.728 0 0 1 1.456 0v.67a8.021 8.021 0 0 1-8.018 8.007z"
    />
    <path
      data-name="Caminho 3803"
      d="M8.01 10.207a.728.728 0 0 1-.515-.213L5.31 7.81a.728.728 0 0 1 1.03-1.03l1.669 1.669 6.766-6.773a.728.728 0 0 1 1.03 1.029L8.524 9.993a.728.728 0 0 1-.514.214z"
    />
  </svg>
);
