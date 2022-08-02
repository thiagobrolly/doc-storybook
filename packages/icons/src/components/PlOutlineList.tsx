import React, { SVGProps } from 'react';

export interface SVGRProps {
  color?: string;
  size?: number;
}
export const PlOutlineList = ({
  color = '#215aff',
  size = 25,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 19.54 16.124"
    width={size}
    fill={color}
    role="img"
    aria-label="PlOutlineList"
    {...props}
  >
    <g data-name="Grupo 4016">
      <path
        data-name="Caminho 3770"
        d="M7.989 4.077a2.039 2.039 0 0 1 0-4.077H17.5a2.039 2.039 0 0 1 0 4.077zm-.68-2.039a.681.681 0 0 0 .679.679H17.5a.68.68 0 1 0 0-1.359H7.989a.681.681 0 0 0-.68.68zM0 2.038a2.038 2.038 0 1 1 2.038 2.038A2.038 2.038 0 0 1 0 2.038zm1.281 0a.757.757 0 1 0 .757-.757.757.757 0 0 0-.757.757z"
      />
      <path
        data-name="Caminho 3771"
        d="M7.989 10.1a2.039 2.039 0 0 1 0-4.077H17.5a2.039 2.039 0 0 1 0 4.077zm-.68-2.039a.681.681 0 0 0 .679.679H17.5a.68.68 0 1 0 0-1.359H7.989a.681.681 0 0 0-.68.68zM0 8.061a2.038 2.038 0 1 1 2.038 2.038A2.038 2.038 0 0 1 0 8.061zm1.281 0a.757.757 0 1 0 .757-.757.757.757 0 0 0-.757.757z"
      />
      <path
        data-name="Caminho 3772"
        d="M7.989 16.124a2.039 2.039 0 0 1 0-4.077H17.5a2.039 2.039 0 0 1 0 4.077zm-.68-2.039a.681.681 0 0 0 .679.679H17.5a.68.68 0 1 0 0-1.359H7.989a.681.681 0 0 0-.68.68zm-7.309 0a2.038 2.038 0 1 1 2.038 2.038A2.038 2.038 0 0 1 0 14.085zm1.281 0a.757.757 0 1 0 .757-.757.757.757 0 0 0-.757.757z"
      />
    </g>
  </svg>
);
