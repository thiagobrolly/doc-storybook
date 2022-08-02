import styled, { css } from 'styled-components';
import { SpinnerProps } from './index';

export const Wrapper = styled.div<SpinnerProps>`
  ${({ margin, marginTop, marginBottom, marginLeft, marginRight }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    margin: ${margin};
    margin-top: ${marginTop};
    margin-bottom: ${marginBottom};
    margin-left: ${marginLeft};
    margin-right: ${marginRight};
  `}
`;
