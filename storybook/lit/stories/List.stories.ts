import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '@workfort/ui';

const meta: Meta = {
  title: 'Components/List',
  tags: ['autodocs'],
  render: () => html`
    <wf-list>
      <wf-list-item>First item</wf-list-item>
      <wf-list-item active>Active item</wf-list-item>
      <wf-list-item>Third item</wf-list-item>
    </wf-list>
  `,
};
export default meta;
type Story = StoryObj;
export const Default: Story = {};
export const WithTrailing: Story = {
  render: () => html`
    <wf-list>
      <wf-list-item>
        Item with badge
        <wf-badge data-wf="trailing" count=${3}></wf-badge>
      </wf-list-item>
      <wf-list-item>
        Item with status
        <wf-status-dot data-wf="trailing" status="online"></wf-status-dot>
      </wf-list-item>
    </wf-list>
  `,
};
