import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';

import { Dropdown } from '.';

describe('<Dropdown />', () => {
  beforeEach(() => {
    const trigger = <h1 aria-label="toogle dropdown">Click here</h1>;
    render(
      <Dropdown trigger={trigger}>
        <span>Content</span>
      </Dropdown>,
    );
  });
  it('should render trigger', () => {
    expect(screen.getByLabelText(/toogle dropdown/)).toBeInTheDocument();
  });

  it('should handle open/close dropdown', () => {
    const content = screen.getByText(/content/i).parentElement!;

    expect(content).toHaveStyle({ opacity: 0 });
    expect(content.getAttribute('aria-hidden')).toBe('true');

    userEvent.click(screen.getByLabelText(/toogle dropdown/));

    expect(content).toHaveStyle({ opacity: 1 });
    expect(content.getAttribute('aria-hidden')).toBe('false');
  });

  it('should handle open/close dropdown when clicking on overlay', () => {
    const content = screen.getByText(/content/i).parentElement!;
    const overlay = content.nextElementSibling;

    userEvent.click(screen.getByLabelText(/toogle dropdown/));

    expect(overlay).toHaveStyle({ opacity: 1 });
    expect(overlay!.getAttribute('aria-hidden')).toBe('false');

    userEvent.click(overlay!);

    expect(overlay).toHaveStyle({ opacity: 0 });
    expect(overlay!.getAttribute('aria-hidden')).toBe('true');
  });
});