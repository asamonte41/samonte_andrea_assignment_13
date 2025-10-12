import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Dropdown from './Dropdown';

describe('Dropdown Component', () => {
  it('renders label and options', () => {
    render(
      <Dropdown
        label="Select item"
        name="item"
        options={[
          { label: 'One', value: '1' },
          { label: 'Two', value: '2' },
        ]}
      />
    );
    expect(screen.getByLabelText('Select item')).toBeInTheDocument();
    expect(screen.getByText('One')).toBeInTheDocument();
    expect(screen.getByText('Two')).toBeInTheDocument();
  });
});