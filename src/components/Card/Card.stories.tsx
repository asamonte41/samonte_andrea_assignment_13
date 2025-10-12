import React from 'react';
import { Meta, StoryObj } from '@storybook/react-webpack5';
import Card from './Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    children: 'This is for basic card.',
  },
};

export const WithHeader: Story = {
  args: {
    title: 'Business Systems Build and Testing',
    subtitle: 'Assignment 12 Coding',
    children: 'This card has a header.',
  },
};

export const Styled: Story = {
  args: {
    title: 'Styled Card',
    children: 'This card has custom styles.',
    style: { backgroundColor: '#f0f0f0', border: '1px solid #ccc' },
  },
};