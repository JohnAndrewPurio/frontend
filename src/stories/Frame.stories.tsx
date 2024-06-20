import type { Meta, StoryObj } from '@storybook/react';

import Frame from './Frame';

const meta = {
  component: Frame,
} satisfies Meta<typeof Frame>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};