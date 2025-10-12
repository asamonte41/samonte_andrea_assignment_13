import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Label from './Label';

describe('Label Component', () => {
  it('renders label text', () => {
    const { getByText } = render(<Label text="Username" />);
    expect(getByText('Username')).toBeInTheDocument();
  });

  it('shows asterisk when required', () => {
    const { getByText } = render(<Label text="Email" required />);
    expect(getByText('*')).toBeInTheDocument();
  });

  it('associates with htmlFor', () => {
    const { getByText } = render(<Label text="Password" htmlFor="password" />);
    expect(getByText('Password')).toHaveAttribute('for', 'password');
  });
});