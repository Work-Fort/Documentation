import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '@workfort/ui';

const meta: Meta = {
  title: 'Forms/Toggle',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text', description: 'Toggle label text' },
    checked: { control: 'boolean', description: 'Checked state' },
    disabled: { control: 'boolean', description: 'Disabled state' },
  },
  args: { label: 'Enable notifications', checked: false, disabled: false },
  render: (args) => html`
    <wf-toggle
      label=${args.label}
      ?checked=${args.checked}
      ?disabled=${args.disabled}
    ></wf-toggle>
  `,
};
export default meta;
type Story = StoryObj;

export const Default: Story = {};

export const Checked: Story = { args: { label: 'Enabled', checked: true } };

export const Disabled: Story = { args: { label: 'Disabled toggle', disabled: true } };
