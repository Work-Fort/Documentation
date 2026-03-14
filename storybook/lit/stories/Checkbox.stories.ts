import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '@workfort/ui';

const meta: Meta = {
  title: 'Forms/Checkbox',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text', description: 'Checkbox label text' },
    checked: { control: 'boolean', description: 'Checked state' },
    disabled: { control: 'boolean', description: 'Disabled state' },
  },
  args: { label: 'Accept terms', checked: false, disabled: false },
  render: (args) => html`
    <wf-checkbox
      label=${args.label}
      ?checked=${args.checked}
      ?disabled=${args.disabled}
    ></wf-checkbox>
  `,
};
export default meta;
type Story = StoryObj;

export const Default: Story = {};

export const Checked: Story = { args: { label: 'Checked checkbox', checked: true } };

export const Disabled: Story = { args: { label: 'Disabled checkbox', disabled: true } };

export const CheckboxGroup: Story = {
  render: () => html`
    <wf-checkbox-group label="Select your interests">
      <wf-checkbox label="Music"></wf-checkbox>
      <wf-checkbox label="Sports"></wf-checkbox>
      <wf-checkbox label="Reading"></wf-checkbox>
      <wf-checkbox label="Cooking"></wf-checkbox>
    </wf-checkbox-group>
  `,
};
