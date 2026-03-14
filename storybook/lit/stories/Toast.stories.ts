import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '@workfort/ui';

const meta: Meta = {
  title: 'Components/Toast',
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['info', 'success', 'warning', 'error'] },
    sticky: { control: 'boolean' },
    duration: { control: 'number' },
    label: { control: 'text' },
  },
  args: { variant: 'info', sticky: true, duration: 5000, label: 'Toast message' },
  render: (args) => html`
    <wf-toast variant=${args.variant} ?sticky=${args.sticky} duration=${args.duration}
    >${args.label}</wf-toast>
  `,
};
export default meta;
type Story = StoryObj;
export const Info: Story = {};
export const Success: Story = { args: { variant: 'success', label: 'Saved!' } };
export const Warning: Story = { args: { variant: 'warning', label: 'Check your input' } };
export const Error: Story = { args: { variant: 'error', label: 'Something failed' } };
