import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '@workfort/ui';

const meta: Meta = {
  title: 'Layout/Tabs',
  tags: ['autodocs'],
  argTypes: {
    activeTab: { control: 'select', options: ['overview', 'features', 'pricing'], description: 'Initially active tab' },
  },
  args: { activeTab: 'overview' },
  render: (args) => html`
    <wf-tabs active-tab=${args.activeTab} aria-label="Content tabs">
      <wf-tab-panel name="overview" label="Overview">
        <p>This is the Overview tab content. It gives a high-level summary.</p>
      </wf-tab-panel>
      <wf-tab-panel name="features" label="Features">
        <p>This is the Features tab content. It lists all the features available.</p>
      </wf-tab-panel>
      <wf-tab-panel name="pricing" label="Pricing">
        <p>This is the Pricing tab content. It shows pricing plans and options.</p>
      </wf-tab-panel>
    </wf-tabs>
  `,
};
export default meta;
type Story = StoryObj;

export const Default: Story = {};
export const SecondTabActive: Story = { args: { activeTab: 'features' } };
export const ThirdTabActive: Story = { args: { activeTab: 'pricing' } };
