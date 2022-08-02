import React from 'react';
import { render, screen } from '@testing-library/react';

import { Separator } from '.';

describe('<Separator />', () => {
  it('should render the default line', () => {
    render(<Separator />);
    expect(screen.getByRole('separator')).toHaveStyle({
      width: '100%',
      height: '0.2rem',
      marginTop: '0.8rem',
      marginBottom: '0.8rem',
    });
  });

  it('should render the line with red color', () => {
    render(<Separator color="#f00" />);
    expect(screen.getByRole('separator')).toHaveStyle({
      backgroundColor: '#f00',
    });
  });
});
