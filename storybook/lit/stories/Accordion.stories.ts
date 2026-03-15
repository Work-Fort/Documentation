import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '@workfort/ui';

const meta: Meta = {
  title: 'Layout/Accordion',
  tags: ['autodocs'],
  argTypes: {
    multiple: { control: 'boolean', description: 'Allow multiple sections open at once' },
  },
  args: { multiple: false },
  render: (args) => html`
    <wf-accordion ?multiple=${args.multiple} aria-label="FAQ accordion">
      <wf-accordion-item name="section1" header="What is WorkFort?">
        <p>WorkFort is a platform for building and managing distributed teams. It provides tools for collaboration, communication, and project management.</p>
      </wf-accordion-item>
      <wf-accordion-item name="section2" header="How do I get started?">
        <p>Sign up for an account, create your first workspace, and invite your team members. You can start with the free tier.</p>
      </wf-accordion-item>
      <wf-accordion-item name="section3" header="What integrations are available?">
        <p>WorkFort integrates with popular tools like GitHub, Slack, Jira, and many more through our API and plugin system.</p>
      </wf-accordion-item>
    </wf-accordion>
  `,
};
export default meta;
type Story = StoryObj;

export const Default: Story = {};
export const MultipleOpen: Story = { args: { multiple: true } };
