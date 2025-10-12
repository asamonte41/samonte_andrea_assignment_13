import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';


test('this is test', () => {
  render(<App />);
  expect(screen.getByText(/welcome/i)).toBeInTheDocument(); // Replace with actual visible text
});
