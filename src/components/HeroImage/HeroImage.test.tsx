import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HeroImage from './HeroImage';

describe('HeroImage Component', () => {
  it('renders image with alt text', () => {
    render(<HeroImage src="test.jpg" alt="Hero banner" />);
    const image = screen.getByAltText('Hero banner');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'test.jpg');
  });

  it('renders title and subtitle when provided', () => {
    render(
      <HeroImage
        src="test.jpg"
        alt="Hero banner"
        title="Welcome"
        subtitle="Explore the world"
      />
    );
    expect(screen.getByText('Welcome')).toBeInTheDocument();
    expect(screen.getByText('Explore the world')).toBeInTheDocument();
  });

  it('does not render overlay when overlay is false', () => {
    render(<HeroImage src="test.jpg" alt="No overlay" overlay={false} />);
    expect(screen.queryByText('Welcome')).not.toBeInTheDocument();
  });

  it('applies custom height and className', () => {
    render(
      <HeroImage
        src="test.jpg"
        alt="Styled hero"
        height="300px"
        className="custom-hero"
      />
    );
    const container = screen.getByAltText('Styled hero').parentElement;
    expect(container).toHaveStyle({ height: '300px' });
    expect(container).toHaveClass('custom-hero');
  });
});