import React, { SVGProps } from 'react';

export interface SVGRProps {
  color?: string;
  size?: number;
}

export const PlOutlineBankArrows = ({
  color = '#215aff',
  size = 25,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 17.195 16.091"
    width={size}
    fill={color}
    role="img"
    aria-label="PlOutlineBankArrows"
    {...props}
  >
    <g data-name="Grupo 4079">
      <path
        data-name="Caminho 3796"
        d="M6.937 1.036 1.901 4.65h10.073L6.937 1.036m0-1.036a.518.518 0 0 1 .3.1l6.418 4.55a.519.519 0 0 1-.3.942H.52a.519.519 0 0 1-.3-.942L6.637.096a.518.518 0 0 1 .3-.096zm-.214 13.617H.467a.467.467 0 0 1 0-.934H9.2a.467.467 0 0 1 0 .934z"
      />
      <g data-name="Grupo 3339">
        <path
          data-name="Caminho 3797"
          d="M2.491 9.319v2.114a.467.467 0 1 1-.934 0v-4.59a.467.467 0 0 1 .934 0z"
        />
        <path
          data-name="Caminho 3798"
          d="M7.51 9.319v2.114a.467.467 0 1 1-.934 0v-4.59a.467.467 0 0 1 .934 0z"
        />
      </g>
      <g data-name="Grupo 3515">
        <path
          data-name="Caminho 3842"
          d="M13.231 15.989a.392.392 0 0 0 .029-.553l-.888-.985-.428-.483h4.859a.392.392 0 1 0 0-.783h-4.852c.18-.2.351-.4.422-.476l.887-.99a.391.391 0 0 0-.582-.52l-1.856 2.082a.391.391 0 0 0-.134.295v.012a.391.391 0 0 0 .119.274l1.87 2.1a.392.392 0 0 0 .553.029z"
        />
        <path
          data-name="Caminho 3843"
          d="M14.652 6.221a.392.392 0 0 0-.029.549l.888.985.428.483H11.08a.392.392 0 0 0 0 .783h4.852c-.18.2-.351.4-.422.476l-.888.986a.392.392 0 0 0 .582.524l1.857-2.078a.391.391 0 0 0 .134-.295v-.012a.391.391 0 0 0-.119-.274L15.205 6.25a.392.392 0 0 0-.553-.029z"
        />
      </g>
    </g>
  </svg>
);
