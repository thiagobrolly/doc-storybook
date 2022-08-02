import React, { SVGProps } from 'react';

export interface SVGRProps {
  color?: string;
  size?: number;
}

export const PlOutlineSelect = ({
  color = '#215aff',
  size = 25,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16.135 14.955"
    width={size}
    fill={color}
    role="img"
    aria-label="PlOutlineSelect"
    {...props}
  >
    <path
      data-name="Caminho 2942"
      d="M15.928 1.126a.708.708 0 0 0-1 0L8.572 7.482 5.645 4.555a.708.708 0 0 0-1 1l3.428 3.428a.708.708 0 0 0 1 0l6.855-6.857a.708.708 0 0 0 0-1z"
    />
    <path
      data-name="Caminho 2943"
      d="M14.143 6.499a.812.812 0 0 0-.812.812v6.019H1.625V1.625h9.269a.813.813 0 0 0 0-1.625H.812A.812.812 0 0 0 0 .812v13.33a.812.812 0 0 0 .812.812h13.33a.812.812 0 0 0 .812-.812V7.311a.812.812 0 0 0-.811-.812z"
    />
  </svg>
);
