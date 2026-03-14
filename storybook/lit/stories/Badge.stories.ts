import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '@workfort/ui';

const meta: Meta = {
  title: 'Components/Badge',
  tags: ['autodocs'],
  argTypes: {
    count: { control: 'number', description: 'Badge count' },
    size: { control: 'select', options: ['sm', 'md', 'lg'], description: 'Badge size' },
    hidden: { control: 'boolean', description: 'Hide the badge' },
  },
  args: { count: 5, size: 'md', hidden: false },
  render: (args) => html`<wf-badge count=${args.count} size=${args.size} ?hidden=${args.hidden}></wf-badge>`,
};
export default meta;
type Story = StoryObj;
export const Default: Story = {};
export const Small: Story = { args: { count: 3, size: 'sm' } };
export const Large: Story = { args: { count: 99, size: 'lg' } };
export const Hidden: Story = { args: { count: 5, hidden: true } };
