import React from 'react';
import * as S from './styles';

export type SpinnerProps = {
  size?: number;
  margin?: string;
  marginTop?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
};

export const Spinner = ({
  size = 38,
  margin = '',
  marginTop = '',
  marginBottom = '',
  marginLeft = '',
  marginRight = '',
}: SpinnerProps) => (
  <S.Wrapper
    margin={margin}
    marginTop={marginTop}
    marginBottom={marginBottom}
    marginLeft={marginLeft}
    marginRight={marginRight}
  >
    <svg
      role="img"
      aria-label="Spinner"
      width={size}
      height={size}
      viewBox="-3 -3 42 42"
      xmlns="http://www.w3.org/2000/svg"
      stroke="#215aff"
    >
      <title>Loading...</title>
      <g fill="none" fillRule="evenodd">
        <g transform="translate(1 1)" strokeWidth="3">
          <circle strokeOpacity=".2" cx="18" cy="18" r="18" />
          <path d="M36 18c0-9.94-8.06-18-18-18">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 18 18"
              to="360 18 18"
              dur="1s"
              repeatCount="indefinite"
            />
          </path>
        </g>
      </g>
    </svg>
  </S.Wrapper>
);
