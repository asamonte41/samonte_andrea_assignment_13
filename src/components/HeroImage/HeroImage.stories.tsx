import React from 'react';
import { Meta, StoryObj } from '@storybook/react-webpack5';
import HeroImage from './HeroImage';

const meta: Meta<typeof HeroImage> = {
  title: 'Components/HeroImage',
  component: HeroImage,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof HeroImage>;

export const Default: Story = {
  args: {
    src: '/images/wp2.jpg',
    alt: 'Hero banner',
    title: 'Hello Welcome',
    subtitle: 'This is for Assignment 12',
    overlay: true,
  },
};

export const NoOverlay: Story = {
  args: {
    src: '/images/wp2.jpg',
    alt: 'Plain banner',
    overlay: false,
  },
};