import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '@workfort/ui';

const meta: Meta = {
  title: 'Forms/DatePicker',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text', description: 'Date picker label text' },
    disabled: { control: 'boolean', description: 'Disabled state' },
  },
  args: { label: 'Date', disabled: false },
  render: (args) => html`
    <wf-date-picker
      label=${args.label}
      ?disabled=${args.disabled}
    ></wf-date-picker>
  `,
};
export default meta;
type Story = StoryObj;

export const Default: Story = {};

export const WithConstraints: Story = {
  render: () => html`
    <wf-date-picker
      label="Appointment date"
      help-text="Select a date within the next 30 days"
    ></wf-date-picker>
  `,
};

export const Disabled: Story = { args: { label: 'Disabled date picker', disabled: true } };
