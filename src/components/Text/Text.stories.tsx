import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Text from './Text';

const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text' },
    size: { control: 'radio', options: ['sm', 'md', 'lg'] },
    color: { control: 'radio', options: ['default', 'muted', 'danger'] },
    align: { control: 'radio', options: ['left', 'center', 'right'] },
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    children: 'This is a default paragraph.',
    size: 'md',
    color: 'default',
    align: 'left',
  },
};

export const Muted: Story = {
  args: {
    children: 'This is muted text.',
    size: 'sm',
    color: 'muted',
    align: 'center',
  },
};

export const Danger: Story = {
  args: {
    children: 'This is danger text!',
    size: 'lg',
    color: 'danger',
    align: 'right',
  },
};