import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '@workfort/ui';

const meta: Meta = {
  title: 'Forms/Combobox',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text', description: 'Combobox label text' },
    placeholder: { control: 'text', description: 'Placeholder text' },
    disabled: { control: 'boolean', description: 'Disabled state' },
  },
  args: { label: '', placeholder: 'Search...', disabled: false },
  render: (args) => html`
    <wf-combobox
      label=${args.label}
      placeholder=${args.placeholder}
      ?disabled=${args.disabled}
    >
      <wf-option value="react">React</wf-option>
      <wf-option value="vue">Vue</wf-option>
      <wf-option value="angular">Angular</wf-option>
      <wf-option value="svelte">Svelte</wf-option>
      <wf-option value="lit">Lit</wf-option>
    </wf-combobox>
  `,
};
export default meta;
type Story = StoryObj;

export const Default: Story = {};

export const WithLabel: Story = { args: { label: 'Framework', placeholder: 'Pick a framework...' } };

export const Disabled: Story = { args: { label: 'Disabled combobox', disabled: true } };
