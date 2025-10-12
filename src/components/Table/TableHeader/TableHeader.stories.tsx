import { Meta, StoryObj } from '@storybook/react-webpack5';
import TableHeader from './TableHeader';

const meta: Meta<typeof TableHeader> = {
  title: 'Components/TableHeader',
  component: TableHeader,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TableHeader>;

export const Default: Story = {
  args: {
    headers: ['Name', 'Age', 'Occupation'],
  },
};

export const Centered: Story = {
  args: {
    headers: ['Product', 'Price'],
    align: 'center',
  },
};

export const Styled: Story = {
  args: {
    headers: ['ID', 'Status'],
    style: { backgroundColor: '#f0f0f0', fontWeight: 'bold' },
  },
};