import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '@workfort/ui';

const meta: Meta = {
  title: 'Forms/Textarea',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text', description: 'Textarea label text' },
    placeholder: { control: 'text', description: 'Placeholder text' },
    disabled: { control: 'boolean', description: 'Disabled state' },
    readonly: { control: 'boolean', description: 'Read-only state' },
  },
  args: { label: '', placeholder: 'Enter text...', disabled: false, readonly: false },
  render: (args) => html`
    <wf-textarea
      label=${args.label}
      placeholder=${args.placeholder}
      ?disabled=${args.disabled}
      ?readonly=${args.readonly}
    ></wf-textarea>
  `,
};
export default meta;
type Story = StoryObj;

export const Default: Story = {};

export const WithLabel: Story = { args: { label: 'Description', placeholder: 'Tell us more...' } };

export const Disabled: Story = { args: { label: 'Notes', disabled: true, placeholder: 'Cannot edit' } };
