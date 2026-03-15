import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '@workfort/ui';

const meta: Meta = {
  title: 'Layout/Tooltip',
  tags: ['autodocs'],
  argTypes: {
    content: { control: 'text', description: 'Tooltip text content' },
    position: { control: 'select', options: ['top', 'bottom', 'left', 'right'], description: 'Tooltip placement' },
  },
  args: { content: 'This is a tooltip', position: 'top' },
  render: (args) => html`
    <div style="padding: 4rem; display: flex; justify-content: center;">
      <wf-tooltip content=${args.content} position=${args.position}>
        <wf-button variant="filled">Hover me</wf-button>
      </wf-tooltip>
    </div>
  `,
};
export default meta;
type Story = StoryObj;

export const Default: Story = {};
export const Top: Story = { args: { position: 'top', content: 'Tooltip on top' } };
export const Bottom: Story = { args: { position: 'bottom', content: 'Tooltip on bottom' } };
export const Left: Story = { args: { position: 'left', content: 'Tooltip on left' } };
export const Right: Story = { args: { position: 'right', content: 'Tooltip on right' } };
