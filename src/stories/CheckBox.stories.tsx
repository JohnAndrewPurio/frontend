import type { Meta, StoryObj } from '@storybook/react';

import CheckBox from './CheckBox';

const meta = {
  component: CheckBox,
  tags: ['autodocs']
} satisfies Meta<typeof CheckBox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const SmallCheckBox: Story = {
  args: {
    size: "small"
  }
};