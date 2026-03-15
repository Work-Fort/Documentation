import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '@workfort/ui';

const meta: Meta = {
  title: 'Layout/Popover',
  tags: ['autodocs'],
  argTypes: {
    position: { control: 'select', options: ['top', 'bottom', 'left', 'right'], description: 'Popover placement' },
  },
  args: { position: 'bottom' },
  render: (args) => html`
    <div style="padding: 4rem; display: flex; justify-content: center;">
      <wf-popover position=${args.position} aria-label="More information">
        <wf-button>Click me</wf-button>
        <div slot="content" style="padding: 1rem;">
          <p style="margin: 0 0 0.5rem;"><strong>Popover Content</strong></p>
          <p style="margin: 0;">This is rich content inside a popover. Click outside or press Escape to close.</p>
        </div>
      </wf-popover>
    </div>
  `,
};
export default meta;
type Story = StoryObj;

export const Default: Story = {};
export const Top: Story = { args: { position: 'top' } };
export const Bottom: Story = { args: { position: 'bottom' } };
