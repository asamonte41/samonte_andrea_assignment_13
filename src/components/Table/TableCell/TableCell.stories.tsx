import React from 'react';
import { Meta, StoryObj } from '@storybook/react-webpack5';
import TableCell from './TableCell';

const meta: Meta<typeof TableCell> = {
  title: 'Components/TableCell',
  component: TableCell,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TableCell>;

export const Default: Story = {
  args: {
    children: 'Default Cell',
  },
};

export const HeaderCell: Story = {
  args: {
    children: 'Header Cell',
    isHeader: true,
    align: 'center',
  },
};

export const StyledCell: Story = {
  args: {
    children: 'Styled Cell',
    style: { backgroundColor: '#f0f0f0', fontWeight: 'bold' },
  },
};