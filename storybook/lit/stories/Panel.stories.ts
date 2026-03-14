import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '@workfort/ui';

const meta: Meta = {
  title: 'Components/Panel',
  tags: ['autodocs'],
  argTypes: { label: { control: 'text', description: 'Panel header label' } },
  args: { label: 'Panel Title' },
  render: (args) => html`
    <wf-panel label=${args.label}>
      <div style="padding: 1rem;">Panel content goes here.</div>
    </wf-panel>
  `,
};
export default meta;
type Story = StoryObj;
export const Default: Story = {};
export const NoLabel: Story = { args: { label: '' } };
