import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Img from './Img';

describe('Img Component', () => {
  it('renders with src and alt', () => {
    render(<Img src="test.jpg" alt="Test image" />);
    const image = screen.getByAltText('Test image');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'test.jpg');
  });

  it('applies width and height styles', () => {
    render(<Img src="test.jpg" alt="Sized image" width={100} height={200} />);
    const image = screen.getByAltText('Sized image');
    expect(image).toHaveStyle({ width: '100px', height: '200px' });
  });

  it('applies rounded border radius when rounded is true', () => {
    render(<Img src="test.jpg" alt="Rounded image" rounded />);
    const image = screen.getByAltText('Rounded image');
    expect(image).toHaveStyle({ borderRadius: '8px' });
  });

  it('accepts custom className', () => {
    render(<Img src="test.jpg" alt="Styled image" className="custom-class" />);
    const image = screen.getByAltText('Styled image');
    expect(image).toHaveClass('custom-class');
  });
});