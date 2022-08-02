import * as S from './styles';

export type LogoProps = {
  color?: 'white' | 'primary';
  size?: 'small' | 'medium' | 'large';
  showSlogan?: boolean;
  margin?: string;
  marginTop?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
};

export const Logo = ({
  color = 'primary',
  size = 'medium',
  showSlogan = false,
  margin = '',
  marginTop = '',
  marginBottom = '',
  marginLeft = '',
  marginRight = '',
}: LogoProps) => (
  <>
    <S.Wrapper
      color={color}
      size={size}
      showSlogan={showSlogan}
      margin={margin}
      marginTop={marginTop}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      marginRight={marginRight}
    >
      {showSlogan ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="119.43 215.59 261.12 68.82"
          xmlSpace="preserve"
          className="slogan"
          role="img"
          aria-label="Paylivre - Liberdade de Conecta"
        >
          <g>
            <path
              vectorEffect="non-scaling-stroke"
              d="M223.29 283.15h-2.78v-5.94a.19.19 0 0 0-.19-.18h-.38a.18.18 0 0 0-.19.18v6.4c0 .105.085.19.19.19h3.34a.19.19 0 0 0 .19-.19v-.28a.19.19 0 0 0-.18-.18ZM226.44 283.81v-6.77h.75v6.77zM234.45 280.35a1.77 1.77 0 0 0-1-3.32h-2.12a.17.17 0 0 0-.18.18v6.4a.18.18 0 0 0 .18.19h2.21a1.93 1.93 0 0 0 2.11-1.87 1.72 1.72 0 0 0-1.2-1.58Zm-2.61-2.66h1.58a1.08 1.08 0 0 1 1.16 1.16 1.12 1.12 0 0 1-1.16 1.24h-1.58Zm1.74 5.46h-1.76v-2.42h1.6a1.28 1.28 0 0 1 1.38 1.19 1.19 1.19 0 0 1-1.22 1.23ZM243.1 277.03h-3.81a.18.18 0 0 0-.19.18v6.4c0 .105.085.19.19.19h3.81a.19.19 0 0 0 .18-.19v-.28a.19.19 0 0 0-.18-.18h-3.25v-2.47h2.77a.18.18 0 0 0 .19-.18v-.28a.2.2 0 0 0-.19-.19h-2.77v-2.36h3.25a.18.18 0 0 0 .18-.18v-.28a.18.18 0 0 0-.18-.18ZM251.57 279.09a2.08 2.08 0 0 0-2.11-2.06h-2.52a.18.18 0 0 0-.18.18v6.4a.19.19 0 0 0 .18.19h.38a.19.19 0 0 0 .18-.19v-2.46h1.85l1.29 2.56a.17.17 0 0 0 .15.09h.5a.18.18 0 0 0 .16-.28l-1.31-2.43a2.16 2.16 0 0 0 1.43-2Zm-2.16 1.42h-1.88v-2.78h1.88a1.39 1.39 0 0 1 0 2.78ZM257.44 277.03h-2.16a.18.18 0 0 0-.18.18v6.4a.19.19 0 0 0 .18.19h2.16a3.39 3.39 0 1 0 0-6.77Zm-.15 6.1h-1.45v-5.45h1.45a2.73 2.73 0 1 1 0 5.45ZM266.5 276.93h-.09a.18.18 0 0 0-.17.11l-2.94 6.51a.17.17 0 0 0 .17.25h.38a.18.18 0 0 0 .17-.11l.7-1.6h3.44l.71 1.6a.18.18 0 0 0 .17.11h.39a.17.17 0 0 0 .16-.25l-2.92-6.46a.18.18 0 0 0-.17-.16Zm-1.51 4.56 1.42-3.17h.07c.48 1.06.94 2.12 1.42 3.17ZM274.94 277.03h-2.17a.18.18 0 0 0-.18.18v6.4a.19.19 0 0 0 .18.19h2.17a3.39 3.39 0 1 0 0-6.77Zm-.16 6.1h-1.45v-5.45h1.45a2.73 2.73 0 1 1 0 5.45ZM285.75 277.03h-3.81a.18.18 0 0 0-.18.18v6.4a.19.19 0 0 0 .18.19h3.82a.19.19 0 0 0 .18-.19v-.28a.19.19 0 0 0-.18-.18h-3.25v-2.47h2.77a.18.18 0 0 0 .19-.18v-.28a.2.2 0 0 0-.19-.19h-2.77v-2.36h3.25a.18.18 0 0 0 .18-.18v-.28a.18.18 0 0 0-.19-.18ZM300.15 283.09h-1.5a3.49 3.49 0 1 0-2.33.74h3.62a.18.18 0 0 0 .16-.08l.25-.42a.18.18 0 0 0-.2-.24Zm-6.47-2.69a2.788 2.788 0 1 1 0 .02ZM308.25 277.03h-.37a.18.18 0 0 0-.18.18v4.05a1.83 1.83 0 0 1-3.66 0v-4a.18.18 0 0 0-.18-.18h-.37a.18.18 0 0 0-.18.18v4.09a2.56 2.56 0 0 0 5.12 0v-4.14a.18.18 0 0 0-.18-.18ZM316.26 277.03h-3.82a.18.18 0 0 0-.18.18v6.4a.19.19 0 0 0 .18.19h3.82a.19.19 0 0 0 .18-.19v-.28a.19.19 0 0 0-.18-.18H313v-2.47h2.78a.18.18 0 0 0 .19-.18v-.28a.2.2 0 0 0-.19-.19H313v-2.36h3.26a.18.18 0 0 0 .18-.18v-.28a.18.18 0 0 0-.18-.18ZM329.08 282.43a.2.2 0 0 0-.23 0 2.83 2.83 0 0 1-1.85.73 2.78 2.78 0 0 1 0-5.56 3 3 0 0 1 1.85.72c.09.1.17.11.25 0l.26-.26a.18.18 0 0 0 0-.27 3.4 3.4 0 0 0-2.34-.9 3.5 3.5 0 1 0 0 7 3.35 3.35 0 0 0 2.35-.93c.07-.07.09-.21 0-.26ZM335.74 276.93a3.47 3.47 0 1 0 .02 6.94 3.47 3.47 0 0 0-.02-6.94Zm0 6.29a2.81 2.81 0 1 1 0-5.62 2.81 2.81 0 0 1 0 5.62ZM347.94 277.03h-.33a.18.18 0 0 0-.19.18v5.16l-4.36-5.44h-.24a.19.19 0 0 0-.19.17v6.51a.2.2 0 0 0 .19.19h.34a.19.19 0 0 0 .18-.19v-5.26l4.44 5.54h.16a.18.18 0 0 0 .19-.17v-6.51a.19.19 0 0 0-.19-.18ZM356.07 277.03h-3.81a.18.18 0 0 0-.19.18v6.4c0 .105.085.19.19.19h3.81a.19.19 0 0 0 .18-.19v-.28a.19.19 0 0 0-.18-.18h-3.25v-2.47h2.77a.18.18 0 0 0 .19-.18v-.28a.2.2 0 0 0-.19-.19h-2.77v-2.36h3.25a.18.18 0 0 0 .18-.18v-.28a.18.18 0 0 0-.18-.18ZM364.78 282.43a.2.2 0 0 0-.23 0 2.83 2.83 0 0 1-1.85.73 2.78 2.78 0 1 1 0-5.56 3 3 0 0 1 1.85.72c.09.1.17.11.25 0l.26-.26a.18.18 0 0 0 0-.27 3.42 3.42 0 0 0-2.34-.9 3.5 3.5 0 1 0 0 7 3.35 3.35 0 0 0 2.35-.93c.07-.07.09-.21 0-.26ZM371.85 277.03h-4.1a.18.18 0 0 0-.18.18v.28a.18.18 0 0 0 .18.18h1.69v5.94a.19.19 0 0 0 .18.19h.37a.2.2 0 0 0 .18-.19v-5.94h1.68a.18.18 0 0 0 .19-.18v-.28a.18.18 0 0 0-.19-.18ZM377.12 277.09a.18.18 0 0 0-.16-.11h-.1a.16.16 0 0 0-.16.11l-2.95 6.51a.17.17 0 0 0 .17.25h.39a.18.18 0 0 0 .16-.11l.71-1.6h3.43l.72 1.6a.17.17 0 0 0 .16.11h.39a.17.17 0 0 0 .16-.25Zm-1.67 4.45 1.41-3.17h.08l1.41 3.17ZM147.58 221.28a13.5 13.5 0 0 0-9.93-4h-10.91v6.81h10.35a7.11 7.11 0 0 1 5.12 2 6.24 6.24 0 0 1 1.91 4.68 6.74 6.74 0 0 1-7 6.87h-17.19v20h7.85v-13l9.87-.06a13.92 13.92 0 0 0 10-3.95 12.88 12.88 0 0 0 4-9.61 13.2 13.2 0 0 0-4-9.7"
              fill="currentColor"
            />
            <path
              vectorEffect="non-scaling-stroke"
              d="M119.93 224.05h6.81v6.81h-6.81zM165.28 257.37a15.7 15.7 0 0 1-3.62-.41 13.77 13.77 0 0 1-3.54-1.39 7.41 7.41 0 0 1-2.84-2.9 9.1 9.1 0 0 1-1.08-4.58q-.06-4.62 3.12-6.87t8.79-2.26l8.69-.05v-1.52a3.55 3.55 0 0 0-1.78-3.3 9.16 9.16 0 0 0-4.68-1q-5.41 0-6.51 3.52l-6.9.05a8.38 8.38 0 0 1 3.9-7.07 16 16 0 0 1 9.35-2.67 16.57 16.57 0 0 1 9.52 2.67 8.08 8.08 0 0 1 4 7v20.34h-6.9v-3.68a11.09 11.09 0 0 1-3.7 2.84 12.45 12.45 0 0 1-5.82 1.28m.61-6a9.83 9.83 0 0 0 6.13-2.15 6.33 6.33 0 0 0 2.78-5.13h-7.35a7.76 7.76 0 0 0-4.68 1.17 3.08 3.08 0 0 0-1.33 3q.33 3.12 4.45 3.12M191.74 268.62l4.73-11.86-12.2-29.34h7.63l8.24 20.99 7.8-20.99h7.63l-16.37 41.2ZM219.72 217.96h7.24v38.97h-7.24zM234.47 227.42h7.24v29.51h-7.24zM255.94 256.93l-9.3-29.51h7.69l7.51 24.89 7.46-24.89h7.74l-9.35 29.51ZM281.63 256.93v-29.51h7.29v4.4a9.32 9.32 0 0 1 4.23-3.82 11.65 11.65 0 0 1 6.79-.69v7.78a8.84 8.84 0 0 0-7.6.61 6.73 6.73 0 0 0-3.42 6.2v15ZM316.62 257.37a14.59 14.59 0 0 1-10.78-4.48 14.7 14.7 0 0 1-4.42-10.72 14.62 14.62 0 0 1 4.51-10.82c5.531-5.542 14.382-5.933 20.38-.9a14.82 14.82 0 0 1 5.2 8.83 12.21 12.21 0 0 1 .06 5.57H308.6a7.32 7.32 0 0 0 2.78 4.51 8.59 8.59 0 0 0 5.24 1.61 10.06 10.06 0 0 0 7.57-3.06l6.35 1.73a12.83 12.83 0 0 1-5.71 5.62 17.27 17.27 0 0 1-8.21 2.11m-8-18h15.87a7.75 7.75 0 0 0-2.75-4.28 8.65 8.65 0 0 0-10.38 0 7.69 7.69 0 0 0-2.76 4.29"
              fill="currentColor"
            />
            <g transform="translate(244.1 219.71)">
              <linearGradient
                id="a"
                gradientUnits="objectBoundingBox"
                x1=".285"
                y1="0"
                x2="1"
                y2="0"
              >
                <stop offset="0%" stopColor="currentColor" />
                <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
              </linearGradient>
              <path
                vectorEffect="non-scaling-stroke"
                transform="translate(-9.63 -3.62)"
                d="M0 0h19.26v7.24H0z"
                fill="url(#a)"
              />
            </g>
          </g>
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="119.43 215.595 212.94 53.53"
          xmlSpace="preserve"
          className="paylivre"
          role="img"
          aria-label="Paylivre"
        >
          <g>
            <path
              vectorEffect="non-scaling-stroke"
              d="M147.59 221.28a13.5 13.5 0 0 0-9.93-4h-10.91v6.81h10.35a7.11 7.11 0 0 1 5.12 2 6.24 6.24 0 0 1 1.91 4.68 6.74 6.74 0 0 1-7 6.87h-17.19v20h7.85v-13l9.87-.06a13.92 13.92 0 0 0 10-3.95 12.88 12.88 0 0 0 4-9.61 13.2 13.2 0 0 0-4-9.7"
              fill="currentColor"
            />
            <path
              vectorEffect="non-scaling-stroke"
              d="M119.94 224.05h6.81v6.81h-6.81zM165.29 257.37a15.7 15.7 0 0 1-3.62-.41 13.77 13.77 0 0 1-3.54-1.39 7.41 7.41 0 0 1-2.84-2.9 9.1 9.1 0 0 1-1.08-4.58q-.06-4.62 3.12-6.87t8.79-2.26l8.69-.05v-1.52a3.55 3.55 0 0 0-1.78-3.3 9.16 9.16 0 0 0-4.68-1q-5.41 0-6.51 3.52l-6.9.05a8.38 8.38 0 0 1 3.9-7.07 16 16 0 0 1 9.35-2.67 16.57 16.57 0 0 1 9.52 2.67 8.08 8.08 0 0 1 4 7v20.34h-6.9v-3.68a11.09 11.09 0 0 1-3.7 2.84 12.45 12.45 0 0 1-5.82 1.28m.61-6a9.83 9.83 0 0 0 6.13-2.15 6.33 6.33 0 0 0 2.78-5.13h-7.35a7.76 7.76 0 0 0-4.68 1.17 3.08 3.08 0 0 0-1.33 3q.33 3.12 4.45 3.12M191.75 268.62l4.73-11.86-12.2-29.34h7.63l8.24 20.99 7.8-20.99h7.63l-16.37 41.2ZM219.73 217.96h7.24v38.97h-7.24zM234.48 227.42h7.24v29.51h-7.24zM255.95 256.93l-9.3-29.51h7.69l7.51 24.89 7.46-24.89h7.74l-9.35 29.51ZM281.64 256.93v-29.51h7.29v4.4a9.32 9.32 0 0 1 4.23-3.82 11.65 11.65 0 0 1 6.79-.69v7.78a8.84 8.84 0 0 0-7.6.61 6.73 6.73 0 0 0-3.42 6.2v15ZM316.63 257.37a14.59 14.59 0 0 1-10.78-4.48 14.7 14.7 0 0 1-4.42-10.72 14.62 14.62 0 0 1 4.51-10.82c5.531-5.542 14.382-5.933 20.38-.9a14.82 14.82 0 0 1 5.2 8.83 12.21 12.21 0 0 1 .06 5.57h-22.97a7.32 7.32 0 0 0 2.78 4.51 8.59 8.59 0 0 0 5.24 1.61 10.06 10.06 0 0 0 7.57-3.06l6.35 1.73a12.83 12.83 0 0 1-5.71 5.62 17.27 17.27 0 0 1-8.21 2.11m-8-18h15.87a7.75 7.75 0 0 0-2.75-4.28 8.65 8.65 0 0 0-10.38 0 7.69 7.69 0 0 0-2.76 4.29"
              fill="currentColor"
            />
            <g transform="translate(244.11 219.71)">
              <linearGradient
                id="a"
                gradientUnits="objectBoundingBox"
                x1=".285"
                y1="0"
                x2="1"
                y2="0"
              >
                <stop offset="0%" stopColor="currentColor" />
                <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
              </linearGradient>
              <path
                vectorEffect="non-scaling-stroke"
                transform="translate(-9.63 -3.62)"
                d="M0 0h19.26v7.24H0z"
                fill="url(#a)"
              />
            </g>
          </g>
        </svg>
      )}
    </S.Wrapper>
  </>
);