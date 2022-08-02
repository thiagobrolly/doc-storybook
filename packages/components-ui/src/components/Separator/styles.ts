import styled from 'styled-components';
import { theme } from '@paylivre/styles';
import { SeparatorProps } from '.';

export const Wrapper = styled.div<SeparatorProps>`
  width: 100%;
  height: 0.2rem;
  margin-top: ${({ marginTop }) => marginTop};
  margin-bottom: ${({ marginBottom }) => marginBottom};
  margin: ${({ margin }) => margin};
  margin-left: ${({ marginLeft }) => marginLeft};
  margin-right: ${({ marginRight }) => marginRight};
  border: 0;
  background-color: ${({ color }) => color || theme.color.black_800};
`;
