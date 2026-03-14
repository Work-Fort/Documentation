import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '@workfort/ui';

const meta: Meta = {
  title: 'Components/Badge',
  tags: ['autodocs'],
  argTypes: {
    count: { control: 'number', description: 'Badge count (hidden when 0)' },
    size: { control: 'select', options: ['sm', 'md', 'lg'], description: 'Badge size' },
  },
  args: { count: 5, size: 'md' },
  render: (args) => html`<wf-badge count=${args.count} size=${args.size}></wf-badge>`,
};
export default meta;
type Story = StoryObj;
export const Default: Story = {};
export const Zero: Story = { args: { count: 0 } };
export const Small: Story = { args: { count: 3, size: 'sm' } };
export const Large: Story = { args: { count: 99, size: 'lg' } };
