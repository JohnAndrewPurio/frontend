import type { Meta, StoryObj } from '@storybook/react';

import Item from './Item';

const meta = {
  component: Item,
} satisfies Meta<typeof Item>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "All Done"
  }
};