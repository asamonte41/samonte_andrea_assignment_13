import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Text from './Text';

describe('Text Component', () => {
  it('renders children text', () => {
    const { getByText } = render(<Text>This is a test</Text>);
    expect(getByText('This is a test')).toBeInTheDocument();
  });

  it('applies correct size and color', () => {
    const { getByText } = render(<Text size="lg" color="danger">Alert</Text>);
    const element = getByText('Alert');
    expect(element).toHaveStyle('font-size: 1.25rem');
    expect(element).toHaveStyle('color: #c00');
  });

  it('aligns text properly', () => {
    const { getByText } = render(<Text align="center">Centered</Text>);
    expect(getByText('Centered')).toHaveStyle('text-align: center');
  });
});