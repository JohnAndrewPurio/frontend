import type { Meta, StoryObj } from '@storybook/react';

import Frame from './Frame';

const meta = {
  component: Frame,
} satisfies Meta<typeof Frame>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    pages: {
      1: "Page 1",
      2: "Page 2",
      3: "Page 3",
      4: "Page 4"
    }
  }
};