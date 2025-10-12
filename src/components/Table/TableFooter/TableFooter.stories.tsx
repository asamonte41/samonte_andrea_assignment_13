import React from 'react';
import { Meta, StoryObj } from '@storybook/react-webpack5';
import TableFooter from './TableFooter';

const meta: Meta<typeof TableFooter> = {
  title: 'Components/TableFooter',
  component: TableFooter,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TableFooter>;

export const Default: Story = {
  args: {
    children: 'Total: $1,234.56',
  },
};

export const WithColSpan: Story = {
  args: {
    children: 'Summary Row',
    colSpan: 3,
  },
};

export const Styled: Story = {
  args: {
    children: 'Styled Footer',
    style: { backgroundColor: '#e0e0e0', color: '#333' },
  },
};