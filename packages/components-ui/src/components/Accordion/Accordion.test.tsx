import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '.';

describe('<Accordion />', () => {
  it('must open one item at a time', () => {
    render(
      <Accordion>
        <AccordionItem value="item-1">
          <AccordionTrigger>Item 1</AccordionTrigger>
          <AccordionContent>Content 1</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Item 2</AccordionTrigger>
          <AccordionContent>Content 2</AccordionContent>
        </AccordionItem>
      </Accordion>,
    );

    const item1 = screen.getByRole('button', { name: /Item 1/i });
    const item2 = screen.getByRole('button', { name: /Item 2/i });

    userEvent.click(item1);
    expect(screen.getByText(/Content 1/i)).toBeInTheDocument();
    expect(item2.getAttribute('data-state')).toBe('closed');

    userEvent.click(item2);
    expect(screen.getByText(/Content 2/i)).toBeInTheDocument();
    expect(item1.getAttribute('data-state')).toBe('closed');
  });

  it('should keep items open when clicked', () => {
    render(
      <Accordion type="multiple">
        <AccordionItem value="item-1">
          <AccordionTrigger>Item 1</AccordionTrigger>
          <AccordionContent>Content 1</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Item 2</AccordionTrigger>
          <AccordionContent>Content 2</AccordionContent>
        </AccordionItem>
      </Accordion>,
    );

    const item1 = screen.getByRole('button', { name: /Item 1/i });
    const item2 = screen.getByRole('button', { name: /Item 2/i });

    userEvent.click(item1);
    expect(screen.getByText(/Content 1/i)).toBeInTheDocument();
    expect(item2.getAttribute('data-state')).toBe('closed');

    userEvent.click(item2);
    expect(screen.getByText(/Content 2/i)).toBeInTheDocument();
    expect(screen.getByText(/Content 1/i)).toBeInTheDocument();
  });
});
