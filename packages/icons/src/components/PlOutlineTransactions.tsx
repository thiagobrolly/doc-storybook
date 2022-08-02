import React, { SVGProps } from 'react';

export interface SVGRProps {
  color?: string;
  size?: number;
}

export const PlOutlineTransactions = ({
  color = '#215aff',
  size = 25,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20.853 16.064"
    width={size}
    fill={color}
    role="img"
    aria-label="PlOutlineTransactions"
    {...props}
  >
    <path d="M5.809 16.064a.633.633 0 0 1-.448-.186L.182 10.699a.633.633 0 0 1 0-.9L5.361 4.62a.633.633 0 0 1 1.081.448v2.245h8.648a.633.633 0 0 1 .633.633v1.4l3.6-3.6-3.6-3.6v1.215a.633.633 0 0 1-.633.633H8.875a.633.633 0 0 1 0-1.267h5.581V.616a.633.633 0 0 1 1.082-.448l5.125 5.125a.633.633 0 0 1 0 .9l-5.125 5.125a.634.634 0 0 1-1.082-.448v-2.3H5.809a.634.634 0 0 1-.633-.634V6.587l-3.65 3.65 3.65 3.65v-1.376a.633.633 0 0 1 .633-.634h6.188a.633.633 0 0 1 0 1.267H6.443v2.272a.634.634 0 0 1-.633.634z" />
  </svg>
);
