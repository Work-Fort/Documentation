import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '@workfort/ui';

const meta: Meta = {
  title: 'Components/ToastContainer',
  tags: ['autodocs'],
  argTypes: {
    position: {
      control: 'select',
      options: ['top-right', 'top-left', 'bottom-right', 'bottom-left'],
    },
  },
  args: { position: 'top-right' },
  render: (args) => html`
    <div style="position: relative; height: 200px; border: 1px dashed var(--wf-border);">
      <wf-toast-container position=${args.position}>
        <wf-toast variant="info" sticky>Notification</wf-toast>
      </wf-toast-container>
    </div>
  `,
};
export default meta;
type Story = StoryObj;
export const TopRight: Story = {};
export const BottomLeft: Story = { args: { position: 'bottom-left' } };
