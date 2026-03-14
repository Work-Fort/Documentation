import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '@workfort/ui';

const meta: Meta = {
  title: 'Components/TextInput',
  tags: ['autodocs'],
  argTypes: {
    placeholder: { control: 'text' },
    value: { control: 'text' },
    disabled: { control: 'boolean' },
  },
  args: { placeholder: 'Type something...', value: '', disabled: false },
  render: (args) => html`
    <wf-text-input
      placeholder=${args.placeholder}
      value=${args.value}
      ?disabled=${args.disabled}
      @wf-input=${(e: CustomEvent) => console.log('wf-input:', e.detail.value)}
      @wf-change=${(e: CustomEvent) => console.log('wf-change:', e.detail.value)}
    ></wf-text-input>
  `,
};
export default meta;
type Story = StoryObj;
export const Default: Story = {};
export const WithValue: Story = { args: { value: 'Hello' } };
export const Disabled: Story = { args: { disabled: true, value: 'Cannot edit' } };
