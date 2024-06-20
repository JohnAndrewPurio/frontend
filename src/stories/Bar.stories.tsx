import type { Meta, StoryObj } from '@storybook/react';

import Bar from './Bar';

const meta = {
  component: Bar,
} satisfies Meta<typeof Bar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};