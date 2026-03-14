import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '@workfort/ui';

const meta: Meta = {
  title: 'Components/Button',
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['text', 'filled'], description: 'Visual variant' },
    disabled: { control: 'boolean', description: 'Disables the button' },
    label: { control: 'text', description: 'Button text content' },
  },
  args: { variant: 'text', disabled: false, label: 'Click me' },
  render: (args) => html`
    <wf-button variant=${args.variant} ?disabled=${args.disabled}
      @wf-click=${() => console.log('wf-click fired')}
    >${args.label}</wf-button>
  `,
};
export default meta;
type Story = StoryObj;
export const Text: Story = { args: { variant: 'text', label: 'Text Button' } };
export const Filled: Story = { args: { variant: 'filled', label: 'Filled Button' } };
export const Disabled: Story = { args: { variant: 'filled', disabled: true, label: 'Disabled' } };
