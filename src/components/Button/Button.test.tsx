import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'; //important for toBeInTheDocument & toHaveStyle
import Button from './Button';

describe('Button Component', () => {
  it('renders with label', () => {
    const { getByText } = render(<Button children="Test Button" />);
    expect(getByText('Test Button')).toBeInTheDocument();
  });

  it('has grey background when disabled', () => {
  const { getByText } = render(<Button disabled>Disabled Button</Button>);
  const button = getByText('Disabled Button');
  expect(button).toHaveStyle('background-color: #ccc');
});

});
