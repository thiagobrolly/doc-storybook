import styled from 'styled-components';
import { theme } from '@paylivre/styles';
import * as PopoverPrimitive from '@radix-ui/react-popover';

export interface TooltipProps {
  colorContent?: string;
}

export const Trigger = styled(PopoverPrimitive.Trigger)`
  border: 0;
  width: fit-content;
  background: none;
  cursor: pointer;
`;

export const Content = styled(PopoverPrimitive.Content)<TooltipProps>`
  border-radius: ${theme.border.radius.small};
  box-shadow: ${theme.shadow.xs};
  background-color: ${({ colorContent }) => colorContent || theme.color.white};
  padding: 10px;
`;

export const Arrow = styled(PopoverPrimitive.Arrow)<TooltipProps>`
  fill: ${({ colorContent }) => colorContent || theme.color.white};
`;
