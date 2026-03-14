import type { Meta, StoryObj } from 'storybook-solidjs-vite';
import '@workfort/ui';

const meta: Meta = {
  title: 'SolidJS/Button',
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['text', 'filled'] },
    disabled: { control: 'boolean' },
    label: { control: 'text' },
  },
  args: { variant: 'text', disabled: false, label: 'Click me' },
  render: (props) => (
    <wf-button
      variant={props.variant}
      disabled={props.disabled || undefined}
      on:wf-click={() => console.log('wf-click')}
    >
      {props.label}
    </wf-button>
  ),
};
export default meta;
type Story = StoryObj;
export const Text: Story = { args: { variant: 'text' } };
export const Filled: Story = { args: { variant: 'filled' } };
export const Disabled: Story = { args: { disabled: true } };
