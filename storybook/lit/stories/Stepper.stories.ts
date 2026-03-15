import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '@workfort/ui';

const meta: Meta = {
  title: 'Navigation/Stepper',
  tags: ['autodocs'],
  argTypes: {
    current: { control: 'number', description: 'Active step index (0-based)' },
    orientation: { control: 'select', options: ['horizontal', 'vertical'], description: 'Layout orientation' },
  },
  args: { current: 1, orientation: 'horizontal' },
  render: (args) => html`
    <wf-stepper current=${args.current} orientation=${args.orientation} aria-label="Setup wizard">
      <wf-step label="Account"></wf-step>
      <wf-step label="Profile"></wf-step>
      <wf-step label="Settings"></wf-step>
      <wf-step label="Review"></wf-step>
    </wf-stepper>
  `,
};
export default meta;
type Story = StoryObj;

export const Default: Story = {};
export const FirstStep: Story = { args: { current: 0 } };
export const LastStep: Story = { args: { current: 3 } };
export const Vertical: Story = { args: { current: 1, orientation: 'vertical' } };
