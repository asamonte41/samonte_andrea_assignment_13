import { Meta, StoryObj } from '@storybook/react-webpack5';
import TableRow from './TableRow';

const meta: Meta<typeof TableRow> = {
  title: 'Components/TableRow',
  component: TableRow,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TableRow>;

export const Default: Story = {
  args: {
    cells: ['Alice', 30, 'Engineer'],
  },
};

export const Centered: Story = {
  args: {
    cells: ['Bob', 25, 'Designer'],
    align: 'center',
  },
};

export const Styled: Story = {
  args: {
    cells: ['Charlie', 35, 'Manager'],
    style: { backgroundColor: '#f0f0f0', fontWeight: 'bold' },
  },
};