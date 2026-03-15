import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '@workfort/ui';

const meta: Meta = {
  title: 'Layout/Drawer',
  tags: ['autodocs'],
  argTypes: {
    position: { control: 'select', options: ['left', 'right', 'top', 'bottom'], description: 'Slide-in direction' },
    header: { control: 'text', description: 'Drawer header text' },
  },
  args: { position: 'right', header: 'Drawer Title' },
  render: (args) => html`
    <wf-button variant="filled" @wf-click=${() => {
      const drawer = document.querySelector<any>('#story-drawer');
      drawer?.show();
    }}>Open Drawer</wf-button>
    <wf-drawer id="story-drawer" position=${args.position} header=${args.header}>
      <p>This is drawer content. It slides in from the ${args.position} edge of the screen.</p>
      <p>Press Escape or click the backdrop to close.</p>
    </wf-drawer>
  `,
};
export default meta;
type Story = StoryObj;

export const Default: Story = {};
export const Left: Story = { args: { position: 'left', header: 'Left Drawer' } };
export const Right: Story = { args: { position: 'right', header: 'Right Drawer' } };
