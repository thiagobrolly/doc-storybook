import { theme } from '@paylivre/styles';
import styled, { css } from 'styled-components';

export const Overlay = styled.div`
  ${() => css`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: ${theme.layers.overlay};
  `}
`;

export const Trigger = styled.div`
  ${() => css`
    cursor: pointer;
    color: #fff;
    position: relative;
    display: flex;
    align-items: center;
    z-index: ${theme.layers.alwayOnTop};

    background: blueviolet;
  `}
`;

export const Content = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    background: #fff;
    color: #000;
    position: absolute;
    left: 0;
    z-index: ${theme.layers.modal};

    /* &::before {
      content: '';
      position: absolute;
      border-right: 1.2rem solid transparent;
      border-left: 1.2rem solid transparent;
      border-bottom: 1.2rem solid #fff;
      top: -1.2rem;
      right: 2.4rem;
    } */
  `}
`;

type WrapperProps = {
  isOpen?: boolean;
};

const wrapperModifiers = {
  open: () => css`
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
  `,
  close: () => css`
    opacity: 0;
    pointer-events: none;
    transform: translateY(-2rem);
  `,
};

export const Wrapper = styled.div<WrapperProps>`
  ${({ isOpen }) => css`
    position: relative;
    width: max-content;

    ${Overlay},
    ${Content} {
      transition: transform 0.2s ease-in, opacity ${theme.transition.default};
      ${isOpen && wrapperModifiers.open()}
      ${!isOpen && wrapperModifiers.close()}
    }
  `}
`;
