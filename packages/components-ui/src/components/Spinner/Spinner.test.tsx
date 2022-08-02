// import { render, screen } from '@testing-library/react';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Spinner } from '.';

describe('<Spinner />', () => {
  it('should render Spinner with size 50', () => {
    render(<Spinner size={50} />);
    expect(screen.getByRole('img')).toHaveStyle({
      width: '50',
    });
  });
});
