import React, { SVGProps } from 'react';

export interface SVGRProps {
  color?: string;
  size?: number;
}

export const PlOutlineUsers = ({
  color = '#215aff',
  size = 25,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24.494 15.974"
    width={size}
    fill={color}
    role="img"
    aria-label="PlOutlineUsers"
    {...props}
  >
    <g data-name="Grupo 3287">
      <g data-name="Grupo 3286">
        <path
          data-name="Caminho 3330"
          d="M12.247 0a3.727 3.727 0 1 0 3.727 3.727A3.732 3.732 0 0 0 12.247 0zm0 6.39a2.662 2.662 0 1 1 2.662-2.662 2.666 2.666 0 0 1-2.662 2.662z"
        />
      </g>
    </g>
    <g data-name="Grupo 3289">
      <g data-name="Grupo 3288">
        <path
          data-name="Caminho 3331"
          d="M19.706 4.26a2.662 2.662 0 1 0 2.662 2.662 2.666 2.666 0 0 0-2.662-2.662zm0 4.26a1.6 1.6 0 1 1 1.6-1.6 1.6 1.6 0 0 1-1.6 1.6z"
        />
      </g>
    </g>
    <g data-name="Grupo 3291">
      <g data-name="Grupo 3290">
        <path
          data-name="Caminho 3332"
          d="M4.868 4.26A2.662 2.662 0 1 0 7.53 6.922 2.665 2.665 0 0 0 4.868 4.26zm0 4.26a1.6 1.6 0 1 1 1.6-1.6 1.6 1.6 0 0 1-1.6 1.6z"
        />
      </g>
    </g>
    <g data-name="Grupo 3293">
      <g data-name="Grupo 3292">
        <path
          data-name="Caminho 3333"
          d="M12.247 8.52a6.93 6.93 0 0 0-6.922 6.922.533.533 0 0 0 1.065 0 5.857 5.857 0 0 1 11.715 0 .533.533 0 0 0 1.065 0 6.93 6.93 0 0 0-6.923-6.922z"
        />
      </g>
    </g>
    <g data-name="Grupo 3295">
      <g data-name="Grupo 3294">
        <path
          data-name="Caminho 3334"
          d="M19.703 10.65a4.794 4.794 0 0 0-2.483.692.533.533 0 0 0 .553.911 3.728 3.728 0 0 1 5.657 3.19.533.533 0 0 0 1.065 0 4.8 4.8 0 0 0-4.792-4.793z"
        />
      </g>
    </g>
    <g data-name="Grupo 3297">
      <g data-name="Grupo 3296">
        <path
          data-name="Caminho 3335"
          d="M7.274 11.341A4.794 4.794 0 0 0 0 15.442a.533.533 0 0 0 1.065 0 3.729 3.729 0 0 1 5.656-3.191.533.533 0 1 0 .553-.911z"
        />
      </g>
    </g>
  </svg>
);
