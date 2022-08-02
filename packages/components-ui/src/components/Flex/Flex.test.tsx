import React from 'react';
import { render, screen } from '@testing-library/react';

import { Flex } from '.';

describe('<Flex border-radius />', () => {
  it('should render the Container', () => {
    render(<Flex role="main" aria-label="Container" />);

    expect(
      screen.getByRole('main', { name: /Container/i }),
    ).toBeInTheDocument();
  });

  it('should render the Container borderRadius small', () => {
    render(<Flex role="main" aria-label="Container" borderRadius="small" />);

    expect(screen.getByRole('main', { name: /Container/i })).toHaveStyle({
      borderRadius: '0.5rem',
    });
  });

  it('should render the Container borderRadius medium', () => {
    render(<Flex role="main" aria-label="Container" borderRadius="medium" />);

    expect(screen.getByRole('main', { name: /Container/i })).toHaveStyle({
      borderRadius: '0.8rem',
    });
  });

  it('should render the Container borderRadius large', () => {
    render(<Flex role="main" aria-label="Container" borderRadius="large" />);

    expect(screen.getByRole('main', { name: /Container/i })).toHaveStyle({
      borderRadius: '2rem',
    });
  });

  it('should render the Container borderRadius circle', () => {
    render(<Flex role="main" aria-label="Container" borderRadius="circle" />);

    expect(screen.getByRole('main', { name: /Container/i })).toHaveStyle({
      borderRadius: '50%',
    });
  });
});

describe('<Flex z-index />', () => {
  it('should render the Container zIndex="auto"', () => {
    render(<Flex role="main" aria-label="Container" zIndex="auto" />);

    expect(screen.getByRole('main', { name: /Container/i })).toHaveStyle({
      'z-index': 'auto',
    });
  });

  it('should render the Container zIndex="auto"', () => {
    render(<Flex role="main" aria-label="Container" zIndex="auto" />);

    expect(screen.getByRole('main', { name: /Container/i })).toHaveStyle({
      'z-index': 'auto',
    });
  });

  it('should render the Container zIndex="base"', () => {
    render(<Flex role="main" aria-label="Container" zIndex="base" />);

    expect(screen.getByRole('main', { name: /Container/i })).toHaveStyle({
      'z-index': '1',
    });
  });

  it('should render the Container zIndex="dropdown"', () => {
    render(<Flex role="main" aria-label="Container" zIndex="dropdown" />);

    expect(screen.getByRole('main', { name: /Container/i })).toHaveStyle({
      'z-index': '10',
    });
  });

  it('should render the Container zIndex="menu"', () => {
    render(<Flex role="main" aria-label="Container" zIndex="menu" />);

    expect(screen.getByRole('main', { name: /Container/i })).toHaveStyle({
      'z-index': '20',
    });
  });

  it('should render the Container zIndex="overlay"', () => {
    render(<Flex role="main" aria-label="Container" zIndex="overlay" />);

    expect(screen.getByRole('main', { name: /Container/i })).toHaveStyle({
      'z-index': '30',
    });
  });

  it('should render the Container zIndex="modal"', () => {
    render(<Flex role="main" aria-label="Container" zIndex="modal" />);

    expect(screen.getByRole('main', { name: /Container/i })).toHaveStyle({
      'z-index': '40',
    });
  });

  it('should render the Container zIndex="alwayOnTop"', () => {
    render(<Flex role="main" aria-label="Container" zIndex="alwayOnTop" />);

    expect(screen.getByRole('main', { name: /Container/i })).toHaveStyle({
      'z-index': '50',
    });
  });
});

describe('<Flex box-shadow />', () => {
  it('should render the Container box-shadow="base"', () => {
    render(<Flex role="main" aria-label="Container" boxShadow="base" />);

    expect(screen.getByRole('main', { name: /Container/i })).toHaveStyle({
      boxShadow: '0 2px 10px 0 rgba(0,41,77,0.1)',
    });
  });

  it('should render the Container box-shadow="sm"', () => {
    render(<Flex role="main" aria-label="Container" boxShadow="sm" />);

    expect(screen.getByRole('main', { name: /Container/i })).toHaveStyle({
      boxShadow: '0 2px 20px 0 rgba(0,0,0,0.2)',
    });
  });

  it('should render the Container box-shadow="md"', () => {
    render(<Flex role="main" aria-label="Container" boxShadow="md" />);

    expect(screen.getByRole('main', { name: /Container/i })).toHaveStyle({
      boxShadow: '0px 10px 15px 0px rgba(0,0,0,0.25)',
    });
  });

  it('should render the Container box-shadow="lg"', () => {
    render(<Flex role="main" aria-label="Container" boxShadow="lg" />);

    expect(screen.getByRole('main', { name: /Container/i })).toHaveStyle({
      boxShadow: '0px 20px 40px 10px rgba(0,0,0,0.50)',
    });
  });
});

describe('<Flex opacity />', () => {
  it('should render the Container box-shadow="base"', () => {
    render(<Flex role="main" aria-label="Container" opacity="zero" />);

    expect(screen.getByRole('main', { name: /Container/i })).toHaveStyle({
      opacity: 0,
    });
  });

  it('should render the Container box-shadow="high"', () => {
    render(<Flex role="main" aria-label="Container" opacity="high" />);

    expect(screen.getByRole('main', { name: /Container/i })).toHaveStyle({
      opacity: '0.25',
    });
  });

  it('should render the Container opacity="medium"', () => {
    render(<Flex role="main" aria-label="Container" opacity="medium" />);

    expect(screen.getByRole('main', { name: /Container/i })).toHaveStyle({
      opacity: '0.5',
    });
  });

  it('should render the Container opacity="low"', () => {
    render(<Flex role="main" aria-label="Container" opacity="low" />);

    expect(screen.getByRole('main', { name: /Container/i })).toHaveStyle({
      opacity: '0.75',
    });
  });

  it('should render the Container box-shadow="normal"', () => {
    render(<Flex role="main" aria-label="Container" opacity="normal" />);

    expect(screen.getByRole('main', { name: /Container/i })).toHaveStyle({
      opacity: 1,
    });
  });
});
