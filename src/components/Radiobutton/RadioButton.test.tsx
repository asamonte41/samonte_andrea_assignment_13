import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import RadioButton from './RadioButton';

describe('RadioButton Component', () => {
  it('renders and responds to click', () => {
    const handleChange = jest.fn();
    render(
      <RadioButton
        label="Option 1"
        name="group1"
        value="opt1"
        checked={false}
        onChange={handleChange}
      />
    );
    const radio = screen.getByLabelText('Option 1');
    fireEvent.click(radio);
    expect(handleChange).toHaveBeenCalledWith('opt1');
  });

  it('renders disabled and does not respond to click', () => {
    const handleChange = jest.fn();
    render(
      <RadioButton
        label="Disabled Option"
        name="group2"
        value="disabled"
        disabled
        onChange={handleChange}
      />
    );
    const radio = screen.getByLabelText('Disabled Option');
    fireEvent.click(radio);
    expect(handleChange).not.toHaveBeenCalled();
  });
});