import styled, { css, keyframes } from 'styled-components';
import {
  Root,
  Item,
  Header,
  Trigger,
  Content,
} from '@radix-ui/react-accordion';
import { theme } from '@paylivre/styles';
import { PlOutlineArrowDown } from '@paylivre/icons';
import { AccordionProps } from '.';

const open = keyframes`
  from {
    height: 0;
  }
  to {
    height: var(--radix-accordion-content-height);
  }
`;

const close = keyframes`
  from {
    height: var(--radix-accordion-content-height);
  }
  to {
    height: 0;
  }
`;

export const ChevronDownIcon = styled(PlOutlineArrowDown)`
  transition: transform 300ms cubic-bezier(0.87, 0, 0.13, 1);

  [data-state='open'] & {
    transform: rotate(180deg);
  }
`;

export const AccordionTrigger = styled(Trigger)`
  all: unset;
  padding: 0 20px;
  height: 45px;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: ${theme.border.radius.small};
  transition: 0.2s;

  &:hover {
    background: ${theme.color.gray_500};
  }
`;

export const AccordionWrapper = styled(Root)<AccordionProps>`
  ${({ width, disabled }) => css`
    width: ${width};
    background: ${disabled ? theme.color.gray_600 : theme.color.white};
    border-radius: ${theme.border.radius.small};
    border: 1px solid ${theme.color.gray_600};

    ${AccordionTrigger} {
      cursor: ${disabled && 'not-allowed'};
      &:hover {
        background: ${disabled && theme.color.gray_600};
      }
    }

    ${ChevronDownIcon} {
      fill: ${disabled && theme.color.gray_800};
    }
  `}
`;

export const AccordionItem = styled(Item)`
  ${({ disabled }) => css`
    background: ${disabled && theme.color.gray_600};
    cursor: ${disabled ? 'not-allowed' : 'pointer'};

    ${AccordionTrigger} {
      &:hover {
        background: ${disabled && theme.color.gray_600};
      }
    }

    ${ChevronDownIcon} {
      fill: ${disabled && theme.color.gray_800};
    }

    &:first-child {
      border-top-left-radius: ${theme.border.radius.small};
      border-top-right-radius: ${theme.border.radius.small};
    }

    &:last-child {
      border-bottom-left-radius: ${theme.border.radius.small};
      border-bottom-right-radius: ${theme.border.radius.small};
    }

    &:focus-within {
      position: relative;
      z-index: ${theme.layers.base};
      box-shadow: 0 0 0 0.2rem ${theme.color.primary};
    }
  `}
`;

export const AccordionHeader = styled(Header)`
  all: unset;
  display: flex;
`;

export const AccordionContent = styled(Content)`
  overflow: hidden;
  background-color: aliceblue;

  &[data-state='open'] {
    animation: ${open} 300ms ease-out forwards;
  }
  &[data-state='closed'] {
    animation: ${close} 300ms ease-out forwards;
  }
`;

export const ContentHeader = styled.div`
  padding: 15px 20px;
`;
