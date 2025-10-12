import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Text from './Text';

describe('Text Component', () => {
  it('renders children text', () => {
    render(<Text>This is a test</Text>);
    expect(screen.getByText('This is a test')).toBeInTheDocument();
  });

  it('applies correct size and color', () => {
    render(<Text size="lg" color="danger">Alert</Text>);
    const element = screen.getByText('Alert');
    expect(element).toHaveStyle('font-size: 1.25rem');
    expect(element).toHaveStyle('color: #c00');
  });

  it('aligns text properly', () => {
    render(<Text align="center">Centered</Text>);
    const element = screen.getByText('Centered');
    expect(element).toHaveStyle('text-align: center');
  });
});