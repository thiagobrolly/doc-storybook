import React, { SVGProps } from 'react';

export interface SVGRProps {
  color?: string;
  size?: number;
}
export const PlOutlinePaperPlane = ({
  color = '#215aff',
  size = 25,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16.002"
    width={size}
    fill={color}
    role="img"
    aria-label="PlOutlinePaperPlane"
    {...props}
  >
    <path
      data-name="Caminho 3854"
      d="M9.514 15.566 6.721 9.279.43 6.479a.727.727 0 0 1 .055-1.35L15.03.037a.7.7 0 0 1 .242-.041.729.729 0 0 1 .516.213l.033.035.006.008.025.031v.006l.029.039a.364.364 0 0 1 .023.039.734.734 0 0 1 .039.09.721.721 0 0 1-.018.563L10.861 15.5a.728.728 0 0 1-.66.488.138.138 0 0 1-.027 0 .732.732 0 0 1-.66-.422zm.586-2.264 3.432-9.8-5.391 5.393zm-7.4-7.4 4.412 1.963 5.393-5.393z"
    />
  </svg>
);
