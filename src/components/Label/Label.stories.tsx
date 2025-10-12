import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Label from './Label';
import { LabelProps } from './Label.types';

const meta: Meta<LabelProps> = {
  title: 'Components/Label',
  component: Label,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<LabelProps>;

export const Default: Story = {
  args: {
    children: 'Username',
    htmlFor: 'username',
  },
};

export const Required: Story = {
  args: {
    children: 'Email',
    htmlFor: 'email',
    required: true,
  },
};

export const WithCustomStyle: Story = {
  args: {
    children: 'Styled Label',
    htmlFor: 'custom',
    style: { fontWeight: 'bold', fontSize: '1.2rem' },
  },
};
