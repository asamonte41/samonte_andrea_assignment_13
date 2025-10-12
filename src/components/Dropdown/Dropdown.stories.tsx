import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Dropdown from './Dropdown';

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  args: {
    label: 'Choose a fruit',
    name: 'fruit',
    required: true,
    options: [
      { label: 'Apple', value: 'apple' },
      { label: 'Banana', value: 'banana' },
      { label: 'Cherry', value: 'cherry' },
    ],
  },
};