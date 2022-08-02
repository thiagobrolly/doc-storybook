import React, { SVGProps } from 'react';

export interface SVGRProps {
  color?: string;
  size?: number;
}

export const PlOutlineWallet = ({
  color = '#215aff',
  size = 25,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16.872 15.963"
    width={size}
    fill={color}
    role="img"
    aria-label="PlOutlineWallet"
    {...props}
  >
    <g data-name="Grupo 4014">
      <path
        data-name="Caminho 3768"
        d="M2.605 15.963a2.616 2.616 0 0 1-2.592-2.634V6.572q0-.1.007-.2c0 .059-.007.124-.007.2v.454C-.007 5.712 0 4.858.019 4.679A2.508 2.508 0 0 1 2.1 2.631c.042 0 .571-.149 1.372-.375C5.756 1.612 10 .413 12.162.039a2.6 2.6 0 0 1 3.011 2.143V4.1a2.637 2.637 0 0 1 1.7 2.473v6.758a2.616 2.616 0 0 1-2.592 2.634H8.69zm.363-10.375a1.309 1.309 0 0 0-1.3 1.319v6.07a1.309 1.309 0 0 0 1.3 1.319h10.945a1.309 1.309 0 0 0 1.3-1.319V6.9a1.309 1.309 0 0 0-1.3-1.319zm9.123-3.861-8.34 2.207c2.887-.006 7.11-.007 9.833 0L13.6 2.8a1.3 1.3 0 0 0-1.505-1.074z"
      />
      <path
        data-name="Caminho 3769"
        d="M12.907 8.595a1.245 1.245 0 1 1-1.246 1.245 1.245 1.245 0 0 1 1.246-1.245z"
      />
    </g>
  </svg>
);
