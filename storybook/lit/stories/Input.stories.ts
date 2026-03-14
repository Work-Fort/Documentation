import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '@workfort/ui';

const meta: Meta = {
  title: 'Forms/Input',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text', description: 'Input label text' },
    type: { control: 'select', options: ['text', 'email', 'password', 'number', 'tel', 'url'], description: 'Input type' },
    placeholder: { control: 'text', description: 'Placeholder text' },
    disabled: { control: 'boolean', description: 'Disabled state' },
    readonly: { control: 'boolean', description: 'Read-only state' },
  },
  args: { label: '', type: 'text', placeholder: 'Enter text...', disabled: false, readonly: false },
  render: (args) => html`
    <wf-input
      label=${args.label}
      type=${args.type}
      placeholder=${args.placeholder}
      ?disabled=${args.disabled}
      ?readonly=${args.readonly}
    ></wf-input>
  `,
};
export default meta;
type Story = StoryObj;

export const Default: Story = {};

export const WithLabel: Story = { args: { label: 'Full name', placeholder: 'John Doe' } };

export const Email: Story = { args: { label: 'Email', type: 'email', placeholder: 'user@example.com' } };

export const Password: Story = { args: { label: 'Password', type: 'password', placeholder: '••••••••' } };

export const Disabled: Story = { args: { label: 'Disabled input', disabled: true, placeholder: 'Cannot edit' } };
