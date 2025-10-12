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

export default {
  title: 'Components/Text',
  component: Text,
};

export const Default = () => <Text>This is default text</Text>;
export const LargeDanger = () => <Text size="lg" color="danger">Danger Text</Text>;
export const Centered = () => <Text align="center">Centered Text</Text>;
