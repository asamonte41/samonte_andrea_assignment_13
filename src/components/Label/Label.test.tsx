import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Label from './Label';

describe('Label Component', () => {
  it('renders label text', () => {
    render(<Label htmlFor="username">Username</Label>);
    expect(screen.getByText('Username')).toBeInTheDocument();
  });

  it('shows asterisk when required', () => {
    render(<Label htmlFor="email" required>Email</Label>);
    expect(screen.getByText('*')).toBeInTheDocument();
  });

  it('associates with htmlFor', () => {
    render(<Label htmlFor="password">Password</Label>);
    const label = screen.getByText('Password');
    expect(label).toHaveAttribute('for', 'password');
  });
});
