import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '@workfort/ui';

const meta: Meta = {
  title: 'Components/StatusDot',
  tags: ['autodocs'],
  argTypes: { status: { control: 'select', options: ['online', 'offline', 'away'] } },
  args: { status: 'online' },
  render: (args) => html`<wf-status-dot status=${args.status}></wf-status-dot>`,
};
export default meta;
type Story = StoryObj;
export const Online: Story = { args: { status: 'online' } };
export const Offline: Story = { args: { status: 'offline' } };
export const Away: Story = { args: { status: 'away' } };
