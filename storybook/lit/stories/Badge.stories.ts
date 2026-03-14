import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '@workfort/ui';

const meta: Meta = {
  title: 'Components/Badge',
  tags: ['autodocs'],
  argTypes: { count: { control: 'number', description: 'Badge count (hidden when 0)' } },
  args: { count: 5 },
  render: (args) => html`<wf-badge count=${args.count}></wf-badge>`,
};
export default meta;
type Story = StoryObj;
export const Default: Story = {};
export const Zero: Story = { args: { count: 0 } };
export const Large: Story = { args: { count: 99 } };
