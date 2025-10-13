import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import RadioButton from './RadioButton';
import { RadioButtonProps } from './RadioButton.types';

const meta: Meta<RadioButtonProps> = {
  title: 'Components/RadioButton',
  component: RadioButton,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<RadioButtonProps>;

export const Default: Story = {
  render: () => {
    const [selected, setSelected] = useState('opt1');
    const options = [
      { label: 'Option 1', value: 'opt1' },
      { label: 'Option 2', value: 'opt2' },
      { label: 'Option 3', value: 'opt3' },
    ];

    return (
      <div style={{ display: 'flex', gap: '1rem' }}>
        {options.map((opt) => (
          <RadioButton
            key={opt.value}
            name="group1"
            value={opt.value}
            label={opt.label}
            checked={selected === opt.value}
            onChange={(val) => setSelected(val)}
          />
        ))}
      </div>
    );
  },
};

export const Disabled: Story = {
  render: () => {
    const options = [
      { label: 'Option 1', value: 'opt1' },
      { label: 'Option 2', value: 'opt2' },
      { label: 'Option 3', value: 'opt3' },
    ];

    return (
      <div style={{ display: 'flex', gap: '1rem' }}>
        {options.map((opt) => (
          <RadioButton
            key={opt.value}
            name="group2"
            value={opt.value}
            label={opt.label}
            disabled
          />
        ))}
      </div>
    );
  },
}
