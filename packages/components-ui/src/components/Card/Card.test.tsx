import { render, screen } from '@testing-library/react';

import { Card } from '.';

const props = {
  title: 'Title',
  subTitle: 'Sub-Title',
  children: 'Content',
};

describe('<Card />', () => {
  it('should render the medium size by default', () => {
    render(<Card>Content</Card>);

    expect(screen.getByText(/Content/i)).toBeInTheDocument();
  });

  it('should render the medium size by default', () => {
    render(<Card {...props} />);

    expect(screen.getByRole('heading', { name: /title/i })).toBeInTheDocument();
    expect(screen.getByText(/sub-title/i)).toBeInTheDocument();
    expect(screen.getByRole('separator')).toBeInTheDocument();
  });

  it('should render the medium size by default', () => {
    render(<Card size="small" {...props} />);

    expect(
      screen.getByRole('heading', { name: /title/i }).parentElement,
    ).toHaveStyle({
      minWidth: '200px',
      width: 'fit-content',
    });
  });
  it('should render the medium size by default', () => {
    render(<Card size="medium" {...props} />);

    expect(
      screen.getByRole('heading', { name: /title/i }).parentElement,
    ).toHaveStyle({
      minWidth: '720px',
      width: 'fit-content',
    });
  });

  it('should render the medium size by default', () => {
    render(<Card size="large" {...props} />);

    expect(
      screen.getByRole('heading', { name: /title/i }).parentElement,
    ).toHaveStyle({
      minWidth: '980px',
      width: 'fit-content',
    });
  });

  it('should render the medium size by default', () => {
    render(<Card size="fullWidth" {...props} />);

    expect(
      screen.getByRole('heading', { name: /title/i }).parentElement,
    ).toHaveStyle({
      borderRadius: '0.8rem',
      width: '100%',
    });
  });
});
