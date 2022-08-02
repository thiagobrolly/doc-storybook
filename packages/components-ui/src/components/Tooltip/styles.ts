import styled from 'styled-components';
import { theme } from '@paylivre/styles';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';

type TooltipContentProps = {
  tooltipColor?: string;
  tooltipSize?: string;
};

export const TooltipRoot = styled(TooltipPrimitive.Root)``;

export const Trigger = styled(TooltipPrimitive.Trigger)`
  border: 0;
  width: fit-content;
  background: none;
  cursor: pointer;
`;

export const Content = styled(TooltipPrimitive.Content)<TooltipContentProps>`
  border-radius: ${theme.border.radius.small};
  box-shadow: ${theme.shadow.xs};
  background-color: ${({ tooltipColor }) => tooltipColor || theme.color.white};
  width: ${({ tooltipSize }) => tooltipSize || 'auto'};
  padding: 10px;
`;

export const Arrow = styled(TooltipPrimitive.Arrow)<TooltipContentProps>`
  fill: ${({ tooltipColor }) => tooltipColor || theme.color.white};
`;
