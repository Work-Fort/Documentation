import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '@workfort/ui';

const meta: Meta = {
  title: 'Layout/Dialog',
  tags: ['autodocs'],
  argTypes: {
    header: { control: 'text', description: 'Dialog header text' },
  },
  args: { header: 'Dialog Title' },
  render: (args) => html`
    <wf-button variant="filled" @wf-click=${() => {
      const dialog = document.querySelector<any>('#story-dialog');
      dialog?.show();
    }}>Open Dialog</wf-button>
    <wf-dialog id="story-dialog" header=${args.header}>
      <p>This is the dialog body content. Press Escape or click the backdrop to close.</p>
    </wf-dialog>
  `,
};
export default meta;
type Story = StoryObj;

export const Default: Story = {};
export const NoHeader: Story = { args: { header: '' } };
