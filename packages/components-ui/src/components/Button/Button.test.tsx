import { render, screen } from '@testing-library/react';

import { Button } from '.';

describe('<Button />', () => {
  it('should render the medium size by default', () => {
    render(<Button>Click</Button>);

    expect(screen.getByRole('button', { name: /Click/i })).toHaveStyle({
      height: '4rem',
      padding: '0.8rem 1.6rem',
      'font-size': '1.4rem',
    });
  });

  it('should render the small size', () => {
    render(<Button size="small">Click</Button>);

    expect(screen.getByRole('button', { name: /Click/i })).toHaveStyle({
      height: '3rem',
      fontSize: '1.2rem',
      borderRadius: '0.5rem',
    });
  });

  it('should render the large size', () => {
    render(<Button size="large">Click</Button>);

    expect(screen.getByRole('button', { name: /Click/i })).toHaveStyle({
      height: '5rem',
      padding: '0.8rem 3.2rem',
      fontSize: '1.6rem',
    });
  });

  it('should render a fullWidth version', () => {
    render(<Button fullWidth>Click</Button>);

    expect(screen.getByRole('button', { name: /Click/i })).toHaveStyle({
      width: '100%',
    });
  });

  it('should render the primary variant by default', () => {
    render(<Button>Click</Button>);

    expect(screen.getByRole('button', { name: /Click/i })).toHaveStyle({
      background: 'transparent',
      color: '#0f194b',
      border: 'transparent',
    });
  });

  it('should render the secondary variant', () => {
    render(<Button variant="secondary">Click</Button>);

    expect(screen.getByRole('button', { name: /Click/i })).toHaveStyle({
      background: '#0f194b',
      color: '#ffffff',
      border: 'none',
    });
  });

  it('should render the outline variant', () => {
    render(<Button variant="outline">Click</Button>);

    expect(screen.getByRole('button', { name: /Click/i })).toHaveStyle({
      background: '#ffffff',
      color: '#0f194b',
      border: '0.1rem solid #0f194b',
    });
  });

  it('should render the approve variant', () => {
    render(<Button variant="approve">Click</Button>);

    expect(screen.getByRole('button', { name: /Click/i })).toHaveStyle({
      background: '#48c88f',
      color: '#ffffff',
      border: 'none',
    });
  });

  it('should render the cancel variant', () => {
    render(<Button variant="cancel">Click</Button>);

    expect(screen.getByRole('button', { name: /Click/i })).toHaveStyle({
      background: '#fe5454',
      color: '#ffffff',
      border: 'none',
    });
  });

  it('should render Button as a link', () => {
    // const { debug, container } = render(
    //   <Button as="a" href="/link">
    //     Link
    //   </Button>,
    // );
    // debug(container);
    render(
      <Button as="a" href="/link">
        Link
      </Button>,
    );

    expect(screen.getByRole('link', { name: /link/i })).toHaveAttribute(
      'href',
      '/link',
    );
  });

  it('should render Button as a link', () => {
    render(
      <Button as="a" href="/link" disabled>
        Link
      </Button>,
    );

    expect(screen.getByRole('link', { name: /link/i })).toHaveStyle({
      cursor: 'not-allowed',
      pointerEvents: 'none',
      background: '#b1b8be',
      color: '#ffffff',
    });
  });
});
