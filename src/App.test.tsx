import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('renders Username label', () => {
  render(<App />);
  expect(screen.getByLabelText(/Username/i)).toBeInTheDocument();
});

test('renders Submit button', () => {
  render(<App />);
  expect(screen.getByRole('button', { name: /Submit/i })).toBeInTheDocument();
});

test('renders instructional text', () => {
  render(<App />);
  expect(
    screen.getByText(/Please choose a unique username/i)
  ).toBeInTheDocument();
});
