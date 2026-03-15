import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '@workfort/ui';

const meta: Meta = {
  title: 'Components/Button',
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['outline', 'filled'], description: 'Visual variant' },
    color: { control: 'select', options: ['default', 'red', 'blue', 'green', 'yellow', 'purple'], description: 'Button color' },
    disabled: { control: 'boolean', description: 'Disables the button' },
    label: { control: 'text', description: 'Button text content' },
  },
  args: { variant: 'outline', color: 'default', disabled: false, label: 'Click me' },
  render: (args) => html`
    <wf-button variant=${args.variant} color=${args.color} ?disabled=${args.disabled}
      @wf-click=${() => console.log('wf-click fired')}
    >${args.label}</wf-button>
  `,
};
export default meta;
type Story = StoryObj;
export const Default: Story = { args: { label: 'Default' } };
export const Red: Story = { args: { color: 'red', label: 'Delete' } };
export const Blue: Story = { args: { color: 'blue', label: 'Save' } };
export const Green: Story = { args: { color: 'green', label: 'Approve' } };
export const Yellow: Story = { args: { color: 'yellow', label: 'Warning' } };
export const Purple: Story = { args: { color: 'purple', label: 'Premium' } };
export const Filled: Story = { args: { variant: 'filled', label: 'Filled' } };
export const FilledRed: Story = { args: { variant: 'filled', color: 'red', label: 'Delete' } };
export const FilledBlue: Story = { args: { variant: 'filled', color: 'blue', label: 'Save' } };
export const Disabled: Story = { args: { disabled: true, label: 'Disabled' } };
