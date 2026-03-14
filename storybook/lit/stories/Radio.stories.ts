import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '@workfort/ui';

const meta: Meta = {
  title: 'Forms/Radio',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text', description: 'Radio group label' },
    disabled: { control: 'boolean', description: 'Disabled state' },
  },
  args: { label: 'Choose a plan', disabled: false },
  render: (args) => html`
    <wf-radio-group label=${args.label} ?disabled=${args.disabled}>
      <wf-radio label="Free" value="free"></wf-radio>
      <wf-radio label="Pro" value="pro"></wf-radio>
      <wf-radio label="Enterprise" value="enterprise"></wf-radio>
    </wf-radio-group>
  `,
};
export default meta;
type Story = StoryObj;

export const Default: Story = {};

export const Disabled: Story = { args: { label: 'Disabled radio group', disabled: true } };
