import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '@workfort/ui';

const meta: Meta = {
  title: 'Components/ScrollArea',
  tags: ['autodocs'],
  render: () => html`
    <wf-scroll-area style="height: 150px; border: 1px solid var(--wf-border);">
      <div style="padding: 1rem;">
        ${Array.from({ length: 20 }, (_, i) => html`<p>Scrollable line ${i + 1}</p>`)}
      </div>
    </wf-scroll-area>
  `,
};
export default meta;
type Story = StoryObj;
export const Default: Story = {};
