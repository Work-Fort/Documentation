import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '@workfort/ui';

const meta: Meta = {
  title: 'Components/Divider',
  tags: ['autodocs'],
  render: () => html`
    <div>
      <p>Content above</p>
      <wf-divider></wf-divider>
      <p>Content below</p>
    </div>
  `,
};
export default meta;
type Story = StoryObj;
export const Default: Story = {};
