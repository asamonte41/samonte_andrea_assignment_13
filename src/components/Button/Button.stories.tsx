import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Button from './Button';
import { ButtonProps } from './Button.types';

const meta: Meta<ButtonProps> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' },
  },
};

export default meta;

type Story = StoryObj<ButtonProps>;

export const Default: Story = {
  args: {
    children: 'Click Me',
    id: "",
    disabled: false
  },
};

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    style: { backgroundColor: '#007bff', color: '#fff' },
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    disabled: true,
  },
};

export const CustomStyled: Story = {
  args: {
    children: 'Custom Button',
    style: {
      backgroundColor: '#6c757d',
      color: '#fff',
      padding: '0.75rem 1.5rem',
      fontSize: '1rem',
    },
  },
};

export const WithIdAndClass: Story = {
  args: {
    children: 'Button with ID',
    id: 'custom-button',
    className: 'custom-class',
  },
};
