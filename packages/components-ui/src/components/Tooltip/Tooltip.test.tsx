import React from 'react';
import { render, screen } from '@testing-library/react';

import { Tooltip } from '.';

describe('<Tooltip />', () => {
  beforeEach(() => {
    const title = <h1 aria-label="toogle Tooltip">Click here</h1>;

    render(
      <Tooltip trigger={title}>
        <span>Content</span>
      </Tooltip>,
    );
  });

  it('should render title', () => {
    expect(screen.getByLabelText(/toogle Tooltip/)).toBeInTheDocument();
  });
});
