import React from 'react';
import { Meta, StoryObj } from '@storybook/react-webpack5';
import Img from './Img';
import { ImgProps } from './Img.types';

const meta: Meta<typeof Img> = {
  title: 'Components/Img',
  component: Img,
  tags: ['autodocs'],
  argTypes: {
    src: { control: 'text' },
    alt: { control: 'text' },
    width: { control: 'text' },
    height: { control: 'text' },
    rounded: { control: 'boolean' },
    className: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Img>;

export const Default: Story = {
  args: {
    src: '/images/imfine.jpg',
    alt: 'Default image',
    width: 150,
    height: 150,
  },
};

export const Rounded: Story = {
  args: {
    src: '/images/imfine.jpg',
    alt: 'Rounded image',
    width: 150,
    height: 150,
    rounded: true,
  },
};

export const CustomSize: Story = {
  args: {
    src: '/images/imfine.jpg',
    alt: 'Wide image',
    width: '300px',
    height: '100px',
  },
};

export const WithClassName: Story = {
  args: {
    src: '/images/imfine.jpg',
    alt: 'Styled image',
    className: 'border shadow',
  },
};