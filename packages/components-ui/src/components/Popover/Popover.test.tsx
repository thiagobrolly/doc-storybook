import React from 'react';
import { render } from '@testing-library/react';

import { Popover } from '.';

describe('<Popover />', () => {
  it('should render the heading', () => {
    render(<Popover trigger="Click">Content</Popover>);
  });
});
